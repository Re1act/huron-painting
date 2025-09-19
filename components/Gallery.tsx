"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-3 sm:px-6 py-16 text-center">
      <div className="flex items-center justify-center gap-3">
        <h2 className="text-3xl sm:text-4xl font-semibold">Recent Work</h2>
        <div className="h-1 w-16 divider-gold" />
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {[0, 1].map((projectIdx) => (
          <motion.div
            key={projectIdx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition">
                    <Image src={`https://placehold.co/800x600/png`} alt={`Project ${projectIdx + 1} A`} width={800} height={600} className="w-full h-44 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                  <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
                    <div className="max-w-5xl w-full">
                      <Image src={`https://placehold.co/1600x1200/png`} alt={`Project ${projectIdx + 1} A`} width={1600} height={1200} className="w-full h-auto rounded shadow-2xl" />
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <div className="grid gap-3">
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition">
                      <Image src={`https://placehold.co/800x1000/png`} alt={`Project ${projectIdx + 1} B`} width={800} height={1000} className="w-full h-44 sm:h-28 object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                    <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
                      <div className="max-w-5xl w-full">
                        <Image src={`https://placehold.co/1600x2000/png`} alt={`Project ${projectIdx + 1} B`} width={1600} height={2000} className="w-full h-auto rounded shadow-2xl" />
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition">
                      <Image src={`https://placehold.co/800x600/png`} alt={`Project ${projectIdx + 1} C`} width={800} height={600} className="w-full h-44 sm:h-28 object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                    <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
                      <div className="max-w-5xl w-full">
                        <Image src={`https://placehold.co/1600x1200/png`} alt={`Project ${projectIdx + 1} C`} width={1600} height={1200} className="w-full h-auto rounded shadow-2xl" />
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
            <div className="mt-3 text-left">
              <h3 className="font-medium text-lg">Project {projectIdx + 1}</h3>
              <p className="text-sm text-black/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


