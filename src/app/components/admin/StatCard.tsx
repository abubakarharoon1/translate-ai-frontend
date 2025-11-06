// src/app/component/admin/StatCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function StatCard({
  title,
  value,
  hint,
}: { title: string; value: string | number; hint?: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-[#0a1f4f]">{value}</div>
        {hint && <div className="text-xs text-gray-400 mt-1">{hint}</div>}
      </CardContent>
    </Card>
  );
}
