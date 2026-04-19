"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "4+",   label: "Projects Shipped"  },
  { value: "2×",   label: "Hackathon Winner"   },
  { value: "100",  label: "Lighthouse Score"   },
];

const lines = [
  { text: "I BUILD",        accent: false },
  { text: "SYSTEMS",        accent: true  },
  { text: "THAT ACTUALLY",  accent: false },
  { text: "WORK.",          accent: false },
];

export default function Hero() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const reveal = (i: number) => ({
    hidden:  { y: "115%", opacity: 0 },
    visible: {
      y: 0, opacity: 1,
      transition: { delay: 0.15 + i * 0.13, duration: 0.85, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
    },
  });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col bg-[#0A0A0A] border-b border-white/[0.07]"
    >
      {/* ── Stats bar ─────────────────────────────────────────── */}
      <div className="grid grid-cols-3 border-b border-white/[0.07] pt-24 md:pt-28">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 + i * 0.1, duration: 0.55 }}
            className={`px-[4vw] md:px-[6vw] py-6 ${i < 2 ? "border-r border-white/[0.07]" : ""}`}
          >
            <p className="font-display text-[8vw] md:text-5xl lg:text-6xl text-white leading-none">{s.value}</p>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.15em] mt-1.5">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* ── Main headline ──────────────────────────────────────── */}
      <div className="flex-1 flex items-center px-[4vw] md:px-[5vw] py-14 md:py-20">
        <div className="w-full">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden leading-none">
              <motion.h1
                variants={reveal(i)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={[
                  "font-display leading-[0.84] tracking-tight block select-none",
                  "text-[14vw] md:text-[13vw]",
                  line.accent ? "text-[#7fb069]" : "text-white",
                ].join(" ")}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom strip ──────────────────────────────────────── */}
      <div className="grid md:grid-cols-2 border-t border-white/[0.07]">
        <div className="px-[6vw] py-9 border-b md:border-b-0 md:border-r border-white/[0.07]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="text-white/45 text-base md:text-lg leading-relaxed max-w-md"
          >
            I don&apos;t just build websites. I architect scalable backend systems,
            autonomous agents, and fluid interfaces to solve real-world problems.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="px-[6vw] py-9 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#7fb069] hover:bg-[#6a9658] text-[#0A0A0A] font-bold text-[11px] uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Work <ArrowUpRight size={15} />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2.5 px-7 py-4 rounded-full border border-white/15 text-white hover:border-white/40 hover:bg-white/[0.04] font-bold text-[11px] uppercase tracking-widest transition-all duration-300"
          >
            Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
}
