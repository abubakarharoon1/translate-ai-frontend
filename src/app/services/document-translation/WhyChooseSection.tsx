import React from "react";

type WhyItem = {
  title: string;
  desc: string;
  Icon: React.FC<{ className?: string }>;
};

function IconAffordable({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 18V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 18V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 18V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 18V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 3v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconQuality({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2l1.9 1.9 3.8-4.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFast({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21a8 8 0 1 0-8-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 5v6l4 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 13H1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3.5 17l-1.5 1.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLanguages({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M4 13h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 5c2.3 2.1 3.6 5 3.6 8S14.3 18.9 12 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 5c-2.3 2.1-3.6 5-3.6 8S9.7 18.9 12 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconMemory({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 7a4 4 0 0 1 8 0v2a3 3 0 0 1 3 3v1a6 6 0 0 1-6 6H11a6 6 0 0 1-6-6v-1a3 3 0 0 1 3-3V7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M10 21v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 21v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 11v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconCustom({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19.4 15a7.8 7.8 0 0 0 .1-6l2-1.2-2-3.4-2.3 1a8 8 0 0 0-5.2-2.4L11.5 1h-4L7 3a8 8 0 0 0-3.8 2.5L1 4.4  -? "
        opacity="0"
      />
      <path
        d="M3 12a9 9 0 0 1 .2-2l-1.9-1.1 2-3.4 2.1 1A9.3 9.3 0 0 1 8 4.7L8.4 2h4l.4 2.7a9.3 9.3 0 0 1 2.6 1.8l2.1-1 2 3.4-1.9 1.1c.1.6.2 1.3.2 2s-.1 1.4-.2 2l1.9 1.1-2 3.4-2.1-1a9.3 9.3 0 0 1-2.6 1.8L12.4 22h-4L8 19.3a9.3 9.3 0 0 1-2.6-1.8l-2.1 1-2-3.4 1.9-1.1c-.1-.6-.2-1.3-.2-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGdpr({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconLock({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 11V8a5 5 0 0 1 10 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 11h12v10H6V11z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 15v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const WHY: WhyItem[] = [
  {
    title: "Affordable rates",
    desc: "We have automated most of our processes to offer the best in-class prices on professional document translation.",
    Icon: IconAffordable,
  },
  {
    title: "Guaranteed quality",
    desc: "We are so confident in our quality standards that we provide a 100% quality guarantee and offer free revisions.",
    Icon: IconQuality,
  },
  {
    title: "Fast turnaround",
    desc: "Our expertise allows us to translate large volumes in hours while ensuring they are highly accurate.",
    Icon: IconFast,
  },
  {
    title: "Wide variety of languages",
    desc: "Covering 110+ language pairs, we can deliver translations in up to 5 language pairs in a single order.",
    Icon: IconLanguages,
  },
  {
    title: "Translation memory",
    desc: "This self-learning tool matches and reuses already translated content segments, so you don’t pay twice for the same translation.",
    Icon: IconMemory,
  },
  {
    title: "Custom services",
    desc: "Our professional document translation services are flexible, and we can offer custom services upon request. Please get in touch for details.",
    Icon: IconCustom,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1170px] px-4 py-16">
        {/* H2 = 44 */}
        <h2
          className="text-center font-extrabold"
          style={{ fontSize: 44, lineHeight: 1.15, color: "#0B1B3B" }}
        >
          Why Choose Our Document Translation Company
        </h2>

        {/* features */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-16">
          {WHY.map(({ title, desc, Icon }) => (
            <div key={title} className="text-center">
              {/* icon big like screenshot */}
              <div className="flex justify-center">
                <Icon className="h-11 w-11 text-[#1D4ED8]" />
              </div>

              {/* title = 26 */}
              <div
                className="mt-5 font-extrabold"
                style={{ fontSize: 26, lineHeight: 1.2, color: "#0B1B3B" }}
              >
                {title}
              </div>

              {/* para = 16 */}
              <p
                className="mt-3 mx-auto max-w-[320px]"
                style={{ fontSize: 16, lineHeight: 1.65, color: "#64748B" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* divider line */}
        <div className="mt-16 border-t border-slate-200" />

        {/* privacy */}
        <div className="pt-14 text-center">
          {/* privacyHeader = 26 */}
          <div
            className="font-extrabold"
            style={{ fontSize: 26, lineHeight: 1.2, color: "#0B1B3B" }}
          >
            We Care About the Privacy of Every Single Client
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-28">
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white border border-slate-200 shadow-sm grid place-items-center">
                <IconGdpr className="h-7 w-7 text-[#1D4ED8]" />
              </div>
              <div className="text-[13px] font-semibold text-slate-600">
                General Data Protection Regulation
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white border border-slate-200 shadow-sm grid place-items-center">
                <IconLock className="h-7 w-7 text-[#111827]" />
              </div>
              <div className="text-[13px] font-semibold text-slate-600">
                Data Encryption and Access Control
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
