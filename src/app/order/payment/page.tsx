import { Suspense } from "react";
import PaymentClient from "./PaymentClient";

export const dynamic = "force-dynamic";

type SP = { token?: string | string[] };

export default async function PaymentPage({
  searchParams,
}: {
  searchParams?: Promise<SP>;
}) {
  const sp = (await searchParams) ?? {};
  const raw = sp.token;
  const token = Array.isArray(raw) ? raw[0] : raw ?? "";

  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#f4f7fb] p-6">Loading payment…</main>
      }
    >
      <PaymentClient token={token} />
    </Suspense>
  );
}
