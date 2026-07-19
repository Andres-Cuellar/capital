"use client";

import { useT } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import Script from "next/script";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ContactPage() {
  const { t } = useT();
  return (
    <>
      <ContactHero t={t} />
      <ContactDirectory t={t} />
      <MapSection t={t} />
      <ContactFormSection t={t} />
    </>
  );
}

function ContactHero({ t }: { t: ReturnType<typeof useT>["t"] }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/contact.webp" alt="Contact Capital Detailing" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>
      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <FadeIn>
          <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.4em] uppercase block mb-4">{t.contactHero.eyebrow}</span>
          <span className="block mx-auto w-12 h-px bg-amber/60 mb-8" />
          <span className="sparkle text-amber/60 mx-auto mb-4" />
          <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-7xl lg:text-8xl font-bold text-silver-light leading-[1.05] mb-6">
            <span className="chrome-text">{t.contactHero.title1}</span>
            <br />
            <span className="amber-shimmer">{t.contactHero.title2}</span>
          </h1>
          <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{t.contactHero.subtitle}</p>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactDirectory({ t }: { t: ReturnType<typeof useT>["t"] }) {
  return (
    <section className="py-24 md:py-32 bg-black-light">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black-border">
          {[
            { icon: "✉", label: t.contactDir.email, value: "hello@capitaldetailingllc.com", href: "mailto:hello@capitaldetailingllc.com" },
            { icon: "☎", label: t.contactDir.phone, value: "+1 571-237-8504", href: "tel:+15712378504" },
            { icon: "◎", label: t.contactDir.location, value: "Alexandria, Virginia", href: "#map" },
          ].map((c) => (
            <FadeIn key={c.label}>
              <a href={c.href} className="block bg-black-card p-10 md:p-12 text-center hover:bg-black-light transition-all duration-500 group h-full">
                <span className="text-amber text-3xl block mb-6 group-hover:scale-110 transition-transform duration-500">{c.icon}</span>
                <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-3">{c.label}</span>
                <span className="text-silver text-sm">{c.value}</span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection({ t }: { t: ReturnType<typeof useT>["t"] }) {
  return (
    <section id="map" className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <FadeIn>
            <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-3">{t.mapSection.eyebrow}</span>
            <span className="block w-16 h-px bg-amber/60 mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light leading-[1.1]">{t.mapSection.title}</h2>
            <p className="text-silver-dark mt-4 max-w-xl">{t.mapSection.subtitle}</p>
          </FadeIn>
        </div>
        <FadeIn>
          <div className="relative w-full h-[400px] md:h-[500px] border border-black-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49586.16448534897!2d-77.1098!3d38.8048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x7155ce3d6b2f4a38!2sAlexandria%2C%20VA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Capital Detailing Location in Alexandria, VA"
              className="grayscale contrast-125 opacity-80 hover:opacity-95 transition-opacity duration-700"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactFormSection({ t }: { t: ReturnType<typeof useT>["t"] }) {
  return (
    <section className="py-28 md:py-36 bg-black-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-muted rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-muted rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <span className="font-[family-name:var(--font-accent)] text-amber text-sm tracking-[0.35em] uppercase block mb-3">{t.contactForm.eyebrow}</span>
            <span className="block mx-auto w-12 h-px bg-amber/60 mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light leading-[1.1] mb-4">
              {t.contactForm.title1}
              <br />
              <span className="amber-shimmer">{t.contactForm.title2}</span>
            </h2>
            <p className="text-silver-dark text-lg">{t.contactForm.subtitle}</p>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="bg-black-card border border-black-border p-0 md:p-2">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/1d5zYuYpGFcnK0oin0wY"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              className="min-h-[750px] md:min-h-[550px]"
            />
            <Script
              src="https://link.msgsndr.com/js/form_embed.js"
              strategy="afterInteractive"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
