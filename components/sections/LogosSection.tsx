"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const LOGOS = [
  { src: "/assets/logos/logomark.svg",  width: 35,  height: 35,  alt: "Logo mark" },
  { src: "/assets/logos/logotype.svg",  width: 219, height: 17,  alt: "Logotype" },
  { src: "/assets/logos/logotype1.svg", width: 108, height: 35,  alt: "Logo" },
  { src: "/assets/logos/logotype2.svg", width: 112, height: 35,  alt: "Logotype 2" },
];

interface LogosSectionProps {
  label?: string;
}

export default function LogosSection({ label = "Businesses That Grow With Someli" }: LogosSectionProps) {
  return (
    <section className="w-full bg-white py-[80px] overflow-hidden">
      <div className="flex flex-col gap-[46px] items-center">
        {/* Label */}
        <p className="text-[17px] font-normal text-[#222] tracking-[1.36px] uppercase">
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
              <div key={pass} className="flex items-center gap-[100px] pr-[100px]">
                {LOGOS.map((logo, i) => (
                  <div key={i} className="shrink-0 flex items-center justify-center" style={{ width: logo.width, height: 35 }}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain"
                      style={{ maxHeight: 35 }}
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
