"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2, LayoutTemplate, Briefcase, Boxes, Database } from "lucide-react";
import { projects } from "@/lib/data";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const categoryIcons: Record<string, React.ElementType> = {
  "Full Stack": Database,
  "Finance": Briefcase,
  "EdTech": LayoutTemplate,
  "Events": Boxes,
};

function MockupImage({ title, gradient }: { title: string, gradient: string }) {
  return (
    <div className={`w-full h-full min-h-[300px] md:min-h-[450px] relative rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} p-6 flex flex-col`}>
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
      <div className="w-full h-8 bg-black/20 backdrop-blur-md rounded-t-lg flex items-center px-4 gap-2 border-b border-white/5 relative z-10">
        <div className="w-3 h-3 rounded-full bg-red-400/80" />
        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
        <div className="w-3 h-3 rounded-full bg-green-400/80" />
      </div>
      <div className="flex-1 bg-black/40 backdrop-blur-xl rounded-b-lg border border-white/5 p-6 flex items-center justify-center relative z-10">
        <h3 className="text-3xl lg:text-4xl font-black text-white/40 tracking-widest font-display text-center uppercase drop-shadow-xl">{title}</h3>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest">
              Featured Work
            </span>
            <div className="h-px w-16 bg-indigo-500/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight font-display mb-4">
            Production Showcases.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of highly scalable systems and user-centric interfaces built to solve real operational bottlenecks.
          </p>
        </motion.div>

        {/* Featured Project Layout */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-32 flex flex-col xl:flex-row items-center gap-12 group"
          >
            {/* Left Content */}
            <div className="xl:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest">
                🏆 Hackathon Winning Project
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white font-display">
                {featuredProject.name}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {featuredProject.description}
              </p>
              
              <div className="space-y-4 py-6 border-y border-white/10">
                <div>
                  <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wide mb-2"><span className="text-white">01.</span> Problem</h4>
                  <p className="text-gray-400 text-sm">{featuredProject.modalDetails?.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-green-400 uppercase tracking-wide mb-2"><span className="text-white">02.</span> Solution</h4>
                  <p className="text-gray-400 text-sm">{featuredProject.modalDetails?.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-sky-400 uppercase tracking-wide mb-2"><span className="text-white">03.</span> Impact</h4>
                  <p className="text-gray-400 text-sm">{featuredProject.modalDetails?.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-800 rounded-md text-xs font-medium text-slate-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-500/30">
                  <ExternalLink size={16} /> Live Project
                </a>
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-all duration-300 bg-white/5">
                  <GithubIcon size={16} /> Repository
                </a>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="xl:w-1/2 w-full h-[500px] xl:h-[600px] group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl rounded-2xl relative">
              {/* Outer conceptual glow */}
              <div className="absolute -inset-4 bg-indigo-500/20 rounded-[2rem] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <MockupImage title={featuredProject.name} gradient={featuredProject.gradient} />
            </div>
          </motion.div>
        )}

        {/* Regular Projects via Alternating Layout */}
        <div className="space-y-32">
          {regularProjects.map((project, idx) => {
            const isImageRight = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-12 group items-center ${isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Text Side */}
                <div className="lg:w-1/2 space-y-6">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}30`,
                      backgroundColor: `${project.accentColor}10`,
                    }}
                  >
                    {project.category}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white font-display">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {project.modalDetails?.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span style={{ color: project.accentColor }} className="mt-0.5">▹</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-xs font-medium text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-500/30 text-sm font-semibold flex items-center gap-2">
                      <ExternalLink size={16} /> View Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-slate-600 hover:border-slate-400 focus:outline-none text-slate-300 hover:text-white transition-all duration-300 bg-white/5">
                      <GithubIcon size={18} />
                    </a>
                  </div>
                </div>

                {/* Image Mockup Side */}
                <div className="lg:w-1/2 w-full group-hover:scale-[1.02] transition-transform duration-500 shadow-xl rounded-2xl">
                  <MockupImage title={project.name} gradient={project.gradient} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
