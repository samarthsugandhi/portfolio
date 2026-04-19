"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";

const statsRow = [
  { v: "2+",  l: "Hackathons"  },
  { v: "24h", l: "Sprint"      },
  { v: "1st", l: "Placement"   },
];

export default function Achievements() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      ref={ref}
      className="bg-[#0A0A0A] border-t border-white/[0.07] overflow-hidden"
    >
      {/* Section label */}
      <div className="flex items-center justify-between px-[6vw] py-5 border-b border-white/[0.07]">
        <span className="text-white/25 text-[10px] uppercase tracking-[0.18em] font-semibold">
          Recognition
        </span>
        <span className="text-white/20 text-[10px] font-mono">05</span>
      </div>

      <div className="px-[6vw] py-20 md:py-28 grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-20 items-start">

        {/* ── Left: heading + subtitle ──────────────────────── */}
        <div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.82, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
              className="font-display text-white uppercase leading-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              Wins That<br />Matter.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="text-white/38 text-base leading-relaxed mt-8 max-w-xs"
          >
            Results from competing and building under real time pressure — against
            real teams, on real problems.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex gap-10 mt-14 pt-10 border-t border-white/[0.07]"
          >
            {statsRow.map((s) => (
              <div key={s.l}>
                <p className="font-display text-[2.8rem] text-white leading-none">{s.v}</p>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.15em] mt-1.5">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: achievement list ────────────────────────── */}
        <div className="border-t border-white/[0.07]">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className="group flex items-start gap-6 py-9 border-b border-white/[0.07] hover:bg-white/[0.02] -mx-[6vw] px-[6vw] transition-colors duration-300"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div className="flex-1">
                <span className="text-white/25 text-[10px] font-mono">{item.year}</span>
                <h3
                  className="font-display text-white uppercase mt-1 leading-none"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/30 text-[10px] uppercase tracking-[0.14em] mt-2">
                  {item.subtitle}
                </p>
                <p className="text-white/42 text-sm leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
