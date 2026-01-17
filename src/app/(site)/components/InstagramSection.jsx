"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { instagramPosts } from "../data/services";

export default function InstagramSection() {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const [step, setStep] = useState(0);

  /* Load Instagram embed */
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  /* Calculate card width dynamically */
  useEffect(() => {
    if (!cardRef.current) return;

    const updateStep = () => {
      const cardWidth = cardRef.current.offsetWidth;
      const gap = 24; // Tailwind gap-6
      setStep(cardWidth + gap);
    };

    updateStep();

    const resizeObserver = new ResizeObserver(updateStep);
    resizeObserver.observe(cardRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  /* Set initial position for infinite loop */
  useEffect(() => {
    if (!sliderRef.current || !step) return;
    sliderRef.current.scrollLeft = instagramPosts.length * step;
  }, [step]);

  /* Infinite correction */
  const handleInfiniteScroll = () => {
    const slider = sliderRef.current;
    if (!slider || !step) return;

    const total = instagramPosts.length * step;

    if (slider.scrollLeft >= total * 2) {
      slider.scrollLeft = total;
    }

    if (slider.scrollLeft <= 0) {
      slider.scrollLeft = total;
    }
  };

  /* Arrow slide (1 card only) */
  const slide = (dir) => {
    if (!sliderRef.current || !step) return;

    sliderRef.current.scrollBy({
      left: dir * step,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-lg md:text-xl font-bold text-center text-white mb-6">
          200k+ Followers on Instagram!!
        </h2>

        {/* Slider */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => slide(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-white text-black rounded-full p-2 shadow
            opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => slide(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-white text-black rounded-full p-2 shadow
            opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight />
          </button>

          {/* Scroll Container */}
          <div
            ref={sliderRef}
            onScroll={handleInfiniteScroll}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
          >
            {[...instagramPosts].map(
              (url, index) => (
                <div
                  key={index}
                  ref={index === instagramPosts.length ? cardRef : null}
                  className="
                    min-w-full
                    lg:min-w-[33.333%]
                    bg-white rounded-xl overflow-hidden
                  "
                >
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{ margin: "0", width: "100%" }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
