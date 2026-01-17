export default function FranchiseQuote({
  quote = `"Binge Town helped me launch in 45 days. The bookings haven't stopped since."`,
  author = "Vivek",
}) {
  return (
    <section className="px-4 md:px-8 py-14">
      <div
        className="max-w-5xl mx-auto rounded-3xl p-8 md:p-12 text-center"
        style={{
          background:
            "radial-gradient(50.33% 193.38% at 52.41% 49.61%, #FFF4E6 0%, #FFCF91 100%)",
        }}
      >
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
          {quote}
        </p>

        <p className="mt-4 text-sm text-gray-700 font-medium">
          — {author}
        </p>
      </div>
    </section>
  );
}
