"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Brush, Award, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { icon: ShieldCheck, title: "Trusted & Reliable", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { icon: Brush, title: "Meticulous Prep", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { icon: Award, title: "Premium Materials", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
    { icon: Sparkles, title: "Clean, Lasting Finish", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  ];

  return (
    <section id="why" className="mx-auto max-w-7xl px-3 sm:px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Image collage */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="aspect-[4/3] rounded-xl overflow-hidden shadow-md"
          >
            <img src="/whychooseus.jpg" alt="Collage main" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="absolute -bottom-6 -left-6 w-40 sm:w-56 aspect-[4/3] rounded-xl overflow-hidden shadow-md border-4 border-white"
          >
            <img src="/whychooseus2.jpg" alt="Collage secondary" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="absolute -top-6 -right-6 w-32 sm:w-40 aspect-[4/3] rounded-xl overflow-hidden shadow-md border-4 border-white"
          >
            <img src="/whychooseus3.jpg" alt="Collage detail" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Right: Text + features */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <h2 className="text-2xl font-semibold">Why Choose Us</h2>
            <div className="h-1 w-16 divider-gold" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="mt-3 text-black/70"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </motion.p>

          <motion.div
            className="mt-8 grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {features.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl p-5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white"
              >
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  background: "radial-gradient(600px 200px at 10% 0%, var(--brand-gold), transparent), radial-gradient(600px 200px at 90% 100%, var(--brand-green), transparent)"
                }} />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md" style={{ backgroundColor: "var(--bg-soft)" }}>
                      <Icon size={20} color="var(--brand-green)" />
                    </div>
                    <h3 className="font-medium">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-black/70">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


