"use client";

import { useRef } from "react";
import { testimonials } from "@/app/(site)/data/services";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

const TestimonialCard = ({ item }) => (
  <div className="w-[280px] sm:w-[320px] bg-white rounded-2xl p-6 shadow-sm mx-3 shrink-0">
    <StarRating rating={item.rating} />

    <h3 className="text-lg font-semibold text-gray-900 mt-3">
      {item.heading}
    </h3>

    <p className="text-gray-600 mt-2 text-sm flex-grow">
      {item.review}
    </p>

    <div className="mt-6">
      <p className="text-sm font-medium text-gray-900">{item.name}</p>
      <p className="text-xs text-gray-500">{item.role}</p>
    </div>
  </div>
);

export default function TestimonialSection() {
  const trackRef = useRef(null);

  const slide = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.style.animationPlayState = "paused";

    const current = getComputedStyle(trackRef.current)
      .transform.match(/-?\d+\.?\d*/g);

    const currentX = current ? parseFloat(current[4]) : 0;
    const moveBy = dir * 320;

    trackRef.current.style.transform = `translateX(${currentX + moveBy}px)`;
    setTimeout(() => {
      trackRef.current.style.animationPlayState = "running";
    }, 300);
  };

  return (
    <section className="py-16 max-w-6xl mx-auto px-4 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 font-semibold mt-2">
          More than 50,000 reviews on Google with 4.9 rating!
        </p>
      </div>

      <div className="relative group overflow-hidden">
        <button
          onClick={() => slide(1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10
          bg-white shadow-md rounded-full p-2 opacity-0
          group-hover:opacity-100 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => slide(-1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
          bg-white shadow-md rounded-full p-2 opacity-0
          group-hover:opacity-100 transition"
        >
          <ChevronRight />
        </button>
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max infinite-slider"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
