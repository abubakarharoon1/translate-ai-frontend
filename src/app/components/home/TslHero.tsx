"use client";

import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { ArrowRightLeft } from "lucide-react";

import { PricingService } from "@/services/pricing.service";

// allow window.gtag without TS error
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const FILE_ICONS = [
  { src: "/pdf-document.svg", alt: "PDF", title: ".pdf" },
  { src: "/excel-document.svg", alt: "Excel", title: ".xls(x)" },
  { src: "/ppt-document.svg", alt: "PowerPoint", title: ".ppt(x)" },
  { src: "/json.svg", alt: "JSON", title: ".json" },
  { src: "/icon_figma.svg", alt: "Figma", title: ".fig" },
  { src: "/icon__adobe.svg", alt: "Adobe", title: ".ai" },
  { src: "/icon__design.svg", alt: "InDesign", title: ".idml, .indd" },
  { src: "/xliff.svg", alt: "XLIFF", title: ".xliff" },
  { src: "/txt-document.svg", alt: "TXT", title: ".txt" },
  { src: "/odt-document.svg", alt: "ODT", title: ".odt" },
  { src: "/rtf-document.svg", alt: "RTF", title: ".rtf" },
];


// ---- UI: screenshot-like dropdown ----
function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onOutside: () => void
) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) onOutside();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onOutside]);
}


function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LanguageDropdown({
  label,
  value,
  onChange,
  options,
  placeholder = "Select language",
  footerText = "Show extra 30+ languages",
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder?: string;
  footerText?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useOutsideClick(wrapRef, () => setOpen(false));

  const shown = useMemo(() => {
    const clean = (options ?? []).filter(Boolean);
    // show first 18 in initial view (2 columns * 9 rows)
    return showAll ? clean : clean.slice(0, 18);
  }, [options, showAll]);

  const display = value || "";

  return (
    <div ref={wrapRef} className="relative">
      <div className="sr-only">{label}</div>

      {/* Trigger (gray like screenshot) */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className={[
          "h-10 w-full rounded-md px-3",
          "bg-[#E6E7EB] text-left text-sm text-[#1F2937]", // gray pill
          "flex items-center justify-between",
          "outline-none",
          open ? "ring-2 ring-[#1D4ED8]/40" : "",
        ].join(" ")}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={`${display ? "text-[#111827]" : "text-[#6B7280]"}`}>
          {display || placeholder}
        </span>
        <span className="text-[#1D4ED8]">
          <Chevron open={open} />
        </span>
      </button>

      {/* Menu */}
      {open && (
        <div
          className={[
            "absolute z-50 mt-2 w-[340px] max-w-[90vw]",
            "rounded-md border border-[#E5E7EB] bg-white shadow-lg",
            "p-3",
          ].join(" ")}
          role="listbox"
        >
          <div className="mb-2 text-[10px] tracking-widest text-[#9CA3AF]">
            SELECT {label.toUpperCase()}
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {shown.map((opt) => {
              const selected = opt === value;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 text-left text-sm text-[#374151] hover:text-[#111827]"
                >
                  {/* radio dot */}
                  <span
                    className={[
                      "h-3 w-3 rounded-full border",
                      selected ? "border-[#1D4ED8]" : "border-[#D1D5DB]",
                      "flex items-center justify-center",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {selected ? <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" /> : null}
                  </span>
                  <span className="truncate">{opt}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="mt-3 text-xs text-[#1D4ED8] hover:underline"
            onClick={() => setShowAll((s) => !s)}
          >
            {footerText}
          </button>
        </div>
      )}
    </div>
  );
}

export function TslHero() {
  // Languages come from pricing cards (human only)
  const [fromOptions, setFromOptions] = useState<string[]>([]);
  const [toOptions, setToOptions] = useState<string[]>([]);
  const [sourceLang, setSourceLang] = useState<string>("English");
  const [targetLang, setTargetLang] = useState<string>("Spanish");

  const [text, setText] = useState<string>("");

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const cards = await PricingService.list();
        const human = cards.find((c) => c.key === "human");
        const from = (human?.fromLanguages ?? []).filter(Boolean);
        const to = (human?.toLanguages ?? []).filter(Boolean);

        if (!alive) return;

        setFromOptions(from);
        setToOptions(to);

        // set defaults if current values not available
        if (from.length && !from.includes(sourceLang)) setSourceLang(from[0]);
        if (to.length && !to.includes(targetLang)) setTargetLang(to[0]);
      } catch {
        // keep fallback values if API fails
      }
    })();

    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const swap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

  const buildOrderHref = (service: "mt_review" | "human") => {
    const params = new URLSearchParams({
      service,
      source: sourceLang,
      target: targetLang,
    });

    if (text.trim()) params.set("text", text);

    return `/order?${params.toString()}`;
  };

  return (
    // Background closer to screenshot
    <section className="w-full border-b bg-[#F3F6FB]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl text-[#0B1B3B]">
              Professional translation scaled by technology and enhanced by human experts
            </h1>
            <h2 className="text-lg text-[#6B7280]">
              We translate or proofread within hours.
            </h2>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm font-medium text-[#6B7280]">We support</div>
              <ul className="mt-4 grid grid-cols-7 gap-4 sm:grid-cols-10 md:grid-cols-12">
                {FILE_ICONS.map((f, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <Image src={f.src} alt={f.alt} title={f.title} width={28} height={28} className="h-7 w-7" />
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-[#6B7280]">
                We are also open to other formats but with custom deadlines.
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <Card className="rounded-md shadow-lg border-0">
              {/* top thin bar like screenshot */}
              <div className="h-1 w-full bg-[#E5E7EB]" />

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-[#1D4ED8]">
                  See how the next-gen translation tool works
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Dropdown row */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <LanguageDropdown
                    label="Source language"
                    value={sourceLang}
                    onChange={setSourceLang}
                    options={fromOptions.length ? fromOptions : ["English", "French", "German", "Spanish"]}
                    placeholder="English"
                  />

                  <button
                    type="button"
                    onClick={swap}
                    className="h-10 w-10 rounded-md bg-[#E6E7EB] flex items-center justify-center"
                    aria-label="Swap languages"
                  >
                    <ArrowRightLeft className="h-4 w-4 text-[#1D4ED8]" />
                  </button>

                  <LanguageDropdown
                    label="Target language"
                    value={targetLang}
                    onChange={setTargetLang}
                    options={toOptions.length ? toOptions : ["Spanish", "Hindi", "Arabic", "Italian"]}
                    placeholder="Spanish"
                  />
                </div>

                {/* Text area (gray panel like screenshot) */}
                <div className="rounded-md bg-[#E6E7EB] p-3">
                  <Textarea
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                    className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus-visible:ring-0"
                    placeholder="Choose the language pair and type or paste your text here to translate"
                  />
                </div>

                {/* CTA Buttons (left outline blue, right filled blue like screenshot) */}
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href={buildOrderHref("mt_review")}
                    onClick={() =>
                      window.gtag?.("event", "goto__mt_form", { event_category: "cta", event_label: "form" })
                    }
                  >
                    <Button
                      className="w-full rounded-none h-11 border border-[#1D4ED8] bg-white text-[#1D4ED8] hover:bg-white"
                      variant="outline"
                    >
                      Reviewing Machine-Translated Content
                    </Button>
                  </Link>

                  <Link
                    href={buildOrderHref("human")}
                    onClick={() =>
                      window.gtag?.("event", "goto__ht_form", { event_category: "cta", event_label: "form" })
                    }
                  >
                    <Button className="w-full rounded-none h-11 bg-[#1D4ED8] hover:bg-[#1D4ED8] text-white">
                      Human Translation <span className="ml-1">(file, text)</span>
                    </Button>
                  </Link>
                </div>

                {/* Feature bullets (simple, like screenshot) */}
                <div className="grid grid-cols-2 gap-3 pt-1 text-sm text-[#374151]">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#9CA3AF]" />
                      Swift and reliable delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#9CA3AF]" />
                      From $0.03 per word
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#9CA3AF]" />
                      Will be edited by a native speaker
                    </li>
                  </ul>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" />
                      Fast delivery time
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" />
                      From $0.09 per word
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#1D4ED8]" />
                      Edited by an expert
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
