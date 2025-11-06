import Image from "next/image";
import React from "react";
import { CustomButton } from "./CustomButton";

export function Banner() {
  return (
    <section className="flex py-20 gap-[30px] flex-col md:flex-row items-center max-w-[1150px] w-full mx-auto flex-1 px-8">
      {/* Left Text */}
      <div className="">
        <h1 className="lg:text-[62px] md:text-5xl  font-[600] leading-1.4 mb-6">
          We open up <br />
          language <br />
          to everyone
        </h1>
        <p className="text-[20px] mb-8 max-w-md">
          Professional translation services made easy.
          <br />
          Crafted by expert humans, powered by technology, efficiently delivered.
        </p>
        <div className="flex space-x-4">
    <CustomButton variant="primary">Instant quote</CustomButton>
<CustomButton variant="secondary">  About us</CustomButton>
            
        </div>
      </div>

      {/* Right Illustration */}
      <div className="flex-1 mt-12 md:mt-0 relative w-full ">
        <Image
          src="/soffione-translated@2x.webp"
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
