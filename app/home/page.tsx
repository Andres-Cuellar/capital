"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useT } from "@/lib/i18n/LanguageProvider";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { GoldFrame } from "@/components/animations/GoldFrame";
import { CountUp } from "@/components/animations/CountUp";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BookingModal } from "@/components/booking/BookingModal";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const { t } = useT();

  return (
    <>
      <HeroSection t={t} onBook={() => setBookingOpen(true)} />
      <StatsSection t={t} />
      <AboutSummary t={t} />
      <ServicesPreview t={t} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} t={t} />
    </>
  );
}

function HeroSection({ t, onBook }: { t: ReturnType<typeof useT>["t"]; onBook: () => void }) {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-dvh min-h-[650px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Luxury car detailing"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </motion.div>

      <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
        <GoldFrame />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-block font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.4em] uppercase">
            {t.hero.tagline}
          </span>
          <span className="block mx-auto mt-3 w-12 h-px bg-amber/60" />
          <span className="sparkle text-amber/80 mx-auto mt-4" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-silver-light leading-[1.05] mb-8"
        >
          <span className="chrome-text">{t.hero.headline1}</span>
          <br />
          <span className="amber-shimmer">{t.hero.headline2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-silver text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={onBook}
            className="group relative bg-amber text-black font-[family-name:var(--font-accent)] text-xl tracking-wider px-10 py-4 overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta1}</span>
            <span className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <a
            href="/services"
            className="group relative border border-amber/70 text-amber font-[family-name:var(--font-accent)] text-xl tracking-wider px-10 py-4 overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta2}</span>
            <span className="absolute inset-0 bg-amber/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="sparkle text-amber/60" />
        <span className="text-silver-dark text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-accent)] text-sm">
          {t.hero.scroll}
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-amber/60 to-transparent" />
      </motion.div>
    </section>
  );
}

function StatsSection({ t }: { t: ReturnType<typeof useT>["t"] }) {
  const stats = [
    { end: 8, suffix: "+", label: t.stats.years },
    { end: 3500, suffix: "+", label: t.stats.vehicles },
    { end: 200, suffix: "+", label: t.stats.reviews },
  ];

  return (
    <section className="py-20 md:py-24 bg-black-light border-y border-black-border">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((s, i) => (
            <CountUp key={s.label} end={s.end} suffix={s.suffix} label={s.label} delay={i * 0.25} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSummary({ t }: { t: ReturnType<typeof useT>["t"] }) {
  return (
    <>
      <div className="swoosh-separator" />
      <section className="py-28 md:py-36 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn direction="left" className="lg:col-span-7">
              <div className="relative lg:-ml-16">
                <div className="relative h-[450px] md:h-[550px] overflow-hidden">
                  <Image
                    src="/images/silver_pack.webp"
                    alt="Detailing process"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-amber/20 pointer-events-none hidden lg:block" />
              </div>
            </FadeIn>

            <FadeIn direction="right" className="lg:col-span-5 lg:pl-8">
              <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase mb-4 block">
                {t.aboutSummary.eyebrow}
              </span>
              <span className="block w-16 h-px bg-amber/60 mb-6" />
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light leading-[1.1] mb-8">
                <span className="chrome-text">{t.aboutSummary.title1}</span>
                <br />
                <span className="text-amber">{t.aboutSummary.title2}</span>
              </h2>
              <div className="space-y-5 text-silver text-base leading-relaxed">
                <p>{t.aboutSummary.p1}</p>
                <p className="text-silver-dark">{t.aboutSummary.p2}</p>
              </div>
              <div className="mt-8">
                <a href="/about" className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-amber hover:text-amber-light transition-colors duration-300 group">
                  <span>{t.aboutSummary.cta}</span>
                  <span className="block w-8 h-px bg-amber group-hover:w-12 transition-all duration-300" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesPreview({ t }: { t: ReturnType<typeof useT>["t"] }) {
  const services = [
    { title: t.silverPkg.name, description: t.silverPkg.desc, price: t.silverPkg.price, image: "/images/silver_pack.webp", href: "/services/silver", features: [t.silverPkg.f1, t.silverPkg.f2, t.silverPkg.f3] },
    { title: t.goldPkg.name, description: t.goldPkg.desc, price: t.goldPkg.price, image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=85", href: "/services/gold", features: [t.goldPkg.f1, t.goldPkg.f2, t.goldPkg.f3] },
    { title: t.platinumCarPkg.name, description: t.platinumCarPkg.desc, price: t.platinumCarPkg.price, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=85", href: "/services/platinum-cars", features: [t.platinumCarPkg.f1, t.platinumCarPkg.f5, t.platinumCarPkg.f6, t.platinumCarPkg.f10] },
  ];

  return (
    <section className="py-28 md:py-36 bg-black-light">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-3">{t.servicesPreview.eyebrow}</span>
            <span className="block mx-auto w-12 h-px bg-amber/60 mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light">
              {t.servicesPreview.title1}
              <br />
              <span className="text-amber">{t.servicesPreview.title2}</span>
            </h2>
          </FadeIn>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <ServiceCard {...s} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
