"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const faqs = [
    {
        question:
            "Which movies or shows can we watch? Can we play our own videos?",
        answer:
            "Yes, you can connect your OTT accounts or phone through Chromecast and play content of your choice. Please note that we do NOT provide any movies or shows or OTT account. We just do the setup for you using your own content and accounts. We don't support pendrives and laptops for casting or watching movies.",
    },
    {
        question: "Refund Policy",
        answer:
            "Full refund of advance payment if slot is cancelled at least 72 hours before the slot time.",
    },
    {
        question: "Are washrooms available?",
        answer:
            "Yes all our branches have neat and tidy washrooms.",
    },
    {
        question: "Are Kids Chargeable?",
        answer:
            "Kids above 10 yrs of age are fully chargeable while those between 3 to 10 yrs are charged half the rate. Kids below 3 yrs of age are not chargeable.",
    },
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-14 px-4 max-w-5xl mx-auto">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-600 mt-4 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                    Have doubts? Check out our FAQs. Please feel free to reach out on{" "}
                    <span className="font-semibold text-gray-900">
                        86189&nbsp;76974
                    </span>{" "}
                    for more queries.
                </p>
            </div>

            <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <div key={index} className="group">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between px-6 md:px-8 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                            >
                                <span className="text-gray-900 font-semibold text-sm md:text-base">
                                    {faq.question}
                                </span>

                                <span
                                    className={`ml-4 transform transition-transform duration-300 ease-out ${isOpen ? "rotate-45" : "rotate-0"
                                        }`}
                                >
                                    <Image
                                        src="/images/PlusIcon.77add51b.png"
                                        alt="Toggle FAQ"
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                                        ? "max-h-[500px] opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-6 md:px-8 pb-6 text-gray-600 font-medium text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* View All */}
            <div className="mt-12 flex justify-center">
                <Link
                    href="/faqs"
                    className="FAQSection_viewAllButton flex items-center gap-2"
                    aria-label="View all FAQ questions"
                >
                    <span className="FAQSection_viewAllText">View All Questions</span>
                    <Image
                        src="/images/ArrowIcon.29a19599.png"
                        alt="View all FAQs"
                        width={16}
                        height={16}
                    />
                </Link>
            </div>
        </section>
    );
}
