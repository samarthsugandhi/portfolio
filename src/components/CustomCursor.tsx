"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile]     = useState(true);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  /* Large ring — more inertia */
  const rx = useSpring(mx, { stiffness: 130, damping: 18, mass: 0.6 });
  const ry = useSpring(my, { stiffness: 130, damping: 18, mass: 0.6 });

  /* Small dot — snappy */
  const dx = useSpring(mx, { stiffness: 700, damping: 40 });
  const dy = useSpring(my, { stiffness: 700, damping: 40 });

  const hovering = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      setIsMobile(false);
    }

    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const check = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const over =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        !!t.closest("a") ||
        !!t.closest("button");
      if (over !== hovering.current) {
        hovering.current = over;
        setIsHovering(over);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", check);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", check);
    };
  }, [mx, my]);

  if (isMobile) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `* { cursor: none !important; }` }} />

      {/* Large ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:       isHovering ? 56 : 36,
          height:      isHovering ? 56 : 36,
          borderColor: isHovering ? "rgba(127,176,105,0.9)" : "rgba(237,237,237,0.35)",
          backgroundColor: isHovering ? "rgba(127,176,105,0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      />

      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
        style={{
          x: dx,
          y: dy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:  isHovering ? 0 : 5,
          height: isHovering ? 0 : 5,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 40 }}
      />
    </>
  );
}
