"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useT } from "@/lib/i18n/LanguageProvider";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { GoldFrame } from "@/components/animations/GoldFrame";

export default function AboutPage() {
  const { t } = useT();
  return (
    <>
      <AboutHero t={t} />
      <WelcomeSection t={t} />
      <MissionSection t={t} />
      <ValuesSection t={t} />
      <ProcessSection t={t} />
    </>
  );
}

function AboutHero({ t }: { t: ReturnType<typeof useT>["t"] }) {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 120]);
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1503376780353-7e6694c6ae27?w=1920&q=85" alt="Luxury car" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </motion.div>
      <GoldFrame />
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <FadeIn>
          <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.4em] uppercase block mb-4">{t.aboutHero.eyebrow}</span>
          <span className="block mx-auto w-12 h-px bg-amber/60 mb-8" />
          <span className="sparkle text-amber/60 mx-auto mb-4" />
          <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-7xl lg:text-8xl font-bold text-silver-light leading-[1.05] mb-6">
            <span className="chrome-text">{t.aboutHero.title1}</span>
            <br />
            <span className="amber-shimmer">{t.aboutHero.title2}</span>
          </h1>
          <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{t.aboutHero.subtitle}</p>
        </FadeIn>
      </div>
    </section>
  );
}

function WelcomeSection({ t }: { t: ReturnType<typeof useT>["t"] }) {
  return (
    <section className="py-28 md:py-36 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase mb-4 block">{t.welcome.eyebrow}</span>
            <span className="block w-16 h-px bg-amber/60 mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light leading-[1.1] mb-8">
              <span className="chrome-text">{t.welcome.title1}</span>
              <br />
              <span className="text-amber">{t.welcome.title2}</span>
            </h2>
            <p className="text-silver leading-relaxed mb-6">{t.welcome.p1}</p>
            <p className="text-silver-dark leading-relaxed">{t.welcome.p2}</p>
          </FadeIn>
          <FadeIn direction="right" className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1605618826115-fb9e0c4f3b48?w=900&q=85" alt="Detailing process" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -top-5 -left-5 w-28 h-28 border border-amber/20 pointer-events-none hidden lg:block" />
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-amber/20 pointer-events-none hidden lg:block" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function MissionSection({ t }: { t: ReturnType<typeof useT>["t"] }) {
  return (
    <section className="py-28 md:py-36 bg-black-light relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-muted rounded-full blur-[100px]" />
      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <FadeIn>
          <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-3">{t.mission.eyebrow}</span>
          <span className="block mx-auto w-12 h-px bg-amber/60 mb-8" />
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light mb-8">{t.mission.title}</h2>
          <p className="text-silver text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">{t.mission.text}</p>
        </FadeIn>
      </div>
    </section>
  );
}

function ValuesSection({ t }: { t: ReturnType<typeof useT>["t"] }) {
  const values = [t.values.v1, t.values.v2, t.values.v3, t.values.v4];
  return (
    <section className="py-28 md:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <FadeIn>
            <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-3">{t.values.eyebrow}</span>
            <span className="block w-16 h-px bg-amber/60 mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light leading-[1.1]">{t.values.title}</h2>
            <p className="text-silver-dark mt-4 max-w-xl">{t.values.subtitle}</p>
          </FadeIn>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black-border">
          {values.map((v) => (
            <StaggerItem key={v.label}>
              <div className="bg-black-card p-10 md:p-12 h-full hover:bg-black-light transition-colors duration-500">
                <span className="font-[family-name:var(--font-accent)] text-amber/40 text-6xl block mb-6">{v.label}</span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-silver-light mb-4">{v.title}</h3>
                <p className="text-silver-dark leading-relaxed">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProcessSection({ t }: { t: ReturnType<typeof useT>["t"] }) {
  const steps = [
    { ...t.process.step1, image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=85" },
    { ...t.process.step2, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=85" },
    { ...t.process.step3, image: "https://images.unsplash.com/photo-1605618826115-fb9e0c4f3b48?w=600&q=85" },
    { ...t.process.step4, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=85" },
  ];
  return (
    <section className="py-28 md:py-36 bg-black-light relative overflow-hidden">
      <div className="absolute opacity-[0.03]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center">
          <FadeIn>
            <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-3">{t.process.eyebrow}</span>
            <span className="block mx-auto w-12 h-px bg-amber/60 mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light leading-[1.1]">
              {t.process.title1}
              <br />
              <span className="amber-shimmer">{t.process.title2}</span>
            </h2>
            <p className="text-silver-dark mt-4 max-w-xl mx-auto">{t.process.subtitle}</p>
          </FadeIn>
        </div>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber/40 via-amber/10 to-transparent hidden md:block" />
          <div className="space-y-20 md:space-y-28 relative">
            {steps.map((step, i) => (
              <FadeIn key={step.label} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.15} duration={0.7}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className={`md:col-span-5 ${i % 2 === 0 ? "md:text-right md:pr-12 md:order-1" : "md:pl-12 md:order-3"}`}>
                    <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-widest block mb-3">{step.label}</span>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-silver-light mb-4">{step.title}</h3>
                    <p className="text-silver-dark leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="hidden md:flex md:col-span-2 justify-center md:order-2">
                    <div className="w-12 h-12 border border-amber/30 rounded-full flex items-center justify-center bg-black-light"><span className="text-amber text-xl">{i === 0 ? "◈" : i === 1 ? "◇" : i === 2 ? "◆" : "✦"}</span></div>
                  </div>
                  <div className={`md:col-span-5 ${i % 2 === 0 ? "md:order-3" : "md:order-1"}`}>
                    <div className="relative h-64 overflow-hidden border border-black-border">
                      <Image src={step.image} alt={step.title} fill className="object-cover opacity-80" sizes="(max-width: 768px) 100vw, 40vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
