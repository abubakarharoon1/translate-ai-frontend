import React from "react";
import Image from "next/image";

export function Columnthree() {
  return (
    <section className="py-36 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-[40px] font-bold mb-12">Our offer</h2>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Professional Translation */}
        <div className="flex flex-col p-[20px] items-center max-w-[353px] mx-auto">
          <Image
            src="/professional_translation.svg"
            alt="Professional Translation Icon"
            width={64}   // 16 * 4 (w-16 in Tailwind is 4rem = 64px)
            height={64}
            className="mb-6"
          />
          <h3 className="text-[24px] font-semibold mb-4">Professional Translation</h3>
          <p className="text-[16px] mb-4">
            The easy and fast way to professionally translate documents, manuals,
            websites, software and more, according to your schedule and
            requirements, in 233 languages and 40 areas of expertise.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Instant quote
          </a>
        </div>

        {/* Enterprise Solutions */}
        <div className="flex flex-col p-[20px] items-center max-w-[353px] mx-auto">
          <Image
            src="/enterprise_solutions.svg"
            alt="Enterprise Solutions Icon"
            width={64}
            height={64}
            className="mb-6"
          />
          <h3 className="text-[24px] font-semibold mb-4">Enterprise Solutions</h3>
          <p className="text-[16px] mb-4">
            From high-touch adaptable localization solutions to large-volume
            automated transactional services, we offer a wide range of fully
            managed translation services.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Learn more
          </a>
        </div>

        {/* Developers&apos; Tools */}
        <div className="flex flex-col p-[20px] items-center max-w-[353px] mx-auto">
          <Image
            src="/developers_tools.svg"
            alt="Developers' Tools Icon"
            width={64}
            height={64}
            className="mb-6"
          />
          <h3 className="text-[24px] font-semibold mb-4">Developers&apos; Tools</h3>
          <p className="text-[16px] mb-4">
            The most sophisticated, yet simple to use, translation APIs for
            continuous localization, content extraction from 71 file formats,
            neural adaptive machine translation, and more.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
