import React from "react";

export function WhyTranslate() {
  return (
    <div className=" bg-gray-100">
    <section className="py-36 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-16">Why Translated?
</h2>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Guaranteed Quality */}
        <div className="flex flex-col items-center max-w-xs mx-auto px-5">
          <svg
            className="w-16 h-16 mb-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 21H5a2 2 0 01-2-2v-4" />
            <path d="M15 3H9v18h6v-8" />
            <path d="M16 21h2a2 2 0 002-2v-5" />
            <path d="M15 3h6a2 2 0 012 2v4" />
            <path d="M12 12l-3 3m0 0l-3-3m3 3V3" />
          </svg>
          <h3 className="text-xl font-semibold mb-3">Guaranteed Quality</h3>
          <p className="text-base mb-4 max-w-[300px]">
            We support the world’s best translators with advanced{" "}
            <a href="#" className="text-blue-600 hover:underline">
              quality assurance processes
            </a>
            . And that’s not all: we provide a free comprehensive translation
            review if you happen to be unsatisfied.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Read our terms
          </a>
        </div>

        {/* On-Time Delivery */}
        <div className="flex flex-col items-center max-w-xs mx-auto px-5">
          <svg
            className="w-16 h-16 mb-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
            <path d="M8 14l-3-3" />
          </svg>
          <h3 className="text-xl font-semibold mb-3">On-Time Delivery</h3>
          <p className="text-base mb-4 max-w-[300px]">
            We offer the best performance levels in the industry, with an{" "}
            <a href="#" className="text-blue-600 hover:underline">
              optimized workflow
            </a>{" "}
            that guarantees over 95% of deliveries on time. Plus, in the unlikely
            event we miss a deadline, we will refund the translation up to its
            full cost.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Read our terms
          </a>
        </div>

        {/* Pay After Delivery */}
        <div className="flex flex-col items-center max-w-xs mx-auto px-5">
          <svg
            className="w-16 h-16 mb-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2" />
            <path d="M7 8H5a2 2 0 00-2 2v6a2 2 0 002 2h2" />
            <path d="M12 12v6" />
            <path d="M9 12h6" />
            <path d="M12 3v3" />
          </svg>
          <h3 className="text-xl font-semibold mb-3">Pay After Delivery</h3>
          <p className="text-base mb-4 max-w-[300px]">
            We genuinely trust our clients, which is why we have created the Pay
            After Delivery model. With Pay After Delivery, you can pay within
            five days of the translation’s delivery via credit card, bank
            transfer or Paypal.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Read our terms
          </a>
        </div>
      </div>
    </section>

</div>  );
}
