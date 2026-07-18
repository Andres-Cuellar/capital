"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-amber text-black font-semibold px-8 py-3.5 hover:bg-amber-light transition-colors duration-300",
  secondary:
    "bg-black-card text-silver-light border border-black-border px-8 py-3.5 hover:border-amber hover:text-amber transition-colors duration-300",
  outline:
    "border border-amber text-amber px-8 py-3.5 hover:bg-amber hover:text-black transition-colors duration-300",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-block text-sm tracking-widest uppercase font-[family-name:var(--font-accent)] text-lg";

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className} cursor-pointer inline-block`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
}
