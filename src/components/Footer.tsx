"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.07] overflow-hidden">

      {/* ── Giant watermark name ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-[2vw] pt-10 pb-0 select-none overflow-hidden"
      >
        <p
          className="font-display leading-none text-white/[0.04] whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 18vw, 18rem)" }}
        >
          SAMARTH
        </p>
      </motion.div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div className="px-[6vw] py-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        {/* Left — email + location */}
        <div className="space-y-1">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-white/35 hover:text-white transition-colors duration-200 text-sm block"
          >
            {personalInfo.email}
          </a>
          <p className="text-white/18 text-xs">India — Bangalore</p>
        </div>

        {/* Centre — page links */}
        <nav className="flex flex-wrap gap-6 text-white/22 text-[10px] uppercase tracking-[0.15em]">
          {[
            { label: "Overview",  id: "hero"      },
            { label: "Projects",  id: "projects"  },
            { label: "Stack",     id: "skills"    },
            { label: "Contact",   id: "contact"   },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() =>
                document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right — socials + top */}
        <div className="flex items-center gap-6 text-white/22 text-[10px] uppercase tracking-[0.15em]">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors duration-200"
          >
            ↑ Top
          </button>
        </div>
      </div>

      {/* Copyright */}
      <p className="px-[6vw] pb-6 text-white/12 text-[10px]">
        ©{new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
