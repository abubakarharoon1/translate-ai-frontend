import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export const MainFooter = () => {
  return (
    <footer className=" px-8 py-10 max-w-[1200px] w-full mx-auto rounded-lg">
      {/* Top Call to Action */}
<div className="bg-[#f2f5f7] rounded-lg flex justify-between items-center mb-12
                px-24 py-11 max-md:flex-col max-md:gap-4 max-md:px-8 max-md:py-6">
  <div>
    <h2 className="text-4xl font-extrabold leading-tight mb-1">
      Get an instant quote
    </h2>
    <p className="text-gray-500 text-base leading-relaxed max-w-md">
      The easy way to get your documents translated fast. Buy online in a few clicks.
    </p>
  </div>
  <a
  href="/quote"
  className="
    bg-[#0055B8] text-white font-medium  leading-6 
    rounded-[2PX] px-[54PX] pt-[15px] pb-[17px] text-lg
    shadow-[0_0_0_1px_#0055b8]
    transition-colors duration-250 ease-in-out
    whitespace-nowrap
    select-none
    hover:bg-blue-800 hover:shadow-[0_0_0_1px_#00479a] 
    hover:cursor-pointer
    inline-block
    text-center
    no-underline
  "
>
  Instant quote
</a>
</div>


      {/* Footer Content */}
      <div className="flex justify-between max-md:flex-col max-md:gap-8">
        {/* Left info */}
        <div className="flex gap-5 max-w-md">
          <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center shrink-0">
            <span className="text-2xl font-bold font-sans">t</span>
          </div>
          <div>
            <p className="text-sm leading-relaxed max-w-[300px] text-black">
              We are on a mission to open up language to everyone, using a powerful combination
              of expert human translators and machine intelligence, and providing curated localization
              solutions and tools to 377,912 customers worldwide.
            </p>
            <p className="text-gray-400 text-xs mt-3">
              © Translated · VAT IT07173521001
            </p>
          </div>
        </div>

        {/* Middle links */}
        <nav className="flex flex-col gap-3 font-semibold text-black">
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Translate</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">Affiliates</a>
          <a href="#" className="hover:underline">Terms of Sale</a>
          <a href="#" className="hover:underline">Privacy</a>
        </nav>

        {/* Right contact */}
        <div className="flex flex-col gap-6 text-black max-w-sm">
          <select
            aria-label="Language"
            className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>

          <select
            aria-label="Currency"
            className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>US dollar (USD)</option>
            <option>Euro (EUR)</option>
            <option>British pound (GBP)</option>
          </select>

          <a href="tel:+443308080544" className="flex items-center gap-2 text-blue-700 hover:underline font-semibold">
            <FaPhoneAlt /> (+44) 3308080544
          </a>

          <a href="mailto:info@translated.com" className="flex items-center gap-2 text-blue-700 hover:underline font-semibold">
            <FaEnvelope /> info@translated.com
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-600">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="rounded-full bg-gray-300 hover:bg-gray-400 p-2 text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="rounded-full bg-gray-300 hover:bg-gray-400 p-2 text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="rounded-full bg-gray-300 hover:bg-gray-400 p-2 text-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
