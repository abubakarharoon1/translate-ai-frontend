import React from "react";

export default function SuccessStories() {
  return (
    <div className="bg-[#f2f5f7]">
    <section className="bg-[#f2f5f7] min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto text-center">
      <h2 className="text-[48px] font-bold mb-16">Success stories</h2>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {/* Story 1 */}
        <div className="flex flex-col items-center md:w-1/3 px-6">
          <img
            src="/asana-logo.svg"
            alt="Asana Logo"
            className="mb-6 max-h-"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mb-2">From Traditional to AI-First Localization</h3>
          <p className="text-sm leading-relaxed">
            We co-designed an{" "}25
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              AI-first localization system
            </a>{" "}
            that helped Asana automate 70% of its processes, cut manual work by 30%, and scale new languages effortlessly without compromising on quality.
          </p>
        </div>

        {/* Story 2 */}
        <div className="flex flex-col items-center md:w-1/3 px-6">
           <img
            src="/asana-logo.svg"
            alt="Asana Logo"
            className="mb-6 max-h-"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mb-2">Reaching 1 billion new customers in just 3 months</h3>
          <p className="text-sm leading-relaxed">
            We orchestrated the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              largest and fastest language expansion ever
            </a>{" "}
            by bringing the best translators, copywriters, and machine translation together in one place.
          </p>
        </div>

        {/* Story 3 */}
        <div className="flex flex-col items-center md:w-1/3 px-6">
           <img
            src="/asana-logo.svg"
            alt="Asana Logo"
            className="mb-6 max-h-"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mb-2">Speaking the customers’ language – literally</h3>
          <p className="text-sm leading-relaxed">
            We localized the onboarding video library{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              (100+ minutes) in three languages over two weeks
            </a>{" "}
            by combining linguists with our state-of-the-art expressive AI generated voices.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
