"use client";

import Link from "next/link";

export default function BannerMarquee() {
  return (
    <div
      className="relative h-[40px] w-full overflow-hidden flex items-center text-white
      bg-[linear-gradient(36deg,_rgb(26,42,108)_8.48%,_rgb(178,31,31)_55.8%,_rgb(253,187,45)_98.44%)]"
    >
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused]"
      >
        <MarqueeText />
      </div>
    </div>
  );
}
function MarqueeText() {
  return (
    <div className="whitespace-nowrap px-6 text-xs sm:text-sm md:text-base">
      Can&apos;t find your preferred slot?{" "}
      <Link
        href="/join_waitlist"
        title="The Binge Town - Join Waitlist"
        className="font-semibold hover:text-yellow-200 transition-colors"
      >
        Join our waitlist
      </Link>{" "}
      and we&apos;ll reach out to you.
    </div>
  );
}
