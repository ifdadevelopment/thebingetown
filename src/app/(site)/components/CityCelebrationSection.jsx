"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cities } from "../data/services";

export default function CityCelebrationSection() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: dir * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Book Private Celebration near you
        </h2>
        <div className="relative md:hidden">
          <button
            onClick={() => slide(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-black text-white p-2 rounded-full"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => slide(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-black text-white p-2 rounded-full"
          >
            <ChevronRight size={18} />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth"
          >
            {cities.map((city, index) => (
              <CityCard key={index} city={city} />
            ))}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6">
          {cities.map((city, index) => (
            <CityCard key={index} city={city} />
          ))}
        </div>

      </div>
    </section>
  );
}

function CityCard({ city }) {
  return (
    <div className="min-w-[80%] md:min-w-0 bg-white rounded-xl shadow-lg overflow-hidden
      transition-transform hover:scale-105 duration-300"
    >
      <Link href={city.href} title={city.title}>
        <div className="flex justify-center px-4 py-5">
          <Image
            src={city.image}
            alt={`The Binge Town Private Theatres in ${city.name}`}
            title={`The Binge Town Private Theatres in ${city.name}`}
            width={120}
            height={120}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="pb-4">
          <h3 className="text-lg font-semibold text-center">
            {city.name}
          </h3>
        </div>
      </Link>
    </div>
  );
}
