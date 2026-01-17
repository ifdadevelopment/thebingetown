"use client";

import Image from "next/image";
import Link from "next/link";
import { EVENTS } from "../data/services";


export default function EventCards() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <Link
              key={event.title}
              href={event.href}
              title={`The Binge Town - ${event.title}`}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex gap-5">
                <div className="flex-shrink-0">
                  <Image
                    src={event.icon}
                    alt={`Occasion Icon - ${event.title}`}
                    width={56}
                    height={56}
                    className="rounded-lg object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-purple-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
