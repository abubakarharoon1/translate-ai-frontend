"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { ClientsSection } from "../components/Clientssection";
import { TestimonialSection } from "../components/TestimonialSection";
import { MainBanner } from "./components/Mainbannar";
import { WhyTranslate } from "./components/ColumnWhy";
import { TechnologySection } from "./components/TechnologySection";
import { ContactSection1 } from "../enterprise/components/ContactSection1";
import { RecruitingSection } from "./components/RecruitingSection";


export default function TranslatorPage() {



  return (
    <div>
<MainBanner/>
<RecruitingSection/>
    <WhyTranslate/>
    <TechnologySection/>
    <ClientsSection/>
    <TestimonialSection/>
    <ContactSection1/>
    </div>
  );
}
