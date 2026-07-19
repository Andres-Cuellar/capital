"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useT } from "@/lib/i18n/LanguageProvider";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { ServiceCard } from "@/components/ui/ServiceCard";

type ServiceKey =
  | "silverPkg" | "goldPkg" | "extPolishPkg"
  | "platinumCarPkg" | "platinumSuvPkg" | "ceramicPkg";

const slugs: Record<string, { key: ServiceKey; image: string; hero: string }> = {
  silver:              { key: "silverPkg",       image: "/images/silver_pack.webp",  hero: "/images/silver_pack.webp" },
  gold:                { key: "goldPkg",         image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=85", hero: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=85" },
  "exterior-polish":   { key: "extPolishPkg",    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=85", hero: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=85" },
  "platinum-cars":     { key: "platinumCarPkg",  image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=85", hero: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&q=85" },
  "platinum-suvs":     { key: "platinumSuvPkg",  image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=85", hero: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&q=85" },
  "ceramic-coating":   { key: "ceramicPkg",      image: "/images/ceramic.webp",      hero: "/images/ceramic.webp" },
};

const allSlugs = Object.keys(slugs);

function pickOtherSlugs(current: string): string[] {
  return allSlugs.filter((s) => s !== current).slice(0, 3);
}

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useT();

  const info = slugs[slug];
  if (!info) {
    return (
      <div className="flex items-center justify-center min-h-screen text-silver-dark">
        Service not found
      </div>
    );
  }

  const pkg = t[info.key];
  const otherSlugs = pickOtherSlugs(slug);

  return (
    <>
      {/* ─── Hero pequeño ─── */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={info.hero} alt={pkg.name} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 w-full">
          <FadeIn direction="up">
            <Link href="/services#catalog" className="inline-flex items-center gap-2 text-amber text-sm tracking-widest uppercase mb-4 hover:text-amber-light transition-colors">
              <ArrowLeft size={14} />
              {t.servicesPricing.backToServices}
            </Link>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light">
              <span className="chrome-text">{pkg.name}</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ─── Split: Info + Form ─── */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Service Info */}
            <FadeIn direction="left">
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-display)] text-amber text-5xl font-bold">{pkg.price}</span>
                </div>
                <p className="text-silver text-lg leading-relaxed">{pkg.desc}</p>
                <div className="border-t border-black-border pt-6">
                  <h3 className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.3em] uppercase mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    {Object.entries(pkg)
                      .filter(([k]) => k.startsWith("f"))
                      .map(([, v]) => (
                        <li key={v as string} className="text-silver-dark text-sm flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-amber rounded-full mt-1.5 shrink-0" />
                          {v as string}
                        </li>
                      ))}
                  </ul>
                </div>
                <Link
                  href="/services#catalog"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-amber hover:text-amber-light transition-colors duration-300 group"
                >
                  <ArrowLeft size={14} />
                  <span>{t.servicesPricing.backToServices}</span>
                </Link>
              </div>
            </FadeIn>

            {/* Right — Form placeholder */}
            <FadeIn direction="right">
              <div className="bg-black-card border border-black-border p-8 md:p-10">
                <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.3em] uppercase block mb-1">
                  {t.bookingModal.eyebrow}
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-2xl text-silver-light mb-6">
                  {t.bookingModal.title}
                </h2>
                <div className="min-h-[300px] flex items-center justify-center border border-dashed border-black-border rounded text-silver-dark text-sm">
                  GHL iframe here
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Other Services ─── */}
      <section className="py-20 md:py-28 bg-black-light">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <FadeIn>
              <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-2">
                {t.servicesPreview.eyebrow}
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-silver-light">
                Other Services
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {otherSlugs.map((s) => {
              const otherInfo = slugs[s];
              const otherPkg = t[otherInfo.key];
              return (
                <StaggerItem key={s}>
                  <ServiceCard
                    title={otherPkg.name}
                    description={otherPkg.desc}
                    price={otherPkg.price}
                    image={otherInfo.image}
                    href={`/services/${s}`}
                    features={
                      Object.entries(otherPkg)
                        .filter(([k]) => k.startsWith("f"))
                        .slice(0, 3)
                        .map(([, v]) => v as string)
                    }
                  />
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
