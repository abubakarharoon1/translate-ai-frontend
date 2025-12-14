// src/app/order/payment/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import type { StripeElementsOptions } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { PaymentService } from "@/services/payment.service";
import { Stepper } from "../components/Stepper";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";

// ---- SAFE STRIPE INIT -------------------------------------------------------
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey) {
  console.error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is NOT set");
}

const stripePromise: Promise<Stripe | null> | null = publishableKey
  ? loadStripe(publishableKey)
  : null;
// -----------------------------------------------------------------------------


function CheckoutForm({ clientSecret }: { clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [elementReady, setElementReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onPay(e: React.FormEvent) {
    e.preventDefault();

    if (!stripe || !elements) {
      console.warn("Stripe or Elements not ready");
      return;
    }

    if (loadError) {
      alert("Payment form failed to load. Please refresh the page.");
      return;
    }

    if (!elementReady) {
      alert("Payment form is still loading. Please wait a moment.");
      return;
    }

    setSubmitting(true);

    try {
      // (optional) validate fields first
      const { error: submitError } = await elements.submit();
      if (submitError) {
        console.error("elements.submit error", submitError);
        alert(submitError.message ?? "Payment details are not valid.");
        return;
      }

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${
            process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
          }/order/finish`,
        },
        redirect: "if_required",
      });

      const { error, paymentIntent } = result;

      if (error) {
        // ❗ Real Stripe error lives here
        console.error("confirmPayment error", error);
        alert(
          error.message ??
            "Payment failed. Please use a different card or try again.",
        );
        return;
      }

      // Success path
      if (
        paymentIntent &&
        (paymentIntent.status === "succeeded" ||
          paymentIntent.status === "processing")
      ) {
        // go to finish page
        router.push("/order/finish");
      } else {
        // unexpected but not a crash
        console.warn(
          "Unexpected payment intent status",
          paymentIntent?.status,
          paymentIntent,
        );
        router.push("/order/finish");
      }
    } catch (err: any) {
      // if confirmPayment throws instead of returning { error }
      console.error("confirmPayment threw", err);
      alert(
        err?.message ??
          "Payment failed due to a technical error. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }


  return (
    <form onSubmit={onPay} className="space-y-4">
      <PaymentElement
        onReady={() => {
          console.log("PaymentElement ready");
          setElementReady(true);
        }}
        onLoadError={(event) => {
          console.error("PaymentElement loaderror", event);
          setLoadError(event?.error?.message ?? "Failed to load payment form");
        }}
      />
      {loadError && (
        <p className="text-sm text-red-600">
          {loadError} — please check your internet connection or try again.
        </p>
      )}
      <button
        className="bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-60"
        disabled={!stripe || !elementReady || !!loadError || submitting}
      >
        {submitting ? "Processing…" : "Pay now"}
      </button>
    </form>
  );
}

export default function PaymentPage() {
  const { loggedIn } = useIsLoggedIn();            // ✅ hook INSIDE component
  const sp = useSearchParams();
  const token = sp.get("token") || "";
  const [clientSecret, setClientSecret] = useState<string>("");
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setCheckoutError("Missing order token in URL");
      return;
    }
    PaymentService.checkout({ orderToken: token, method: "card" })
      .then((res) => {
        console.log("checkout response", res);
        if (res.clientSecret) {
          setClientSecret(res.clientSecret);
        } else {
          setCheckoutError("No client secret returned from server");
        }
      })
      .catch((e: any) => {
        console.error("checkout error", e);
        setCheckoutError(e?.message ?? "Failed to start checkout");
      });
  }, [token]);

  const options = useMemo<StripeElementsOptions | undefined>(
    () =>
      clientSecret
        ? {
            clientSecret,
            appearance: { theme: "stripe" },
          }
        : undefined,
    [clientSecret]
  );

  const stripeReady = !!stripePromise;

  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <Stepper current={2} loggedIn={loggedIn} />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-xl font-semibold mb-4">Payment</h1>

        {!stripeReady && (
          <p className="text-red-600 text-sm mb-3">
            Stripe is not configured. Please set
            {" "}NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY{" "}in .env.local.
          </p>
        )}

        {checkoutError && (
          <p className="text-red-600 text-sm mb-3">{checkoutError}</p>
        )}

        {stripeReady && options && !checkoutError ? (
          <Elements stripe={stripePromise!} options={options}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        ) : (
          !checkoutError &&
          stripeReady && <p>Preparing payment…</p>
        )}
      </div>
    </main>
  );
}
