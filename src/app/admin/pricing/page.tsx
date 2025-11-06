// src/app/admin/pricing/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { AdminService } from '@/services/admin.service';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Plan = { id: string; name: string; pricePerWord: number; description?: string };

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await AdminService.getPricing();
        setPlans(res);
      } catch {
        setPlans([
          { id: 'basic', name: 'Basic', pricePerWord: 0.060, description: 'Good quality' },
          { id: 'pro', name: 'Professional', pricePerWord: 0.120, description: 'Human-reviewed' },
          { id: 'premium', name: 'Premium', pricePerWord: 0.180, description: 'Expert linguists' },
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const save = async () => {
    setSaving(true);
    try {
      await AdminService.updatePricing(plans.map((p) => ({ id: p.id, pricePerWord: p.pricePerWord })));
      alert('Pricing updated!');
    } catch (e: any) {
      alert(e?.message || 'Failed to update pricing');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Pricing</h1>
      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {plans.map((p, i) => (
            <Card key={p.id}>
              <CardHeader>
                <CardTitle className="text-gray-600">{p.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#0a1f4f]">
                  ${p.pricePerWord.toFixed(3)} <span className="text-sm text-gray-400">/ word</span>
                </div>
                {p.description && <div className="text-xs text-gray-500 mt-2">{p.description}</div>}
                <div className="mt-4 space-y-2">
                  <label className="text-sm text-gray-600">Price per word</label>
                  <Input
                    type="number"
                    step="0.001"
                    value={p.pricePerWord}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setPlans((prev) => prev.map((x, idx) => (idx === i ? { ...x, pricePerWord: v } : x)));
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Button onClick={save} disabled={saving} className="bg-[#0a1f4f]">
        {saving ? 'Saving…' : 'Save changes'}
      </Button>
    </div>
  );
}
