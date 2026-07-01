"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface LogoItem {
  src: string;
  alt: string;
}

const BUSINESS_LOGOS: LogoItem[] = [
  { src: "/assets/logos/businesses/difc-insurance-association.png", alt: "DIFC Insurance Association" },
  { src: "/assets/logos/businesses/the-speaker-awards.png", alt: "The Speaker Awards" },
  { src: "/assets/logos/businesses/rsa-global.png", alt: "RSA Global" },
  { src: "/assets/logos/businesses/hira-industries.png", alt: "Hira Industries" },
  { src: "/assets/logos/businesses/chrysels.png", alt: "Chrysels" },
  { src: "/assets/logos/businesses/corporate-connections.png", alt: "Corporate Connections" },
  { src: "/assets/logos/businesses/australian-business-council.png", alt: "Australian Business Council" },
  { src: "/assets/logos/businesses/iss-relocations.png", alt: "ISS Relocations" },
  { src: "/assets/logos/businesses/team-one.png", alt: "Team One" },
];

export const PARTNERSHIP_LOGOS: LogoItem[] = [
  { src: "/assets/logos/partnerships/spc-free-zone.png", alt: "SPC Free Zone" },
  { src: "/assets/logos/partnerships/meydan-fz.png", alt: "Meydan FZ" },
  { src: "/assets/logos/partnerships/shams-free-zone.png", alt: "Shams Free Zone" },
  { src: "/assets/logos/partnerships/virtuzone.png", alt: "Virtuzone" },
  { src: "/assets/logos/partnerships/corporate-connections.png", alt: "Corporate Connections" },
  { src: "/assets/logos/partnerships/creative-zone.png", alt: "Creative Zone" },
];

interface LogosSectionProps {
  label?: string;
  logos?: LogoItem[];
}

export default function LogosSection({ label = "Businesses That Grow With Someli", logos = BUSINESS_LOGOS }: LogosSectionProps) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-[80px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[46px] items-center">
        {/* Label */}
        <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] font-normal text-[#222] tracking-[1px] sm:tracking-[1.2px] md:tracking-[1.36px] uppercase px-4 text-center">
          {label}
        </p>

        {/* Marquee track */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {/* Two identical strips for seamless loop */}
            {[0, 1].map((pass) => (
              <div key={pass} className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-[100px] pr-12 sm:pr-16 md:pr-20 lg:pr-[100px]">
                {logos.map((logo, i) => (
                  <div
                    key={i}
                    className="shrink-0 flex items-center justify-center h-[40px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={40}
                      className="object-contain h-full w-auto"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
