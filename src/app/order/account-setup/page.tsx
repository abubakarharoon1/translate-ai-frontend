'use client';
import { Stepper } from '../components/Stepper';
import { useEffect } from 'react';
import { useOrderFlow } from '@/hooks/useOrderFlow';

export default function AccountSetupPage() {
  const { setStep } = useOrderFlow();
  useEffect(()=>setStep(3),[setStep]);

  return (
    <main className="min-h-screen bg-slate-50">
      <Stepper />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow p-6 max-w-xl">
          <h1 className="text-xl font-semibold mb-3">Account setup</h1>
          <p className="text-slate-600 mb-4">Verify your email and set your password to manage orders and receive files.</p>
          {/* Add your existing signup / verify logic or just reuse your auth pages */}
          <a href="/auth/signup" className="bg-blue-700 text-white px-4 py-2 rounded">Create account</a>
        </div>
      </div>
    </main>
  );
}
