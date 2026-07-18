"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function CountUp({
  end,
  suffix = "",
  label,
  delay = 0,
}: {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: 2.2,
        delay,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, end, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center"
    >
      <motion.span className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold text-amber block tabular-nums">
        {display}
        {suffix}
      </motion.span>
      <span className="text-silver-dark text-sm mt-2 block tracking-wider uppercase font-[family-name:var(--font-accent)] text-base">
        {label}
      </span>
    </motion.div>
  );
}
