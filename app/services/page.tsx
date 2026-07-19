"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useT } from "@/lib/i18n/LanguageProvider";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { GoldFrame } from "@/components/animations/GoldFrame";

export default function ServicesPage() {
  const { t } = useT();
  return (
    <>
      <ServicesHero t={t} />
      <ServicesIntro t={t} />
      <ServicesCatalog t={t} />
    </>
  );
}

function ServicesHero({ t }: { t: ReturnType<typeof useT>["t"] }) {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 120]);
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0">
        <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=85" alt="Car detailing" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </motion.div>
      <GoldFrame />
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <FadeIn>
          <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.4em] uppercase block mb-4">{t.servicesHero.eyebrow}</span>
          <span className="block mx-auto w-12 h-px bg-amber/60 mb-8" />
          <span className="sparkle text-amber/60 mx-auto mb-4" />
          <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-7xl lg:text-8xl font-bold text-silver-light leading-[1.05] mb-6">
            <span className="chrome-text">{t.servicesHero.title1}</span>
            <br />
            <span className="amber-shimmer">{t.servicesHero.title2}</span>
          </h1>
          <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{t.servicesHero.subtitle}</p>
        </FadeIn>
      </div>
    </section>
  );
}

function ServicesIntro({ t }: { t: ReturnType<typeof useT>["t"] }) {
  return (
    <section className="py-28 md:py-36 bg-black">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <FadeIn>
          <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-3">{t.servicesIntro.eyebrow}</span>
          <span className="block mx-auto w-12 h-px bg-amber/60 mb-8" />
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light mb-8">
            <span className="chrome-text">{t.servicesIntro.title1}</span>
            <br />
            <span className="text-amber">{t.servicesIntro.title2}</span>
          </h2>
          <p className="text-silver text-lg leading-relaxed max-w-3xl mx-auto">{t.servicesIntro.text}</p>
        </FadeIn>
      </div>
    </section>
  );
}

function ServicesCatalog({ t }: { t: ReturnType<typeof useT>["t"] }) {
  const services = [
    { slug: "silver", name: t.silverPkg.name, price: t.silverPkg.price, image: "/images/silver_pack.webp", description: t.silverPkg.desc, features: [t.silverPkg.f1, t.silverPkg.f2, t.silverPkg.f3, t.silverPkg.f4, t.silverPkg.f5, t.silverPkg.f6] },
    { slug: "gold", name: t.goldPkg.name, price: t.goldPkg.price, image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=85", description: t.goldPkg.desc, features: [t.goldPkg.f1, t.goldPkg.f2, t.goldPkg.f3, t.goldPkg.f4, t.goldPkg.f5, t.goldPkg.f6], highlighted: true },
    { slug: "exterior-polish", name: t.extPolishPkg.name, price: t.extPolishPkg.price, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=85", description: t.extPolishPkg.desc, features: [t.extPolishPkg.f1, t.extPolishPkg.f2, t.extPolishPkg.f3, t.extPolishPkg.f4, t.extPolishPkg.f5, t.extPolishPkg.f6] },
    { slug: "platinum-cars", name: t.platinumCarPkg.name, price: t.platinumCarPkg.price, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=85", description: t.platinumCarPkg.desc, features: [t.platinumCarPkg.f1, t.platinumCarPkg.f2, t.platinumCarPkg.f3, t.platinumCarPkg.f4, t.platinumCarPkg.f5, t.platinumCarPkg.f6, t.platinumCarPkg.f7, t.platinumCarPkg.f8, t.platinumCarPkg.f9, t.platinumCarPkg.f10, t.platinumCarPkg.f11] },
    { slug: "platinum-suvs", name: t.platinumSuvPkg.name, price: t.platinumSuvPkg.price, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=85", description: t.platinumSuvPkg.desc, features: [t.platinumSuvPkg.f1, t.platinumSuvPkg.f2, t.platinumSuvPkg.f3, t.platinumSuvPkg.f4, t.platinumSuvPkg.f5, t.platinumSuvPkg.f6, t.platinumSuvPkg.f7, t.platinumSuvPkg.f8, t.platinumSuvPkg.f9, t.platinumSuvPkg.f10, t.platinumSuvPkg.f11, t.platinumSuvPkg.f12, t.platinumSuvPkg.f13] },
    { slug: "ceramic-coating", name: t.ceramicPkg.name, price: t.ceramicPkg.price, image: "/images/ceramic.webp", description: t.ceramicPkg.desc, features: [t.ceramicPkg.f1, t.ceramicPkg.f2, t.ceramicPkg.f3, t.ceramicPkg.f4, t.ceramicPkg.f5, t.ceramicPkg.f6], premium: true },
  ];

  return (
    <section id="catalog" className="py-28 md:py-36 bg-black-light">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 text-center">
          <FadeIn>
            <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-3">{t.servicesPricing.eyebrow}</span>
            <span className="block mx-auto w-12 h-px bg-amber/60 mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light">
              {t.servicesPricing.title1}
              <br />
              <span className="amber-shimmer">{t.servicesPricing.title2}</span>
            </h2>
            <p className="text-silver-dark mt-4 max-w-xl mx-auto">{t.servicesPricing.subtitle}</p>
          </FadeIn>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => (
            <StaggerItem key={s.name}>
              <ServiceDetailCard {...s} t={t} slug={s.slug} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServiceDetailCard({ name, price, image, description, highlighted, premium, t, slug }: {
  name: string; price: string; image: string; description: string; highlighted?: boolean; premium?: boolean;
  t: ReturnType<typeof useT>["t"]; slug?: string;
}) {
  const content = (
    <div className={`group relative bg-black-card border overflow-hidden transition-all duration-500 h-full ${highlighted ? "border-amber/50 amber-glow" : premium ? "border-amber/30" : "border-black-border hover:border-amber/30"}`}>
      {(highlighted || premium) && (
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-center">
          <span className={`font-[family-name:var(--font-accent)] text-xs tracking-[0.35em] uppercase px-6 py-2 ${highlighted ? "bg-amber text-black" : "bg-amber/10 text-amber border-x border-b border-amber/30"}`}>
            {highlighted ? t.servicesPricing.mostPopular : t.servicesPricing.premium}
          </span>
        </div>
      )}
      <div className="relative h-52 overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover transition-all duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-card via-black-card/40 to-transparent" />
      </div>
      <div className="p-8 md:p-10 flex flex-col h-[calc(100%-13rem)]">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-silver-light">{name}</h3>
          <span className="font-[family-name:var(--font-display)] text-amber text-2xl font-bold shrink-0 ml-4">{price}</span>
        </div>
        <p className="text-silver text-sm leading-relaxed flex-1">{description}</p>
        <div className="mt-6 flex items-center gap-1.5 text-xs tracking-[0.25em] uppercase text-amber hover:text-amber-light transition-colors duration-300 group/link">
          <span>{t.servicesPricing.moreDetails}</span>
          <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );

  return slug ? <Link href={`/services/${slug}`}>{content}</Link> : content;
}
