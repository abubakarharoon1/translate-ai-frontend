// src/app/admin/pricing/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { AdminService, ServiceCardAdmin } from '@/services/admin.service';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type EditableCard = {
  id?: number;
  key: 'human' | 'machine' | 'proof' | 'official';
  title: string;
  subtitle: string;
  description: string;
  pricePerWord: string;
  basePriceUSD: string;
  deliveryHours: number;
  bestSeller: boolean;
  active: boolean;
  sort: number;
  featuresText: string;       // one feature per line
  fromLanguagesText: string;  // one language code per line
  toLanguagesText: string;    // one language code per line
};

function splitLines(raw: string): string[] {
  return raw
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function toEditable(c: ServiceCardAdmin): EditableCard {
  return {
    id: c.id,
    key: c.key,
    title: c.title,
    subtitle: c.subtitle ?? '',
    description: c.description ?? '',
    pricePerWord: c.pricePerWord,
    basePriceUSD: c.basePriceUSD,
    deliveryHours: c.deliveryHours,
    bestSeller: c.bestSeller,
    active: c.active,
    sort: c.sort,
    featuresText: (c.features ?? []).join('\n'),
    fromLanguagesText: (c.fromLanguages ?? []).join('\n'),
    toLanguagesText: (c.toLanguages ?? []).join('\n'),
  };
}

function toPayload(c: EditableCard): Omit<ServiceCardAdmin, 'id'> {
  return {
    key: c.key,
    title: c.title,
    subtitle: c.subtitle || undefined,
    description: c.description || undefined,
    pricePerWord: c.pricePerWord || '0.000',
    basePriceUSD: c.basePriceUSD || '0.00',
    deliveryHours: Number.isFinite(c.deliveryHours) ? c.deliveryHours : 24,
    bestSeller: c.bestSeller,
    active: c.active,
    sort: Number.isFinite(c.sort) ? c.sort : 0,
    features: splitLines(c.featuresText),
    fromLanguages: splitLines(c.fromLanguagesText),
    toLanguages: splitLines(c.toLanguagesText),
  };
}

export default function PricingPage() {
  const [cards, setCards] = useState<EditableCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await AdminService.listServiceCards();
        if (res.length) {
          setCards(res.map(toEditable));
        } else {
          
          setCards([
            {
              key: 'human',
              title: 'Human translation',
              subtitle: 'Professional human translators',
              description: '',
              pricePerWord: '0.070',
              basePriceUSD: '0.00',
              deliveryHours: 24,
              bestSeller: true,
              active: true,
              sort: 1,
              featuresText: 'Native-speaking translators\nQuality checked by a reviewer',
              fromLanguagesText: 'en\nzh',
              toLanguagesText: 'en\nzh',
            },
            {
              key: 'machine',
              title: 'Machine translation',
              subtitle: 'Fast & budget friendly',
              description: '',
              pricePerWord: '0.020',
              basePriceUSD: '0.00',
              deliveryHours: 1,
              bestSeller: false,
              active: true,
              sort: 2,
              featuresText: 'Instant delivery\nGood for internal content',
              fromLanguagesText: 'en\nzh',
              toLanguagesText: 'en\nzh',
            },
          ]);
        }
      } catch (e) {
        console.error(e);
        setCards([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const addCard = () => {
    setCards((prev) => [
      ...prev,
      {
        key: 'human',
        title: 'New service',
        subtitle: '',
        description: '',
        pricePerWord: '0.070',
        basePriceUSD: '0.00',
        deliveryHours: 24,
        bestSeller: false,
        active: true,
        sort: prev.length + 1,
        featuresText: '',
        fromLanguagesText: '',
        toLanguagesText: '',
      },
    ]);
  };

  const removeCard = (idx: number) => {
    const card = cards[idx];
    setCards((prev) => prev.filter((_, i) => i !== idx));
    if (card.id) {
      void AdminService.deleteServiceCard(card.id).catch((e) =>
        console.error('Failed to delete card', e),
      );
    }
  };

  const saveAll = async () => {
    setSaving(true);
    try {
      const updated: ServiceCardAdmin[] = [];

      for (const card of cards) {
        const payload = toPayload(card);

        if (card.id) {
          const res = await AdminService.updateServiceCard(card.id, payload);
          updated.push(res);
        } else {
          const res = await AdminService.createServiceCard(payload);
          updated.push(res);
        }
      }

      setCards(updated.map(toEditable));
      alert('Service cards saved.');
    } catch (e: any) {
      console.error(e);
      alert(e?.message || 'Failed to save service cards');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-bold">Service cards</h1>
        <Button type="button" onClick={addCard} variant="outline">
          + Add service
        </Button>
      </div>

      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((c, idx) => (
            <Card key={c.id ?? `new-${idx}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base text-gray-700">
                  {c.title || 'New service'}
                </CardTitle>
                <button
                  type="button"
                  className="text-xs text-red-500 hover:underline"
                  onClick={() => removeCard(idx)}
                >
                  Remove
                </button>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* key */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Key</label>
                  <select
                    className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                    value={c.key}
                    onChange={(e) => {
                      const value = e.target.value as EditableCard['key'];
                      setCards((prev) =>
                        prev.map((x, i) => (i === idx ? { ...x, key: value } : x)),
                      );
                    }}
                  >
                    <option value="human">human</option>
                    <option value="machine">machine</option>
                    <option value="proof">proof</option>
                    <option value="official">official</option>
                  </select>
                </div>

                {/* title */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Title</label>
                  <Input
                    value={c.title}
                    onChange={(e) =>
                      setCards((prev) =>
                        prev.map((x, i) => (i === idx ? { ...x, title: e.target.value } : x)),
                      )
                    }
                  />
                </div>

                {/* subtitle */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Subtitle</label>
                  <Input
                    value={c.subtitle}
                    onChange={(e) =>
                      setCards((prev) =>
                        prev.map((x, i) => (i === idx ? { ...x, subtitle: e.target.value } : x)),
                      )
                    }
                  />
                </div>

                {/* description */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Description</label>
                  <textarea
                    className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                    rows={3}
                    value={c.description}
                    onChange={(e) =>
                      setCards((prev) =>
                        prev.map((x, i) => (i === idx ? { ...x, description: e.target.value } : x)),
                      )
                    }
                  />
                </div>

                {/* price and base price */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">
                      Price per word (USD)
                    </label>
                    <Input
                      type="number"
                      step="0.001"
                      value={c.pricePerWord}
                      onChange={(e) =>
                        setCards((prev) =>
                          prev.map((x, i) =>
                            i === idx ? { ...x, pricePerWord: e.target.value } : x,
                          ),
                        )
                      }
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Base price (USD)</label>
                    <Input
                      type="number"
                      step="0.01"
                      value={c.basePriceUSD}
                      onChange={(e) =>
                        setCards((prev) =>
                          prev.map((x, i) =>
                            i === idx ? { ...x, basePriceUSD: e.target.value } : x,
                          ),
                        )
                      }
                    />
                  </div>
                </div>

                {/* delivery, sort */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">
                      Delivery (hours)
                    </label>
                    <Input
                      type="number"
                      value={c.deliveryHours}
                      onChange={(e) =>
                        setCards((prev) =>
                          prev.map((x, i) =>
                            i === idx ? { ...x, deliveryHours: Number(e.target.value) } : x,
                          ),
                        )
                      }
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">Sort order</label>
                    <Input
                      type="number"
                      value={c.sort}
                      onChange={(e) =>
                        setCards((prev) =>
                          prev.map((x, i) =>
                            i === idx ? { ...x, sort: Number(e.target.value) } : x,
                          ),
                        )
                      }
                    />
                  </div>
                </div>

                {/* flags */}
                <div className="flex items-center gap-4 pt-1 text-xs">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={c.bestSeller}
                      onChange={(e) =>
                        setCards((prev) =>
                          prev.map((x, i) =>
                            i === idx ? { ...x, bestSeller: e.target.checked } : x,
                          ),
                        )
                      }
                    />
                    Best seller
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={c.active}
                      onChange={(e) =>
                        setCards((prev) =>
                          prev.map((x, i) =>
                            i === idx ? { ...x, active: e.target.checked } : x,
                          ),
                        )
                      }
                    />
                    Active
                  </label>
                </div>

                {/* features */}
                <div className="space-y-1 pt-2">
                  <label className="text-xs font-medium text-gray-600">
                    Features (one per line)
                  </label>
                  <textarea
                    className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                    rows={3}
                    value={c.featuresText}
                    onChange={(e) =>
                      setCards((prev) =>
                        prev.map((x, i) =>
                          i === idx ? { ...x, featuresText: e.target.value } : x,
                        ),
                      )
                    }
                  />
                </div>

                {/* languages */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">
                      From languages (codes, one per line)
                    </label>
                    <textarea
                      className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                      rows={3}
                      value={c.fromLanguagesText}
                      onChange={(e) =>
                        setCards((prev) =>
                          prev.map((x, i) =>
                            i === idx ? { ...x, fromLanguagesText: e.target.value } : x,
                          ),
                        )
                      }
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-600">
                      To languages (codes, one per line)
                    </label>
                    <textarea
                      className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                      rows={3}
                      value={c.toLanguagesText}
                      onChange={(e) =>
                        setCards((prev) =>
                          prev.map((x, i) =>
                            i === idx ? { ...x, toLanguagesText: e.target.value } : x,
                          ),
                        )
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Button onClick={saveAll} disabled={saving} className="bg-[#0a1f4f]">
        {saving ? 'Saving…' : 'Save all changes'}
      </Button>
    </div>
  );
}
