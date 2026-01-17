"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [mobileLearn, setMobileLearn] = useState(false);
  const [mounted, setMounted] = useState(false);

  const menuRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
        setMobileLearn(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const isActive = (path) => pathname === path;
  const handleHoverEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setShowLearn(true);
  };

  const handleHoverLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowLearn(false);
    }, 350);
  };

  const handleArrowClick = (e) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setShowLearn((prev) => !prev);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-[70px] md:h-[100px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/TheBingeTownLogo.png"
            alt="The Binge Town"
            width={72}
            height={72}
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6 text-md font-semibold global-secondary-color items-center">
          {[
            ["Home", "/"],
            ["Services", "/services"],
            ["Gallery", "/gallery"],
            ["Our Stories", "/blogs"],
          ].map(([label, link]) => (
            <Link
              key={link}
              href={link}
              className={`px-2 py-1 rounded-md transition font-semibold
                ${isActive(link)
                  ? "global-bg text-white"
                  : "hover:text-[var(--primary-color)]"}
              `}
            >
              {label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
            <div className="flex items-center gap-1 font-semibold hover:text-[var(--primary-color)] cursor-pointer">
              <span>Learn</span>
              <span
                onClick={handleArrowClick}
                className={`cursor-pointer transition-transform duration-300 ${
                  showLearn ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </div>
            <div
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
              className={`absolute left-0 top-full mt-3 w-[280px] bg-white shadow-xl rounded-lg p-3 z-50
                transition-all duration-300 ease-out
                ${showLearn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
              `}
            >
              {[
                ["About Us", "/about-us"],
                ["Founders", "/founders"],
                ["Franchise", "/bingetown-franchise"],
                ["FAQs", "/faqs"],
                ["Refund Policy", "/refund-policy"],
                ["Privacy Policy", "/privacy-policy"],
                ["T&C", "/terms-and-conditions"],
                ["Contact Us", "/contact"],
              ].map(([label, link]) => (
                <Link
                  key={link}
                  href={link}
                  onClick={() => setShowLearn(false)}
                  className={`block px-3 py-2 rounded-md font-medium transition-all duration-300
                    ${isActive(link)
                      ? "global-bg text-white"
                      : "hover:bg-[rgba(52,38,92,0.08)] hover:text-[var(--primary-color)]"}
                  `}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/join_waitlist"
                onClick={() => setShowLearn(false)}
                className={`block mt-2 px-3 py-2 rounded-md font-medium transition-all duration-300
                  ${isActive("/join_waitlist")
                    ? "global-bg text-white"
                    : "text-[var(--primary-color)] hover:bg-[rgba(52,38,92,0.12)]"}
                `}
              >
                Join Waitlist
              </Link>
            </div>
          </div>

          <Link
            href="/MyBookings"
            className={`px-2 py-1 rounded-md transition font-semibold
              ${isActive("/MyBookings")
                ? "global-bg text-white"
                : "hover:text-[var(--primary-color)]"}
            `}
          >
            My Bookings
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link
            href="/"
            className="header_bookNowButton px-5 py-2 text-sm md:text-base font-semibold"
          >
            Book Now
          </Link>
        </div>
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>
      <div
        ref={menuRef}
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300
          ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col p-4 gap-4 text-md font-semibold global-secondary-color">

          {[
            ["Home", "/"],
            ["Our Services", "/services"],
            ["Gallery", "/gallery"],
            ["Our Stories", "/blogs"],
          ].map(([label, link]) => (
            <Link
              key={link}
              href={link}
              onClick={() => setOpen(false)}
              className={isActive(link) ? "global-bg text-white px-2 py-2 rounded-lg" : ""}
            >
              {label}
            </Link>
          ))}
          <div>
            <button
              onClick={() => setMobileLearn(!mobileLearn)}
              className="flex justify-between w-full font-semibold"
            >
              Learn
              <span className={`transition-transform ${mobileLearn ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileLearn ? "max-h-[500px] mt-3" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-3 pl-3 font-medium">
                {[
                  ["About Us", "/about-us"],
                  ["Founders", "/founders"],
                   ["Franchise", "/bingetown-franchise"],
                  ["FAQs", "/faqs"],
                  ["Refund Policy", "/refund-policy"],
                  ["Privacy Policy", "/privacy-policy"],
                  ["T&C", "/terms-and-conditions"],
                  ["Contact Us", "/contact"],
                ].map(([label, link]) => (
                  <Link
                    key={link}
                    href={link}
                    onClick={() => setOpen(false)}
                    className={isActive(link) ? "global-bg text-white px-2 py-1 rounded-md" : ""}
                  >
                    {label}
                  </Link>
                ))}

                <Link
                  href="/join_waitlist"
                  onClick={() => setOpen(false)}
                  className={
                    isActive("/join_waitlist")
                      ? "global-bg text-white px-2 py-1 rounded-md"
                      : "text-[var(--primary-color)] font-medium"
                  }
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/MyBookings"
            onClick={() => setOpen(false)}
            className={isActive("/MyBookings") ? "global-bg text-white px-2 py-1 rounded-md" : ""}
          >
            My Bookings
          </Link>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="header_bookNowButton mt-4 w-full text-center"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
