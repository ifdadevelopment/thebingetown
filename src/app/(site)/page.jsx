"use client";

import { useRef } from "react";

import BannerMarquee from "./components/BannerMarquee";
import HomeBooking from "./components/HomeBooking";
import EventCards from "./components/EventCards";
import WhyCelebrate from "./components/WhyCelebrate";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import HaveDoubtsSection from "./components/HaveDoubtsSection";
import GallerySection from "./components/GallerySection";
import TestimonialSection from "./components/TestimonialSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OurServicesSlider from "./components/OurServicesSlider";
import InstagramSection from "./components/InstagramSection";
import CityCelebrationSection from "./components/CityCelebrationSection";
import QuickLinks from "./components/QuickLinks";

export default function HomePage() {
  const bookingRef = useRef(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="pageOffset">
      <BannerMarquee  />
      <div ref={bookingRef} className="scroll-offset">
        <HomeBooking />
      </div>
      <EventCards />
      <WhyCelebrate onBookNow={scrollToBooking} />
      <CityCelebrationSection/>
      <HowItWorksSection onBookNow={scrollToBooking}/>
      <OurServicesSlider/>
      <FeaturesSection />
      <FAQSection />
      <InstagramSection/>
      <HaveDoubtsSection />
      <GallerySection onBookNow={scrollToBooking}/>
      <QuickLinks/>
      <TestimonialSection />
    </main>
  );
}
