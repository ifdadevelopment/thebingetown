import Image from "next/image";
import Link from "next/link";

export default function EventFeaturesSection({
  title,
  subtitle,
  features = [],
  ctaLabel = "Book Your Private Theater Now",
  ctaHref = "/",
}) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 sm:mt-16 max-w-4xl mx-auto">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md">
                <Image
                  src={item.image}
                  alt={`Feature - ${item.title} - The Binge Town`}
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 160px"
                  className="object-cover"
                />
              </div>

              <p className="mt-4 text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16">
          <Link
            href={ctaHref}
            title={ctaLabel}
            className="inline-block bg-yellow-400 hover:bg-yellow-500
              text-black font-bold py-4 px-8 rounded-full
              text-base sm:text-lg transition"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
