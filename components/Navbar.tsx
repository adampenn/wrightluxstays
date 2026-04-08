"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LOGO_URL =
  "https://static.wixstatic.com/media/51ee30_0f79b52be3424a13b81584fedc0f0925~mv2.jpg/v1/crop/x_94,y_102,w_464,h_464/fill/w_200,h_200,al_c,q_90/WrightLuxStays.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    isHome && !isScrolled
      ? "bg-transparent"
      : "bg-white shadow-md";

  const textColor =
    isHome && !isScrolled ? "text-white" : "text-[#1a1a1a]";

  const locations = [
    { name: "Sonoma, CA", href: "/locations/sonoma" },
    { name: "Kansas City", href: "/locations/kansas-city" },
    { name: "Austin, TX", href: "/locations/austin" },
    { name: "Carmel, CA", href: "/locations/carmel" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#C9A84C]/40">
              <Image
                src={LOGO_URL}
                alt="Wright Lux Stays"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-[family-name:var(--font-playfair)] text-xl font-bold tracking-wide ${textColor} transition-colors`}
              >
                Wright Lux Stays
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] font-[family-name:var(--font-inter)]">
                Luxury Vacation Rentals
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`nav-link text-sm tracking-wide font-[family-name:var(--font-inter)] ${textColor} transition-colors hover:text-[#C9A84C]`}
            >
              Home
            </Link>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                className={`nav-link text-sm tracking-wide font-[family-name:var(--font-inter)] ${textColor} transition-colors hover:text-[#C9A84C] flex items-center gap-1`}
              >
                Locations
                <svg
                  className="w-3 h-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                  {locations.map((loc) => (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      className="block px-4 py-3 text-sm text-[#1a1a1a] hover:bg-[#faf8f5] hover:text-[#C9A84C] transition-colors font-[family-name:var(--font-inter)]"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`nav-link text-sm tracking-wide font-[family-name:var(--font-inter)] ${textColor} transition-colors hover:text-[#C9A84C]`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`nav-link text-sm tracking-wide font-[family-name:var(--font-inter)] ${textColor} transition-colors hover:text-[#C9A84C]`}
            >
              Contact
            </Link>
            <a
              href="tel:+17075010199"
              className={`text-sm font-[family-name:var(--font-inter)] ${textColor} transition-colors hover:text-[#C9A84C] flex items-center gap-1`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (707) 501-0199
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            <Link href="/" className="block py-2 text-sm font-[family-name:var(--font-inter)] text-[#1a1a1a] hover:text-[#C9A84C]" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <div className="py-2">
              <div className="text-sm font-semibold text-[#1a1a1a] mb-1 font-[family-name:var(--font-inter)]">Locations</div>
              {locations.map((loc) => (
                <Link
                  key={loc.href}
                  href={loc.href}
                  className="block pl-3 py-1.5 text-sm text-[#555] hover:text-[#C9A84C] font-[family-name:var(--font-inter)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {loc.name}
                </Link>
              ))}
            </div>
            <Link href="/about" className="block py-2 text-sm font-[family-name:var(--font-inter)] text-[#1a1a1a] hover:text-[#C9A84C]" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block py-2 text-sm font-[family-name:var(--font-inter)] text-[#1a1a1a] hover:text-[#C9A84C]" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <a href="tel:+17075010199" className="block py-2 text-sm font-[family-name:var(--font-inter)] text-[#C9A84C] font-semibold">
              (707) 501-0199
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
