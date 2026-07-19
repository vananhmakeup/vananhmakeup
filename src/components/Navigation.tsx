"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(247,245,242,0.88)] backdrop-blur-md shadow-[0_1px_0_0_rgba(201,185,154,0.25)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Anh Do — Home"
          >
            <span
              className="text-2xl font-light text-[var(--color-charcoal-birch)] tracking-tight"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Anh Do
            </span>
            <span
              className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-ash)] mt-0.5"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Makeup Artist · Asian-inspired Looks
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[13px] tracking-wide transition-colors duration-200 ${
                  pathname === href
                    ? "text-[var(--color-charcoal-birch)]"
                    : "text-[var(--color-ash)] hover:text-[var(--color-charcoal-birch)]"
                }`}
                style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="ml-2 px-5 py-2 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-[13px] tracking-wide transition-colors duration-200 hover:bg-[var(--color-nordic-sand-dark)]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-px bg-[var(--color-charcoal-birch)] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[var(--color-charcoal-birch)] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[var(--color-charcoal-birch)] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--color-birch-white)] flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-4xl font-light text-[var(--color-charcoal-birch)] hover:text-[var(--color-nordic-sand)] transition-colors duration-200"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/booking"
          className="mt-4 px-8 py-3 rounded-full bg-[var(--color-nordic-sand)] text-[var(--color-charcoal-birch)] text-base tracking-wide hover:bg-[var(--color-nordic-sand-dark)] transition-colors duration-200"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontWeight: 500 }}
        >
          Book Now
        </Link>
      </div>
    </>
  );
}
