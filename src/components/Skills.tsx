"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref      = useRef<HTMLElement>(null);
  const inView   = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number>(0);

  const toggle = (i: number) => setOpen(open === i ? -1 : i);

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-[#F0EDE6] text-[#111111] overflow-hidden"
    >
      {/* Section label */}
      <div className="flex items-center justify-between px-[6vw] py-5 border-b border-black/[0.08]">
        <span className="text-[#111111]/35 text-[10px] uppercase tracking-[0.18em] font-semibold">
          Stack
        </span>
        <span className="text-[#111111]/25 text-[10px] font-mono">04</span>
      </div>

      <div className="px-[6vw] py-20 md:py-24">

        {/* ── Headline ──────────────────────────────────────── */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "105%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.82, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
            className="font-display text-[#111111] uppercase leading-none"
            style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
          >
            Tools I build with.
          </motion.h2>
        </div>

        {/* ── Accordion rows ────────────────────────────────── */}
        <div className="border-t border-black/[0.08]">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 + i * 0.08 }}
              className="border-b border-black/[0.08]"
            >
              {/* Row header */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 md:py-7 group text-left"
              >
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-[#111111]/25 font-mono text-xs min-w-[1.8rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-display text-[#111111] uppercase group-hover:translate-x-2 transition-transform duration-300"
                    style={{ fontSize: "clamp(1.6rem, 4vw, 3.5rem)", lineHeight: 1 }}
                  >
                    {group.category}
                  </span>
                </div>
                {/* Plus / minus */}
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="text-[#111111]/35 text-2xl font-light leading-none flex-shrink-0"
                >
                  +
                </motion.span>
              </button>

              {/* Expandable skill tags */}
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-3 pb-8 pl-[calc(1.8rem+1.5rem+2.5rem)] md:pl-[calc(1.8rem+2.5rem+4rem)]">
                      {group.items.map((skill, j) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: j * 0.04, duration: 0.3 }}
                          className="px-4 py-2 rounded-full border border-black/[0.12] text-[#111111]/60 text-sm hover:border-[#7fb069] hover:text-[#111111] transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
