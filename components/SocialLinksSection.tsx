"use client";

import { Github, Linkedin, Instagram, Mail, ArrowUpRight, Youtube, Twitter, MessageCircle, Send } from "lucide-react";
import { useLocale } from "./locale-provider";

const socials = [
  { label: "GitHub", href: "https://github.com/Dazaiyan", icon: <Github className="h-5 w-5" /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-daza-b40216346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <Linkedin className="h-5 w-5" />,
  },
  { label: "WhatsApp", href: "https://wa.me/593987156456", icon: <MessageCircle className="h-5 w-5" /> },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dazetaa?igsh=djc3ZXg0bDhvZXBz&utm_source=qr",
    icon: <Instagram className="h-5 w-5" />,
  },
  { label: "Telegram", href: "https://t.me/+593987156456", icon: <Send className="h-5 w-5" /> },
  { label: "Email", href: "mailto:jusedame@hotmail.com", icon: <Mail className="h-5 w-5" /> },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCdyFfPKrKJRWCHrfRPaUJGQ", icon: <Youtube className="h-5 w-5" /> },
  { label: "X (Twitter)", href: "https://x.com/juandaza2004?s=21", icon: <Twitter className="h-5 w-5" /> },
];

export function SocialLinksSection() {
  const { locale } = useLocale();
  const title = locale === "es" ? "Mis redes sociales" : "Social Profiles";
  const eyebrow = locale === "es" ? "Redes" : "Social";

  return (
    <section className="border-y border-slate-200/70 bg-transparent" id="social-links">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between text-slate-900 transition hover:translate-x-1 hover:opacity-80"
            >
              <div className="flex items-center gap-3 text-lg font-medium">
                <span className="text-slate-700">{social.icon}</span>
                <span>{social.label}</span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-slate-400" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
