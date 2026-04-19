"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [hovered,  setHovered]  = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) =>
    setMousePos({ x: e.clientX, y: e.clientY });

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-[#0A0A0A] overflow-hidden border-t border-white/[0.07]"
      onMouseMove={onMove}
    >
      {/* ── Section label bar ─────────────────────────────── */}
      <div className="flex items-center justify-between px-[6vw] py-5 border-b border-white/[0.07]">
        <span className="text-white/25 text-[10px] uppercase tracking-[0.18em] font-semibold">
          Selected Works
        </span>
        <span className="text-white/20 text-[10px] font-mono">03</span>
      </div>

      {/* ── Headline ──────────────────────────────────────── */}
      <div className="px-[6vw] pt-16 pb-12 overflow-hidden">
        <motion.h2
          initial={{ y: "105%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
          className="font-display text-[#EDEDED] uppercase leading-none"
          style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}
        >
          Selected<br />Works
        </motion.h2>
      </div>

      {/* ── Project rows ──────────────────────────────────── */}
      <div className="relative border-t border-white/[0.07]">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 + i * 0.09, duration: 0.5 }}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            className="group flex flex-col md:flex-row md:items-center justify-between gap-4 px-[6vw] py-8 md:py-10 border-b border-white/[0.07] hover:bg-white/[0.025] transition-colors duration-300 cursor-pointer"
          >
            {/* Index */}
            <span className="text-white/15 text-xs font-mono min-w-[2rem] flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Name */}
            <h3
              className="font-display text-white uppercase tracking-tight group-hover:translate-x-3 transition-transform duration-500 flex-1 md:mx-6"
              style={{ fontSize: "clamp(1.8rem, 5vw, 4.5rem)", lineHeight: 1 }}
            >
              {project.name}
            </h3>

            {/* Category + tech pills */}
            <div className="flex-1 md:text-right space-y-1.5">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.15em]">
                {project.category}
              </p>
              <div className="flex md:justify-end flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-white/18 text-[10px]">{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <a
              href={project.live !== "#" ? project.live : project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 md:ml-8 text-white/20 group-hover:text-[#7fb069] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight size={22} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* ── Floating preview card (follows cursor) ────────── */}
      <AnimatePresence>
        {hovered !== null && (() => {
          const proj = projects.find((p) => p.id === hovered);
          if (!proj) return null;
          return (
            <motion.div
              key={hovered}
              initial={{ opacity: 0, scale: 0.88, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed pointer-events-none z-50 w-[280px] h-[180px] md:w-[320px] md:h-[210px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{ left: mousePos.x + 24, top: mousePos.y - 105 }}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${proj.gradient} flex flex-col items-center justify-center`}
              >
                <p className="font-display text-[2.2rem] text-white/60 uppercase leading-none">
                  {proj.name}
                </p>
                <p className="text-white/30 text-xs mt-2 uppercase tracking-widest">
                  {proj.category}
                </p>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
