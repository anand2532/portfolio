import { DotPattern } from "@/components/magicui/dot-pattern";
import { SiteHeader } from "@/components/site-header";
import { StatusFooter } from "@/components/status-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand} — ${SITE.title}`,
    template: `%s | ${SITE.brand}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.brand} — ${SITE.title}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.brand,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${SITE.brand} — ${SITE.title}`,
    description: SITE.description,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased relative flex flex-col",
          geist.variable,
          jetbrainsMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TooltipProvider delayDuration={0}>
            <div className="pointer-events-none fixed inset-0 z-0 blueprint-grid opacity-40" />
            <DotPattern className="z-0" />
            <SiteHeader />
            <div className="relative z-10 flex-1 flex flex-col min-h-0">
              {children}
            </div>
            <StatusFooter />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
