import React from "react";
import Image from "next/image";
import { CustomButton } from "@/app/components/CustomButton"; // adjust import path if needed

export default function AISection() {
  return (
    <section className="flex py-20 gap-[30px] flex-col md:flex-row items-center max-w-[1150px] w-full mx-auto flex-1 px-8">
      {/* Left Text */}
      <div>
        <h1 className="lg:text-[62px] md:text-5xl font-[600] leading-[1.1] mb-6">
          We open up <br />
          AI-first <br />
          localization to<br />
          everyone
        </h1>
        <p className="text-[20px] mb-8 max-w-md">
          Break through traditional localization constraints. Maximize your globalization efforts with leading language AI, advanced data curation, and the world's best professional linguists to improve customer understanding and accelerate time to market.
        </p>
      </div>

      {/* Right Illustration */}
      <div className="flex-1 mt-12 md:mt-0 relative w-full">
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
