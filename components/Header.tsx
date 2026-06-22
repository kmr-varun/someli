"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Platform", hasChevron: false, active: true, dropdown: null, href: "/" },
  {
    label: "Solutions",
    hasChevron: true,
    active: false,
    href: "#",
    dropdown: [
      { label: "For Corporates", href: "/for-corporates" },
      { label: "How Someli Works", href: "/how-someli-works" },
      { label: "Why Someli", href: "/why-someli" },
    ],
  },
  {
    label: "Resources",
    hasChevron: true,
    active: false,
    href: "#",
    dropdown: [
      { label: "Product Tour", href: "/product" },
      { label: "Client Cases", href: "#" },
      { label: "Blogs & Insights", href: "/blogs-insights" },
      { label: "Tools & Calculators", href: "#" },
      { label: "Guides & Playbooks", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  { label: "Pricing", hasChevron: false, active: false, dropdown: null, href: "/pricing" },
  {
    label: "Company",
    hasChevron: true,
    active: false,
    href: "#",
    dropdown: [
      { label: "Our Story", href: "/our-story" },
      { label: "Careers & Partnerships", href: "/careers" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-3 md:py-4 h-16 md:h-20 xl:h-24">
        {/* Left: logo + nav */}
        <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
          {/* Logo */}
          <Link href="/" className="relative w-[100px] sm:w-[120px] md:w-[140px] xl:w-[158px] h-10 sm:h-12 md:h-14 xl:h-16 shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Someli"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 158px"
              priority
            />
          </Link>

          {/* Nav links - hidden on mobile, visible from md */}
          <nav className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 lg:gap-2 text-[12px] lg:text-[13px] xl:text-[14px] leading-none text-[#222] whitespace-nowrap ${
                    item.active ? "font-bold" : "font-normal"
                  }`}
                >
                  <span className="text-[#222]">•</span>
                  <span>{item.label}</span>
                  {item.hasChevron && (
                    <Image
                      src="/assets/icons/chevron-down.svg"
                      alt=""
                      width={7}
                      height={4}
                    />
                  )}
                </Link>

                {/* Dropdown menu */}
                {item.dropdown && (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white border border-[rgba(0,0,0,0.2)] rounded-[12px] overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
                      {item.dropdown.map((link, i) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={`flex items-center px-[24px] py-[16px] text-[#ed6b52] font-medium text-[14px] leading-none whitespace-nowrap hover:bg-[rgba(237,107,82,0.05)] transition-colors ${
                            i < item.dropdown!.length - 1
                              ? "border-b border-[rgba(237,107,82,0.2)]"
                              : ""
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right: buttons + hamburger */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Log in — ghost, no border */}
          <Link
            href="#"
            className="hidden lg:flex items-center gap-1 sm:gap-2 px-3 sm:pl-4 sm:pr-6 md:pl-5 md:pr-8 lg:pl-7 lg:pr-10 py-2 sm:py-3 md:py-4 rounded-full text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] font-bold text-[#ED6B52] whitespace-nowrap"
          >
            <span>•</span>
            <span>Log in</span>
          </Link>

          {/* Book a Demo — outlined */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-1 sm:gap-2 px-3 sm:pl-4 sm:pr-6 md:pl-5 md:pr-8 lg:pl-7 lg:pr-10 py-2 sm:py-3 md:py-4 rounded-full border border-[#ED6B52] text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] font-bold text-[#ED6B52] whitespace-nowrap"
          >
            <span>•</span>
            <span>Book a Demo</span>
          </Link>

          {/* Hamburger button - visible on mobile only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block w-5 h-[2px] bg-[#222] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[#222] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[#222] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-[rgba(0,0,0,0.08)] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-4">
            {NAV_ITEMS.map((item, idx) => (
              <div key={item.label} className={`${idx < NAV_ITEMS.length - 1 ? "border-b border-[rgba(0,0,0,0.06)]" : ""}`}>
                <button
                  className={`flex items-center justify-between w-full py-4 text-[15px] leading-none text-[#222] ${
                    item.active ? "font-bold" : "font-normal"
                  }`}
                  onClick={() => {
                    if (item.dropdown) {
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    }
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#222]">•</span>
                    <span>{item.label}</span>
                  </span>
                  {item.hasChevron && (
                    <Image
                      src="/assets/icons/chevron-down.svg"
                      alt=""
                      width={7}
                      height={4}
                      className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Mobile dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="flex flex-col pl-6 pb-3">
                    {item.dropdown.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="py-3 text-[14px] font-medium text-[#ed6b52] leading-none"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA buttons */}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-[rgba(0,0,0,0.08)]">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 py-3 rounded-full text-[15px] font-bold text-[#ED6B52]"
              >
                <span>•</span>
                <span>Log in</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#ED6B52] text-[15px] font-bold text-[#ED6B52]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>•</span>
                <span>Book a Demo</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
