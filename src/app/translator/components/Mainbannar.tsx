import { CustomButton } from "@/app/components/CustomButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export function MainBanner() {
  return (
    <section className="flex py-20 gap-[30px] flex-col md:flex-row items-center max-w-[1150px] w-full mx-auto flex-1 px-8">
      {/* Left Text */}
      <div className="">
        <h1 className="lg:text-[62px] md:text-5xl  font-[600] leading-1.4 mb-6">
         We open up 
<br />
         better ways  <br />
         of working
        </h1>
        <p className="text-[20px] mb-8 max-w-md">
          Get the chance to work on interesting projects, at your own pace, and deciding your own rate. We provide the technology for free, and support your career with continuous education programs.
        </p>
        <div className="flex space-x-4">
    <CustomButton variant="primary">Apply as a translator</CustomButton>
            
        </div>
      </div>

      {/* Right Illustration */}
      <div className="flex-1 mt-12 md:mt-0 relative w-full ">
        <Image
          src="/nido-translated@2x.webp"
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
