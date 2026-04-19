"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Directly track position for the fast inner dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Apply spring physics for the lagging outer frame
  const ringX = useSpring(dotX, { stiffness: 300, damping: 30, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsMobile(false);
    }

    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Global listener to check if hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".glass-card") ||
        target.closest(".interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [dotX, dotY]);

  if (isMobile) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `* { cursor: none !important; }` }} />
      
      {/* Outer Trailing Frame (Techathon style: brackets/box rotating) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-amber-400/60 pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
          borderRadius: isHovering ? "50%" : "4px",
          backgroundColor: isHovering ? "rgba(250, 204, 21, 0.05)" : "transparent",
          borderColor: isHovering ? "rgba(250, 204, 21, 0.8)" : "rgba(250, 204, 21, 0.4)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Four inner corner markers to simulate the bracket crosshair frame */}
        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-2 border-r-2 border-amber-400 opacity-60" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-amber-400 opacity-60" />
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-2 border-l-2 border-amber-400 opacity-60" />
        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-amber-400 opacity-60" />
      </motion.div>

      {/* Inner Fast Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-amber-400 pointer-events-none z-[9999] shadow-[0_0_10px_#facc15]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
