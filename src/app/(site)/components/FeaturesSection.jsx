'use client';
import Image from "next/image";
import { features } from "../data/services";

export default function FeaturesSection() {
  return (
    <section className="bg-purple-700 rounded-2xl px-4 py-10 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.icon}
                  alt={`The Binge Town Feature - ${feature.title}`}
                  title={`The Binge Town Feature - ${feature.title}`}
                  width={70}
                  height={70}
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm font-medium text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
