import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactUsPage() {
  return (
    <section className="max-w-[1150px] mx-auto px-6 md:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="lg:text-[48px] md:text-5xl  font-bold leading-1.4  mb-2">Contact our team</h1>
        <p className="font-semibold text-[20px] mb-1">
          Guaranteed answer by <span className="uppercase">monday at 3:00 PM PKT.</span>
        </p>
        <p className="inline-flex items-center text-[20px] justify-center gap-2 text-blue-700 hover:underline cursor-pointer text-sm">
          <FaPaperPlane /> info@translated.com
        </p>
      </div>

      <div className="flex flex-wrap gap-10">
        {/* Left: Contact Form */}
   <form className="bg-gray-100 p-8 rounded-md w-full md:w-6/12 space-y-5 shadow-sm">
  <div>
    <label htmlFor="email" className="block font-semibold mb-1">
      Email address <span className="text-red-600">*</span>
    </label>
    <input
      id="email"
      type="email"
      placeholder="E.g. example@domain.com"
      required
      className="w-full rounded border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  </div>

  <div>
    <label htmlFor="name" className="block font-semibold mb-1">
      Enter your name
    </label>
    <input
      id="name"
      type="text"
      placeholder="E.g. John Doe"
      className="w-full rounded border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  </div>

  {/* Custom File Upload Field */}
  <div>
    <label htmlFor="file" className="block font-semibold mb-1">
      Upload files
    </label>
    <div className="bg-white rounded-md border border-gray-300 flex items-center p-2 max-w-md">
      <div className="flex items-center space-x-2 flex-grow min-w-0">
        <svg
          className="w-6 h-6 text-gray-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v16c0 1.1.9 2 2 2h12a2 2 0 002-2V4M4 4l8 8m0 0l8-8m-8 8V2"
          />
        </svg>
        <p
          className="text-gray-700 truncate text-sm select-none"
          id="file-name-display"
          // You will want to update this text dynamically on file selection in your component logic
        >
          No file selected
        </p>
      </div>

      <label
        htmlFor="file"
        className="cursor-pointer bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded px-3 py-1 select-none flex items-center space-x-1"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span>Select files</span>
      </label>

      <input
        id="file"
        type="file"
        className="hidden"
        // onChange handler should update file name display dynamically
      />
    </div>
  </div>

  <div>
    <label htmlFor="message" className="block font-semibold mb-1">
      Message <span className="text-red-600">*</span>
    </label>
    <textarea
      id="message"
      placeholder="Write a message..."
      required
      rows={6}
      className="w-full rounded border border-gray-300 px-3 py-2 resize-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  </div>

  <div className="flex items-center space-x-2">
    <input type="checkbox" id="privacy" />
    <label htmlFor="privacy" className="text-sm">
      I have read and agree to the{" "}
      <a href="#" className="text-blue-600 hover:underline">
        Privacy Policy
      </a>
    </label>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
  >
    Send
  </button>
</form>


        {/* Right: Offices & Contact Info */}
        <div className="w-full md:w-5/12 space-y-8">
          <h2 className="text-[40px] font-bold mb-6">Our offices</h2>

          {/* Offices grid */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-900">
            {/* Italy */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-gray-700">
                <FaMapMarkerAlt />
                <span className="font-semibold">Italy</span>
              </div>
              <p className="text-xs leading-tight">
                Headquarters <br />
                Via Indonesia 23 <br />
                00144 Roma
              </p>
              <a href="#" className="text-blue-600 hover:underline text-xs">
                View map
              </a>
            </div>

            {/* United States */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-gray-700">
                <FaMapMarkerAlt />
                <span className="font-semibold">United States</span>
              </div>
              <p className="text-xs leading-tight">
                Local Office <br />
                228 Hamilton Avenue <br />
                Palo Alto, California 94301
              </p>
              <a href="#" className="text-blue-600 hover:underline text-xs">
                View map
              </a>
            </div>

            {/* Germany */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-gray-700">
                <FaMapMarkerAlt />
                <span className="font-semibold">Germany</span>
              </div>
              <p className="text-xs leading-tight">
                Local Office <br />
                Edisonstraße 63 <br />
                Berlin 12459
              </p>
              <a href="#" className="text-blue-600 hover:underline text-xs">
                View map
              </a>
            </div>

            {/* France */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-gray-700">
                <FaMapMarkerAlt />
                <span className="font-semibold">France</span>
              </div>
              <p className="text-xs leading-tight">
                Local Office <br />
                25 Bd Romain Rolland <br />
                75014, Paris
              </p>
              <a href="#" className="text-blue-600 hover:underline text-xs">
                View map
              </a>
            </div>
          </div>

          <hr className="my-8 border-gray-300" />

          {/* Call info */}
          <div>
            <h3 className="font-semibold mb-2">Give us a call</h3>
            <p className="text-xs text-gray-700 mb-2">
              We're not online now <span className="inline-block w-2 h-2 rounded-full bg-red-600 ml-1"></span>
            </p>
            <p className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer text-sm mb-1">
              <FaPhoneAlt />
              (+44) 3308080544
            </p>
            <a href="#" className="text-xs text-gray-500 hover:underline">
              Show all international numbers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
