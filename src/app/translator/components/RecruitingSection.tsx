import React, { FC } from "react";

export const RecruitingSection: FC = () => {
  return (
    <section className="overflow-visible bg-light-grey py-40 mt-[-50px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Left column */}
          <div className="w-full md:w-5/12 p-[15px] mb-12 md:mb-0">
            <h2 className="lg:text-[40px] md:text-5xl font-[600] leading-1.6">
              We are recruiting <br /> language talent
            </h2>
          </div>

          {/* Right column */}
          <div className="w-full md:w-7/12 p-[15px] text-black">
            <ul className="space-y-6 list-none">
              {[
                <>
                  Rated as the best company to work with on{" "}
                  <a
                    href="https://www.proz.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Proz
                  </a>
                  .
                </>,
                <>
                  Rated as the best company to work with by{" "}
                  <a
                    href="https://fair.work/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Fairwork
                  </a>
                  .
                </>,
                "Get paid end of the month, as fast as an employee.",
                "Hundreds of interesting jobs assigned per hour.",
                "Free to decide your own rate per word.",
                "Free to work with us from anywhere and anytime.",
                "Free educational programs.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="flex-shrink-0 mt-1 w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
