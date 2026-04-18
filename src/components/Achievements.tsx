"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-px opacity-30 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4 inline-block">
            Recognition & Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight font-display mb-4">
            Wins that matter.
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-base">
            Results from competing and building under pressure.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-700/50 pl-8 md:pl-12 ml-4 md:ml-0 space-y-12">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative p-8 rounded-2xl glass-panel group transition-all duration-300 ${item.highlight ? "border-amber-500/30" : "border-slate-700/50"}`}
            >
              {/* Timeline marker / Icon */}
              <div 
                className={`absolute -left-[54px] md:-left-[76px] top-6 w-12 h-12 rounded-full border-4 border-slate-900 flex items-center justify-center text-xl shadow-xl z-20 transition-transform group-hover:scale-110 ${item.highlight ? "bg-amber-500/20 text-amber-400 border-amber-500/50 ring-4 ring-amber-500/10 animate-pulse" : "bg-slate-800 text-slate-300 border-slate-600"}`}
                style={{ backgroundColor: `${item.color}20`, borderColor: `${item.color}50` }}
              >
                {item.icon}
              </div>

              {/* Background Glow if highlighted */}
              {item.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent rounded-2xl pointer-events-none" />
              )}

              <div className="relative z-10">
                <span 
                  className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border"
                  style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}10` }}
                >
                  {item.year}
                </span>
                
                <h3 className="text-2xl font-black text-white font-display mb-1">{item.title}</h3>
                <h4 className="text-sm font-bold uppercase tracking-wide mb-4" style={{ color: item.color }}>{item.subtitle}</h4>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {[
            { v: "2+", l: "Hackathons" },
            { v: "24h", l: "Sprinter" },
            { v: "1st", l: "Placement" }
          ].map((stat) => (
            <div key={stat.l} className="text-center group">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-1 font-display group-hover:from-amber-400 group-hover:to-amber-600 transition-all">
                {stat.v}
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
