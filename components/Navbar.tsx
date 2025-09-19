"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 w-full transition-colors " +
        (scrolled ? "bg-[var(--brand-green)]/95 backdrop-blur shadow-sm" : "bg-transparent")
      }
    >
      <div className="w-full px-4 sm:px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/huron-logo-edited.png"
            alt="Huron Pro Painting logo"
            width={64}
            height={64}
            className="rounded-md object-contain"
            priority
          />
          <span className={scrolled ? "text-white font-semibold tracking-wide" : "text-white font-semibold tracking-wide"}>
            Huron Pro Painting
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { href: "#services", label: "Services" },
            { href: "#gallery", label: "Gallery" },
            { href: "#areas", label: "Service Areas" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={(scrolled ? "text-white " : "text-white ") + "relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[var(--brand-gold-grad-start)] after:to-[var(--brand-gold-grad-end)] hover:after:w-full after:transition-all after:duration-300"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#estimate"
            className={
              (scrolled
                ? "bg-white text-[var(--brand-green)] hover:bg-white/90 "
                : "bg-white/15 hover:bg-white/25 text-white ") + "rounded-md px-4 py-2 text-sm font-medium"
            }
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}


