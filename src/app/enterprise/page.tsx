"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import AISection from "./components/AISection";
import ImmediateImpact from "./components/ImmediateImpact";
import CreativeGrowthSection from "./components/CreativeGrowthSection";
import SuccessStories from "./components/SuccessStories";
import HowToGetStarted from "./components/HowToGetStarted";
import { ContactSection1 } from "./components/ContactSection1";

const links = [
  { label: "Overview", href: "/enterprise" },
  { label: "TranslationOS", href: "/enterprise/translation-os" },
  { label: "Language AI", href: "/enterprise/language-ai" },
];

export default function Tabs() {
  const pathname = usePathname();

  // Check if current page is Overview
  const isOverview = pathname === "/enterprise";

  return (
    <div>
      <div className="flex gap-2 items-center my-7 whitespace-nowrap overflow-x-auto no-scrollbar px-4 justify-center">
        {links.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link key={label} href={href} legacyBehavior passHref>
              <a
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
              </a>
            </Link>
          );
        })}
      </div>

      {isOverview && (
        <>
          <AISection />
          <ImmediateImpact />
          <CreativeGrowthSection />
          <SuccessStories />
          <HowToGetStarted />
          <ContactSection1 />
        </>
      )}
    </div>
  );
}
