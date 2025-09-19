"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const cards = [
    { title: "Interior Painting", img: "/interior-painting.jpg" },
    { title: "Exterior Painting", img: "/exterior-painting.jpg" },
    { title: "Decks & Furniture", img: "/furniture.jpg" },
    { title: "Power Washing", img: "/powerwashing.jpg" },
    { title: "Drywall Repair + Trim & Doors", img: "/drywallrepair.jpg" },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-3 sm:px-6 py-16 text-center">
      <div className="flex items-center justify-center gap-3">
        <h2 className="text-3xl sm:text-4xl font-semibold">Our Services</h2>
        <div className="h-1 w-16 divider-gold" />
      </div>
      <p className="mt-3 text-black/70 max-w-3xl mx-auto text-lg">
        Interior and exterior painting, deck and outdoor furniture staining, power washing,
        and basic drywall repair. Meticulous prep and premium materials for durable results.
      </p>
      <motion.div
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {cards.map((card) => {
          const isCombined = card.title.startsWith("Drywall Repair");
          return (
            <motion.div
              key={card.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={
                "group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 " +
                (isCombined ? "lg:col-span-2" : "")
              }
            >
              <Image
                src={card.img}
                alt={card.title}
                width={1200}
                height={600}
                className={
                  "w-full object-cover transition-transform duration-300 group-hover:scale-105 " +
                  (isCombined ? "h-64 sm:h-72 lg:h-80" : "h-56 sm:h-64")
                }
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/50" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-center">
                <h3 className="text-white font-medium text-xl">
                  <span className="bg-black/20 px-2 py-1 rounded">{card.title}</span>
                </h3>
              </div>
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--brand-gold-grad-start)] to-[var(--brand-gold-grad-end)]" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}


