"use client";
import ReviewsCarousel from "./reviews-carousel";
import DocumentHero from "./DocumentHero";
import WhyChooseSection from "./WhyChooseSection";
import ProfessionalServicesSection from "./ProfessionalServicesSection";
import SeoAndServiceLinksSection from "./SeoAndServiceLinksSection";
const WHY = [
  {
    title: "Affordable rates",
    desc:
      "We have automated most of our processes to offer the best prices on professional document translation services.",
    accent: "text-pink-600",
  },
  {
    title: "Guaranteed quality",
    desc:
      "We are confident in our quality standards and provide a 100% quality guarantee with free revisions.",
    accent: "text-blue-600",
  },
  {
    title: "Fast turnaround",
    desc:
      "Our experts allow us to translate large volumes in hours while ensuring high accuracy.",
    accent: "text-amber-600",
  },
  {
    title: "Wide variety of languages",
    desc:
      "Covering 110+ language pairs, we can deliver translations in multiple language pairs in a single order.",
    accent: "text-purple-600",
  },
  {
    title: "Translation memory",
    desc:
      "This AI-learning tool matches and reuses already translated content, so you pay less for repeated segments.",
    accent: "text-rose-600",
  },
  {
    title: "Custom services",
    desc:
      "Our services are flexible. We can provide custom solutions on request — just ask for details.",
    accent: "text-indigo-600",
  },
];

const PRO = [
  {
    title: "Medical document translation",
    desc:
      "Translate medical reports, records, and documents with specialized terminology and accuracy.",
  },
  {
    title: "Business & finance document translation",
    desc:
      "Accurate translations for statements, reports, contracts and financial documents.",
  },
  {
    title: "Legal document translation",
    desc:
      "Legal translators familiar with nuances and legal terminology across jurisdictions.",
  },
  {
    title: "Technical & scientific translation",
    desc:
      "Translate manuals, specs, research, and technical documents with domain expertise.",
  },
  {
    title: "E-learning & academic translation",
    desc:
      "Translate educational content while preserving terminology, style, and readability.",
  },
  {
    title: "SEO, marketing & advertising",
    desc:
      "Localized marketing translation that reads natural and performs in your target market.",
  },
];

const SERVICE_LINKS = [
  "Business translation service",
  "Medical translation service",
  "Email translation service",
  "Technical translation service",
  "PDF translation service",
  "Word translation service",
  "Powerpoint translation service",
  "JSON translation service",
  "Indesign translation service",
  "Adobe Illustrator translation service",
  "Figma translation service",
];

function SmallIcon({ className = "" }: { className?: string }) {
  // close to the screenshot “thin icon” style
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 17h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 5h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function DocumentTranslationPage() {
  return (
    <main className="bg-white">
      {/* HERO (same layout: left text + right order card) */}
     <DocumentHero />

      {/* WHY CHOOSE */}
     <WhyChooseSection />

      {/* REVIEWS (WORKING SLIDER) */}
      <section className="bg-[#F6F8FC] py-16">
        <div className="mx-auto max-w-[1170px] px-4">
          <h2 className="text-center text-[22px] md:text-[28px] font-extrabold text-[#0B1B3B]">
            Customer Reviews
          </h2>
          <p className="mt-3 text-center text-[12px] text-slate-500">
            Since our start two decades ago, we’ve helped countless businesses build bridges to overseas markets. Read what they say.
          </p>

          <div className="mt-10">
            <ReviewsCarousel />
          </div>
        </div>
      </section>

           <ProfessionalServicesSection />
<SeoAndServiceLinksSection />
    
    </main>
  );
}
