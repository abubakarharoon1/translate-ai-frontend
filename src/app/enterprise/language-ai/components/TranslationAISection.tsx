"use client";

import React from "react";
import Image from "next/image";

export default function TranslationAISection() {
  return (
    <section className="max-w-[1150px] mx-auto px-6 md:px-8 py-20">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-8">
        Translation AI
      </h2>
      <p className="max-w-3xl mx-auto text-center mb-16 text-lg leading-relaxed">
        Our translation AI offering is rooted in our experience as a pioneer in
        adaptive machine translation and our use of the Transformer, the
        foundational technology for generative AI.
      </p>

      {/* Two column grid */}
      <div className="flex flex-col md:flex-row items-center gap-[96px] justify-between">
        {/* Left Text */}
        <div className="md:w-1/2 text-left lg:w-full lg:max-w-[340px]">
          <h3 className="text-3xl font-bold mb-4 leading-tight">
            Integrated AI for quality and productivity
          </h3>
          <p className="mb-6 text-base leading-relaxed max-w-md">
            Our technologies —{" "}
            <a
              href="https://www.modernmt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              ModernMT
            </a>{" "}
            and{" "}
            <a
              href="https://lara.translated.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Lara
            </a>{" "}
            — are natively integrated into our platform and the AI-powered
            translation software we provide to the translators working with
            us. You can use our translation AI to generate high-quality
            translations that continually improve through automation and to
            increase the productivity of professional translators.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Learn more about Translation AI
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 rounded-xl overflow-hidden lg:w-full mx-auto">
          <Image
            src="/translation-ai.png" // replace with your actual image path
            alt="Translation AI Illustration"
            width={600}
            height={400}
            className="rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
