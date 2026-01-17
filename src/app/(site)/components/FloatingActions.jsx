"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function FloatingActions() {
    return (
        <div className="fixed bottom-5 right-5 z-[1000] flex flex-col items-center gap-4">
            <a
                href="tel:+918618976974"
                aria-label="Call The Binge Town"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg
                   hover:scale-105 transition-transform"
            >
                <FaPhoneAlt className="text-black text-xl" />
            </a>
            <a
                href="https://api.whatsapp.com/send?phone=918618976974&text=Hello%20Binge%20Town!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with The Binge Town on WhatsApp"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 shadow-lg
                   hover:scale-105 transition-transform"
            >
                <Image
                    src="/images/WhatsApp.svg"
                    alt="Chat with The Binge Town on WhatsApp"
                    width={28}
                    height={28}
                    priority
                />
            </a>

        </div>
    );
}
