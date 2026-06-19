"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BENEFIT_PILLS = [
  { text: "More reach across more people",  top: "36px",    left: "967px" },
  { text: "Higher trust and credibility",   top: "96px",   left: "687px" },
  { text: "Stronger employee brand",        top: "554px",   left: "711px" },
  { text: "More inbound opportunities",     top: "634px",   left: "1041px" },
];

const TESTIMONIAL_CARDS = [
  {
    quote: "Most founders think growth comes from ads. It doesn't. It comes from consistent visibility.",
    name: "Ananya Sharma",
    title: "Founder & CEO",
    time: "1 month",
  },
  {
    quote: "Your team sharing their work is worth 10x any paid campaign. We grew 3x in 6 months.",
    name: "Rahul Mehta",
    title: "Head of Growth",
    time: "2 months",
  },
  {
    quote: "Employee advocacy changed everything. Our inbound pipeline doubled in one quarter.",
    name: "Priya Nair",
    title: "Marketing Director",
    time: "3 weeks",
  },
  {
    quote: "We stopped running ads and started empowering our team. Best decision we ever made.",
    name: "Karan Gupta",
    title: "Co-Founder",
    time: "5 weeks",
  },
];

export default function GrowthEngineSection() {
  return (
    <section className="relative w-full bg-[#111]" style={{ minHeight: 709 }}>
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
      <div className="relative px-24 py-[120px] flex items-center justify-between gap-8">

        {/* LEFT: text block */}
        <div className="flex flex-col gap-[40px] shrink-0 w-[595px]">
          {/* Pill label */}
          <div className="flex flex-col gap-[16px]">
            <div
              className="self-start flex items-center px-[15px] py-[7px] rounded-full border"
              style={{ backgroundColor: "rgba(237,107,82,0.16)", borderColor: "rgba(237,107,82,0.16)" }}
            >
              <span className="text-[10px] font-normal text-[#ED6B52] tracking-[1px] uppercase whitespace-nowrap">
                People-Powered Reach
              </span>
            </div>

            {/* H2 */}
            <h2
              className="font-bold text-white"
              style={{ fontSize: 60, lineHeight: "71.4px", letterSpacing: "-2px" }}
            >
              Your team is your<br />greatest growth engine
            </h2>
          </div>

          {/* Body */}
          <p className="text-[18px] text-white leading-[1.5] font-normal">
            When your team builds their personal brand your company becomes the obvious choice. Teams with 70%+ participation typically see exponential growth in visibility.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="self-start flex items-center gap-2 pl-7 pr-10 py-4 rounded-full border border-[#ED6B52] text-[16px] font-bold text-[#ED6B52] whitespace-nowrap"
          >
            <span>•</span>
            <span>Build your team&apos;s influence →</span>
          </a>
        </div>

        {/* RIGHT: testimonial card stack */}
        <div className="relative shrink-0 overflow-hidden" style={{ width: 558, height: 358 }}>
          <motion.div
            className="absolute top-0 left-0 flex gap-[16px] items-center"
            animate={{ x: [0, -380] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {/* 4 small cards */}
            {TESTIMONIAL_CARDS.map((card, i) => (
              <div
                key={i}
                className="glass-border-card shrink-0 flex flex-col p-[33px] rounded-[8px]"
                style={{
                  width: 364,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  // @ts-ignore
                  "--fx-filter": "blur(4px) liquid-glass(2, 10, 1) saturate(1.25) color-overlay(black,.3) contrast(1.25)",
                }}
              >
                <div className="flex flex-col gap-[25px]">
                  <div style={{ transform: "rotate(180deg)", width: 28, height: 20 }}>
                    <Image src="/assets/growth/quote-mark.svg" alt="" width={28} height={20} />
                  </div>
                  <p
                    className="text-white font-normal"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 17.8, lineHeight: 1.5 }}
                  >
                    {card.quote}
                  </p>
                  <div
                    className="flex items-center justify-between pt-[8px]"
                    style={{ borderTop: "1.048px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="flex items-center gap-[8px]">
                      <Image
                        src="/assets/growth/avatar.png"
                        alt={card.name}
                        width={44}
                        height={44}
                        className="rounded-full object-cover shrink-0"
                        unoptimized
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-[8px]">
                          <span
                            className="text-white font-normal"
                            style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 12.5 }}
                          >
                            {card.name}
                          </span>
                          <span
                            className="font-light"
                            style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 10, color: "#aaaaaa" }}
                          >
                            {card.time}
                          </span>
                        </div>
                        <span
                          style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: 8.4, color: "#d5d5d5" }}
                        >
                          {card.title}
                        </span>
                      </div>
                    </div>
                    <div className="relative rounded-[5px] overflow-hidden shrink-0" style={{ width: 24, height: 24 }}>
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

      {/* Floating benefit pills */}
      {BENEFIT_PILLS.map((pill) => (
        <div
          key={pill.text}
          className="glass-border absolute flex items-center gap-[12px] px-[32px] py-[20px] rounded-full overflow-hidden"
          style={{
            top: pill.top,
            left: pill.left,
            position: "absolute",
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
    </section>
  );
}
