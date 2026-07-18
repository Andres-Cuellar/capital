"use client";

import { motion } from "framer-motion";

const corners = [
  "top-0 left-0 border-t border-l",
  "top-0 right-0 border-t border-r",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

const cornerPositions = [
  { initial: { x: -20, y: -20 }, animate: { x: 0, y: 0 } },
  { initial: { x: 20, y: -20 }, animate: { x: 0, y: 0 } },
  { initial: { x: -20, y: 20 }, animate: { x: 0, y: 0 } },
  { initial: { x: 20, y: 20 }, animate: { x: 0, y: 0 } },
];

export function GoldFrame({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className || ""}`}>
      {corners.map((corner, i) => (
        <motion.div
          key={corner}
          className={`absolute w-10 h-10 md:w-16 md:h-16 border-amber/40 ${corner}`}
          initial={cornerPositions[i].initial}
          animate={cornerPositions[i].animate}
          transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
