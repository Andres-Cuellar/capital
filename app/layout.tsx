import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Capital Detailing | Drive Clean, Shine Bright",
  description:
    "Precision car detailing in Alexandria, Virginia. Ceramic coating, interior deep cleaning, and premium packages for your vehicle.",
  keywords: [
    "car detailing",
    "ceramic coating",
    "Alexandria Virginia",
    "auto detailing",
    "car wash",
  ],
  icons: { icon: "/images/icono.webp" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black font-body">
        <LanguageProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <Footer />
          <Script
            type="module"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js'

                Typebot.initBubble({
                  typebot: "bot-capital-detailing-ilb6dte",
                  apiHost: "https://bot-api.glumpstudio.com",
                  theme: {
                    placement: "left",
                    button: { backgroundColor: "#D09C46" },
                    chatWindow: { backgroundColor: "#0a0a0a" },
                  },
                });
              `,
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
