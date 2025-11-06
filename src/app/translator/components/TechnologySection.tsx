import React from "react";

export const TechnologySection = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-8 py-16">
      <div className="flex flex-wrap -mx-4">
        {/* Left Column */}
        <div className="w-full md:w-5/12 px-4 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-[40px] font-extrabold leading-tight mb-6">
            Our technology is <br /> yours to enjoy
          </h2>
          <p className="text-base md:text-lg text-gray-900 max-w-md leading-relaxed">
            We believe humans and technology are stronger together. That is why we
            design technologies and make them available to everyone, either for free or
            open source.
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-7/12 px-4 space-y-8">
          {/* Item */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-3">
              <img src="/matecat.png" alt="Matecat" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Matecat</h3>
              <p className="text-sm text-gray-900 mb-1">
                The most advanced CAT tool for content reuse and collaboration. Matecat
                combines web-scale collaborative TMs and Adaptive Neural Machine
                Translation to suggest matches, thereby minimizing your effort. All for
                free.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Translate with Matecat
              </a>
            </div>
          </div>

          {/* Item */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-3">
              <img src="/matecat.png" alt="Matesub" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Matesub</h3>
              <p className="text-sm text-gray-900 mb-1">
                Matesub is Translated’s proprietary subtitling web tool that provides
                suggestions during the transcription and translation process. It combines
                state-of-the-art AI with a powerful editor to let you create higher
                quality subtitles, way faster.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Try Matesub
              </a>
            </div>
          </div>

          {/* Item */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-3">
              <img src="/matecat.png" alt="ModernMT" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                ModernMT - the first Adaptive Neural MT
              </h3>
              <p className="text-sm text-gray-900 mb-1">
                ModernMT is the the first machine translation technology designed
                specifically for professional translators. It learns your style from your
                TMs and uses context for disambiguation, so you don’t have to fix the
                same error over and over again.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Get license
              </a>{" "}
              or{" "}
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Get source code
              </a>
            </div>
          </div>

          {/* Item */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-3">
              <img src="/matecat.png" alt="MyMemory" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">MyMemory for SDL Trados</h3>
              <p className="text-sm text-gray-900 mb-1">
                Collaborative web-scale Translation Memory with over 40 billion words of
                professional translations, created collecting TMs from the European Union
                and United Nations, and aligning the best domain-specific multilingual
                websites.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Get plugin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
