"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24" style={{ backgroundColor: "var(--brand-green)" }}>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-3 sm:px-6 py-12 text-white"
      >
        <div className="grid gap-8 md:grid-cols-4 items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="flex items-center justify-center md:items-center md:justify-center"
          >
            <Image src="/huron-logo-edited.png" alt="Huron Pro Painting" width={120} height={120} className="rounded-md" priority />
          </motion.div>
          <div>
            <div className="font-medium">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#gallery">Projects</Link></li>
              <li><Link href="#areas">Service Areas</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>Phone: (734) 307‑0721</li>
              <li>Email: admin@huronpropainting.com</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Get a Free Estimate</div>
            <p className="mt-3 text-sm text-white/80">Tell us about your project and we’ll get back within 24 hours.</p>
            <div className="mt-4">
              <Link href="#estimate" className="btn btn-outline-gold rounded-full px-5 py-2">Request Estimate</Link>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-1 w-24 divider-gold mt-10"
        />
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/70">
          <div>© {new Date().getFullYear()} Huron Pro Painting. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#">Privacy</Link>
            <span>•</span>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}


