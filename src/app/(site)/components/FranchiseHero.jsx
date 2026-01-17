import Image from "next/image";
import Link from "next/link";

export default function FranchiseHero({
  title = "Bring The Binge Town Experience to Your City",
  subtitle =
  "India's most loved private theatre & celebration space is now open for franchise partnerships",
  image = "/images/franchise_hero.webp",
  ctaLabel = "Apply for Franchise",
  ctaHref = "/franchise/apply",
  onBookNow
}) {
  return (
    <section className="px-4 md:px-8 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="relative w-full h-[320px] sm:h-[360px] md:h-[420px]">
            <Image
              src={image}
              alt="The Binge Town Franchise Opportunity"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              {title.split(" to ").length > 1 ? (
                <>
                  {title.split(" to ")[0]} to
                  <br className="hidden md:block" />
                  {title.split(" to ")[1]}
                </>
              ) : (
                title
              )}
            </h1>

            <p className="text-white/90 mt-3 max-w-2xl text-sm sm:text-base">
              {subtitle}
            </p>

            {/* CTA */}
            <div className="flex gap-4 mt-6 flex-wrap justify-center">
              <Link
                href={ctaHref}
                onClick={onBookNow}
                title={ctaLabel}
                className="px-6 py-2.5 rounded-full bg-white text-black
                text-sm font-medium hover:bg-gray-100 transition"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
