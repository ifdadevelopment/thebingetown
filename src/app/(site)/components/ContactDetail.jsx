import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-10">
          Contact us
        </h1>

        {/* Mobile Image */}
        <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl overflow-hidden mb-10 md:hidden bg-gray-100">
          <Image
            src="/images/RT_2.jpeg"
            alt="Contact The Binge Town - Private Theater Venue"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Details */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <div className="flex items-center gap-4">
              <FaWhatsapp className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>+91 8618976974</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="w-5 h-5 text-gray-700 flex-shrink-0" />
              <span>office@thebingetown.com</span>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <span>
                10/1B, Graphite India Road, Hoodi Village, KR Puram,
                Bengaluru, 560048, Karnataka, India
              </span>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block relative w-full h-[380px] lg:h-[460px] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/RT_2.jpeg"
              alt="Contact The Binge Town - Private Theater Venue"
              fill
              sizes="(min-width: 768px) 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
