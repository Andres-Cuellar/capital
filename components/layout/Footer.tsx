"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useT } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useT();

  return (
    <footer className="bg-black-light border-t border-black-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="w-30 h-30 relative mb-4">
              <Image src="/images/logo.webp" alt="Capital Detailing" fill className="object-contain" sizes="156px" />
            </div>
            <p className="text-silver-dark text-sm leading-relaxed max-w-sm mb-6">
              {t.footer.description}
            </p>
            <div className="space-y-2 text-sm text-silver-dark">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-amber shrink-0" />
                hello@capitaldetailingllc.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-amber shrink-0" />
                +1 571-237-8504
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-amber shrink-0" />
                Alexandria, Virginia
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-accent)] text-amber text-lg tracking-widest mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              {(["home", "about", "services", "contact"] as const).map((k) => (
                <li key={k}>
                  <Link
                    href={`/${k === "home" ? "home" : k}`}
                    className="text-silver-dark hover:text-amber transition-colors"
                  >
                    {t.nav[k]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-accent)] text-amber text-lg tracking-widest mb-4">
              {t.footer.services}
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-silver-dark hover:text-amber transition-colors">{t.silverPkg.name}</Link></li>
              <li><Link href="/services" className="text-silver-dark hover:text-amber transition-colors">{t.goldPkg.name}</Link></li>
              <li><Link href="/services" className="text-silver-dark hover:text-amber transition-colors">{t.extPolishPkg.name}</Link></li>
              <li><Link href="/services" className="text-silver-dark hover:text-amber transition-colors">{t.platinumCarPkg.name}</Link></li>
              <li><Link href="/services" className="text-silver-dark hover:text-amber transition-colors">{t.ceramicPkg.name}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver-dark text-xs text-center md:text-left">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy-policy" className="text-silver-dark hover:text-amber transition-colors">{t.footer.privacy}</Link>
            <Link href="/terms-of-service" className="text-silver-dark hover:text-amber transition-colors">{t.footer.terms}</Link>
            <Link href="/refund-policy" className="text-silver-dark hover:text-amber transition-colors">{t.footer.refund}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
