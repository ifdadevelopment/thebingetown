"use client";

export default function HowItWorksSection({ onBookNow }) {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl  text-center px-5 space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-start text-gray-900">
          How does Private Theater Celebration work?
        </h2>
        <p className="text-base md:text-lg font-medium  text-center leading-relaxed text-gray-700">
          Private Theatre celebration is a very new concept pioneered by
          <span className="font-medium"> The Binge Town</span>. Guests can book
          private theaters for celebrating birthdays, anniversaries, date
          night, bride to be, and more, while enjoying their favorite movies,
          shows, photos, and videos on the big screen.
        </p>

        <p className="text-base md:text-lg font-medium  text-center leading-relaxed text-gray-700">
          Guests can also enjoy delicious food and beverages and add services
          like cakes, gifts, photoshoots, and more. The Binge Town private
          theaters make celebrations easy, affordable, fun, and memorable.
        </p>
        <div className="pt-4">
          <button
            onClick={onBookNow}
            className="inline-flex items-center justify-center rounded-lg
            bg-[#34265C] px-8 py-3 text-white font-semibold
            hover:opacity-90 transition duration-300"
          >
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
}
