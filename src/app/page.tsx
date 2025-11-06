// app/page.tsx or pages/index.tsx (depending on your Next.js setup)

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Banner } from "./components/Banner";
import { Columnthree } from "./components/Columnthree";
import { InnovationSection } from "./components/Invotative";
import { ClientsSection } from "./components/Clientssection";
import { TestimonialSection } from "./components/TestimonialSection";
import { KeyBenefitsSection } from "./components/KeyBenefitsSection";
import { EmbraceCultureSection } from "./components/EmbraceCultureSection";
import { LatestNewsSection } from "./components/LatestNewsSection";
import { ContactSection } from "./components/ContactSection";
import { TslHero } from "./components/home/TslHero";
export default function home() {
  return (
    <main className="min-h-screen flex flex-col">
      <TslHero/>
      <Columnthree/>
      <InnovationSection/>
      <ClientsSection/>
      <TestimonialSection/>
      <KeyBenefitsSection/>
      <EmbraceCultureSection/>
      <LatestNewsSection />
      <ContactSection/>
    </main>
  );
}
