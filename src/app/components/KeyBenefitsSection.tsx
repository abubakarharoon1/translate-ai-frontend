import React, { FC } from "react";
import Link from "next/link";

export const KeyBenefitsSection: FC = () => {
  return (
    <section className="overflow-visible bg-light-grey py-40 mt-[-50px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Left column */}
          <div className="w-full md:w-5/12 p-[15px] mb-12 md:mb-0">
            <div className="hero-text">
              <h1 className="lg:text-[40px] md:text-5xl  font-[600] leading-1.6 mb-6">Key benefits</h1>
            </div>
          </div>
          {/* Right column */}
          <div className="w-full md:w-7/12 p-[15px]">
            <div className="hero-text space-y-8 text-black">
              <div>
                <h4 className="text-[20px] font-[500] leading-1.2  mb-2">Experience and Trust</h4>
                <p className="mb-1">
                  We have delivered 1.2 million translations in{" "}
                  <span className="font-semibold">233</span> languages to{" "}
                  <span className="font-semibold">378,409</span> clients in{" "}
                  <span className="font-semibold">40</span> macro-domains since 1999,
                  powering the globalization strategy of the most demanding clients.
                </p>
                <Link href="/references" className="text-blue-600 hover:underline">
                  References
                </Link>
              </div>
              <div>
                <h4 className="text-[20px] font-[500] leading-1.2  mb-2">Process Efficiency</h4>
                <p className="mb-1">
                  We work hard to make translation services more effective, by enhancing
                  our production processes with great technologies and talented people.
                  A perfect example is{" "}
                  <Link href="/t-rank" className="text-blue-600 hover:underline">
                    T-Rank™
                  </Link>
                  , the system that instantly matches your content with the most qualified
                  translator for the job.
                </p>
                <Link
                  href="/production-process"
                  className="text-blue-600 hover:underline"
                >
                  Production process
                </Link>
              </div>
              <div>
                <h4 className="text-[20px] font-[500] leading-1.2  mb-2">One Step Ahead</h4>
                <p className="mb-1">
                  We offer a wide range of linguistic services that cover all your future
                  needs: Google Ads translation, software localization, subtitling, and
                  APIs to integrate human translation anywhere you need.
                </p>
                <Link
                  href="/professional-translation-services"
                  className="text-blue-600 hover:underline"
                >
                  Our services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
