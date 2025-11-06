'use client';
import { useOrderFlow } from '@/hooks/useOrderFlow';
import { Stepper } from '../components/Stepper';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PaymentService } from '@/services/payment.service';

export default function PaymentPage() {
  const router = useRouter();
  const { draft, setStep } = useOrderFlow();
  const [paying, setPaying] = useState(false);
  const canPay = draft.total > 0;

  async function pay() {
    setPaying(true);
    try {
      // call your backend later (Stripe/PayPal/…)
     await PaymentService.checkout({
  amount: Math.round(draft.total * 100),
  currency: 'usd',
  orderDraft: draft,
});

      router.push('/order/finish');
    } catch (e: any) {
      alert(e.message || 'Payment failed');
    } finally {
      setPaying(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Stepper />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-8">
        <section className="bg-white rounded-lg shadow p-6">
          <h1 className="text-xl font-semibold mb-4">Payment</h1>
          <p className="text-sm text-slate-600 mb-6">Enter your card details to proceed with the payment.</p>

          {/* Placeholder for Stripe Elements later */}
          <div className="grid gap-3 max-w-lg">
            <input className="border rounded px-3 py-2" placeholder="Name on card" />
            <div className="border rounded px-3 py-4 text-slate-500">Card Element (Stripe) goes here</div>
          </div>

          <button onClick={pay} disabled={!canPay || paying} className="mt-6 bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50">
            {paying ? 'Processing…' : 'Pay'}
          </button>
        </section>

        <aside className="bg-white rounded-lg shadow p-6 h-fit">
          <h2 className="font-semibold mb-4">My order</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Service type</span><span>{draft.service==='human'?'Human translation':'Machine translation'}</span></div>
            <div className="flex justify-between"><span>Word count</span><span>{draft.words}</span></div>
            <div className="flex justify-between"><span>Price per word</span><span>${draft.pricePerWord.toFixed(2)}</span></div>
            <div className="border-t pt-2 mt-2 flex justify-between font-semibold text-lg">
              <span>You will pay</span><span>${draft.total.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
