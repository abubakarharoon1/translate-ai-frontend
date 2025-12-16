import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "PDF Translation | Translated.com",
  description:
    "Translate PDF documents online with fast turnaround, guaranteed quality, and professional document translation services.",
};

const whyCards = [
  {
    title: "Affordable rates",
    desc: "Clear pricing and flexible packages for every document type.",
    icon: "💸",
  },
  {
    title: "Guaranteed quality",
    desc: "Professional workflows and QA checks to ensure accurate translations.",
    icon: "✅",
  },
  {
    title: "Fast turnaround",
    desc: "Quick delivery options for urgent PDF translations.",
    icon: "⚡",
  },
  {
    title: "Wide variety of languages",
    desc: "Support for popular and rare language pairs.",
    icon: "🌍",
  },
  {
    title: "Translation memory",
    desc: "Consistent terminology across repeated content and future orders.",
    icon: "🧠",
  },
  {
    title: "Custom services",
    desc: "Specialized handling for technical, legal, academic, and more.",
    icon: "🧩",
  },
];

const docServices = [
  { title: "Medical document translation", icon: "🩺" },
  { title: "Business & finance document translation", icon: "📈" },
  { title: "Legal document translation", icon: "⚖️" },
  { title: "Technical & scientific translation", icon: "🧪" },
  { title: "E-learning & academic translation", icon: "🎓" },
  { title: "SEO, marketing & advertising", icon: "📣" },
];

const faqs = [
  {
    q: "What is PDF translation?",
    a: "PDF translation is the process of converting the content inside a PDF file into another language while preserving meaning, terminology, and (when required) formatting.",
  },
  {
    q: "Can you translate scanned PDFs?",
    a: "Yes. If the PDF is scanned (image-based), we can process it and translate the text. For best results, upload the clearest version available.",
  },
  {
    q: "Will the layout remain the same?",
    a: "For many PDFs, we can keep a similar layout. Complex designs may require formatting services depending on the file structure.",
  },
  {
    q: "How do you calculate price?",
    a: "Pricing is typically based on word count, language pair, and service level (AI vs Human translation) and turnaround time.",
  },
  {
    q: "How do I get started?",
    a: "Upload your PDF, choose source/target languages, select a service package, and request a quote or place your order.",
  },
];

const languageLinks = [
  "PDF to English",
  "PDF to German",
  "PDF to French",
  "PDF to Spanish",
  "PDF to Japanese",
  "PDF to Arabic",
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
    <div
      className={[
        "rounded-2xl border border-slate-200 bg-white shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function PdfTranslationPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
{/* HERO — translate.com style */}
<section className="relative overflow-hidden">
  {/* Background image + red/orange overlay */}
  <div className="absolute inset-0">
    <Image
      src="/bg__pdf.jpg"
      alt="PDF Translation background"
      fill
      priority
      className="object-cover"
    />
    {/* strong overlay like screenshot */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-800/95 via-red-700/92 to-orange-600/90" />
  </div>

  <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {/* LEFT */}
      <div className="text-white">
        {/* Top icon tile */}
        <div className="flex">
          <div className="h-16 w-16 rounded-2xl bg-white shadow-md grid place-items-center">
            {/* you can replace with your own pdf icon if you want */}
            <span className="text-3xl text-red-600">📄</span>
          </div>
        </div>

        <h1 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-5xl">
          PDF Translation
        </h1>

        <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/90">
          Inappropriate translation can spoil the customer&apos;s impression of your
          company and services or lead to miscommunication because of the language
          barrier. Accurate and professional translation is key to effectively conveying
          the initial message to the target audience. So, you will easily overcome these
          problems with our professional translation service.
        </p>

        <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/90">
          We will help translate PDF documents and get high-quality results thanks to our
          native translators. Let&apos;s find out how you can benefit from using
          Translate.com&apos;s services.
        </p>
      </div>

     {/* RIGHT FORM (Tailwind – sharp corners + only top border) */}
<div className="lg:justify-self-end">
  <div className="w-full max-w-[520px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] rounded-none">
    {/* ONLY TOP BORDER */}
    <div className="border-t border-black/20" />

    <div className="px-6 pt-6">
      <h3 className="text-[22px] font-extrabold leading-tight text-[#b10000]">
        Order pdf translation
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
            {/* dropdown arrow */}
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

      {/* Upload box */}
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

      {/* Link */}
      <div className="mt-4 text-center">
        <button
          type="button"
          className="text-[12px] text-slate-500 underline underline-offset-4"
        >
          View accepted file types
        </button>
      </div>

      {/* Features (2 columns) */}
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

      {/* end card */}
    </div>
  </div>
</section>


      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          title="Why Choose Our PDF Translation Company"
          subtitle="A streamlined process, professional quality, and flexible options for every type of PDF document."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((c) => (
            <Card key={c.title} className="p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-lg">
                  {c.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {c.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {c.desc}
                  </p>
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
            subtitle="Your documents are handled securely and confidentially throughout the translation process."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="p-6">
              <p className="text-sm font-semibold text-slate-900">
                Trusted Data Protection Practices
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We apply secure storage and access control to protect your files
                and translation data.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold text-slate-900">
                Data Encryption & Access Control
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We restrict access to authorized personnel and use encryption
                where appropriate.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          title="Customer Reviews"
          subtitle="Trusted by businesses and individuals for accurate document translations."
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
              “Fast turnaround and great quality. The translated PDF kept the
              formatting well, and support was responsive throughout.”
            </p>

            <p className="mt-4 text-center text-xs font-semibold text-slate-900">
              — Client Review
            </p>
          </Card>

          <div className="mt-4 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-slate-900" />
            <span className="h-2 w-2 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Professional Document Translation Services"
            subtitle="We translate PDFs across industries, including regulated and technical fields."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {docServices.map((s) => (
              <Card key={s.title} className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-lg">
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {s.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Get accurate translations with terminology consistency and
                      optional formatting support.
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-600">
            Any other content you need to translate?{" "}
            <Link href="/contact" className="font-semibold text-red-700">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* LONG CONTENT / FAQ STYLE SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Guide
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              What to Consider While Choosing a PDF Translation Service
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              If your PDF includes important terminology, legal/medical content,
              or strict formatting, choose the service level and turnaround that
              matches your requirements.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">
                Need help picking a package?
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Upload your PDF and request a quote. We’ll recommend the best
                option for your content.
              </p>
              <Link
                href="#order"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Get a quote
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
                How to translate a PDF online
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>Upload your PDF (drag & drop).</li>
                <li>Select source and target languages.</li>
                <li>Choose AI or Human translation service level.</li>
                <li>Confirm pricing and place the order.</li>
                <li>Receive translated output and download.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* LANGUAGE QUICK LINKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
          <SectionTitle
            title="Translate PDF to your language"
            subtitle="Quick shortcuts to popular PDF translation directions."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {languageLinks.map((t) => (
              <Link
                key={t}
                href="/services"
                className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                {t}
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
            >
              See all translation services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
