import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Client = {
  name: string;
  iconSrc: string; // URL to SVG file in /public
  caseStudyUrl: string;
};

const clients: Client[] = [
  {
    name: "Icon 1",
    iconSrc: "/download (1).svg",
    caseStudyUrl: "/case-studies/icon1",
  },
  {
    name: "Icon 2",
    iconSrc: "/download (2).svg",
    caseStudyUrl: "/case-studies/icon2",
  },
  {
    name: "Icon 3",
    iconSrc: "/download (3).svg",
    caseStudyUrl: "/case-studies/icon3",
  },
  {
    name: "Icon 4",
    iconSrc: "/download (4).svg",
    caseStudyUrl: "/case-studies/icon4",
  },
  {
    name: "Icon 5",
    iconSrc: "/download (5).svg",
    caseStudyUrl: "/case-studies/icon5",
  },
    {
    name: "Icon 6",
    iconSrc: "/download.svg",
    caseStudyUrl: "/case-studies/icon5",
  },
];

export const ClientsSection: FC = () => {
  return (
    <section className="bg-gray-100 border border-gray-300">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 border-y-0 border border-gray-300">
          {clients.map(({ name, iconSrc, caseStudyUrl }, idx) => {
            const isLastColumn = (idx + 1) % 3 === 0;
            const isLastRow = idx >= clients.length - 3;

            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center p-6 text-center
                  border-gray-300
                  border-r ${isLastColumn ? "border-r-0" : ""}
                  border-b ${isLastRow ? "border-b-0" : ""}
                `}
              >
                <div className="w-28 h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300 relative">
                  <Image
                    src={iconSrc}
                    alt={`${name} logo`}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <Link
                  href={caseStudyUrl}
                  className="text-blue-600 hover:underline text-sm font-medium mt-4"
                >
                  View case study
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
