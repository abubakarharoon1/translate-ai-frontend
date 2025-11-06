"use client";

import React, { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Testimonial = {
  id: number;
  text: string;
  clientName: string;
  clientCompany: string;
  clientPhoto?: string; // Optional, add if you want images
  clientLogo?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text:
      "The Translated team has always been professional and helpful. They are quick to respond to requests for assistance and they respect the agreed deadlines.",
    clientName: "Fabio Vanek",
    clientCompany: "Italiaonline",
    clientPhoto: "/corallo.webp",
    clientLogo: "/download.svg",
  },
  {
    id: 2,
    text:
      "Translated helped Airbnb develop a new translation workflow maximizing quality, control and cost efficiencies.",
    clientName: "Salvo Giammarresi",
    clientCompany: "Airbnb",
    clientPhoto: "/corallo.webp",
    clientLogo: "/download.svg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

export const TestimonialSection: FC = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-20 px-8 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Slider */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <Slider {...settings}>
            {testimonials.map(
              ({
                id,
                text,
                clientName,
                clientCompany,
                clientPhoto,
                clientLogo,
              }) => (
                <div key={id} className="p-6">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    {clientPhoto && (
                      <Image
                        src={clientPhoto}
                        alt={`${clientName} photo`}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                      />
                    )}
                    {clientLogo && (
                      <Image
                        src={clientLogo}
                        alt={`${clientCompany} logo`}
                        width={96}
                        height={48}
                        className="object-contain"
                      />
                    )}
                    <div className="ml-4 text-left">
                      <p className="text-lg font-semibold">{clientName}</p>
                      <p className="text-gray-500 text-sm">{clientCompany}</p>
                    </div>
                  </div>
                  <p className="text-lg font-normal leading-relaxed">{text}</p>
                </div>
              )
            )}
          </Slider>
        </div>

        {/* Right: Text content */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-4xl font-extrabold mb-6">Our clients</h2>
          <p className="text-lg leading-relaxed mb-6">
            We proudly serve over 377,912 clients worldwide, including young
            innovative startups and large global enterprises from varying
            industries. We have optimized our processes to meet their unique
            needs, adapting from small, on-demand tasks to high-touch, fully
            managed solutions.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Read clients stories
          </a>
        </div>
      </section>
    </div>
  );
};
