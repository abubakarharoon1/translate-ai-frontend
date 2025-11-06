"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Developerbannar } from "./components/Developerbannar";
import TechLogosSection from "./components/TechLogosSection ";
import SupportedFormatsSection from "./components/SupportedFormatsSection";



export default function TranslatorPage() {



  return (
    <div>
<Developerbannar/>
<TechLogosSection />
<SupportedFormatsSection/>
    </div>
  );
}
