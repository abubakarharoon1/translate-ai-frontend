"use client";
import React from "react";

type Props = {
  breadcrumb?: string;
  title?: string;
  paragraphs?: string[];
};

export default function DocumentHero({
  breadcrumb = "Services / Document Translation",
  title = "Online Official\nDocument Translation\nService",
  paragraphs = [
    "Translate.com provides 100% accurate sentence and document translations between 110+ language pairs. Our certified experts can easily handle any type of medical, legal, marketing, and general content to help impress your international customers and take your business to the next level.",
    "We also specialize in official and certified document work — including birth certificates, death certificates, marriage certificates, contracts, driver’s licenses, immigration papers, bank statements, passports, apostilles, and diplomas — ensuring they meet legal and government standards in the U.S. and beyond.",
    "Whether you need a letter, email, tutorial, template, technical manual, online content, marketing collateral, or official paperwork prepared, rest assured our service will deliver it on time and on budget.",
  ],
}: Props) {
  const titleLines = title.split("\n");

  return (
    <section
      className="border-b border-slate-100"
      style={{
        backgroundColor: "#F6F8FC",
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(2,8,23,0.035) 0px, rgba(2,8,23,0.035) 2px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 10px)",
      }}
    >
      <div className="mx-auto max-w-[1170px] px-4 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="pt-1">
            <div className="text-[11px] text-slate-400 mb-3">{breadcrumb}</div>

            <h1
              className="font-extrabold tracking-tight"
              style={{
                color: "#091841",
                lineHeight: 1.12,
                fontSize: 34,
              }}
            >
              {titleLines.map((l, i) => (
                <React.Fragment key={i}>
                  {l}
                  {i !== titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            <div className="mt-5 space-y-4 text-slate-600" style={{ fontSize: 16, lineHeight: 1.75 }}>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[430px]">
              {/* thin top strip */}
              <div className="h-[3px] bg-slate-200 rounded-t-md" />

              <div className="bg-white border border-slate-200 shadow-[0_18px_40px_rgba(2,8,23,0.10)] rounded-b-md overflow-hidden">
                <div className="px-6 pt-5 pb-4">
                  <div
                    className="font-extrabold"
                    style={{
                      color: "#1D4ED8",
                      fontSize: 26,
                      lineHeight: 1.15,
                    }}
                  >
                    Order document translation
                  </div>

                  <div className="mt-1 text-slate-500" style={{ fontSize: 12 }}>
                    From <span className="font-semibold">$0.10</span> per word with fast delivery
                  </div>
                </div>

                <div className="px-6 pb-6 space-y-4">
                  {/* dropdowns */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-slate-500 font-medium mb-2" style={{ fontSize: 12 }}>
                        Translate from
                      </div>
                      <div className="h-11 rounded-md bg-[#EEF0F4] px-3 flex items-center justify-between text-slate-700">
                        <span style={{ fontSize: 13, fontWeight: 500 }}>Source language</span>
                        <span className="text-slate-500" style={{ fontSize: 14 }}>
                          ▾
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-slate-500 font-medium mb-2" style={{ fontSize: 12 }}>
                        Translate to
                      </div>
                      <div className="h-11 rounded-md bg-[#EEF0F4] px-3 flex items-center justify-between text-slate-400">
                        <span style={{ fontSize: 13, fontWeight: 500 }}>Select target language</span>
                        <span className="text-slate-400" style={{ fontSize: 14 }}>
                          ▾
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* document type */}
                  <div>
                    <div className="text-slate-500 font-medium mb-2" style={{ fontSize: 12 }}>
                      Document type
                    </div>
                    <div className="h-11 rounded-md bg-[#EEF0F4] px-3 flex items-center justify-between text-slate-700">
                      <span style={{ fontSize: 13, fontWeight: 600 }}>Certified documents</span>
                      <span className="text-slate-500" style={{ fontSize: 14 }}>
                        ▾
                      </span>
                    </div>
                  </div>

                  {/* checkbox */}
                  <label className="flex items-center gap-2 text-slate-600" style={{ fontSize: 12 }}>
                    <input type="checkbox" className="h-4 w-4 accent-[#1D4ED8]" />
                    I need certified notary services
                  </label>

                  {/* drop area */}
                  <div className="rounded-md bg-[#E7EAF7] p-4 text-center">
                    <div className="text-slate-800 font-semibold" style={{ fontSize: 13 }}>
                      Drag &amp; drop your file here to translate it
                    </div>
                    <div className="my-1 text-slate-600" style={{ fontSize: 13 }}>
                      or
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white font-bold"
                      style={{
                        backgroundColor: "#3D3A6F",
                        fontSize: 12,
                      }}
                    >
                      Select from your device
                    </button>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    className="w-full h-11 rounded-sm text-white font-extrabold tracking-wide"
                    style={{ backgroundColor: "#2F55D4", fontSize: 12 }}
                  >
                    GET A QUOTE NOW
                  </button>

                  {/* link */}
                  <div className="text-center">
                    <span className="underline cursor-pointer" style={{ fontSize: 12, color: "#5E6C77" }}>
                      View accepted file types
                    </span>
                  </div>

                  {/* features */}
                  <div className="grid grid-cols-2 gap-3" style={{ fontSize: 12, color: "#1F2A37" }}>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <span style={{ color: "#2F55D4", fontWeight: 700 }}>✓</span>
                        <span>Translated by a professional</span>
                      </div>
                      <div className="flex gap-2">
                        <span style={{ color: "#2F55D4", fontWeight: 700 }}>✓</span>
                        <span>Expedited turnaround available</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <span style={{ color: "#2F55D4", fontWeight: 700 }}>✓</span>
                        <span>Delivered in editable format</span>
                      </div>
                      <div className="flex gap-2">
                        <span style={{ color: "#2F55D4", fontWeight: 700 }}>✓</span>
                        <span>Free revisions included</span>
                      </div>
                    </div>
                  </div>

                  {/* badges */}
                  <div className="pt-2 flex items-center justify-center gap-3 opacity-90">
                    <div className="h-8 w-8 rounded-sm bg-slate-200/60 border border-slate-200" />
                    <div className="h-8 w-8 rounded-sm bg-slate-200/60 border border-slate-200" />
                    <div className="h-8 w-8 rounded-sm bg-slate-200/60 border border-slate-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END */}
        </div>
      </div>

      {/* exact breakpoint: h1 -> 48 at 992px */}
      <style jsx>{`
        @media (min-width: 992px) {
          h1 {
            font-size: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
