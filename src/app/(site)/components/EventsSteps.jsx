import Image from "next/image";
import Link from "next/link";

export default function EventSteps({
    title,
    features = [],
    ctaLabel = "Book Your Private Theater Now",
    ctaHref = "/",
}) {
    if (!features.length) return null;

    return (
        <section className="py-8 text-center bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2
                    id="booking-process-heading"
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
                >
                    {title}
                </h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6
              border border-gray-200 rounded-lg
              shadow-md hover:shadow-lg transition"
                        >
                            <Image
                                src={step.image}
                                alt={`${step.title} - Booking Step at The Binge Town`}
                                title={`${step.title} - Booking Step at The Binge Town`}
                                width={80}
                                height={80}
                                className="object-contain"
                            />

                            <p className="mt-4 text-lg font-semibold text-purple-600 text-center">
                                {step.title}
                            </p>
                        </div>
                    ))}
                </div>

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
