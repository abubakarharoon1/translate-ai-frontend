import React from "react";

type ServiceItem = {
  title: string;
  desc: string;
  tone: "blue" | "beige" | "pink" | "rose" | "purple" | "lilac";
  Icon: React.FC<{ className?: string }>;
};

function Badge({
  tone,
  children,
}: {
  tone: ServiceItem["tone"];
  children: React.ReactNode;
}) {
  const map: Record<ServiceItem["tone"], { bg: string; fg: string }> = {
    blue: { bg: "#EEF4FF", fg: "#1E3A8A" },
    beige: { bg: "#F6F0E6", fg: "#6B4F1D" },
    pink: { bg: "#FCEAF1", fg: "#9D174D" },
    rose: { bg: "#FDECEF", fg: "#9F1239" },
    purple: { bg: "#F3E8FF", fg: "#6D28D9" },
    lilac: { bg: "#F5E9FF", fg: "#7C3AED" },
  };

  const c = map[tone];

  return (
    <div
      className="mx-auto grid h-14 w-14 place-items-center rounded-full"
      style={{ backgroundColor: c.bg, color: c.fg }}
    >
      {children}
    </div>
  );
}

/** Icons (simple line icons close to screenshot vibe) */
function IconMedical({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 19V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M6 19h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M9 11h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M12 8v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}
function IconRocket({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 4c3 1 5 4 6 7-3 1-6 3-7 6-3-1-6-3-7-6 1-3 3-6 8-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M10 14l-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M13 11a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}
function IconLegal({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3h10v18H7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M9 7h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M9 11h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M17 3l2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}
function IconNetwork({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M17 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M9 9l6-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M9 11l6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}
function IconCap({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M7 12v5c3 2 7 2 10 0v-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M21 9v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}
function IconMegaphone({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 11v2c0 1 1 2 2 2h2l7 3V6l-7 3H6c-1 0-2 1-2 2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <path d="M19 9a3 3 0 0 1 0 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

const SERVICES: ServiceItem[] = [
  {
    title: "Medical document\ntranslation",
    desc: "Our team of medical document translators has years of experience in all types of medical documents — from patient records to journal articles.",
    tone: "blue",
    Icon: IconMedical,
  },
  {
    title: "Business & finance\ndocument translation",
    desc: "Whether you work in the banking, asset management, fintech, or insurance industry, the right linguist will always handle your project.",
    tone: "beige",
    Icon: IconRocket,
  },
  {
    title: "Legal document translation",
    desc: "Our global team is familiar with all the nuances and subtleties of specific legal terms and processes these files with the highest levels of discretion.",
    tone: "pink",
    Icon: IconLegal,
  },
  {
    title: "Technical & scientific\ntranslation",
    desc: "With our document translation service, you will be designated a relevant expert capable of handling complex terms and specialized data.",
    tone: "rose",
    Icon: IconNetwork,
  },
  {
    title: "E-learning & academic\ntranslation",
    desc: "In case you need to translate your diploma or e-learning certificate, we can match your file with a native fluent in the terminology of the field.",
    tone: "purple",
    Icon: IconCap,
  },
  {
    title: "SEO, marketing &\nadvertising",
    desc: "We have native-speaking translators who specialize in translating copy for packaging, brochures, websites, newsletters, and other collateral.",
    tone: "lilac",
    Icon: IconMegaphone,
  },
];

export default function ProfessionalServicesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1170px] px-4 py-16">
        <h2
          className="text-center font-extrabold"
          style={{ fontSize: 44, lineHeight: 1.15, color: "#0B1B3B" }}
        >
          Our Professional Document Translation Services
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-16">
          {SERVICES.map((s) => (
            <div key={s.title} className="text-center">
              <Badge tone={s.tone}>
                <s.Icon className="h-7 w-7" />
              </Badge>

              <h3
                className="mt-5 font-extrabold whitespace-pre-line"
                style={{ fontSize: 22, lineHeight: 1.25, color: "#0B1B3B" }}
              >
                {s.title}
              </h3>

              <p
                className="mt-3 mx-auto max-w-[330px]"
                style={{ fontSize: 14, lineHeight: 1.7, color: "#64748B" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* bottom single item */}
        <div className="mt-14 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#EEF4FF] text-[#1E3A8A]">
            <IconMedical className="h-7 w-7" />
          </div>
          <div className="mt-4 font-extrabold" style={{ fontSize: 22, color: "#7AAE2A" }}>
            Any other content you need to translate
          </div>
        </div>
      </div>
    </section>
  );
}
