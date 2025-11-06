import React from "react";

export default function ComplexNeedsSection() {
  return (
    <section className="py-12 overflow-visible max-w-[1150px] mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between gap-6">
        {/* Avatar + Text */}
        <div className="flex items-center p-[15px] gap-4 flex-1 min-w-full sm:min-w-[60%] lg:min-w-[600px] max-w-full">
          <div
            className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: "url(/sdsds.png)" }}
            aria-label="Barbara"
          />
          <div>
            <h4 className="text-[24px] font-semibold mb-1">More complex needs?</h4>
            <p className="text-gray-800 text-[16px] max-w-md leading-relaxed">
              We will help you get a quote for complex documents, PDFs, websites, software, and more.
            </p>
            <p className="text-gray-400 text-[16px] mt-1">Barbara - Senior Account Manager</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 text-gray-600 min-w-full sm:min-w-[45%] lg:min-w-[200px] max-w-full sm:max-w-[45%] lg:max-w-[25%]">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M21,16.92 C21.0129,16.3876 20.6431,15.9511 20.1492,15.8814 C19.1144,15.7449 18.0983,15.4918 17.1181,15.1261 C16.7527,14.9887 16.3407,15.0765 16.0671,15.3471 L14.7971,16.6171 C14.4788,16.9354 13.987,17.0018 13.5957,16.7793 C10.9357,15.2668 8.7332,13.0643 7.2207,10.4043 C6.9982,10.013 7.0646,9.5212 7.3829,9.2029 L8.649,7.9369 C8.9235,7.6593 9.0113,7.2473 8.8731,6.8796 C8.5082,5.9017 8.2551,4.8856 8.1198,3.86 C8.0496,3.3629 7.6218,3 7.11,3 L4.11,3 C3.83,3 3.56,3.12 3.37,3.33 C3.18,3.53 3.09,3.81 3.11,4.07 C3.43,7.01 4.42,9.83 6.03,12.31 C7.49,14.6 9.43,16.54 11.73,18.01 C14.2,19.61 17,20.6 19.91,20.92 C20.19,20.95 20.47,20.85 20.67,20.66 C20.88,20.47 21,20.2 21,19.92 L21,16.92 Z" />
          </svg>
          <a
            href="tel:+443308080544"
            className="text-blue-700 font-semibold hover:underline"
          >
            (+44) 3308080544
          </a>
        </div>

        {/* Contact us */}
        <div className="flex items-center gap-2 text-blue-700 cursor-pointer hover:underline min-w-full sm:min-w-[45%] lg:min-w-[25%] max-w-full sm:max-w-[45%] lg:max-w-[150px]">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M21.65,1.06 C21.68,1.05 21.71,1.04 21.74,1.03 C22.48,0.83 23.17,1.52 22.96,2.26 C22.95,2.29 22.94,2.32 22.94,2.35 L15.94,22.33 C15.64,23.18 14.45,23.23 14.08,22.41 L10.24,13.76 L1.59,9.91 C0.77,9.55 0.81,8.36 1.67,8.06 L21.65,1.06 Z M19.61,5.81 L12.19,13.22 L14.89,19.29 L19.61,5.81 Z M10.77,11.81 L18.19,4.39 L4.71,9.11 L10.77,11.81 Z" />
          </svg>
          <a href="/contact-us" className="font-semibold">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
