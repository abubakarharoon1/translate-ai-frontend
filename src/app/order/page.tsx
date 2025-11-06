'use client';

import { useRouter } from 'next/navigation';
import { Stepper } from './components/Stepper';
import { useOrderFlow } from '@/hooks/useOrderFlow';
import { useWordCount } from '@/hooks/useTranslations';
import { useMemo, useState } from 'react';

type ServiceOption = {
  key: 'human' | 'machine' | 'proof' | 'official';
  title: string;
  desc: string;
  hint: string;
  disabled?: boolean;
};

const serviceOptions: ServiceOption[] = [
  {
    key: 'human',
    title: 'Human translation',
    desc: 'Professional human translation with proofreading by a native-translator',
    hint: 'Price starts from $0.07 / word',
  },
  {
    key: 'machine',
    title: 'Machine translation',
    desc: 'Instant machine translation for large text volume or *.txt, *.JSON files',
    hint: 'Price starts from $0.01 / word',
  },
  {
    key: 'proof',
    title: 'Proofreading by Native',
    desc: 'Ideal for refining post-AI and machine translations to ensure natural, flawless text.',
    hint: 'Price starts from $0.03 / word',
    disabled: true,
  },
  {
    key: 'official',
    title: 'Official documents translation',
    desc: 'Professional human translation with proofreading by a specialist in your domain',
    hint: 'Price starts from $0.14 / word',
    disabled: true,
  },
];

export default function OrderPage() {
  const router = useRouter();
  const { draft, set, setStep } = useOrderFlow();
  const countMutation = useWordCount();
  const [fileErr, setFileErr] = useState('');

  const serviceLabel = draft.service === 'human' ? 'Human translation' : 'Machine translation';

  const totalPretty = useMemo(() => draft.total.toFixed(2), [draft.total]);

  async function onFile(f: File) {
    setFileErr('');
    const okExt =
      /\.(txt|pdf|docx?|rtf|odt|pptx?|xlsx?|csv|json|xliff|po|ai|fig|idml|indd)$/i.test(f.name);
    if (!okExt) {
      setFileErr('Unsupported file type');
      return;
    }
    if (f.size > 90 * 1024 * 1024) {
      setFileErr('Max 90 MB');
      return;
    }
    const { words } = await countMutation.mutateAsync(f); // your existing hook
    const total = +(words * draft.pricePerWord).toFixed(2);
    set({ file: f, words, total });
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <Stepper />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[1fr_360px]">
        {/* LEFT COLUMN */}
        <section className="rounded-lg border border-slate-200 bg-white p-6">
          <h1 className="mb-6 text-[22px] font-semibold text-slate-900">
            Choose Your Perfect Translation or Proofreading Solution
          </h1>

          <p className="mb-3 text-[13px] font-medium text-slate-700">
            Please Choose the Service That Suits Your Project
          </p>

          {/* service tiles */}
          <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-4">
            {serviceOptions.map((opt) => {
              const isActive =
                draft.service === (opt.key === 'machine' ? 'machine' : 'human') &&
                (opt.key === 'machine' || opt.key === 'human');

              return (
                <button
                  key={opt.key}
                  type="button"
                  disabled={!!opt.disabled}
                  onClick={() =>
                    set({
                      service: opt.key === 'machine' ? 'machine' : 'human',
                      pricePerWord: opt.key === 'machine' ? 0.01 : 0.07,
                    })
                  }
                  className={[
                    'rounded-lg border p-4 text-left transition',
                    isActive
                      ? 'border-blue-600 ring-1 ring-blue-600'
                      : 'border-slate-300 hover:border-slate-400',
                    opt.disabled ? 'cursor-not-allowed opacity-50' : '',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between">
                    <div className="font-medium text-slate-900">{opt.title}</div>
                    {isActive && (
                      <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-white">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[13px] leading-snug text-slate-600">{opt.desc}</p>
                  <p className="mt-3 text-[12px] text-slate-500">{opt.hint}</p>
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
                <option value="zh">Chinese (Simplified)</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="mt-6 md:mt-0">
              <label className="mb-1 block text-sm font-medium text-slate-700">&nbsp;</label>
              <select
                value={draft.to[0]}
                onChange={(e) => set({ to: [e.target.value] })}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              >
                <option value="en">English</option>
                <option value="zh">Chinese (Simplified)</option>
              </select>
            </div>
          </div>

          {/* file/text selector (we keep file active) */}
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

          {/* file drop/basic input */}
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

            {/* preview row */}
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
              odt, rtf, ppt(x), .json, xliff, csv, po, indd, idml, ai, fig. The translated file will
              be sent to your email. Cost of translation may take a while so we save your file to
              notify a total price by email as soon as an estimation process is finished.
              <br />
              <br />
              Use <strong>[[[square brackets]]]</strong> to exclude text from translation. Use{' '}
              <strong>{'{hide} text {/hide}'}</strong> to exclude and hide the translation.
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
            <Row label="From" value={draft.from === 'zh' ? 'Chinese (Simplified)' : 'English'} />
            <Row label="To" value={draft.to[0] === 'en' ? 'English' : 'Chinese (Simplified)'} />
            <Row label="Order’s word count" value={`${draft.words || 0} words`} />
            <Row label="Available words" value="0" />
            <Row label="Active plan" value="START" />
            <Row label="Price per word" value={`$${draft.pricePerWord.toFixed(2)}`} />

            <p className="mt-4 text-[12px] leading-relaxed text-slate-700">
              Real-time quotes are not available for this file. Click 'Get a quote' for an offer by
              email in 30 minutes.
            </p>

            <button
              disabled={!draft.file || !draft.words}
              onClick={() => {
                setStep(1);
                router.push('/order/payment');
              }}
              className="mt-3 w-full rounded-md bg-[#173593] px-4 py-2 font-semibold text-white disabled:opacity-60"
            >
              Order
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
