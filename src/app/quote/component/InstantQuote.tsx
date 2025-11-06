"use client";
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

type Feature = { icon: string; text: string };
type PricingOption = {
  id: number;
  name: string;
  rate: number;
  deliveryHours: number;
  features: Feature[];
  bestSeller?: boolean;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4001";

export default function InstantQuote() {
  const router = useRouter();

  const [wordCount, setWordCount] = useState<number>(1000);
  const [fileName, setFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPrices, setShowPrices] = useState<boolean>(false);
  const [pricingOptions, setPricingOptions] = useState<PricingOption[]>([]);

  // Fetch pricing cards dynamically from backend
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_BASE}/pricing-cards`);
        setPricingOptions(res.data);
      } catch (err) {
        console.error("Error fetching pricing:", err);
      }
    })();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setFileName(file.name);
    setShowModal(true);

    // (Simple) try to count words for text-like files
    try {
      const text = await file.text();
      const words = text.match(/\b\w+\b/g);
      const count = words ? words.length : 0;
      if (count > 0) setWordCount(count);
    } catch (err) {
      console.warn("Could not read file to count words (ok, server will handle price).");
    }
  };

  const closeModal = () => setShowModal(false);
  const removeFile = () => {
    setFileName("");
    setSelectedFile(null);
    setShowModal(false);
  };

  const currentDate = new Date();
  const getDeliveryDate = (hours: number) => {
    const deliveryDate = new Date(currentDate.getTime() + hours * 60 * 60 * 1000);
    return deliveryDate
      .toLocaleString("en-US", {
        timeZone: "Indian/Maldives",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(/,/g, "");
  };

  const handleShowPrices = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPrices(true);
  };

  // CREATE the order on click, then go to /checkout?token=...
  const handleOrder = async (option: PricingOption) => {
    try {
      const form = new FormData();
      form.append("sourceLanguage", "English");
      form.append("targetLanguage", "French");
      form.append("wordCount", String(wordCount));
      form.append("subject", "Environment");
      form.append("delivery", "Auto (best price)");
      form.append("serviceLevel", option.name);
      if (selectedFile) form.append("file", selectedFile); // upload the file now

      const res = await axios.post(`${API_BASE}/orders`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Navigate to checkout with token from backend
      const token = res.data?.orderToken;
      if (!token) throw new Error("Order created, but token missing in response.");
      router.push(`/checkout?token=${encodeURIComponent(token)}`);
    } catch (err) {
      console.error("Error creating order:", err);
      alert("Error creating order. See console for details.");
    }
  };

  return (
    <>
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-[1150px] mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Professional translations made easy</h1>
          <p className="text-gray-800 text-lg mb-10">
            747,219 vetted professional translators and 379,170 clients have been translating the intelligent way since 1999.
          </p>

          <div className="bg-[#f5f8fa] p-8 rounded-md">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end" onSubmit={handleShowPrices}>
              <div>
                <label className="block font-semibold mb-1 text-gray-700 text-left">From</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
                  <option>English (United Kingdom)</option>
                </select>
              </div>

              <div>
                <label className="flex justify-between items-center font-semibold mb-1 text-gray-700">
                  <span>To</span>
                  <span className="text-sm text-blue-600 cursor-pointer select-none">Add multiple languages</span>
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
                  <option>French (France)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-gray-700 text-left">Word count</label>
                <div className="flex rounded-md border border-gray-300 overflow-hidden text-sm text-gray-900 bg-white">
                  <input
                    type="number"
                    value={wordCount}
                    onChange={(e) => setWordCount(Number(e.target.value))}
                    className="flex-grow px-4 py-2 focus:outline-none"
                  />
                  <div className="flex items-center border-l border-gray-300 px-3 bg-gray-50 text-blue-600 text-sm font-medium cursor-pointer hover:underline select-none">
                    <span className="mr-1 text-gray-400 text-xs">or</span>
                    <label htmlFor="file-upload" className="cursor-pointer">Upload files</label>
                    <input id="file-upload" type="file" className="hidden" onChange={handleFileUpload} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-gray-700 text-left">Subject</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
                  <option>Environment</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-gray-700 text-left">Delivery date</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
                  <option>Auto (best price)</option>
                </select>
              </div>

              <div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors duration-200">
                  Show prices
                </button>
              </div>
            </form>

            <p className="text-sm text-gray-600 mt-6 text-left">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mr-2">Pay after delivery</span>
              We trust you: feel free to pay within 5 days via bank transfer, credit card, or PayPal.{" "}
              <a href="#" className="text-blue-600 hover:underline">Learn more</a>
            </p>

            {showPrices && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4 text-center">Choose your solution</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 rounded-md gap-4">
                  {pricingOptions.map((option, index) => (
                    <div key={index} className="border p-6 bg-white text-center">
                      {option.bestSeller && (
                        <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">Best Seller</div>
                      )}
                      <h3 className="text-xl font-semibold text-gray-900">{option.name}</h3>
                      <ul className="text-sm text-gray-900 space-y-2">
                        {option.features.map((feature, i) => (
                          <li key={i} className="flex items-center justify-center">
                            <span className="text-base mr-2">{feature.icon}</span>
                            <span>{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-400 pt-2">
                        Delivery guaranteed by {getDeliveryDate(option.deliveryHours)} MVT
                        <a href="#" className="text-blue-600 ml-1 hover:underline">Need it faster?</a>
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${(option.rate * wordCount).toFixed(2)} <span className="text-sm font-normal">(USD)</span>
                      </p>
                      <p className="text-sm text-gray-400">about ${option.rate.toFixed(2)} / word</p>
                      <button
                        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium"
                        onClick={() => handleOrder(option)}
                      >
                        Order
                      </button>
                      <a href="#" className="block text-sm text-gray-500 text-center mt-2 hover:text-gray-700">More details</a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="bg-white w-full max-w-[800px] min-h-[400px] rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <h2 className="text-base font-semibold uppercase text-gray-900">Word Count Tool</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-900 transition-colors">×</button>
            </div>
            <div className="p-6 text-center border border-dashed min-h-full h-full border-gray-300 mt-4 rounded bg-gray-50">
              {fileName ? (
                <div className="flex justify-between items-center bg-white px-4 py-3 rounded shadow-sm mb-4">
                  <span className="text-sm font-medium truncate text-left">{fileName}</span>
                  <span className="text-sm text-gray-500 ml-3">({wordCount} words)</span>
                  <button onClick={removeFile} className="ml-4 text-red-600 hover:text-red-800 transition-colors" aria-label="Remove file">
                    <FaTrash />
                  </button>
                </div>
              ) : (
                <>
                  <input type="file" className="hidden" id="file-upload-modal" onChange={handleFileUpload} />
                  <label htmlFor="file-upload-modal" className="cursor-pointer text-sm text-gray-600 hover:text-blue-600 underline">
                    Drag & drop files here or browse
                  </label>
                </>
              )}
            </div>
            <div className="mt-6 text-right">
              <button onClick={closeModal} className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors">Done</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
