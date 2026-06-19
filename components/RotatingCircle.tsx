"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RotatingCircle() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 35, ease: "linear", repeat: Infinity }}
    >
      <Image
        src="/assets/hero/network-circle.png"
        alt=""
        fill
        className="object-contain"
        sizes="50vw"
        priority
        unoptimized
      />
    </motion.div>
  );
}
