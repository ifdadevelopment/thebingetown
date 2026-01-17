"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/services";



export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          FAQs
        </h1>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-300 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center p-4 md:p-5 text-left font-semibold text-base md:text-lg hover:bg-gray-50 transition"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-4 md:px-5 text-gray-700 text-sm md:text-base overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
