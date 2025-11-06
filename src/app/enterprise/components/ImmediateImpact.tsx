import React from "react";
import Image from "next/image";

export default function ImmediateImpact() {
  return (
    <section className="bg-[#f2f5f7] py-20 mt-[-50px] overflow-visible">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-4xl font-extrabold text-center">Immediate impact</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 max-w-xs text-center">
            <div className="mb-6 text-center flex justify-center align-middle">
              <Image
                src="/55.svg"
                alt="55%"
                width={90}
                height={90}
                priority
                loading="eager"
              />
            </div>
            <p className="font-extrabold mb-3 text-lg">Faster go-to-market speed</p>
            <p className="text-sm max-w-[270px] mx-auto leading-6">
              By using highly cost-effective and scalable translation services for rapid translation of higher volumes
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 max-w-xs text-center">
            <div className="mb-6 text-center  flex justify-center align-middle">
              <Image
                src="/50.svg"
                alt="50%"
                width={90}
                height={90}
                priority
                loading="eager"
              />
            </div>
            <p className="font-extrabold mb-3 text-lg">Unit cost reduction</p>
            <p className="text-sm max-w-[270px] mx-auto leading-6">
              By progressively introducing artificial intelligence indexing over time, with immediate benefits.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 max-w-xs text-center">
            <div className="mb-6 text-center  flex justify-center align-middle">
              <Image
                src="/15.svg"
                alt="15%"
                width={90}
                height={90}
                priority
                loading="eager"
              />
            </div>
            <p className="font-extrabold mb-3 text-lg">Localization savings</p>
            <p className="text-sm max-w-[270px] mx-auto leading-6">
              By minimizing intermediaries and streamlining processes while improving service quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
