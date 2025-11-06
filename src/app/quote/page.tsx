"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import InstantQuote from "./component/InstantQuote";
import ContactSection from "./component/ContactSection";
import { WhyChooseUs } from "./component/WhyChooseUs";
import { ClientsSection } from "../components/Clientssection";
import { TestimonialSection } from "../components/TestimonialSection";


export default function Quotepage() {



  return (
    <div>

    <InstantQuote/>
    <ContactSection/>
    <WhyChooseUs/>
    <ClientsSection/>
    <TestimonialSection/>
    </div>
  );
}
