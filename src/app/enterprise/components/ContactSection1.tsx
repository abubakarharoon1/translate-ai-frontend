import React, { FC } from "react";
import Image from "next/image";

export const ContactSection1: FC = () => {
  return (
    <section className="max-w-[1150px] w-full mx-auto lg:px-19 md:px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-12">
      {/* Left content */}
      <div className="w-full max-w-md">
        <h2 className="text-4xl font-extrabold leading-tight mb-4">
          More questions? <br /> Get in touch.
        </h2>
        <p className="mb-6 text-base leading-relaxed">
          Our team is ready to find a solution to your translation needs.
        </p>
        <button className="border border-gray-300 rounded-md px-6 py-4 text-[16px] hover:bg-gray-100 transition">
          Contact us
        </button>
      </div>

      {/* Right content */}
      <div className="flex-1 max-w-sm lg:text-center md:text-left">
        <Image
          src="/sdsds.png"
          alt="Barbara photo"
          width={120}
          height={120}
          className="rounded-full lg:mx-auto md:mx-0 lg:text-center"
        />
        <h3 className="mt-6 text-xl font-bold">Hello, I'm Barbara.</h3>
        <p className="mb-1 text-lg font-semibold">How can I help you?</p>
        <p className="text-gray-400 text-sm">Barbara - Senior Account Manager</p>
      </div>
    </section>
  );
};
