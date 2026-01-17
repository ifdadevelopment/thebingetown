"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { points } from "../data/services";

const slides = [
  "/why/1.png",
  "/why/2.png",
  "/why/3.png",
  "/why/4.png",
  "/why/5.png",
];

export default function WhyCelebrate({onBookNow}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); 

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center md:mb-12 mb-4">
          <h2 className="text-lg md:text-4xl font-bold mb-2">
            Why Celebrate at{" "}
            <span className="text-[rgb(52,38,92)]">The Binge Town?</span>
          </h2>
          <p className="text-gray-600 text-xs md:text-base font-semibold">
            Unforgettable surprises with stunning decorations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <ul className="space-y-4 text-sm md:text-base text-gray-700">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 font-medium">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[rgb(52,38,92)] flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900 font-bold">
                      {p.title}
                    </strong>{" "}
                    – {p.text}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/">
              <button  onClick={onBookNow} className="mt-6 w-full px-8 py-3 rounded-lg text-white font-semibold bg-[rgb(52,38,92)] hover:opacity-90 transition">
                Book Now
              </button>
            </Link>
          </div>
          <div
            className="order-1 md:order-2 relative group"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative h-[260px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={slides[index]}
                alt={`Why Choose Us Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <button
              onClick={prev}
              className="absolute top-1/2 left-4 -translate-y-1/2 
              bg-black/60 text-white p-2 rounded-full
              opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-4 -translate-y-1/2 
              bg-black/60 text-white p-2 rounded-full
              opacity-0 group-hover:opacity-100 transition"
            >
              <ChevronRight size={20} />
            </button>
            <div className="flex justify-center mt-4 gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === index
                      ? "bg-[rgb(52,38,92)]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
