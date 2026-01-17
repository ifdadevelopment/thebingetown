import Image from "next/image";

export default function EventsTypesSection({
  title,
  subtitle,
  backgroundImage,
  items = [],
}) {
  return (
    <section className="relative py-8 md:py-12 bg-white text-center overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          {title} <span className="text-yellow-400">*</span>
        </h2>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg font-medium text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md w-full max-w-xs
                border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg md:text-xl font-semibold text-center">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-700 text-center font-medium text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
