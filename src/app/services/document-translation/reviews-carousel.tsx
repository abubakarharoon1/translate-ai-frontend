"use client";

import React, { useMemo, useState } from "react";

type Review = {
  id: string;
  name: string;
  role: string;
  text: string;
  ratingLabel: string; // like the screenshot “W2A+7.10”
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    ratingLabel: "W2A+7.10",
    text:
      "We knew that it takes a different level of trust to translate in their language. With the help of Translate.com, we can provide high-end assistance and don’t worry about linguistic errors.",
    name: "Mark Kowalski",
    role: "Chief Marketing Officer",
  },
  {
    id: "r2",
    ratingLabel: "W2A+7.10",
    text:
      "Fast, professional, and consistent. We translated multiple documents and the quality stayed excellent across the entire project.",
    name: "Sarah Benitez",
    role: "Operations Manager",
  },
  {
    id: "r3",
    ratingLabel: "W2A+7.10",
    text:
      "Great communication and accurate translations. Delivery was on time and the documents were accepted without issues.",
    name: "Omar Hassan",
    role: "Legal Consultant",
  },
];

export default function ReviewsCarousel() {
  const [idx, setIdx] = useState(0);

  const total = REVIEWS.length;

  const go = (n: number) => {
    const next = (n + total) % total;
    setIdx(next);
  };

  const active = REVIEWS[idx];

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-4">
        {/* Left arrow */}
        <button
          type="button"
          onClick={() => go(idx - 1)}
          className="h-10 w-10 rounded-full border border-slate-200 bg-white shadow-sm grid place-items-center text-slate-500 hover:text-slate-700"
          aria-label="Previous review"
        >
          ‹
        </button>

        {/* Card */}
        <div className="w-full max-w-[560px] rounded-md border border-slate-200 bg-white shadow-sm px-7 py-7 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-extrabold text-slate-700">
            <span className="inline-block h-5 w-5 rounded bg-slate-100 border border-slate-200" />
            {active.ratingLabel}
          </div>
          <div className="mt-1 text-[12px] text-slate-500">
            Highly rated • Trusted worldwide
          </div>

          <p className="mt-5 text-[12px] md:text-[13px] text-slate-600 leading-[1.75]">
            {active.text}
          </p>

          <div className="mt-5 text-[12px] font-extrabold text-slate-700">
            {active.name}, <span className="font-semibold">{active.role}</span>
          </div>
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => go(idx + 1)}
          className="h-10 w-10 rounded-full border border-slate-200 bg-white shadow-sm grid place-items-center text-slate-500 hover:text-slate-700"
          aria-label="Next review"
        >
          ›
        </button>
      </div>

      {/* dots */}
      <div className="mt-6 flex justify-center gap-2">
        {REVIEWS.map((r, i) => (
          <button
            key={r.id}
            onClick={() => setIdx(i)}
            className={[
              "h-2 w-2 rounded-full transition",
              i === idx ? "bg-[#1D4ED8]" : "bg-slate-300",
            ].join(" ")}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
    