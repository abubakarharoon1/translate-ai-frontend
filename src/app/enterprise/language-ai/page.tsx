"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Languagebannar from "./components/Languagebannar";
import TranslationAISection from "./components/TranslationAISection";

export default function Tabs() {
  const links = [
    { label: "Overview", href: "/enterprise" },
    { label: "TranslationOS", href: "/enterprise/translation-os" },
    { label: "Language AI", href: "/enterprise/language-ai" },
  ];

  const pathname = usePathname();

  return (
    <div>
      <div className="flex gap-2 items-center my-7 whitespace-nowrap overflow-x-auto no-scrollbar px-4 justify-center">
        {links.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              style={
                isActive
                  ? {
                      borderColor: "rgba(0,85,184,0.6)",
                      backgroundColor: "rgba(0,85,184,0.1)",
                    }
                  : {}
              }
              className={`cursor-pointer rounded-[8px] px-4 py-3 font-medium whitespace-nowrap transition-colors duration-250 ease-in-out
                ${isActive ? "text-[#0055b8] border" : "text-[#768190] border border-[#ccd4de]"}
                no-underline
                text-[20px]
              `}
            >
              {label}
            </Link>
          );
        })}
      </div>

      <Languagebannar />
      <TranslationAISection/>
    </div>
  );
}
