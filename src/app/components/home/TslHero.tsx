"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { ArrowRightLeft } from "lucide-react";

// allow window.gtag without TS error
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type Lang = { value: string; label: string };

const LANGUAGES: Lang[] = [
  { value: "af", label: "Afrikaans" },
  { value: "ar", label: "Arabic" },
  { value: "bs", label: "Bosnian (Latin)" },
  { value: "bg", label: "Bulgarian" },
  { value: "ca", label: "Catalan" },
  { value: "zh", label: "Chinese (Simplified)" },
  { value: "zh-TW", label: "Chinese (Traditional)" },
  { value: "hr", label: "Croatian" },
  { value: "cs", label: "Czech" },
  { value: "da", label: "Danish" },
  { value: "nl", label: "Dutch" },
  { value: "en", label: "English" },
  { value: "en-gb", label: "English (British)" },
  { value: "et", label: "Estonian" },
  { value: "tl", label: "Filipino" },
  { value: "fi", label: "Finnish" },
  { value: "fr", label: "French" },
  { value: "fr-ca", label: "French (Canada)" },
  { value: "de", label: "German" },
  { value: "el", label: "Greek" },
  { value: "ht", label: "Haitian Creole" },
  { value: "iw", label: "Hebrew" },
  { value: "hi", label: "Hindi" },
  { value: "mww", label: "Hmong Daw" },
  { value: "hu", label: "Hungarian" },
  { value: "is", label: "Icelandic" },
  { value: "id", label: "Indonesian" },
  { value: "it", label: "Italian" },
  { value: "ja", label: "Japanese" },
  { value: "tlh", label: "Klingon" },
  { value: "ko", label: "Korean" },
  { value: "lv", label: "Latvian" },
  { value: "lt", label: "Lithuanian" },
  { value: "ms", label: "Malay" },
  { value: "mt", label: "Maltese" },
  { value: "fa", label: "Persian" },
  { value: "pl", label: "Polish" },
  { value: "pt", label: "Portuguese" },
  { value: "pt-br", label: "Portuguese (Brazil)" },
  { value: "ro", label: "Romanian" },
  { value: "ru", label: "Russian" },
  { value: "sr", label: "Serbian (Cyrillic)" },
  { value: "sr-La", label: "Serbian (Latin)" },
  { value: "sk", label: "Slovak" },
  { value: "sl", label: "Slovenian" },
  { value: "es", label: "Spanish" },
  { value: "es-la", label: "Spanish (Latin America)" },
  { value: "sv", label: "Swedish" },
  { value: "ta", label: "Tamil" },
  { value: "th", label: "Thai" },
  { value: "tr", label: "Turkish" },
  { value: "uk", label: "Ukrainian" },
  { value: "ur", label: "Urdu" },
  { value: "vi", label: "Vietnamese" },
  { value: "cy", label: "Welsh" },
  { value: "yua", label: "Yucatec Maya" },
];

const FILE_ICONS = [
  { src: "/next/images/pages/services/pdf-document.svg", alt: "PDF", title: ".pdf" },
  { src: "/next/images/pages/services/word-document.svg", alt: "Word", title: ".doc(x)" },
  { src: "/next/images/pages/services/excel-document.svg", alt: "Excel", title: ".xls(x)" },
  { src: "/next/images/pages/services/ppt-document.svg", alt: "PowerPoint", title: ".ppt(x)" },
  { src: "/next/images/pages/services/json.svg", alt: "JSON", title: ".json" },
  { src: "/next/images/humanTranslation/icon__design.svg", alt: "Design", title: ".idml, .indd" },
  { src: "/next/images/humanTranslation/icon__adobe.svg", alt: "Adobe Illustrator", title: ".ai" },
  { src: "/next/images/humanTranslation/icon__figma.svg", alt: "Figma", title: ".fig" },
  { src: "/next/images/pages/services/xliff.svg", alt: "XLIFF", title: ".xliff" },
  { src: "/next/images/pages/services/csv-document.svg", alt: "CSV", title: ".csv" },
  { src: "/next/images/pages/services/txt-document.svg", alt: "TXT", title: ".txt" },
  { src: "/next/images/pages/services/odt-document.svg", alt: "ODT", title: ".odt" },
  { src: "/next/images/pages/services/rtf-document.svg", alt: "RTF", title: ".rtf" },
];

function languageLabel(value: string) {
  return LANGUAGES.find((l) => l.value === value)?.label ?? value;
}

export  function TslHero() {
  const [sourceLang, setSourceLang] = useState<string>("en");
  const [targetLang, setTargetLang] = useState<string>("es");
  const [text, setText] = useState<string>("");

  const swap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

  return (
    <section className="w-full border-b bg-gradient-to-b from-white to-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT: Copy + logos */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Professional translation scaled by technology and enhanced by human experts
            </h1>
            <h2 className="text-lg text-muted-foreground">
              We translate or proofread within hours.
            </h2>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm font-medium text-muted-foreground">We support</div>
              <ul className="mt-4 grid grid-cols-7 gap-4 sm:grid-cols-10 md:grid-cols-12">
                {FILE_ICONS.map((f, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      title={f.title}
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-muted-foreground">
                We are also open to other formats but with custom deadlines.
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="flex flex-col gap-6">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">
                  See how the next-gen translation tool works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Language pair */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <Select value={sourceLang} onValueChange={setSourceLang}>
                    <SelectTrigger className="h-11 rounded-xl">
                      <SelectValue placeholder="Source language" />
                    </SelectTrigger>
                    <SelectContent className="max-h-72">
                      {LANGUAGES.map((l) => (
                        <SelectItem key={l.value} value={l.value}>
                          {l.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button
                    type="button"
                    variant="secondary"
                    className="h-11 rounded-xl"
                    onClick={swap}
                    aria-label="Swap languages"
                  >
                    <ArrowRightLeft className="h-5 w-5" />
                  </Button>

                  <Select value={targetLang} onValueChange={setTargetLang}>
                    <SelectTrigger className="h-11 rounded-xl">
                      <SelectValue placeholder="Target language" />
                    </SelectTrigger>
                    <SelectContent className="max-h-72">
                      {LANGUAGES.map((l) => (
                        <SelectItem key={l.value} value={l.value}>
                          {l.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Textarea */}
                <Textarea
                  value={text}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                  className="min-h-[140px] resize-y rounded-2xl"
                  placeholder="Choose the language pair and type or paste your text here to translate"
                />

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/services/proofreading" className="w-full sm:w-auto">
                    <Button
                      className="w-full rounded-xl"
                      variant="outline"
                      onClick={() =>
                        window.gtag?.("event", "goto__mt_form", {
                          event_category: "cta",
                          event_label: "form",
                        })
                      }
                    >
                      Reviewing Machine-Translated Content
                    </Button>
                  </Link>

                  <Link href="/order?" className="w-full sm:w-auto">
                    <Button
                      className="w-full rounded-xl"
                      onClick={() =>
                        window.gtag?.("event", "goto__ht_form", {
                          event_category: "cta",
                          event_label: "form",
                        })
                      }
                    >
                      Human Translation <span className="ml-1 hidden sm:inline">(file, text)</span>
                    </Button>
                  </Link>
                </div>

                {/* Features */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <ul className="list-disc space-y-1 pl-5 text-sm">
                    <li>Swift and reliable delivery</li>
                    <li>From $0.03 per word</li>
                    <li>Will be edited by a native speaker</li>
                  </ul>
                  <ul className="list-disc space-y-1 pl-5 text-sm">
                    <li>Fast delivery time</li>
                    <li>From $0.09 per word</li>
                    <li>Edited by an expert</li>
                  </ul>
                </div>

                {/* Small caption (current selection) */}
                <p className="pt-1 text-xs text-muted-foreground">
                  {languageLabel(sourceLang)} → {languageLabel(targetLang)}
                </p>
              </CardContent>
            </Card>

            {/* Cloned logos below the form (for smaller screens visibility parity) */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm lg:hidden">
              <div className="text-sm font-medium text-muted-foreground">We support</div>
              <ul className="mt-4 grid grid-cols-7 gap-4 sm:grid-cols-10">
                {FILE_ICONS.map((f, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      title={f.title}
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-muted-foreground">
                We are also open to other formats but with custom deadlines.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
