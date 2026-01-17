import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pageOffset">
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center gap-4">
          <div className="bg-white rounded-md p-2 shadow">
            <Image
              src="/TheBingeTownLogo.png"
              alt="The Binge Town"
              width={56}
              height={56}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
        <div>
          <h4 className="text-white font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-white transition">Terms and Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 md:ml-0 ml-[-8px]">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="md:ml-0 ml-[-8px]"><Link href="/services" className="hover:text-white transition">Our Services</Link></li>
            <li className="md:ml-0 ml-[-8px]"><Link href="/about-us" className="hover:text-white transition">About Us</Link></li>
            <li className="md:ml-0 ml-[-8px]"><Link href="/MyBookings" className="hover:text-white transition">My Bookings</Link></li>
            <li className="md:ml-0 ml-[-8px]"><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
            <li className="md:ml-0 ml-[-8px]"><Link href="/blogs" className="hover:text-white transition">Blogs</Link></li>
            <li className="md:ml-0 ml-[-8px]"><Link href="/faqs" className="hover:text-white transition">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex md:gap-4 gap-2 md:text-lg text-xs">
            <div>
              <div className="grid grid-cols-3 gap-3 w-fit">
                {[
                  {
                    Icon: FaFacebookF,
                    href: "https://www.facebook.com/thebingetown",
                    label: "Facebook",
                  },
                  {
                    Icon: FaInstagram,
                    href: "https://www.instagram.com/bingetown_in/",
                    label: "Instagram",
                  },
                  {
                    Icon: FaLinkedinIn,
                    href: "https://www.linkedin.com/company/the-binge-town/",
                    label: "LinkedIn",
                  },
                  {
                    Icon: FaTwitter,
                    href: "https://x.com/thebingetown",
                    label: "Twitter",
                  },
                  {
                    Icon: FaWhatsapp,
                    href: "https://api.whatsapp.com/send/?phone=918618976974&text&type=phone_number&app_absent=0",
                    label: "WhatsApp",
                  },
                  {
                    Icon: FaYoutube,
                    href: "https://www.youtube.com/channel/UCkUByxBsPjV_RCbOQx-v_IQ",
                    label: "YouTube",
                  },
                ].map(({ Icon, href, label }, i) => (
                  <Link
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`The Binge Town on ${label}`}
                    className="w-8 h-8 flex items-center justify-center rounded-full 
                   bg-gray-800 text-white
                   hover:bg-white hover:text-gray-900 
                   transition"
                  >
                    <Icon size={14} />
                  </Link>
                ))}
              </div>
            </div>


          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 md:ml-0 ml-[-8px]">Contact Us</h4>
          <ul className="space-y-3 md:text-sm text-[12px]">
            <li className="md:ml-0 ml-[-8px]">
              <a href="tel:+918618976974" className="flex items-start gap-2 hover:text-white transition">
                <FaPhoneAlt className="md:text-sm text-[14px] mt-1" />
                <span>+91 8618976974</span>
              </a>
            </li>
            <li className="md:ml-0 ml-[-8px]">
              <a href="mailto:office@thebingetown.com" className="flex items-start gap-2 hover:text-white transition break-all">
                <FaEnvelope className="md:text-sm text-[14px] mt-1" />
                <span>office@thebingetown.com</span>
              </a>
            </li>
            <li className="flex items-start gap-2 md:ml-0 ml-[-8px]">
              <FaMapMarkerAlt className="mt-1 md:text-sm text-[14px]" />
              <span>10/1B, Graphite India Road, Hoodi Village, KR Puram,<br /> Bengaluru, 560048, Karnataka, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-950 py-4 text-xs md:text-sm text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center gap-2">
          <span>
            Copyright ©2022 BCKS Franchise LLP - Private Movie Theaters - All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
