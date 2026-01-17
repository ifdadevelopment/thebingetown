"use client";

import { useState, useEffect, useRef } from "react";
import { ServiceObjectives } from "../data/services";

const ServiceObjective = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  const intervalRef = useRef(null);
  const total = ServiceObjectives.length;
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev + 1) % total);
      }
    }, 3500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, total]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      className="service-section bg-cover bg-center md:py-16 py-6 font-sans"
      style={{ backgroundImage: "url('/about/service-bg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-4 overflow-hidden">
        <div className="text-start mb-12">
          <span className="md:text-2xl text-md font-semibold text-gray-600">
            Services We Offer
          </span>
          <h2 className="md:text-4xl text-3xl font-bold global-color mt-2">
            Objectives
          </h2>
          <p className="global-secondary-color text-[13px] md:text-lg mt-4 font-medium">
            At GS Refrigeration Enterprises, our core objectives guide our strategic direction and day-to-day operations.
          </p>
        </div>
        <div
          className="relative group py-4"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {ServiceObjectives.map((service, index) => (
              <div
                key={service.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div
                  className={`bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 h-[250px]
                  ${
                    index === currentIndex
                      ? "scale-100 z-10"
                      : "scale-95 opacity-80"
                  }`}
                >
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h4 className="text-md font-bold mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-[12px] font-semibold">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black text-xl md:text-3xl md:w-10 md:h-10 h-8 w-8 rounded-full flex items-center justify-center shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-black text-xl md:text-3xl md:w-10 md:h-10 h-8 w-8 rounded-full flex items-center justify-center shadow-lg"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceObjective;
