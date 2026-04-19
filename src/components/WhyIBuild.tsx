"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wrench, Zap, Layers } from "lucide-react";

export default function WhyIBuild() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-[#0A0E17]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700/60 bg-slate-800/40 text-slate-300 text-xs font-semibold uppercase tracking-wider">
              <Zap size={14} className="text-amber-400" />
              Philosophy
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight font-display">
              Why I Build
            </h2>
            
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                <strong className="text-slate-200">I solve real problems.</strong> I don't just write code for the sake of it; I architect systems that eliminate friction and replace heavy manual workflows.
              </p>
              <p>
                Whether it's an AI assistant streamlining academic interfaces or a complex automated fee management backend, my goal is to deliver <strong className="text-indigo-400 font-bold">systems, not just demos.</strong>
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-xl font-medium text-slate-300 italic">
                “I don’t just build apps. I build systems that replace manual work.”
              </p>
            </div>
          </motion.div>

          {/* Right: Visual Concept */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative w-full h-[400px] md:h-[500px]"
          >
            {/* Layered Cards representing "Systems" */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -10, 0], 
                    rotate: [-6 + i * 6, -4 + i * 6, -6 + i * 6] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeInOut" 
                  }}
                  className="absolute w-[280px] h-[360px] rounded-2xl glass-card border flex flex-col justify-between p-6 shadow-2xl"
                  style={{
                    backgroundColor: `rgba(15, 23, 42, ${0.4 + i * 0.2})`,
                    borderColor: `rgba(99, 102, 241, ${0.1 + i * 0.1})`,
                    zIndex: i,
                    transformOrigin: "bottom center"
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center opacity-50">
                      <Layers size={20} className="text-white" />
                      <div className="w-8 h-2 bg-slate-600 rounded-full" />
                    </div>
                    <div className="w-3/4 h-3 bg-slate-700 rounded-full" />
                    <div className="w-1/2 h-3 bg-slate-700/60 rounded-full" />
                  </div>
                  <div className="mt-auto space-y-2">
                    <div className="w-full h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl" />
                    <div className="w-full h-12 bg-slate-800/50 rounded-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
