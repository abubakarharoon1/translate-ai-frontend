import React from "react";

export default function HowToGetStarted() {
  return (
    <section className="min-h-screen bg-light-grey flex flex-col justify-center py-12 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h3 className="text-[48px] font-extrabold mb-4">How to get started</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Step into the future of localization and start reaping the benefits of AI, all without disrupting your workflow.
          </p>
        </div>

        {/* Content grid */}
        <div className="flex flex-col items-center md:flex-row gap-12 md:gap-24 max-w-5xl mx-auto">
          {/* Left box */}
          <div className="flex flex-col items-center md:items-start md:w-1/2  md:text-left justify-center lg:text-center">
            <img
              src="/gears.svg"
              alt="Gears icon"
              loading="eager"
              className="mb-6 text-center mx-auto"
            />
            <h5 className="font-semibold text-xl mb-3 text-center">
              End-to-end solution for new localization programs
            </h5>
            <p className="text-base max-w-md text-center">
              If you're designing a new localization workflow, we can provide you with the necessary technology infrastructure, skilled professional translators, and the language AI needed, including translation AI, machine translation and AI-powered localization tools for your translators. You'll be able to manage your localization projects right away.
            </p>
          </div>

          {/* Right box */}
          <div className="flex flex-col  md:items-start md:w-1/2 md:text-left justify-center align-center items-center lg:text-center ">
            <img
              src="/destination-path.svg"
              alt="Destination path icon"
              loading="eager"
              className="mb-6 items-center mx-auto"
            />
            <h5 className="font-semibold text-xl mb-3 text-center">
              Seamless integration for existing programs
            </h5>
            <p className="text-base max-w-md text-center">
              If you already have a localization workflow, you can easily integrate it with our platform to enhance translation quality and automate processes. Based on your needs and goals, we can tailor your localization program to be AI-first, either partially or entirely, and guide you through the transition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
