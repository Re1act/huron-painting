import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huron Pro Painting | Interior & Exterior Painting",
  description: "Premium interior/exterior painting, decks, power washing, and drywall repair. Sherwin-Williams Emerald & Duration. Free estimates.",
  icons: {
    icon: "/huron-logo.png",
    shortcut: "/huron-logo.png",
    apple: "/huron-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <footer className="mt-24 border-t border-black/10">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 py-10 grid gap-4 sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-black/70">© {new Date().getFullYear()} Huron Pro Painting. All rights reserved.</p>
            <div className="h-1 w-24 divider-gold" />
          </div>
        </footer>
      </body>
    </html>
  );
}
