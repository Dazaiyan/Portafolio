import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/AppShell";
import { LocaleProvider } from "@/components/locale-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dazadev.dev"),
  title: {
    default: "DazaDev — Portafolio de Juan Daza",
    template: "%s · DazaDev",
  },
  description: "Portafolio profesional de Juan Daza: Ingeniería en Software, desarrollo web, backend y soluciones modernas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <ThemeProvider>
          <LocaleProvider>
            <AppShell>{children}</AppShell>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
