'use client';
import { useEffect, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { Order } from '@/types/order';
import { OrderService } from '@/services/order.service';
import { isAuthenticated } from '@/lib/auth/token';

export default function MyOrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      if (!isAuthenticated()) {
        router.replace('/auth/login');
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const data = await OrderService.list();
        setOrders(data);
      } catch (err: any) {
        console.error('MyOrders – fetch error', err);
        setError(err?.message || 'Failed to load orders');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [router]);

  const hasOrders = !!orders && orders.length > 0;

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">My orders</h1>
          <p className="mt-2 text-sm text-slate-600">
            Review your translation orders, check their status, and continue any pending payments.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-16">
            <p className="text-sm text-slate-600">Loading your orders…</p>
          </div>
        )}
        {!loading && error && (
          <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && !hasOrders && (
          <section className="rounded-xl border border-slate-200 bg-white px-8 py-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              You don’t have any orders yet
            </h2>
            <p className="text-sm text-slate-600 mb-6 max-w-2xl">
              Start your first translation or proofreading order in just a few clicks. Upload your document,
              choose the service, and get an instant quote.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/order">
                <button className="bg-[#173593] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#10246a]">
                  Start a new order
                </button>
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <EmptyCard
                title="Machine translation"
                points={[
                  'Instant quotes for supported formats',
                  'Fast turnaround',
                  'Best for drafts and internal docs',
                ]}
              />
              <EmptyCard
                title="Human translation"
                points={[
                  'Professional native linguists',
                  'Specialized industries',
                  'Quality checked by experts',
                ]}
              />
              <EmptyCard
                title="Proofreading"
                points={[
                  'Native editors review your text',
                  'Improve style and clarity',
                  'Perfect for important documents',
                ]}
              />
            </div>
          </section>
        )}

        {/* Orders table */}
        {!loading && !error && hasOrders && (
          <section className="rounded-xl border border-slate-200 bg-white px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Your recent orders
              </h2>
              <Link href="/order">
                <button className="text-sm font-semibold text-[#173593] border border-[#173593] px-3 py-1.5 rounded-md hover:bg-[#173593] hover:text-white">
                  New order
                </button>
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                    <Th>ID</Th>
                    <Th>Date</Th>
                    <Th>Service</Th>
                    <Th>Languages</Th>
                    <Th className="text-right">Words</Th>
                    <Th className="text-right">Total</Th>
                    <Th>Status</Th>
                    <Th>Payment</Th>
                    <Th />
                  </tr>
                </thead>
                <tbody>
                  {orders!.map((o) => (
                    <tr
                      key={o.id}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60"
                    >
                      <Td>#{o.id}</Td>
                      <Td>
                        {new Date(o.createdAt).toLocaleString(undefined, {
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Td>
                      <Td className="capitalize">
                        {o.service === 'human' ? 'Human translation' : 'Machine translation'}
                      </Td>
                      <Td>
                        {o.from.toUpperCase()} →{' '}
                        {o.to?.map((t) => t.toUpperCase()).join(', ')}
                      </Td>
                      <Td className="text-right">{o.words}</Td>
                      <Td className="text-right font-semibold">
                        ${Number(o.total).toFixed(2)}
                      </Td>
                      <Td>
                        <StatusPill status={o.status} />
                      </Td>
                      <Td>
                        <PaymentPill paymentStatus={o.paymentStatus as any} />
                      </Td>
                      <Td className="text-right">
                        {o.paymentStatus !== 'succeeded' ? (
                          <Link
                            href={`/order/payment?token=${encodeURIComponent(o.orderToken)}`}
                            className="text-xs font-semibold text-[#173593] border border-[#173593] px-2 py-1 rounded hover:bg-[#173593] hover:text-white"
                          >
                            Complete payment
                          </Link>
                        ) : (
                          <span className="text-xs text-slate-500">Paid</span>
                        )}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

/* ---------- Small helper components ---------- */

type CellProps = {
  children?: ReactNode;
  className?: string;
};

function Th({ children, className }: CellProps) {
  return (
    <th
      className={
        'px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide ' +
        (className ?? '')
      }
    >
      {children}
    </th>
  );
}

function Td({ children, className }: CellProps) {
  return (
    <td className={'px-3 py-2 align-middle ' + (className ?? '')}>
      {children}
    </td>
  );
}

// Empty-state card
function EmptyCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
      <h3 className="text-sm font-semibold text-slate-900 mb-2">{title}</h3>
      <ul className="space-y-1 text-xs text-slate-600">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-[3px] text-sky-600">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Status pill
function StatusPill({ status }: { status: string }) {
  const normalized = status.toLowerCase();

  let cls = 'bg-slate-100 text-slate-700';
  if (normalized.includes('paid') || normalized.includes('completed')) {
    cls = 'bg-emerald-100 text-emerald-700';
  } else if (normalized.includes('pending')) {
    cls = 'bg-amber-100 text-amber-800';
  } else if (normalized.includes('canceled') || normalized.includes('failed')) {
    cls = 'bg-rose-100 text-rose-700';
  }

  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${cls}`}>
      {status}
    </span>
  );
}

// Payment status pill
function PaymentPill({ paymentStatus }: { paymentStatus: Order['paymentStatus'] }) {
  const s = paymentStatus as string;

  let label: string = s;
  let cls = 'bg-slate-100 text-slate-700';

  if (s === 'succeeded') {
    label = 'Paid';
    cls = 'bg-emerald-100 text-emerald-700';
  } else if (s === 'processing') {
    label = 'Processing';
    cls = 'bg-amber-100 text-amber-800';
  } else if (s === 'requires_payment_method' || s === 'requires_action') {
    label = 'Payment required';
    cls = 'bg-amber-100 text-amber-800';
  } else if (s === 'canceled' || s === 'failed') {
    label = 'Failed / canceled';
    cls = 'bg-rose-100 text-rose-700';
  }

  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${cls}`}>
      {label}
    </span>
  );
}