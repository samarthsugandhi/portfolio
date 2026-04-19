"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BlockData {
  num:         string;
  title:       string;
  tagline:     string;
  desc:        string;
  bg:          string;
  textColor:   string;
  mutedColor:  string;
  borderColor: string;
  scrollTo:    string;
}

const blocks: BlockData[] = [
  {
    num:         "01",
    title:       "Full Stack\nEngineering",
    tagline:     "( every line is impact )",
    desc:        "I architect and build complete systems — from scalable database schemas and REST API design to performant, pixel-perfect user interfaces. I write clean code with long-term maintainability in mind.",
    bg:          "#0A0A0A",
    textColor:   "#EDEDED",
    mutedColor:  "rgba(237,237,237,0.38)",
    borderColor: "rgba(255,255,255,0.07)",
    scrollTo:    "projects",
  },
  {
    num:         "02",
    title:       "AI &\nAutomation",
    tagline:     "( intelligent systems )",
    desc:        "Integrating LLMs and autonomous agents into real product workflows. From AI assistants to automated data pipelines — I build systems that replace manual overhead and deliver tangible value.",
    bg:          "#C75B7A",
    textColor:   "#0A0A0A",
    mutedColor:  "rgba(10,10,10,0.48)",
    borderColor: "rgba(0,0,0,0.12)",
    scrollTo:    "projects",
  },
  {
    num:         "03",
    title:       "Systems\nDesign",
    tagline:     "( choosing the right problem )",
    desc:        "Before writing a line of code, I think deeply about the architecture. Role-based access, real-time data, race conditions, and edge cases — I plan for systems that scale beyond the demo.",
    bg:          "#3D5A8E",
    textColor:   "#F0EDE6",
    mutedColor:  "rgba(240,237,230,0.45)",
    borderColor: "rgba(0,0,0,0.12)",
    scrollTo:    "about",
  },
];

function Block({ block, index }: { block: BlockData; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div ref={ref} style={{ backgroundColor: block.bg }} className="overflow-hidden">
      <div
        className="px-[6vw] py-20 md:py-28 grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-start border-b"
        style={{ borderColor: block.borderColor }}
      >
        {/* Left — number + title */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.04, duration: 0.5 }}
            className="text-sm font-mono mb-5"
            style={{ color: block.mutedColor }}
          >
            {block.num}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "105%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.82, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
              className="font-display leading-[0.88] uppercase whitespace-pre-line"
              style={{
                color: block.textColor,
                fontSize: "clamp(3rem, 8vw, 7rem)",
              }}
            >
              {block.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="mt-4 text-sm"
            style={{ color: block.mutedColor }}
          >
            {block.tagline}
          </motion.p>
        </div>

        {/* Right — description + link */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.32, duration: 0.65 }}
          className="flex flex-col justify-between h-full gap-14 md:pt-4"
        >
          <p className="text-base md:text-lg leading-relaxed" style={{ color: block.mutedColor }}>
            {block.desc}
          </p>
          <button
            onClick={() => scrollTo(block.scrollTo)}
            className="self-start flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-bold hover:gap-4 transition-all duration-300"
            style={{ color: block.textColor }}
          >
            Learn more <ArrowUpRight size={14} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default function WhyIBuild() {
  return (
    <section className="border-t border-white/[0.07]">
      {blocks.map((block, i) => (
        <Block key={block.num} block={block} index={i} />
      ))}
    </section>
  );
}
