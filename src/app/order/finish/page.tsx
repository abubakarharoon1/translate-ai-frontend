'use client';
import { Stepper } from '../components/Stepper';
import { useEffect } from 'react';
import { useOrderFlow } from '@/hooks/useOrderFlow';
import Link from 'next/link';

export default function FinishPage() {
  const { setStep } = useOrderFlow();
  useEffect(()=>setStep(2),[setStep]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Stepper />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-6 max-w-xl">
          <h1 className="text-xl font-semibold mb-2">Thank you!</h1>
          <p className="text-slate-600">Your order has been received. We’ll email you updates as it progresses.</p>
          <Link href="/order/account-setup" className="inline-block mt-6 bg-blue-700 text-white px-4 py-2 rounded">Continue to account setup</Link>
        </div>
      </div>
    </main>
  );
}
