import { FadeIn } from "@/components/animations/FadeIn";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClassName?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleClassName = "",
}: SectionTitleProps) {
  return (
    <FadeIn className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="font-[family-name:var(--font-accent)] text-amber text-lg tracking-[0.3em] uppercase mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-silver-light ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-silver-dark text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
