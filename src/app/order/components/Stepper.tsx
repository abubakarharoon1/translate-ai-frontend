'use client';

import Link from 'next/link';

type StepKey = 'details' | 'payment' | 'finish' | 'account';
type Step = { key: StepKey; label: string; href?: string };

const BASE_STEPS: Step[] = [
  { key: 'details', label: 'Order details', href: '/order' },
  { key: 'payment', label: 'Payment', href: '/order/payment' },
  { key: 'finish',  label: 'Finish', href: '/order/finish' },
  
  { key: 'account', label: 'Account setup', href: '/order/account-setup' },
];

export type StepperProps = {
  /** 1..4 (defaults to 1) */
  current?: number;
  /** show links for previous steps; future steps stay inert */
  linkifyPast?: boolean;
  /** if logged in, hide 'account' step */
  loggedIn?: boolean;
};

export function Stepper({ current = 1, linkifyPast = true, loggedIn = false }: StepperProps) {
const STEPS = loggedIn
  ? BASE_STEPS.filter((s) => s.key !== 'account')
  : BASE_STEPS;


  return (
    <div className="w-full bg-[#f4f7fb] border-b border-slate-200/60">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="relative py-3 md:py-4">
          {/* dotted rail */}
          <div
            aria-hidden
            className="
              absolute left-0 right-0 top-1/2 -translate-y-1/2
              h-[2px]
              bg-[radial-gradient(circle,_theme(colors.slate.300)_1px,_transparent_1.5px)]
              bg-[length:10px_2px] bg-repeat-x
            "
          />

          <ol className="relative z-[1] flex items-center gap-8">
            {STEPS.map((s, i) => {
              const index = i + 1;
              const isActive = index === current;
              const isDone = index < current;

              const dot = isDone ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <span className="text-[11px] font-semibold leading-none">{index}</span>
              );

              const pillClass = isActive
                ? 'bg-blue-600 text-white ring-blue-600'
                : isDone
                ? 'bg-white text-blue-600 ring-blue-200'
                : 'bg-white text-slate-400 ring-slate-200';

              const labelClass = isActive
                ? 'text-blue-700 font-medium'
                : isDone
                ? 'text-slate-700'
                : 'text-slate-400';

              const content = (
                <div className="flex items-center">
                  <div className={`mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ${pillClass}`}>
                    {dot}
                  </div>
                  <span className={`text-sm ${labelClass}`}>{s.label}</span>
                </div>
              );

              // allow links only to past steps
              if (linkifyPast && isDone && s.href) {
                return (
                  <li key={s.key} className="relative bg-white/0">
                    <Link href={s.href} className="hover:opacity-90">
                      {content}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={s.key} className="relative bg-white/0">
                  {content}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
