"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/hero-image.jpg"
        alt="Painting hero"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 py-40 sm:py-56 text-white min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center text-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-6xl sm:text-7xl font-medium tracking-tight"
          >
            Huron Pro Painting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mt-6 text-white/90 text-xl sm:text-2xl"
          >
            Get a free, no‑obligation estimate for interior, exterior, and deck painting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-8 flex items-center justify-center"
          >
            <a href="#estimate" className="btn-primary rounded-md px-6 py-3 text-base font-semibold">
              Get a Free Estimate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


