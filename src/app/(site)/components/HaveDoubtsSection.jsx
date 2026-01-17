"use client";

import Link from "next/link";
import { cards } from "../data/services";



export default function HaveDoubtsSection() {
  return (
    <section className="bg-[#2c1e4a] w-full">
    <div className="py-4 md:py-10 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl  text-center font-bold text-white mb-12">
        Have doubts?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            className={`group rounded-2xl p-6 flex gap-4 items-start transition-all
              ${
                card.variant === "yellow"
                  ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  : "bg-white border border-gray-200 hover:shadow-lg"
              }
            `}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 flex-shrink-0 fill-current"
            >
              {card.icon}
            </svg>

            <p className="text-sm md:text-base font-medium leading-relaxed">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
}
