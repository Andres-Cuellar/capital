"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useT } from "@/lib/i18n/LanguageProvider";

const navLinks = [
  { href: "/home", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { t, toggle, lang } = useT();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 p-2 transition-all duration-700 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-black-border navbar-glass"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/home" className="group flex items-center gap-3">
          <div className="w-26 h-26 relative">
            <Image
              src="/images/logo.webp"
              alt="Capital Detailing"
              fill
              className="object-contain"
              sizes="180px"
              priority
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-[0.2em] uppercase text-silver hover:text-amber transition-colors duration-300 py-1 group"
            >
              {t.nav[link.key]}
              <span
                className={`absolute -bottom-px left-0 h-px bg-amber transition-all duration-500 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          <button
            onClick={toggle}
            className="text-xs tracking-[0.15em] uppercase text-silver-dark hover:text-amber transition-colors duration-300 border border-black-border px-3 py-1.5 hover:border-amber/40"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber text-black font-[family-name:var(--font-accent)] text-lg tracking-wider px-7 py-3 hover:bg-amber-light transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">{t.nav.bookNow}</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-silver-light p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block h-px bg-current transition-all duration-300 origin-right ${mobileOpen ? "w-6 -rotate-45 translate-y-[9px]" : "w-6"}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block h-px bg-current transition-all duration-300 origin-right ${mobileOpen ? "w-6 rotate-45 -translate-y-[9px]" : "w-5"}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-black-border"
          >
            <ul className="px-8 py-8 space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className={`text-lg tracking-[0.2em] uppercase transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-amber"
                        : "text-silver hover:text-amber"
                    }`}
                  >
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { toggle(); closeMobile(); }}
                  className="text-sm tracking-[0.15em] uppercase text-silver-dark hover:text-amber transition-colors border border-black-border px-3 py-2"
                >
                  {lang === "en" ? "Español" : "English"}
                </button>
              </li>
              <li className="pt-4">
                <Link
                  href="/contact"
                  onClick={closeMobile}
                  className="inline-block bg-amber text-black font-[family-name:var(--font-accent)] text-xl tracking-wider px-8 py-3.5"
                >
                  {t.nav.bookNow}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
