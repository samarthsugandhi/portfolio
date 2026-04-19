"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Terminal, Blocks, Trophy, Mail } from "lucide-react";

const navLinks = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Terminal },
  { id: "skills", label: "Skills", icon: Blocks },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Auto-hide logic: hidden if scrolling down past 300px, visible if scrolling up
      if (currentScrollY > 300) {
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section spy
      const sections = navLinks.map((l) => l.id);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && currentScrollY >= el.offsetTop - window.innerHeight / 2) {
          setActiveSection(id);
          break;
        }
      }
    };
    
    // Use requestAnimationFrame for scroll performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 pointer-events-none"
      >
        <nav className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-indigo-500/10 transition-all">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            
            return (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative group p-2.5 sm:p-3 rounded-xl flex items-center justify-center transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDockBubble"
                    className="absolute inset-0 bg-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.3)] rounded-xl border border-indigo-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-indigo-400" : "text-slate-400 group-hover:text-white"}`}>
                  <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </span>

                {/* Tooltip */}
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform origin-bottom px-2 shadow-xl py-1 rounded bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 z-50">
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
}
