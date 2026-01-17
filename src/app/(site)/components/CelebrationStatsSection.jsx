export default function CelebrationStatsSection({
  title = "India's Largest Chain of Celebration Theatres",
  subtitle =
    "Discover the remarkable achievements of our theatre chain, highlighting our dedication to excellence and customer satisfaction.",
  stats = [],
}) {
  return (
    <section className="px-4 md:px-8 py-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            {title}
          </h2>

          <p className="text-gray-600 mt-3 font-medium text-sm leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-white shadow-sm border border-gray-100"
            >
              <div className="w-full p-3 rounded-lg mb-3
                bg-[linear-gradient(36deg,_#1A2A6C_8.48%,_#B21F1F_55.8%,_#FDBB2D_98.44%)]
              ">
                <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
                  {item.value}
                </h3>
              </div>

              <p className="text-sm font-medium text-gray-600 text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
