"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const BENEFIT_PILLS = [
  { text: "More reach across more people",  top: "36px",    right: "120px" },
  { text: "Higher trust and credibility",   top: "110px",   right: "400px" },
  { text: "Stronger employee brand",        top: "594px",   right: "376px" },
  { text: "More inbound opportunities",     top: "674px",   right: "96px" },
];

const TESTIMONIAL_CARDS = [
  {
    quote: "What sets the Boost 10x program apart is how effortlessly it handles scale without losing the authentic voice of our team. It has completely automated the friction out of employee advocacy. Our leadership team and staff are consistently visible online, driving massive brand equity for the company week after week.",
    name: "Sharon D'Silva",
    title: "CMO, RSA GLOBAL",
    time: "Brilliant platform for corporate advocacy.",
  },
  {
    quote: "Before the Boost 10x program, getting our team to share company updates was like pulling teeth. Someli automated the entire process, making it seamless for our employees to become brand ambassadors. Our organic LinkedIn impressions skyrocketed by over 400% in the first 90 days. It's the ultimate leverage for corporate visibility.",
    name: "Abhilash Nair",
    title: "MD, ISS RELOCATIONS MIDDLE EAST",
    time: "Game-changer for our organic reach.",
  },
  {
    quote: "As an enterprise with a massive workforce, scaling content distribution is a logistical nightmare. Someli solved that overnight. The Boost 10x system streamlined our employee advocacy program, allowing our corporate communication team to push out updates that staff could share with a single click. The ROI on our talent branding alone has been phenomenal.",
    name: "Samuel Thomas",
    title: "MD, CHRYSELS ADVERTISING",
    time: "Maximum output, minimum effort.",
  },
  {
    quote: "We brought Someli in to help our account executives build authority on LinkedIn. The Boost 10x strategy didn't just increase their posting consistency; it positioned them as industry thought leaders. We've seen a direct correlation between our team's active advocacy on Someli and a 35% increase in inbound enterprise leads.",
    name: "Jai Patel",
    title: "CEO, CREO GLOBAL",
    time: "Our sales pipeline has never looked healthier.",
  },
];

export default function GrowthEngineSection() {
  return (
    <section className="relative w-full bg-[#0D0D0D] overflow-hidden" style={{ minHeight: 'auto' }}>
      {/* Orange swoosh background */}
      <div className="absolute inset-0 opacity-50 pointer-events-none overflow-hidden">
        <Image
          src="/assets/growth/bg-swoosh.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 md:gap-10 lg:gap-8">

        {/* LEFT: text block */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] w-full lg:flex-1 lg:min-w-0 lg:max-w-[595px]">
          <SectionHeader
            pill="People-Powered Reach"
            heading={<>Your team is your<br />greatest growth engine</>}
            description="When your team builds their personal brand your company becomes the obvious choice. Teams with 70%+ participation typically see exponential growth in visibility."
            dark
            headingClassName="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] leading-[1.2] tracking-[-1.5px] md:tracking-[-2px]"
          />

          {/* CTA */}
          <a
            href="https://capi.someli.ai/widget/bookings/someli-book-a-demo-boost"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start flex items-center gap-2 pl-5 pr-8 sm:pl-6 sm:pr-9 md:pl-7 md:pr-10 py-3 sm:py-3.5 md:py-4 rounded-full border border-[#ED6B52] text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#ED6B52] whitespace-nowrap hover:bg-[#ED6B52] hover:text-white transition-colors"
          >
            <span>Book a Demo →</span>
          </a>
        </div>

        {/* RIGHT: testimonial card stack */}
        <div className="relative overflow-hidden w-full lg:flex-1 lg:min-w-0 lg:max-w-[558px] h-[480px] sm:h-[520px] md:h-[560px] mt-10 lg:mt-16">
          <motion.div
            className="absolute top-0 left-0 flex gap-3 sm:gap-4 md:gap-[16px] items-center"
            animate={{ x: [0, -380] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {/* 4 small cards */}
            {TESTIMONIAL_CARDS.map((card, i) => (
              <div
                key={i}
                className="glass-border-card shrink-0 flex flex-col p-5 sm:p-6 md:p-[33px] rounded-[8px]"
                style={{
                  width: 'min(90vw, 364px)',
                  backgroundColor: "rgba(255,255,255,0.04)",
                  // @ts-ignore
                  "--fx-filter": "blur(4px) liquid-glass(2, 10, 1) saturate(1.25) color-overlay(black,.3) contrast(1.25)",
                }}
              >
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-[25px]">
                  <div className="w-[24px] h-[18px] sm:w-[26px] sm:h-[19px] md:w-[28px] md:h-[20px]" style={{ transform: "rotate(180deg)" }}>
                    <Image src="/assets/growth/quote-mark.svg" alt="" width={28} height={20} className="w-full h-full" />
                  </div>
                  <p
                    className="text-white font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5]"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {card.quote}
                  </p>
                  <div
                    className="flex items-center justify-between pt-2 md:pt-[8px]"
                    style={{ borderTop: "1.048px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="flex items-center gap-2 md:gap-[8px]">
                      <Image
                        src="/assets/growth/avatar.png"
                        alt={card.name}
                        width={44}
                        height={44}
                        className="rounded-full object-cover shrink-0 w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px]"
                        unoptimized
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-[6px] sm:gap-[8px]">
                          <span
                            className="text-white font-normal text-[11px] sm:text-[12px] md:text-[12.5px]"
                            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                          >
                            {card.name}
                          </span>
                          <span
                            className="font-light text-[9px] sm:text-[10px]"
                            style={{ fontFamily: "var(--font-space-grotesk), sans-serif", color: "#aaaaaa" }}
                          >
                            {card.time}
                          </span>
                        </div>
                        <span
                          className="text-[7.5px] sm:text-[8px] md:text-[8.4px]"
                          style={{ fontFamily: "var(--font-space-grotesk), sans-serif", color: "#d5d5d5" }}
                        >
                          {card.title}
                        </span>
                      </div>
                    </div>
                    <div className="relative rounded-[5px] overflow-hidden shrink-0 w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]">
                      <Image
                        src="/assets/growth/linkedin-icon.png"
                        alt="LinkedIn"
                        fill
                        className="object-cover"
                        sizes="24px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating benefit pills - hidden on mobile/tablet, inside capped container */}
      <div className="hidden lg:block absolute inset-0 max-w-[1440px] mx-auto pointer-events-none">
        {BENEFIT_PILLS.map((pill) => (
          <div
            key={pill.text}
            className="glass-border absolute flex items-center gap-[12px] px-[32px] py-[20px] rounded-full overflow-hidden pointer-events-auto"
            style={{
              top: pill.top,
              right: pill.right,
              // @ts-ignore
              "--fx-filter": "blur(4px) liquid-glass(2, 10, 1) saturate(1.25) color-overlay(black,.3) contrast(1.25)",
            }}
          >
            <Image src="/assets/growth/pill-icon.svg" alt="" width={15} height={15} />
            <span
              className="font-medium text-[#ED6B52] whitespace-nowrap"
              style={{ fontSize: 16, letterSpacing: "0.64px" }}
            >
              {pill.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
