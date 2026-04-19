"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";

const headLines = [
  "Full-stack developer.",
  "I build real systems,",
  "not just side projects.",
];

const facts = [
  { label: "Expertise",       value: "4+ Projects Shipped"         },
  { label: "Hackathon Wins",  value: "2 First Places"              },
  { label: "Currently"  ,     value: "AI Agents & Automation"      },
];

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#F0EDE6] text-[#111111] overflow-hidden"
    >
      {/* Section label */}
      <div className="flex items-center justify-between px-[6vw] py-5 border-b border-black/[0.08]">
        <span className="text-[#111111]/35 text-[10px] uppercase tracking-[0.18em] font-semibold">
          About
        </span>
        <span className="text-[#111111]/25 text-[10px] font-mono">02</span>
      </div>

      <div className="px-[6vw] py-20 md:py-28">

        {/* ── Big headline ──────────────────────────────────── */}
        <div className="mb-20 md:mb-24">
          {headLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                initial={{ y: "105%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ delay: i * 0.14, duration: 0.82, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
                className="font-display leading-[0.92] text-[#111111] uppercase"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* ── Two-column body ───────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 border-t border-black/[0.08] pt-14">

          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.65 }}
            className="space-y-5"
          >
            <p className="text-[#111111]/70 text-[1.05rem] leading-relaxed">
              I&apos;m{" "}
              <span className="text-[#111111] font-bold">Samarth Sugandhi</span>,
              a full-stack developer in my{" "}
              <span className="text-[#7fb069] font-bold">
                6th semester at BEC (Information Science)
              </span>
              .
            </p>
            <p className="text-[#111111]/55 leading-relaxed">
              I build production-grade systems — from AI-integrated platforms to
              robust financial tools. I care about the entire stack: architecting
              databases, designing clean APIs, and crafting pixel-perfect UIs.
            </p>
            <p className="text-[#111111]/55 leading-relaxed">
              Currently exploring{" "}
              <span className="font-semibold text-[#111111]">
                AI agents and intelligent automation
              </span>{" "}
              — integrating LLMs into real products that people actually use.
            </p>
            <div className="pt-2 inline-flex items-center gap-2 text-sm text-[#111111]/40">
              🎓 {personalInfo.education}
            </div>
          </motion.div>

          {/* Right — fact list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.62, duration: 0.65 }}
          >
            {facts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center justify-between py-5 border-b border-black/[0.08] group"
              >
                <span className="text-[#111111]/35 text-[10px] uppercase tracking-[0.15em]">
                  {item.label}
                </span>
                <span className="text-[#111111] font-semibold text-sm group-hover:text-[#7fb069] transition-colors duration-200">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
