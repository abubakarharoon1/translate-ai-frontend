import React, { FC } from "react";
import Link from "next/link";

export const LatestNewsSection: FC = () => {
  const newsItems = [
    {
      title: "Remarkable Success for Translated 9 at Pacific Cup 2024 with a Crew from the Localization and Technology Communities",
      description:
        "Our sailboat crew demonstrated excellence and resilience, securing first place in their category and fourth overall in a challenging 2,000-nautical-mile race from San Francisco to Hawaii.",
      link: "/news/pacific-cup-2024",
      linkText: "Read the news",
    },
    {
      title:
        "Announcing Imminent's 2024 Research Report: “Symbiotic Connections”",
      description:
        "This year's report from our research center explores the symbiotic relationship between humans and machines, focusing on cognitive processes and language and how machines can augment human capabilities. This exploration includes localization activities, technological advances, and studies of cognitive function, highlighting the challenges and opportunities of designing socio-technical systems.",
      link: "/news/symbiotic-connections",
      linkText: "Read the news",
    },
    {
      title:
        "New Research Confirms ModernMT Outperforms Leading MT and GenAI Solutions for Enterprise Translations",
      description:
        "An independent study led by Achim Ruopp, founder of Polyglot Technology, has demonstrated how ModernMT's adaptive MT solution can outperform major publicly available MT systems, including Deepl and Google Translate, and even state-of-the-art GenAI, in real-use cases.",
      link: "/news/modernmt-research",
      linkText: "Read the news",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-8 py-16">
      <div className="flex flex-col md:flex-row -mx-4">
        {/* Left Column */}
        <div className="w-full md:w-4/12 p-4">
          <h2 className="text-4xl font-bold mb-8">Latest News</h2>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-8/12 p-4 space-y-10 text-black">
          {newsItems.map(({ title, description, link, linkText }, idx) => (
            <article key={idx}>
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="mb-2 leading-relaxed">{description}</p>
              <Link href={link} className="text-blue-600 hover:underline">
                {linkText}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
