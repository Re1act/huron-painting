"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceAreas() {
  const areas = ["Huron", "Ann Arbor", "Ypsilanti", "Saline"];
  return (
    <section id="areas" className="mx-auto max-w-7xl px-3 sm:px-6 py-14">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Heading and copy */}
        <div className="lg:col-span-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-semibold"
          >
            Service Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="mt-3 text-black/70 text-lg"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </motion.p>

          <div className="mt-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <Image src="/servicearea2.jpg" alt="Project collage 1" width={800} height={600} className="w-full h-48 object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12, y: 12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="absolute -bottom-4 -right-4 w-40 sm:w-48 rounded-xl overflow-hidden shadow-md border-4 border-white"
            >
              <Image src="/servicearea.jpg" alt="Project collage 2" width={600} height={450} className="w-full h-28 sm:h-32 object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Right: Stacked area cards */}
        <motion.div
          className="lg:col-span-8 flex flex-col gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {areas.map((city) => (
            <motion.div
              key={city}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md transition p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{city}</h3>
                <span className="text-xs text-[var(--brand-gold)]">Now serving</span>
              </div>
              <p className="mt-2 text-sm text-black/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


