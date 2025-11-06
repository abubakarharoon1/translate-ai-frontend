
import Image from "next/image";
import React from "react";

export function Developerbannar() {
  return (
    <section className="flex py-20 gap-[30px] flex-col md:flex-row items-center max-w-[1150px] w-full mx-auto flex-1 px-8">
      {/* Left Text */}
      <div className="">
        <h1 className="lg:text-[62px] md:text-5xl  font-[600] leading-1.4 mb-6">
         We open up 
<br />
         tools for <br />
         globalization <br/>
         engineers
        </h1>
        <p className="text-[20px] mb-8 max-w-md">
Translation APIs for continuous localization, advanced repetition leveraging, content extraction from 71 file formats and 21 content sources, neural adaptive machine translation, and much more.

        </p>
        <div className="flex space-x-4">
            
        </div>
      </div>

      {/* Right Illustration */}
      <div className="flex-1 mt-12 md:mt-0 relative w-full ">
        <Image
          src="/astronave-translated@2x.webp"
          alt="Illustration"
          width={600}
          height={500}
          className="mx-auto"
          priority
        />
      </div>
    </section>
  );
}
