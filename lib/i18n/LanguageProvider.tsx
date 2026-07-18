"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Lang } from "./translations";
import { translations } from "./translations";

type LangContext = {
  lang: "en" | "es";
  t: Lang;
  toggle: () => void;
};

const Ctx = createContext<LangContext | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"en" | "es">("en");

  const toggle = useCallback(() => {
    setLang((l) => (l === "en" ? "es" : "en"));
  }, []);

  return (
    <Ctx.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </Ctx.Provider>
  );
}

export function useT() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
