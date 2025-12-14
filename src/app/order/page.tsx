// src/app/order/page.tsx
'use client';
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCreateOrder } from '@/hooks/useCreateOrder';
import type { CreateOrderRequest } from '@/types/order';
import { Stepper } from './components/Stepper';
import { useOrderFlow } from '@/hooks/useOrderFlow';
import { useWordCount } from '@/hooks/useTranslations';
import { usePricingCards } from '@/hooks/usePricing';
import type { PricingCardPublic } from '@/types/pricing';

const LANG_LABELS: Record<string, string> = {
  en: 'English',
  zh: 'Chinese (Simplified)',
  fr: 'French',
  de: 'German',
  es: 'Spanish',
  it: 'Italian',
};


export default function OrderPage() {
  const router = useRouter();
  const { draft, set, setStep } = useOrderFlow();
  const countMutation = useWordCount();
  const [fileErr, setFileErr] = useState('');

  const { loggedIn } = useIsLoggedIn();
const createOrder = useCreateOrder();
  const { data: cards } = usePricingCards();

  const activeCard: PricingCardPublic | undefined = useMemo(() => {
    if (!cards || cards.length === 0) return undefined;

    // if draft pricePerWord is not set yet, default to first card
    if (!Number.isFinite(draft.pricePerWord) || draft.pricePerWord <= 0) {
      return cards[0];
    }

    const match = cards.find(
      (c) =>
        Number((c.rate ?? 0).toFixed(4)) ===
        Number(draft.pricePerWord.toFixed(4)),
    );

    return match ?? cards[0];
  }, [cards, draft.pricePerWord]);

  const serviceLabel =
    activeCard?.name ??
    (draft.service === 'human' ? 'Human translation' : 'Machine translation');

  const totalPretty = useMemo(() => draft.total.toFixed(2), [draft.total]);

  // language options based on active card
  const fromOptions = useMemo(() => {
    if (activeCard?.fromLanguages?.length) return activeCard.fromLanguages;
    return ['zh', 'en']; // fallback if not configured
  }, [activeCard]);

  const toOptions = useMemo(() => {
    if (activeCard?.toLanguages?.length) return activeCard.toLanguages;
    return ['en', 'zh']; // fallback
  }, [activeCard]);

  // keep selected from/to valid when options or card change
  useEffect(() => {
    if (!fromOptions.length || !toOptions.length) return;

    let nextFrom = draft.from;
    let nextTo = draft.to[0];

    if (!fromOptions.includes(nextFrom)) {
      nextFrom = fromOptions[0];
    }
    if (!toOptions.includes(nextTo)) {
      nextTo = toOptions[0];
    }

    if (nextFrom !== draft.from || nextTo !== draft.to[0]) {
      set({ from: nextFrom, to: [nextTo] });
    }
  }, [fromOptions, toOptions, draft.from, draft.to, set]);

  // email validator
  // email validator: required only for guests
  const emailOk = useMemo(() => {
    if (loggedIn) return true;
    if (!draft.email) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email);
  }, [loggedIn, draft.email]);

  const canOrder = !!draft.file && !!draft.words && emailOk;


  async function onFile(f: File) {
    setFileErr('');
    const okExt =
      /\.(txt|pdf|docx?|rtf|odt|pptx?|xlsx?|csv|json|xliff|po|ai|fig|idml|indd)$/i.test(f.name);
    if (!okExt) return setFileErr('Unsupported file type');
    if (f.size > 90 * 1024 * 1024) return setFileErr('Max 90 MB');

    const { words } = await countMutation.mutateAsync(f);
    const total = +(words * draft.pricePerWord).toFixed(2);
    set({ file: f, words, total });
  }

  function onSelectCard(card: PricingCardPublic) {
    const service =
      card.key === 'machine'
        ? ('machine' as typeof draft.service)
        : ('human' as typeof draft.service);

    const pricePerWord = card.rate ?? 0;
    const total = +(pricePerWord * (draft.words || 0)).toFixed(2);
    set({ service, pricePerWord, total });
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <Stepper loggedIn={loggedIn} /> 

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <section className="rounded-lg border border-slate-200 bg-white p-6">
          <h1 className="mb-6 text-[22px] font-semibold text-slate-900">
            Choose Your Perfect Translation or Proofreading Solution
          </h1>

          <p className="mb-3 text-[13px] font-medium text-slate-700">
            Please Choose the Service That Suits Your Project
          </p>

          {/* service tiles */}
          <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-4">
            {cards?.map((card) => {
              const active = activeCard?.id === card.id;
              const disabled = card.key === 'proof' || card.key === 'official';

              return (
                <button
                  key={card.id}
                  type="button"
                  disabled={disabled}
                  onClick={() => onSelectCard(card)}
                  className={[
                    'rounded-lg border p-4 text-left transition relative bg-white',
                    active
                      ? 'border-blue-600 ring-1 ring-blue-600'
                      : 'border-slate-300 hover:border-slate-400',
                    disabled ? 'cursor-not-allowed opacity-50' : '',
                  ].join(' ')}
                >
                  {card.bestSeller && (
                    <span className="absolute -top-2 left-4 rounded-full bg-amber-200 px-3 py-1 text-[11px] font-semibold text-amber-800">
                      Best seller
                    </span>
                  )}

                  <div className="flex items-start justify-between mt-3">
                    <div className="font-semibold text-slate-900 text-[14px] leading-snug">
                      {card.name}
                    </div>
                    {active && (
                      <span className="ml-2 mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
                        ✓
                      </span>
                    )}
                  </div>

                  {/* description like in the reference design */}
                  <p className="mt-2 text-[13px] leading-snug text-slate-600 min-h-[48px]">
                    {card.description || card.subtitle}
                  </p>

                  <p className="mt-4 text-[12px] font-medium text-slate-700">
                    Price starts from ${ (card.rate ?? 0).toFixed(2) } / word
                  </p>
                </button>
              );
            })}
          </div>

          {/* languages */}
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Select languages
              </label>
              <select
                value={draft.from}
                onChange={(e) => set({ from: e.target.value })}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              >
                {fromOptions.map((code) => (
                  <option key={code} value={code}>
                    {LANG_LABELS[code] ?? code}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-6 md:mt-0">
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Translate to
              </label>
              <select
                value={draft.to[0]}
                onChange={(e) => set({ to: [e.target.value] })}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              >
                {toOptions.map((code) => (
                  <option key={code} value={code}>
                    {LANG_LABELS[code] ?? code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* file section */}
          <p className="mb-2 text-[13px] font-medium text-slate-700">
            What text or document do you need help translating?
          </p>
          <div className="mb-3 grid grid-cols-2 gap-2">
            <div className="rounded-md border border-blue-700 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-900">
              File to translate
            </div>
            <div className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-500">
              Text to translate
            </div>
          </div>

          <div className="mb-4">
            <input
              type="file"
              accept=".txt,.pdf,.doc,.docx,.rtf,.odt,.ppt,.pptx,.xls,.xlsx,.csv,.json,.xliff,.po,.ai,.fig,.idml,.indd"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                onFile(f).catch((err) => setFileErr(err?.message ?? 'Failed to read file'));
              }}
              className="block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-slate-700"
            />

            {draft.file && (
              <div className="mt-3 rounded-md border border-slate-200 p-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="text-slate-900">
                    <span className="font-medium">{draft.file.name}</span>
                    <span className="ml-2 text-slate-500">
                      {Math.round(draft.file.size / 1024)} KB
                    </span>
                    {countMutation.isPending && <span className="ml-2">• Counting words…</span>}
                    {draft.words ? <span className="ml-2">• {draft.words} words</span> : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => set({ file: undefined, words: 0, total: 0 })}
                    className="text-blue-700 hover:underline"
                  >
                    Remove file
                  </button>
                </div>
              </div>
            )}

            {fileErr && <p className="mt-2 text-sm text-red-600">{fileErr}</p>}

            <p className="mt-3 text-[12px] leading-relaxed text-slate-500">
              We accept one file per order — 90 Mb maximum. We support .txt, .pdf, doc(x), xls(x),
              odt, rtf, ppt(x), .json, xliff, csv, po, indd, idml, ai, fig.
            </p>
          </div>

          {/* notes */}
          <details className="mb-4">
            <summary className="cursor-pointer text-sm text-blue-700 underline">
              Have specific instructions for the translator?
            </summary>
            <textarea
              value={draft.notes}
              onChange={(e) => set({ notes: e.target.value })}
              maxLength={250}
              className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              placeholder="Provide your translator with additional instructions relevant to your order"
            />
          </details>

          {/* tone */}
          <div className="mb-8">
            <label className="mb-1 block text-sm font-medium text-slate-700">Tone of voice</label>
            <select
              value={draft.tone}
              onChange={(e) => set({ tone: e.target.value as typeof draft.tone })}
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            >
              <option value="informal">Informal</option>
              <option value="friendly">Friendly</option>
              <option value="business">Business</option>
              <option value="formal">Formal</option>
            </select>
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="h-fit rounded-lg border border-slate-200 bg-[#e9f0fa] p-6">
          <h2 className="mb-3 font-semibold text-slate-900">Order summary</h2>

          <div className="space-y-2 text-sm">
            <Row label="Service type" value={serviceLabel} />
            <Row label="From" value={LANG_LABELS[draft.from] ?? draft.from} />
            <Row label="To" value={LANG_LABELS[draft.to[0]] ?? draft.to[0]} />
            <Row label="Order’s word count" value={`${draft.words || 0} words`} />
            <Row label="Price per word" value={`$${draft.pricePerWord.toFixed(2)}`} />

            {!loggedIn && (
              <div className="pt-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Email (to deliver your translations)
                </label>
                <input
                  type="email"
                  value={draft.email ?? ''}
                  onChange={(e) => set({ email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-slate-300 px-3 py-2"
                />
                {!emailOk && draft.email && (
                  <p className="mt-1 text-xs text-red-600">Please enter a valid email.</p>
                )}
              </div>
            )}

            <p className="mt-4 text-[12px] leading-relaxed text-slate-700">
              Real-time quotes are not available for this file. Click 'Get a quote' for an offer by
              email in 30 minutes.
            </p>

<button
  disabled={!canOrder || createOrder.isPending}
  onClick={async () => {
    try {
      if (!activeCard) {
        alert('Please select a service first.');
        return;
      }

      const dto: CreateOrderRequest = {
        service: draft.service,      // 'human' | 'machine'
        from: draft.from,
        to: draft.to,

        notes: draft.notes,
        email: draft.email,
        tone: draft.tone,

        pricePerWord: draft.pricePerWord,
        words: draft.words,

        meta: {
          pricingCardId: activeCard.id,
          pricingKey: activeCard.key,
          pricingName: activeCard.name,
          deliveryHours: activeCard.deliveryHours,
        },
      };

      const file = draft.file ?? undefined;

      const order = await createOrder.mutateAsync({ dto, file });

      // Redirect to payment page with token
      setStep(1);
      router.push(`/order/payment?token=${encodeURIComponent(order.orderToken)}`);
    } catch (err) {
      console.error(err);
      alert('Failed to create order. Please try again.');
    }
  }}
  className="mt-3 w-full rounded-md bg-[#173593] px-4 py-2 font-semibold text-white disabled:opacity-60"
>
  {createOrder.isPending ? 'Creating order…' : 'Order'}
</button>


          </div>

          <div className="mt-6 rounded-md bg-white p-4">
            <h3 className="mb-2 font-semibold text-slate-900">Need help with your order?</h3>
            <p className="text-sm text-slate-600">
              Email us at <a href="mailto:support@translate.com">support@translate.com</a> or use
              the Contact form
            </p>
          </div>

          <div className="mt-4 border-t pt-3 text-right text-lg font-semibold text-slate-900">
            Total: ${totalPretty}
          </div>
        </aside>
      </div>
    </main>
  );
}

function Row(props: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-600">{props.label}</span>
      <span className="font-medium text-slate-900">{props.value}</span>
    </div>
  );
}
