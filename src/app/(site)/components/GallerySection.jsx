"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "../data/services";

export default function GallerySection({onBookNow}) {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="md:text-5xl text-3xl font-extrabold text-gray-900 text-center mb-8">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <Link
              key={index}
              href="/gallery"
              className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden block group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                title={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
             onClick={onBookNow}
            title="The Binge Town"
            className="flex items-center justify-center text-center bg-[#34265C] text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
