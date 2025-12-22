import LatestReviewsCarousel from "./latest-reviews-carousel";

const WHY = [
  {
    title: "Flexible prices",
    desc: "You can choose to pay as you go or take advantage of our great value subscription and enjoy volume discounts.",
    accent: "text-pink-600",
  },
  {
    title: "Unmatched quality",
    desc: "To ensure our technical translation service lives up to the highest quality standards, we offer free-of-charge revisions to every single project.",
    accent: "text-blue-600",
  },
  {
    title: "Fast delivery",
    desc: "Deep industry expertise and a fine-tuned translation process allow us to translate huge amounts of words in a few hours.",
    accent: "text-amber-600",
  },
  {
    title: "Large list of languages",
    desc: "With experts across 110+ language pairs, we can deliver translations to up to 5 language pairs in one order.",
    accent: "text-purple-600",
  },
  {
    title: "Translation memory",
    desc: "We use the most up-to-date translation memory technology to ensure consistency across all translations and save you costs.",
    accent: "text-rose-600",
  },
  {
    title: "Personalized services",
    desc: "Besides technical translation services, we provide a bunch of personalized services upon request. Please contact us for details.",
    accent: "text-indigo-600",
  },
];

const JSON_SERVICES = [
  {
    title: "Translation of websites",
    desc: "JSON translation serves as a solution for translating dynamic content that changes frequently.",
  },
  {
    title: "Translation of mobile apps",
    desc: "JSON translation helps create and maintain multilingual apps by making translating, updating, and localizing content much more accessible and efficient.",
  },
  {
    title: "Translation other software projects",
    desc: "Using a single JSON file for content translation can easily localize content across different platforms, saving valuable resources.",
  },
];

const SERVICE_LINKS = [
  { title: "Document translation service", icon: "/next/images/pages/services/icon__documents.svg", href: "/services/document-translation" },
  { title: "Business translation service", icon: "/next/images/pages/services/icon__briefcase.svg", href: "/services/business-translation" },
  { title: "Technical translation service", icon: "/next/images/pages/services/icon__chip.svg", href: "/services/technical-translation" },
  { title: "Email translation service", icon: "/next/images/pages/services/icon__email.svg", href: "/services/email-translation" },
  { title: "Medical translation service", icon: "/next/images/pages/services/icon__ambulance.svg", href: "/services/medical-translation" },
  { title: "Pdf translation service", icon: "/next/images/humanTranslation/icon__adobe_pdf.svg", href: "/services/pdf-translation" },
  { title: "Word translation service", icon: "/next/images/humanTranslation/icon__word.svg", href: "/services/word-translation" },
  { title: "Powerpoint translation service", icon: "/next/images/humanTranslation/icon__powerpoint.svg", href: "/services/powerpoint-translation" },
  { title: "Indesign translation service", icon: "/next/images/humanTranslation/icon__design.svg", href: "/indesign-translation" },
  { title: "Adobe illustrator translation service", icon: "/next/images/humanTranslation/icon__adobe.svg", href: "/adobe-illustrator-translation" },
  { title: "Figma translation service", icon: "/next/images/humanTranslation/icon__figma.svg", href: "/figma-translation" },
];

function SmallIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 17h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TechIcon() {
  return (
    <div className="h-10 w-10 rounded-full border border-slate-200 bg-white shadow-sm grid place-items-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 7h8M8 12h8M8 17h6" stroke="#64748B" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="#64748B" strokeWidth="1.7" />
      </svg>
    </div>
  );
}

export default function JsonTranslationPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#F6F8FC] border-b border-slate-100">
        <div className="mx-auto max-w-[1170px] px-4 py-10 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <div className="pt-1">
              <h1 className="text-[34px] leading-[1.12] md:text-[40px] font-extrabold text-[#0B1B3B]">
                Translate JSON Files <br />
                Professionally With Easy <br />
                Effort
              </h1>

              <div className="mt-5 space-y-4 text-[13px] md:text-[14px] text-slate-600 leading-[1.75] max-w-[560px]">
                <p>
                  Are you looking for a fast and accurate JSON translator? We provide technically and linguistically correct
                  JSON human translation services in over 110 language pairs.
                  We have extensive experience working with JSON and other server-to-browser data exchange formats and can guarantee excellence.
                </p>
                <p>
                  Get in touch with us today and step up your company's international markets.
                  Our professional translators ensure the authenticity and accuracy of translation to provide high-quality services only.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/order"
                  className="inline-flex h-10 items-center rounded-md bg-[#1D4ED8] px-4 text-xs font-extrabold text-white"
                >
                  Get a quote now
                </a>
                <a
                  href="/lead"
                  className="inline-flex h-10 items-center rounded-md border border-slate-200 bg-white px-4 text-xs font-extrabold text-[#1D4ED8]"
                >
                  I need a custom solution
                </a>
              </div>
            </div>

            {/* RIGHT JSON EDITOR */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[520px]">
                <div className="rounded-md bg-[#0B1B3B] shadow-[0_18px_40px_rgba(2,8,23,0.15)] overflow-hidden">
                  {/* tabs */}
                  <div className="flex items-center gap-6 px-4 pt-4 text-[12px] font-semibold">
                    <span className="text-white/90 border-b-2 border-emerald-300 pb-2">Original</span>
                    <span className="text-white/60 pb-2">.. to Spanish</span>
                    <span className="text-white/60 pb-2">.. to German</span>
                    <span className="text-white/60 pb-2">.. to Ukrainian</span>
                  </div>

                  {/* code */}
                  <div className="px-4 pb-4 pt-3">
                    <div className="rounded-md bg-[#06142D] border border-white/10 p-4 font-mono text-[11px] leading-[1.75] text-white/85 overflow-auto max-h-[360px]">
                      <div>{"{"}</div>
                      <div className="pl-4">
                        <span className="text-emerald-300">"title"</span>:{" "}
                        <span className="text-sky-200">"Best Rooftop Bar in Chicago"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-emerald-300">"body"</span>: {"{"}
                      </div>
                      <div className="pl-8">
                        <span className="text-emerald-300">"intro"</span>:{" "}
                        <span className="text-sky-200">
                          "[[[Eagles]]] is the largest rooftop bar in Chicago with 4300 sq ft..."
                        </span>
                      </div>
                      <div className="pl-4">{"},"}</div>
                      <div className="pl-4">
                        <span className="text-emerald-300">"working_hours"</span>: [
                      </div>
                      <div className="pl-8">{"{"}</div>
                      <div className="pl-12">
                        <span className="text-emerald-300">"day"</span>:{" "}
                        <span className="text-sky-200">"Monday – Thursday"</span>,
                      </div>
                      <div className="pl-12">
                        <span className="text-emerald-300">"time_interval"</span>:{" "}
                        <span className="text-sky-200">"2pm-2am"</span>
                      </div>
                      <div className="pl-8">{"},"}</div>
                      <div className="pl-8">{"{"}</div>
                      <div className="pl-12">
                        <span className="text-emerald-300">"day"</span>:{" "}
                        <span className="text-sky-200">"Friday"</span>,
                      </div>
                      <div className="pl-12">
                        <span className="text-emerald-300">"time_interval"</span>:{" "}
                        <span className="text-sky-200">"2pm-4am"</span>
                      </div>
                      <div className="pl-8">{"}"}</div>
                      <div className="pl-4">]</div>
                      <div>{"}"}</div>
                    </div>

                    <div className="mt-3 text-[11px] text-white/60">
                      * Text in triple brackets [[[ ]]] is not translated for your convenience
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END */}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1170px] px-4">
          <h2 className="text-center text-[22px] md:text-[28px] font-extrabold text-[#0B1B3B]">
            Why Use Our JSON Translation Agency
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {WHY.map((it) => (
              <div key={it.title} className="text-center px-2">
                <div className="flex justify-center">
                  <SmallIcon className={it.accent} />
                </div>
                <h3 className="mt-4 text-[14px] font-extrabold text-[#0B1B3B]">{it.title}</h3>
                <p className="mt-2 text-[12px] text-slate-500 leading-[1.65]">{it.desc}</p>
              </div>
            ))}
          </div>

          {/* Privacy */}
          <div className="mt-14 border-t border-slate-100 pt-10 text-center">
            <div className="text-[14px] font-extrabold text-[#0B1B3B]">How We Keep Customer Data Secure</div>

            <div className="mt-7 flex flex-wrap justify-center gap-14">
              <div className="flex flex-col items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm" />
                <div className="text-[11px] font-semibold text-slate-600">General Data Protection Regulation</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm" />
                <div className="text-[11px] font-semibold text-slate-600">Data Encryption and Access Control</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST REVIEWS (image slider) */}
      <section className="bg-[#F6F8FC] py-16">
        <div className="mx-auto max-w-[1170px] px-4">
          <h2 className="text-center text-[22px] md:text-[28px] font-extrabold text-[#0B1B3B]">
            Latest Reviews
          </h2>
          <p className="mt-3 text-center text-[12px] text-slate-500">
            We've assisted thousands of businesses in conveying their brand to a global audience. Find out what they are saying.
          </p>

          <div className="mt-10">
            <LatestReviewsCarousel />
          </div>
        </div>
      </section>

      {/* JSON SERVICES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1170px] px-4">
          <h2 className="text-center text-[22px] md:text-[28px] font-extrabold text-[#0B1B3B]">
            Our JSON Translation Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {JSON_SERVICES.map((s) => (
              <div key={s.title} className="text-center px-2">
                <div className="flex justify-center">
                  <TechIcon />
                </div>
                <h3 className="mt-4 text-[14px] font-extrabold text-[#0B1B3B]">{s.title}</h3>
                <p className="mt-2 text-[12px] text-slate-500 leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center">
              <div className="h-11 w-11 rounded-full bg-white border border-slate-200 shadow-sm" />
            </div>
            <div className="mt-3 text-[14px] font-extrabold text-[#0B1B3B]">Translation of other content</div>
            <p className="mt-2 text-[12px] text-slate-500">
              Our professional technical translation service can also help you localize any file in the medical, finance,
              legal or automotive sector.
            </p>
          </div>
        </div>
      </section>

      {/* LONG SEO */}
      <section className="bg-[#F6F8FC] py-16">
        <div className="mx-auto max-w-[1170px] px-4">
          <div className="text-[12px] text-slate-600 leading-[1.8] space-y-5">
            <h2 className="text-[16px] font-extrabold text-[#0B1B3B]">Translate JSON Files With Ease</h2>
            <p>
              JSON translation is inevitable if you want to make your website or application available for users worldwide.
              Providing accurate and high-quality multilingual translations of the content is important. A professional JSON language translation service will help you reach this goal quickly and effectively.
            </p>

            <p className="italic">So, what are the main reasons for choosing working JSON translation solutions?</p>

            <ol className="list-decimal pl-5 space-y-2">
              <li>Improved user experience.</li>
              <li>Higher content relevance.</li>
              <li>Increased competitiveness.</li>
              <li>Enhanced revenue.</li>
              <li>Multilingual SEO optimization.</li>
            </ol>

            <h2 className="text-[16px] font-extrabold text-[#0B1B3B]">How to Benefit From Our JSON Translation?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Translation of websites.</li>
              <li>Mobile app translation.</li>
              <li>Other software projects.</li>
            </ul>

            <h2 className="text-[16px] font-extrabold text-[#0B1B3B]">Why Choose Us?</h2>
            <h3 className="text-[14px] font-extrabold text-[#0B1B3B]">Flexible Pricing</h3>
            <p>
              Several subscription models are available for our clients. You can pay monthly or annually. We also provide custom plans for larger companies with specific needs.
            </p>

            <h3 className="text-[14px] font-extrabold text-[#0B1B3B]">Advanced Data Encryption</h3>
            <p>
              Confidentiality is a priority. We guarantee secure HTTPS handling and strong personal data encryption.
            </p>

            <h3 className="text-[14px] font-extrabold text-[#0B1B3B]">Wide Range of Languages</h3>
            <p>
              110+ language pairs are available for JSON translation by professional human translators with real technical experience.
            </p>

            <h3 className="text-[14px] font-extrabold text-[#0B1B3B]">Fast Turnaround</h3>
            <p>
              A quick delivery option is available thanks to translation memory, glossaries, and an optimized workflow — without sacrificing quality.
            </p>
          </div>
        </div>
      </section>

      {/* LINKS (with icons like in HTML) */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1170px] px-4">
          <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
              {SERVICE_LINKS.map((s) => (
                <a key={s.title} href={s.href} className="bg-white p-4 flex items-center gap-3 hover:bg-slate-50">
                  <div
                    className="h-10 w-10 rounded-md bg-slate-50 border border-slate-200"
                    style={{
                      backgroundImage: `url('${s.icon}')`,
                      backgroundSize: "22px 22px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="text-[12px] font-semibold text-slate-700">{s.title}</div>
                </a>
              ))}
            </div>

            <div className="p-4 text-center">
              <a className="text-[11px] font-bold text-[#1D4ED8] underline" href="/services">
                See all translation services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
