"use client";

import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div className="flex flex-col gap-8 lg:gap-12">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          Our Story
        </h1>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start">
          <div className="md:w-3/5 space-y-4 lg:space-y-6">
            <p className="text-sm font-medium md:text-lg   leading-relaxed text-gray-700">
              It all began with a simple dream — to make celebrations grand,
              hassle-free, and budget-friendly for everyone. At The Binge Town,
              we wanted to create spaces where joy feels effortless, emotions
              take center stage, and every person can celebrate their special
              moments exactly the way they imagine.
            </p>

            <p className="text-sm font-medium md:text-lg   leading-relaxed text-gray-700">
              From one humble beginning to now 18 branches across 8 cities —
              Bangalore, Hyderabad, Delhi, Noida, Mumbai, Chennai & Gurugram —
              The Binge Town has grown into India’s favorite destination for
              private celebrations. With over 1.25 lakh celebrations hosted,
              we’ve seen memories come alive every single day.
            </p>

            <p className="text-sm font-medium md:text-lg  leading-relaxed text-gray-700">
              What drives us isn’t just business; it’s our belief in people.
              Our core values — customer-centricity, empathy, honesty, and
              emotional bonding — guide everything we do. We’re not just
              building spaces; we’re building emotions.
            </p>
          </div>
          <div className="md:w-2/5 relative w-full aspect-video md:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/RT_2.jpeg"
              alt="The Binge Town - Our Story and Journey"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-4 lg:mb-8">
          Company & Founders
        </h2>

        <p className="text-sm font-medium md:text-xl  leading-relaxed text-gray-700 mb-4 lg:mb-6">
          The Binge Town is proudly owned and operated by BCKS Franchise LLP,
          a Bengaluru-based company driven by innovation, integrity, and a
          passion for redefining celebrations across India.
        </p>

        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 mb-4 lg:mb-6">
          Behind this vision stands a diverse team of founders with global
          exposure and deep operational expertise:
        </p>

        <ul className="list-disc list-inside space-y-2 text-base md:text-lg lg:text-xl text-gray-700 mb-6">
          <li>
            <strong>Chetan Agrawal</strong> – Ex-McKinsey, MBA (IIT Madras),
            B.Tech (NIT Rourkela) – Marketing & Finance
          </li>
          <li>
            <strong>Yash Agarwal</strong> – M.Sc (BTU Cottbus, Germany),
            B.Tech – Operations & Expansion
          </li>
          <li>
            <strong>Sanketh Jain</strong> – B.Tech (Jain University) –
            Customer Experience Management
          </li>
          <li>
            <strong>Bishnu Sahu</strong> – B.Tech (IIIT Allahabad) –
            Technology & Integrations
          </li>
          <li>
            <strong>Soumay Bansal</strong> – MBA (IIT Madras), BA Economics
            (Delhi University) – Customer Support & Investor Relations
          </li>
        </ul>

        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
          Together, this founding team represents the perfect blend of
          creativity, discipline, and empathy — united by one goal: to make
          celebration accessible for everyone.
        </p>
      </div>
    </section>
  );
}
