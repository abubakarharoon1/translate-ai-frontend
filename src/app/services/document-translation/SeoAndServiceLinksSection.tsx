"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type ServiceLink = {
  title: string;
  href: string;
  iconSrc: string; // from /public
  iconAlt: string;
};

const SERVICES: ServiceLink[] = [
  {
    title: "Business translation service",
    href: "/services/business-translation",
    iconSrc: "/professional_translation.svg",
    iconAlt: "Business",
  },
  {
    title: "Technical translation service",
    href: "/services/technical-translation",
    iconSrc: "/szsw.svg",
    iconAlt: "Technical",
  },
  {
    title: "Email translation service",
    href: "/services/email-translation",
    iconSrc: "/next.svg",
    iconAlt: "Email",
  },
  {
    title: "Medical translation service",
    href: "/services/medical-translation",
    iconSrc: "/meta-cat.png",
    iconAlt: "Medical",
  },
  {
    title: "Pdf translation service",
    href: "/services/pdf-translation",
    iconSrc: "/pdf-document.svg",
    iconAlt: "PDF",
  },
  {
    title: "Word translation service",
    href: "/services/word-translation",
    iconSrc: "/word-document.svg",
    iconAlt: "Word",
  },
  {
    title: "Powerpoint translation service",
    href: "/services/powerpoint-translation",
    iconSrc: "/ppt-document.svg",
    iconAlt: "PowerPoint",
  },
  {
    title: "Json translation service",
    href: "/services/json-translation",
    iconSrc: "/json.svg",
    iconAlt: "JSON",
  },
  {
    title: "Indesign translation service",
    href: "/indesign-translation",
    iconSrc: "/icon_design.svg",
    iconAlt: "InDesign",
  },
  {
    title: "Adobe illustrator translation service",
    href: "/adobe-illustrator-translation",
    iconSrc: "/window.svg",
    iconAlt: "Illustrator",
  },
  {
    title: "Figma translation service",
    href: "/figma-translation",
    iconSrc: "/icon_figma.svg",
    iconAlt: "Figma",
  },
];

export default function ServiceLinksGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1170px] px-4 py-10">
             {/* Long SEO content */}
        <div className="text-slate-700 py-7">
          <h2 className="font-extrabold text-[#0B1B3B]" style={{ fontSize: 18 }}>
            Expert Document Translation Services
          </h2>

          <p className="mt-3" style={{ fontSize: 12, lineHeight: 1.85 }}>
            Translate.com delivers professional document translation services designed for accuracy, speed,
            and confidentiality. Whether you require legal, medical, academic, or business translation,
            we match your content with expert translators to ensure reliable results across 110+ language pairs.
          </p>

          <h3 className="mt-10 font-extrabold text-[#0B1B3B]" style={{ fontSize: 14 }}>
            Does Professional File Translation Matter?
          </h3>

          <p className="mt-3" style={{ fontSize: 12, lineHeight: 1.85 }}>
            Professional translation helps avoid costly mistakes, preserves meaning, and ensures your documents
            are accepted worldwide. Our process includes QA checks and experienced linguists to keep terminology
            consistent and correct.
          </p>

          <ul className="mt-4 list-disc pl-5 space-y-2" style={{ fontSize: 12, lineHeight: 1.85 }}>
            <li>Accurate terminology for business, legal, and technical documentation.</li>
            <li>Consistency across repeated segments with translation memory support.</li>
            <li>Fast delivery options when you need urgent turnaround.</li>
            <li>Confidential handling of sensitive documents and data.</li>
          </ul>

          <h3 className="mt-10 font-extrabold text-[#0B1B3B]" style={{ fontSize: 14 }}>
            Our Document Translation Service Benefits
          </h3>

          <div className="mt-6 space-y-7">
            {[
              "High Quality",
              "Accurate Translation",
              "Urgent Delivery Option",
              "Cost-effectiveness",
              "Confidentiality",
            ].map((t) => (
              <div key={t}>
                <div className="font-extrabold text-[#0B1B3B]" style={{ fontSize: 12 }}>
                  {t}
                </div>
                <p className="mt-2 text-slate-600" style={{ fontSize: 12, lineHeight: 1.85 }}>
                  We maintain strong QA processes and subject-matter expertise to deliver dependable,
                  professional results for every document.
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 font-extrabold text-[#0B1B3B]" style={{ fontSize: 14 }}>
            What Do We Offer?
          </h3>

          <ol className="mt-4 list-decimal pl-5 space-y-2 text-slate-600" style={{ fontSize: 12, lineHeight: 1.85 }}>
            <li>Language pairs: Choose the source and target languages for your project.</li>
            <li>Document type: Select the service category that fits your document requirements.</li>
            <li>Additional services: Request notarization, expedited turnaround, or custom solutions.</li>
          </ol>
        </div>
        {/* OUTER BOX */}
        <div className="overflow-hidden rounded-[4px] border border-[#D7E2F1] bg-white">
          {/* GRID with thin dividers like screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
            {SERVICES.map((s, idx) => (
              <Link
                key={s.title}
                href={s.href}
                className={[
                  "group flex flex-col gap-5 p-6",
                  "min-h-[165px]",
                  "border-[#D7E2F1]",
                  // cell borders: right + bottom (table look)
                  "border-b",
                  "md:border-b",
                  // right border for all but last column in md
                  "md:border-r",
                  // remove right border on last col in md
                  ((idx + 1) % 5 === 0 ? "md:border-r-0" : ""),
                  // remove bottom border on last row in md
                  (idx >= 10 ? "md:border-b-0" : ""),
                  // last item alone (figma) should keep bottom border off
                  (idx === SERVICES.length - 1 ? "border-b-0 md:border-b-0" : ""),
                ].join(" ")}
              >
                {/* ICON BOX */}
                <div className="h-14 w-14 rounded-[3px] bg-[#EEF4FB] grid place-items-center">
                  <Image
                    src={s.iconSrc}
                    alt={s.iconAlt}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                {/* LINK TITLE */}
                <div className="text-[15px] leading-[1.35]">
                  <span className="text-[#1D4ED8] underline underline-offset-2 group-hover:text-[#163DAA]">
                    {s.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* FOOTER LINK ROW */}
          <div className="border-t border-[#D7E2F1] bg-white">
            <div className="px-4 py-4 text-center">
              <Link
                href="/services"
                className="text-[#1D4ED8] underline underline-offset-2 text-[15px] font-semibold hover:text-[#163DAA]"
              >
                See all translation services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
