"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "hero",         label: "Home",     num: "01" },
  { id: "about",        label: "About",    num: "02" },
  { id: "projects",     label: "Projects", num: "03" },
  { id: "skills",       label: "Stack",    num: "04" },
  { id: "contact",      label: "Contact",  num: "05" },
];

export default function Navbar() {
  const [open,    setOpen]    = useState(false);
  const [visible, setVisible] = useState(true);
  const [time,    setTime]    = useState("");
  const lastY = useRef(0);

  /* Local time */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* Hide on scroll down */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 100 || y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }),
      open ? 420 : 0
    );
  };

  return (
    <>
      {/* Floating bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.38, ease: "easeOut" }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-between items-center px-[5vw] pointer-events-none"
      >
        <div className="pointer-events-auto">
          <button
            onClick={() => go("hero")}
            className="font-display text-[1.35rem] tracking-[0.15em] text-white hover:text-[#7fb069] transition-colors duration-300 uppercase"
          >
            Samarth
          </button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="pointer-events-auto flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-[#0A0A0A] font-bold text-[11px] uppercase tracking-widest hover:bg-[#7fb069] transition-colors duration-300 shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7fb069] animate-pulse" />
          Menu
        </button>
      </motion.header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col justify-between px-[6vw] py-8 md:py-10"
          >
            {/* Top row */}
            <div className="flex justify-between items-center">
              <span className="font-display text-xl tracking-widest text-white uppercase">Samarth</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-semibold flex items-center gap-3"
              >
                Close
                <span className="font-display text-2xl leading-none">×</span>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-0">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.55, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
                  className="overflow-hidden border-b border-white/[0.06]"
                >
                  <button
                    onClick={() => go(link.id)}
                    className="flex items-baseline gap-5 md:gap-8 py-3 group w-full text-left"
                  >
                    <span className="text-white/20 text-xs font-mono pt-1 min-w-[28px]">
                      {link.num}
                    </span>
                    <span className="font-display text-[13vw] md:text-[8vw] text-white/15 group-hover:text-white transition-colors duration-300 leading-[1.1] uppercase tracking-tight">
                      {link.label}
                    </span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Footer row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-white/25 text-xs uppercase tracking-widest"
            >
              <div className="space-y-1">
                <p>India — {time}</p>
                <a
                  href="mailto:samarthsugandhi04@gmail.com"
                  className="hover:text-white transition-colors block"
                >
                  samarthsugandhi04@gmail.com
                </a>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/samarthsugandhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/samarthsugandhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
