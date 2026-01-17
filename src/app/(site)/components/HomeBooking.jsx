"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CITY_DATA } from "../data/services";

const CITIES = ["Delhi NCR"];

export default function HomeBooking() {
  const [mounted, setMounted] = useState(false);

  const [city, setCity] = useState("");
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState("");
  useEffect(() => {
    setMounted(true);
    setCity("Select city"); 
  }, []);

  useEffect(() => {
    if (!city) return;
    const selectedCity = CITY_DATA.find((c) => c.city === city);
    setLocations(selectedCity?.locations || []);
    setLocation("");
  }, [city]);

  if (!mounted) return null;

  return (
    <section className="relative h-[660px] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/homeHero_1.jpeg"
          alt="The Binge Town private theatre venue"
          fill
          priority
          className="object-cover scale-105 animate-zoomSlow"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 mt-4 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          India&apos;s Best Private Theatre Venue for Celebrations
        </h1>

        <h2 className="mt-3 text-sm sm:text-base md:text-lg">
          Book Your Perfect Celebration: Birthdays, Anniversaries & Date Nights
        </h2>

        <div className="mt-4 w-full max-w-xl bg-white text-black rounded-2xl p-4 shadow-lg">
          <div className="overflow-hidden mb-3">
            <div className="flex whitespace-nowrap animate-marquee BookingHero_cityTickerItem text-sm font-medium">
              {[...CITIES,].map((c, i) => (
                <span key={i} className="mx-2">
                  {c} •
                </span>
              ))}
            </div>
          </div>
          <FloatingSelect
            label="City"
            value={city}
            options={CITIES}
            onChange={setCity}
          />
          <FloatingSelect
            label="Location"
            value={location}
            options={locations}
            onChange={setLocation}
            disabled={!locations.length}
          />
          <div className="relative mb-3">
            <span className="absolute left-3 top-2  font-bold top-2 text-xs  text-gray-500">
              DATE
            </span>
            <input
              type="date"
              className="w-full pt-5 pb-2  px-2 rounded-xl
                text-xs text-gray-700
                border border-gray-200 shadow-sm
                outline-none font-semibold" 
            />
          </div>
          <Link href="/book-now">
            <button className="mt-3 w-full bg-[rgb(52,38,92)] text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">
              Book Now
            </button>
          </Link>
          <div className="mt-2 flex items-center gap-2 bg-[#fff4e6] px-3 py-1 rounded-full">
            <span className="text-xl text-yellow-500">✨</span>
            <div className="text-left font-bold text-sm">
              <p>147,309</p>
              <p className="text-xs">bookings completed</p>
            </div>
          </div>

          <p className="mt-1 text-blue-400 text-xs font-bold italic text-left">
            63 People searching right now!
          </p>
        </div>
      </div>
    </section>
  );
}

function FloatingSelect({ label, value, options, onChange, disabled }) {
  return (
    <div className="relative mb-3">
      <span className="absolute left-3 font-bold top-2 text-xs mb-2 text-gray-500">
        {label.toUpperCase()}
      </span>

      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full pt-5 pb-2 px-2 rounded-xl text-xs
          border border-gray-200 shadow-sm bg-white
          outline-none font-semibold 
          ${disabled ? "bg-gray-100 text-gray-400" : "text-gray-700 font-semibold"}
        `}
      >
        <option value="" className="font-medium">
          {disabled ? "Select city first" : `Select ${label.toLowerCase()}`}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="font-medium">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
