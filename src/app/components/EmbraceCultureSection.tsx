import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export const EmbraceCultureSection: FC = () => {
  return (
    <section className="overflow-visible bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex flex-wrap md:flex-nowrap items-center md:justify-center md:space-x-6 lg:space-x-20">
          {/* Image Column */}
          <div className="w-full md:w-1/2 relative h-auto" style={{ minHeight: '300px' }}>
            <Image
              src="/image.png"
              alt="Embrace our culture illustration"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Spacer on small screens */}
          <div className="w-full md:w-0 md:flex-shrink-0" />

          {/* Text Column */}
          <div className="w-full md:w-5/12 mt-8 md:mt-0">
            <h3 className="text-[40px] font-bold mb-4">Embrace our culture</h3>
            <p className="mb-6 text-base text-gray-900 max-w-prose leading-relaxed">
              We pride ourselves in paying our translators fairly and providing a
              working environment that is collaborative, fun, and open to everyone: a
              culture that inspires talents to do great things for you.
            </p>
            <Link
              href="/about-us"
              className="text-blue-600 hover:underline text-[18px] font-medium"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
