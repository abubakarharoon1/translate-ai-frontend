"use client";

import React, { useMemo, useState } from "react";

type Slide = {
  id: string;
  src: string;
  alt: string;
};

const SLIDES: Slide[] = [
  { id: "s1", src: "/next/images/testimonials/resumeedge.png", alt: "ResumeEdge review" },
  { id: "s2", src: "/next/images/testimonials/wow.png", alt: "Wow24-7 review" },
  { id: "s3", src: "/next/images/testimonials/slidepeak.png", alt: "SlidePeak review" },
  { id: "s4", src: "/next/images/testimonials/serviceplan.png", alt: "Serviceplan review" },
  { id: "s5", src: "/next/images/testimonials/oneplay.png", alt: "OnePlay review" },
];

export default function LatestReviewsCarousel() {
  const [idx, setIdx] = useState(0);

  const total = SLIDES.length;
  const active = SLIDES[idx];

  const go = (n: number) => setIdx((n + total) % total);

  return (
    <div className="w-full">
      <div className="relative">
        {/* arrows */}
        <button
          type="button"
          onClick={() => go(idx - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-slate-200 bg-white shadow-sm grid place-items-center text-slate-500 hover:text-slate-800"
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="mx-auto max-w-[680px] bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
          <img
            src={active.src}
            alt={active.alt}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>

        <button
          type="button"
          onClick={() => go(idx + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-slate-200 bg-white shadow-sm grid place-items-center text-slate-500 hover:text-slate-800"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* dots */}
      <div className="mt-6 flex justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIdx(i)}
            className={[
              "h-2 w-2 rounded-full transition",
              i === idx ? "bg-[#1D4ED8]" : "bg-slate-300",
            ].join(" ")}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
