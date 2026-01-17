"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/app/(site)/data/services";

export default function OurServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const intervalRef = useRef(null);

  const total = services.length;

  /* ---------------- Responsive cards count ---------------- */
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  /* ---------------- Auto Slide ---------------- */
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [visibleCards]);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      slideNext();
    }, 3000);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  /* ---------------- Slide Controls ---------------- */
  const slideNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  /* ---------------- Render ---------------- */
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Our Services
        </h2>

        <div
          className="relative group overflow-hidden"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          {/* Left Arrow */}
          <button
            onClick={slidePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-black text-white rounded-full p-2 shadow
            opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={slideNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-black text-white rounded-full p-2 shadow
            opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight />
          </button>

          {/* Slider Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {services.concat(services).map((service, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-3"
              >
                <div className="relative bg-white rounded-2xl shadow-md overflow-hidden
                  transition-transform hover:scale-105 duration-300"
                >
                  {service.badge && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white
                      text-xs font-bold px-3 py-1 rounded-full z-10"
                    >
                      {service.badge}
                    </span>
                  )}

                  <div className="relative h-56 w-full">
                    <Image
                      src={service.image}
                      alt={`Service Image - ${service.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 border-t">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
