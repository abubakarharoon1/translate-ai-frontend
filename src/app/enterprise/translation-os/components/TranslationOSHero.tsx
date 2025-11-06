import React from "react";

export default function TranslationOSHero() {
  return (
    <section className="relative overflow-hidden py-0" style={{ height: "auto", padding: "0" }}>
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/0 z-10"></div> {/* Overlay with 0% opacity */}

      <div className="relative z-20 max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 lg:pb-0">
        <div className="flex flex-col items-center text-center py-12 sm:py-24 lg:pb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black max-w-3xl">
            Govern AI-first localization
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-black max-w-4xl">
            TranslationOS equips your team with a comprehensive AI-first technology stack, advanced
            data curation, localization intelligence, and direct access to a vast network of language
            professionals, enabling you to overcome traditional localization constraints.
          </p>

          <div className="mt-12 w-full max-w-[900px] mx-auto">
            <img
              src="/analytics-hero.png"
              alt="Analytics dashboard screenshot"
              loading="eager"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
