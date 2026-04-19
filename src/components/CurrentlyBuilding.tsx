"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  {
    label: "AI Agents",
    desc: "Autonomous LLM-powered workflows that navigate interfaces and execute complex logic.",
  },
  {
    label: "Automation Systems",
    desc: "Efficient pipelines that parse data and eliminate manual overhead at scale.",
  },
  {
    label: "Scalable Web Apps",
    desc: "High-performance backends paired with real-time, production-grade frontends.",
  },
];

export default function CurrentlyBuilding() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#0A0A0A] border-t border-white/[0.07] px-[6vw] py-20"
    >
      {/* Tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-12"
      >
        <span className="w-2 h-2 rounded-full bg-[#7fb069] animate-pulse flex-shrink-0" />
        <span className="text-[#7fb069] text-[10px] uppercase tracking-[0.18em] font-bold">
          Currently Building
        </span>
      </motion.div>

      {/* Card grid */}
      <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
        {areas.map((area, i) => (
          <motion.div
            key={area.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.11, duration: 0.55 }}
            className="bg-[#0A0A0A] p-8 md:p-10 hover:bg-white/[0.025] transition-colors duration-300"
          >
            <span className="text-white/15 text-[10px] font-mono block mb-5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="font-display text-[1.6rem] md:text-[2rem] text-white uppercase leading-none mb-4">
              {area.label}
            </h4>
            <p className="text-white/35 text-sm leading-relaxed">{area.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
