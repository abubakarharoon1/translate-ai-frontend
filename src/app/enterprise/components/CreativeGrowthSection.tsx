import React from "react";
import Image from "next/image";

export default function CreativeGrowthSection() {
  return (
    <section className="max-w-[1150px] mx-auto px-6 md:px-8 py-20">
      <h2 className="text-4xl font-extrabold text-center mb-8">
        Blending AI and creativity for global growth
      </h2>
      <p className="max-w-3xl mx-auto text-center mb-16 text-lg leading-relaxed">
        Since 1999, we’ve advanced localization technologies by blending AI with human creativity to deliver scalable, adaptable localization solutions that support ambitious companies with global businesses.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-[96px] justify-between mb-[64px]">
        {/* Left Text */}
        <div className="md:w-1/2 text-left lg:w-full lg:max-w-[340px]">
          <h3 className="text-3xl font-bold mb-4 leading-tight">
            Leading, innovative language AI
          </h3>
          <p className="mb-6 text-base leading-relaxed max-w-md">
            Over 25 years, we've led language AI, pioneering Transformer technology in machine translation before it underpinned generative AI. Today, our proprietary solutions—including human-by-exception translation and automated background reviews—continue to push boundaries, delivering daily quality improvements to the custom translation AI instances we provide for each customer.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Discover our language AI
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 rounded-xl overflow-hidden  lg:w-full  mx-auto">
          <Image
            src="/ai-innovation.jpg"
            alt="Abstract AI Art"
            width={600}
            height={400}
            className="rounded-xl"
            priority
          />
        </div>
      </div>
       <div className="flex flex-col md:flex-row items-center gap-[96px] justify-between mb-[64px]">
        <div className="md:w-1/2 rounded-xl overflow-hidden  lg:w-full  mx-auto">
          <Image
            src="/ai-localization.jpg"
            alt="Abstract AI Art"
            width={684}
            height={400}
            className="rounded-xl"
            priority
          />
        </div>
          <div className="md:w-1/2 text-left lg:w-full lg:max-w-[340px]">
          <h3 className="text-3xl font-bold mb-4 leading-tight">
            A comprehensive localization suite
          </h3>
          <p className="mb-6 text-base leading-relaxed max-w-md">
            Over 25 years, we've led language AI, pioneering Transformer technology in machine translation before it underpinned generative AI. Today, our proprietary solutions—including human-by-exception translation and automated background reviews—continue to push boundaries, delivering daily quality improvements to the custom translation AI instances we provide for each customer.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Discover our language AI
          </a>
        </div>
      </div>
        <div className="flex flex-col md:flex-row items-center gap-[96px] justify-between mb-[64px]">
        {/* Left Text */}
        <div className="md:w-1/2 text-left lg:w-full lg:max-w-[340px]">
          <h3 className="text-3xl font-bold mb-4 leading-tight">
        Adaptable, rapidly scalable solutions

          </h3>
          <p className="mb-6 text-base leading-relaxed max-w-md">
          From website localization to adapting high-volume user-generated content, our custom solutions span over 200 languages and 40 specialized domains. By combining leading translation AI with a global network of 500,000 language professionals, we deliver rapidly scalable localization services that truly reflect your brand’s voice and meet your specific business needs.


          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Discover our language AI
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 rounded-xl overflow-hidden  lg:w-full  mx-auto">
          <Image
            src="/solutions.jpg"
            alt="Abstract AI Art"
            width={684}
            height={400}
            className="rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
