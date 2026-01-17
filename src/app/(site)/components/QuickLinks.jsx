"use client";

import { useState } from "react";
import Link from "next/link";
import { quickLinksData } from "../data/services";

export default function QuickLinks() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Quick Links
        </h2>

        <div className="space-y-6">
          {quickLinksData.map((section, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <button
                className="md:hidden w-full text-left text-lg font-bold
                mb-2 flex justify-between items-center"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {section.city}
                <span className="text-sm">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <h3 className="hidden md:block text-lg font-bold mb-2">
                {section.city}
              </h3>
              <div
                className={`flex flex-wrap gap-2 ${
                  openIndex === index
                    ? "flex"
                    : "hidden md:flex"
                }`}
              >
                {section.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    title={link.title}
                    className="text-md text-blue-600
                      hover:text-blue-800 font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
