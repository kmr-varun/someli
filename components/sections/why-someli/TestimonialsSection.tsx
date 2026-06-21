"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Most founders think growth comes from ads. It doesn't. It comes from consistent visibility.",
    author: "Ananya Sharma",
    role: "Founder & CEO",
    timeAgo: "1 month",
    avatar: "/assets/why-someli/author-avatar.png",
    companyLogo: "/assets/why-someli/company-logo.png",
  },
  {
    quote:
      "Your team sharing their work is worth 10x any paid campaign. We grew 3x in 6 months.",
    author: "Rahul Mehta",
    role: "Head of Growth",
    timeAgo: "2 months",
    avatar: "/assets/why-someli/author-avatar.png",
    companyLogo: "/assets/why-someli/company-logo.png",
  },
  {
    quote:
      "Employee advocacy changed everything. Our inbound pipeline doubled in one quarter.",
    author: "Priya Nair",
    role: "Marketing Director",
    timeAgo: "3 weeks",
    avatar: "/assets/why-someli/author-avatar.png",
    companyLogo: "/assets/why-someli/company-logo.png",
  },
];

function TestimonialCard({ testimonial, size, onClick }: { testimonial: typeof testimonials[0]; size: "small" | "large"; onClick?: () => void }) {
  const isLarge = size === "large";

  return (
    <div
      className={`glass-border bg-[rgba(255,255,255,0.04)] ${isLarge ? "rounded-[10.109px] p-6 sm:p-8 lg:p-10 w-full max-w-[508px]" : "rounded-[8.382px] p-6 sm:p-8 w-full max-w-[363px] opacity-50"} shrink-0 ${onClick ? "cursor-pointer hover:opacity-70 transition-opacity" : ""}`}
      onClick={onClick}
    >
      <div className={`flex flex-col ${isLarge ? "gap-6 sm:gap-[30px]" : "gap-6"}`}>
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-[60px]">
          <div className="rotate-180">
            <Image
              src="/assets/why-someli/quote-icon.svg"
              alt=""
              width={34}
              height={24}
            />
          </div>
          <p className={`font-['Space_Grotesk'] ${isLarge ? "text-[16px] sm:text-[18px] lg:text-[21.481px]" : "text-[15px] sm:text-[17.811px]"} text-white leading-[1.5]`}>
            {testimonial.quote}
          </p>
        </div>
        <div className={`border-t border-[rgba(255,255,255,0.1)] ${isLarge ? "pt-2 sm:pt-[10px]" : "pt-2"}`}>
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${isLarge ? "gap-2 sm:gap-[10px]" : "gap-2"}`}>
              <Image
                src={testimonial.avatar}
                alt=""
                width={isLarge ? 53 : 44}
                height={isLarge ? 55 : 46}
                className="rounded-full shrink-0"
              />
              <div className="min-w-0">
                {isLarge ? (
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-['Space_Grotesk'] text-[13px] sm:text-[15.163px] text-white">
                      {testimonial.author}
                    </p>
                    <p className="font-['Space_Grotesk'] font-light text-[11px] sm:text-[12px] text-[#7A7A7A]">
                      {testimonial.timeAgo}
                    </p>
                  </div>
                ) : (
                  <p className="font-['Space_Grotesk'] text-[11px] sm:text-[12.572px] text-white">
                    {testimonial.author}
                  </p>
                )}
                <p className={`font-['Space_Grotesk'] ${isLarge ? "text-[9px] sm:text-[10.109px]" : "text-[8px] sm:text-[8.382px]"} text-[#D5D5D5]`}>
                  {testimonial.role}
                </p>
              </div>
              {!isLarge && (
                <p className="font-['Space_Grotesk'] font-light text-[6.286px] text-[#D5D5D5] hidden sm:block">
                  {testimonial.timeAgo}
                </p>
              )}
            </div>
            <Image
              src={testimonial.companyLogo}
              alt=""
              width={isLarge ? 29 : 24}
              height={isLarge ? 29 : 24}
              className={`${isLarge ? "rounded-[6px]" : "rounded-[5px]"} shrink-0`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPrevIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (currentIndex + 1) % testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative w-full bg-[#111] py-12 sm:py-16 md:py-20 lg:py-[120px] overflow-hidden">
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <Image
          src="/assets/why-someli/testimonials-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-[100px]">
          <div className="bg-[rgba(237,107,82,0.16)] border border-[rgba(237,107,82,0.16)] px-[15px] py-[7px] rounded-full">
            <p className="font-montserrat font-normal text-[10px] text-[#ED6B52] tracking-[1px] uppercase leading-[15px]">
              TESTIMONIALS
            </p>
          </div>
          <h2 className="font-montserrat font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-white tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] leading-[1.2] lg:leading-[71.4px] text-center px-4">
            Loved by teams, trusted by leaders.
          </h2>
        </div>

        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden lg:flex items-center justify-center gap-4">
            <TestimonialCard testimonial={testimonials[getPrevIndex()]} size="small" onClick={handlePrev} />
            <TestimonialCard testimonial={testimonials[currentIndex]} size="large" />
            <TestimonialCard testimonial={testimonials[getNextIndex()]} size="small" onClick={handleNext} />
          </div>

          {/* Mobile/Tablet: 1 card */}
          <div className="flex lg:hidden items-center justify-center">
            <TestimonialCard testimonial={testimonials[currentIndex]} size="large" />
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#ED6B52] w-8"
                    : "bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
