import React, { FC } from "react";
import Link from "next/link";

export const InnovationSection: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-26 flex flex-col md:flex-row items-center gap-12">
      {/* Video */}
      <div className="w-full md:w-1/2 max-w-lg">
        <video
          controls
          className="w-full rounded-md shadow-lg"
          preload="metadata"
          poster="/1f7f3c1d-2ab9-4916-a4e6-5bf5d9e65da0.png" // your uploaded image as poster
        >
          <source src="/video.mp4" type="video/mp4" />
          Sorry, your browser does not support embedded videos.
        </video>
        <p className="mt-3 text-sm text-gray-600">
          <Link href="https://example.com/original-presentation-fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Original presentation in French
          </Link>
          . Above in English by Lara.
        </p>
      </div>

      {/* Text content */}
      <div className="w-full md:w-1/2 max-w-xl text-left">
        <h2 className="text-3xl font-extrabold mb-6 leading-tight">
          Discover our latest innovations in AI for translation
        </h2>
        <p className="text-lg mb-6 text-gray-800">
          During our latest event, we introduced{" "}
          <Link href="https://example.com/lara" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Lara
          </Link>
          , the world's best translation AI, along with new tools to support translators, content creators, and companies with their localization needs.
        </p>
        <Link href="https://example.com/see-what-we-presented" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
          See What We Presented
        </Link>
      </div>
    </section>
  );
};
