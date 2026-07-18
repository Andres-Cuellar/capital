"use client";

import Image from "next/image";

export function RevealImage({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <div className="absolute inset-0 bg-amber-muted" />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
    </div>
  );
}
