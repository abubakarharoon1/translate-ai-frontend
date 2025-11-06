import React from "react";

export default function TechStackSection() {
  return (
    <section className="bg-gray-100 py-16 overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl font-bold mb-4">Seamlessly integrate with any tech stack</h3>
          <p className="text-base text-gray-900">
            TranslationOS can intake content from any source. Our team is specialized in
            developing and maintaining seamless integrations with your translation and
            content management systems, repositories, SaaS applications, legacy systems, and other
            platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* TMS */}
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <h4 className="font-bold text-xl mb-4 border-b border-gray-300 pb-2">TMS</h4>
            <div className="flex flex-col space-y-6 items-center">
              <img src="/img/translation-os/tech-stack-logo/phrase.svg" alt="Phrase" className="h-10" />
              <a href="https://lokalise.com/" target="_blank" rel="noopener noreferrer">
                <img src="/img/translation-os/tech-stack-logo/lokalise.svg" alt="Lokalise" className="h-10" />
              </a>
              <img src="/img/translation-os/tech-stack-logo/crowdin.svg" alt="Crowdin" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/xtm.svg" alt="XTM" className="h-10" />
            </div>
          </div>

          {/* Software */}
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <h4 className="font-bold text-xl mb-4 border-b border-gray-300 pb-2">Software</h4>
            <div className="flex flex-col space-y-6 items-center">
              <img src="/img/translation-os/tech-stack-logo/github.svg" alt="Github" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/gitlab.svg" alt="Gitlab" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/lingoport.svg" alt="Lingoport" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/figma.svg" alt="Figma" className="h-10" />
            </div>
          </div>

          {/* CMS */}
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <h4 className="font-bold text-xl mb-4 border-b border-gray-300 pb-2">CMS</h4>
            <div className="flex flex-col space-y-6 items-center">
              <img src="/img/translation-os/tech-stack-logo/adobe.svg" alt="Adobe" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/contentful.svg" alt="Contentful" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/contentstack.svg" alt="Contentstack" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/sanity.svg" alt="Sanity" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/wordpress.svg" alt="WordPress" className="h-10" />
            </div>
          </div>

          {/* MarTech */}
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <h4 className="font-bold text-xl mb-4 border-b border-gray-300 pb-2">MarTech</h4>
            <div className="flex flex-col space-y-6 items-center">
              <img src="/img/translation-os/tech-stack-logo/salesforce.svg" alt="Salesforce" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/iterable.svg" alt="Iterable" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/marketo.svg" alt="Marketo" className="h-10" />
              <img src="/img/translation-os/tech-stack-logo/zendesk.svg" alt="Zendesk" className="h-10" />
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <a
            href="https://translated.notion.site/TranslationOS-connector-user-guides-01917c171d8246f5b773a7d0bbab0fb5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Learn more about connectors
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <img
              src="/img/translation-os/map.png"
              alt="Map illustration"
              className="w-full rounded-xl shadow-lg"
              loading="eager"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6">Custom connectors for every need</h3>
            <p className="text-base text-gray-900">
              We customize our standard connectors to ensure seamless localization, aligning
              them with each customer’s unique technology needs so that in-house systems don’t
              create barriers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
