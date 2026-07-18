"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n/translations";

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  image: string;
  href: string;
  features?: string[];
  t?: Lang;
}

export function ServiceCard({
  title,
  description,
  price,
  image,
  href,
  features,
  t,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative glass card-amber-border overflow-hidden transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-card via-black-card/40 to-transparent" />
        {price && (
          <div className="absolute top-5 right-5">
            <span className="font-[family-name:var(--font-display)] text-amber text-2xl font-bold">
              {price}
            </span>
          </div>
        )}
      </div>
      <div className="p-8">
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-silver-light mb-3">
          {title}
        </h3>
        <p className="text-silver text-sm leading-relaxed mb-5">{description}</p>
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature) => (
              <li key={feature} className="text-silver-dark text-sm flex items-center gap-3">
                <span className="w-px h-3 bg-amber/60 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-amber hover:text-amber-light transition-colors duration-300 group/link"
        >
          <span>{t ? t.servicesCard.discover : "Discover"}</span>
          <span className="block w-6 h-px bg-amber group-hover/link:w-8 transition-all duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}
