"use client";

import { useRef } from "react";

import FranchiseHero from "../components/FranchiseHero";
import CelebrationStatsSection from "../components/CelebrationStatsSection";
import FranchiseSystemSection from "../components/FranchiseSystemSection";
import FranchiseQuote from "../components/FranchiseQuote";
import FranchiseApplicationForm from "../components/FranchiseApplicationForm";

import { franchiseSystemConfig, stats } from "../data/services";

export default function Franchise() {
  const bookingRef = useRef(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="pageOffset">
      <FranchiseHero onBookNow={scrollToBooking} />
      <CelebrationStatsSection stats={stats} />
      <FranchiseSystemSection
        title={franchiseSystemConfig.title}
        steps={franchiseSystemConfig.steps}
      />
      <FranchiseQuote
        quote={`"Binge Town helped me launch in 45 days. The bookings haven't stopped since."`}
        author="Vivek"
      />
      <div ref={bookingRef} className="scroll-offset">
        <FranchiseApplicationForm />
      </div>
    </main>
  );
}
