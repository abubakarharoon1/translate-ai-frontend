import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PowerPoint/PPT Translation | Translated.com",
  description:
    "Translate PowerPoint/PPT presentations online with fast turnaround and professional quality. Upload your file and get a quote instantly.",
};

const whyCards = [
  { title: "Affordable rates", desc: "Clear pricing and flexible packages.", icon: "💸" },
  { title: "Guaranteed quality", desc: "Professional workflows and QA checks.", icon: "✅" },
  { title: "Fast turnaround", desc: "Quick delivery options for urgent needs.", icon: "⚡" },
  { title: "Wide variety of languages", desc: "Support for many language pairs.", icon: "🌍" },
  { title: "Translation memory", desc: "Consistent terminology across slides.", icon: "🧠" },
  { title: "Custom services", desc: "Special handling for complex decks.", icon: "🧩" },
];

const pptServices = [
  { title: "Medical document translation", icon: "🩺" },
  { title: "Business & finance document translation", icon: "📈" },
  { title: "Legal document translation", icon: "⚖️" },
  { title: "Technical & scientific translation", icon: "🧪" },
  { title: "E-learning & academic translation", icon: "🎓" },
  { title: "SEO, marketing & advertising", icon: "📣" },
];

const faqs = [
  {
    q: "How do you translate a PowerPoint?",
    a: "Upload your PPT/PPTX, choose source and target languages, select a service level, and request a quote. We translate slide text while keeping your message accurate.",
  },
  {
    q: "Can you keep the design/layout?",
    a: "Yes, we can keep a similar layout for most presentations. Highly designed decks may require additional formatting depending on complexity.",
  },
  {
    q: "Do you translate speaker notes?",
    a: "Yes, we can translate slide content and speaker notes depending on what you upload and select.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing depends on word count, language pair, service level (AI vs Human), and delivery speed.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-7 text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export default function PowerPointTranslationPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* If you have a background image, put it in /public and set src below (optional) */}
        {/* <Image src="/bg__ppt.jpg" alt="" fill priority className="object-cover" /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500" />
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:18px_18px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* LEFT */}
            <div className="text-white">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 shadow-sm">
                <span className="text-2xl">📊</span>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                PowerPoint/PPT Translation
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/90">
                Professional translation companies fit the best if you need to translate
                PowerPoint online. Accurate translations with your brand voice, tone, and
                terminology — delivered fast.
              </p>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/90">
                Translate marketing decks, training slides, pitch decks, and more — while
                keeping your message clear for your audience.
              </p>
            </div>

            {/* RIGHT ORDER FORM (sharp corners + top border like your PDF form) */}
            <div className="lg:justify-self-end">
              <div className="w-full max-w-[520px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] rounded-none">
                <div className="border-t border-black/20" />

                <div className="px-6 pt-6">
                  <h3 className="text-[22px] font-extrabold leading-tight text-[#b10000]">
                    Order powerpoint translation
                  </h3>
                  <p className="mt-1 text-[13px] font-semibold text-slate-600">
                    From <span className="font-extrabold">$0.07</span> per word with{" "}
                    <span className="font-extrabold">fast delivery</span>
                  </p>

                  {/* Selects */}
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] text-slate-500">Translate from</label>
                      <div className="mt-2 relative">
                        <select
                          defaultValue=""
                          className="h-11 w-full appearance-none bg-[#F1F3F6] px-4 pr-10 text-[13px] text-slate-700
                                     outline-none rounded-[2px]"
                        >
                          <option value="" disabled>
                            Source language
                          </option>
                          <option>English</option>
                          <option>German</option>
                          <option>French</option>
                          <option>Spanish</option>
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-800">
                          ▾
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-500">Translate to</label>
                      <div className="mt-2 relative">
                        <select
                          defaultValue=""
                          className="h-11 w-full appearance-none bg-[#F1F3F6] px-4 pr-10 text-[13px] text-slate-400
                                     outline-none rounded-[2px]"
                        >
                          <option value="" disabled>
                            Select target language
                          </option>
                          <option>Spanish</option>
                          <option>English</option>
                          <option>German</option>
                          <option>French</option>
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                          ▾
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Upload */}
                  <div className="mt-5 rounded-[2px] border border-[#E0E7FF] bg-[#EAF0FF] px-5 py-6 text-center">
                    <p className="text-[13px] text-slate-700">
                      Drag &amp; drop your file here to translate it
                    </p>
                    <p className="mt-2 text-[12px] text-slate-500">or</p>
                    <button
                      type="button"
                      className="mt-3 h-9 rounded-[2px] bg-[#3E3A66] px-5 text-[12px] font-bold text-white"
                    >
                      Select from your device
                    </button>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    className="mt-6 h-11 w-full rounded-[2px] bg-[#FF3B3B] text-[13px] font-extrabold tracking-wide text-white"
                  >
                    GET A QUOTE NOW
                  </button>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="text-[12px] text-slate-500 underline underline-offset-4"
                    >
                      View accepted file types
                    </button>
                  </div>

                  {/* Features */}
                  <div className="mt-5 grid gap-y-3 gap-x-10 text-[11px] text-slate-700 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <span className="mt-[2px] text-slate-900">✓</span>
                      <span>Translated by a professional</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[2px] text-slate-900">✓</span>
                      <span>Delivered in editable format</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[2px] text-slate-900">✓</span>
                      <span>Expedited turnaround available</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[2px] text-slate-900">✓</span>
                      <span>Free revisions included</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="mt-6 flex items-center justify-center gap-3 pb-6">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-[10px] font-extrabold text-slate-600">
                      GDPR
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-[10px] font-extrabold text-slate-600">
                      SSL
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-[10px] font-extrabold text-slate-600">
                      NDA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end right */}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Our PPT Translation Company"
          subtitle="A streamlined process, professional quality, and flexible options for every presentation."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((c) => (
            <Card key={c.title} className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-lg">
                  {c.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{c.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PRIVACY */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Security"
            title="We Care About the Privacy of Every Single Client"
            subtitle="Your presentations are handled securely and confidentially."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="p-6">
              <p className="text-sm font-semibold text-slate-900">General Data Protection Regulation</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We follow secure practices for document storage and processing.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold text-slate-900">Data Encryption & Access Control</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Access is restricted and data protection measures are applied.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          title="Customer Reviews"
          subtitle="Trusted by businesses and individuals for presentation translations."
        />

        <div className="mt-8">
          <Card className="mx-auto max-w-3xl p-6 sm:p-8">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
              <span className="font-semibold">4.7</span>
              <span className="text-slate-400">/</span>
              <span>5</span>
              <span className="mx-2 h-1 w-1 rounded-full bg-slate-300" />
              <span className="text-slate-500">Based on client feedback</span>
            </div>

            <p className="mt-6 text-center text-sm leading-7 text-slate-700">
              “Our PPT was translated quickly and the terminology was consistent across slides.”
            </p>

            <p className="mt-4 text-center text-xs font-semibold text-slate-900">
              — Client Review
            </p>
          </Card>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Professional PPT Translation Services"
            subtitle="We translate presentations across industries, including technical and regulated fields."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pptServices.map((s) => (
              <Card key={s.title} className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-lg">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Accurate translations with optional formatting support.
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-600">
            Any other content you need to translate?{" "}
            <Link href="/contact" className="font-semibold text-orange-700">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* LONG CONTENT + FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Guide
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              Why Do You Need a PPT Translation Service?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Presentations often include brand terms, key messaging, and complex visuals.
              Choosing the right translation level helps keep your meaning intact.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Need help picking a package?</p>
              <p className="mt-2 text-sm text-slate-600">
                Upload your PPT/PPTX and request a quote.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
              >
                Get help
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((f) => (
                <Card key={f.q} className="p-6">
                  <p className="text-sm font-semibold text-slate-900">{f.q}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{f.a}</p>
                </Card>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">
                How to translate a PPT online
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>Upload your PPT/PPTX.</li>
                <li>Select source and target languages.</li>
                <li>Choose AI or Human translation.</li>
                <li>Confirm pricing and place the order.</li>
                <li>Download the translated presentation.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
