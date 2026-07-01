"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  "99.9% platform uptime",
  "Enterprise Grade Security",
  "SOC 2 Compliant",
  "ISO 27001 Certified",
  "GDPR compliant",
  "Secure & Compliant",
  "USED BY 1000+ TEAMS",
  "Secure & Compliant",
  "USED BY 1000+ TEAMS",
];

export default function PricingMarqueeBar() {
  return (
    <section className="relative w-full h-[80px] sm:h-[100px] md:h-[116px] lg:h-[132px] overflow-hidden bg-[#0D0D0D]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/assets/pricing-page/tab-bar-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Marquee */}
      <div className="relative flex items-center h-full overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[0, 1].map((pass) => (
            <div key={pass} className="flex items-center">
              {items.map((text, i) => (
                <div
                  key={i}
                  className="flex gap-[8px] sm:gap-[10px] items-center pl-[16px] sm:pl-[20px] lg:pl-[24px] pr-[20px] sm:pr-[26px] lg:pr-[32px] py-[12px] sm:py-[16px] shrink-0"
                >
                  <Image
                    src="/assets/pricing-page/orange-dot.svg"
                    alt=""
                    width={17}
                    height={17}
                    className="flex-shrink-0 w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] lg:w-[17px] lg:h-[17px]"
                  />
                  <span className="font-montserrat font-medium text-[13px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white tracking-[0.5px] sm:tracking-[0.8px] uppercase leading-none whitespace-nowrap">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
