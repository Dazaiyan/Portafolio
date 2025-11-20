"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLocale } from "./locale-provider";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [overlayActive, setOverlayActive] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [showProgress, setShowProgress] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const pathname = usePathname();
  const { content } = useLocale();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setOverlayMounted(true));
    const hideTimer = setTimeout(() => setOverlayActive(false), 1600);
    const revealTimer = setTimeout(() => setContentVisible(true), 1900);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(hideTimer);
      clearTimeout(revealTimer);
    };
  }, []);

  useEffect(() => {
    if (!contentVisible) return;
    const kickoff = requestAnimationFrame(() => {
      setPageVisible(false);
      setShowProgress(true);
      setProgressWidth(0);
    });
    const ramp = setTimeout(() => setProgressWidth(65), 40);
    const finish = setTimeout(() => setProgressWidth(100), 260);
    const reveal = setTimeout(() => setPageVisible(true), 200);
    const hide = setTimeout(() => {
      setShowProgress(false);
      setProgressWidth(0);
    }, 520);

    return () => {
      cancelAnimationFrame(kickoff);
      clearTimeout(ramp);
      clearTimeout(finish);
      clearTimeout(reveal);
      clearTimeout(hide);
    };
  }, [pathname, contentVisible]);

  const overlayClass = overlayActive ? "opacity-100" : "opacity-0 pointer-events-none";
  const overlayStateClass = overlayMounted ? overlayClass : "opacity-0";

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)] transition-opacity duration-700 ${overlayStateClass}`}
      >
        <span className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">{content.welcome}</span>
      </div>

      <div className={`flex min-h-screen flex-col bg-[var(--background)] ${contentVisible ? "opacity-100" : "opacity-0"}`}>
        <div
          className={`fixed inset-x-0 top-0 z-40 h-0.5 transform bg-[var(--foreground)] transition-all duration-300 ${
            showProgress ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: showProgress ? `${progressWidth}%` : 0 }}
        />

        <Header />
        <main className="w-full flex-1 px-4 py-12 sm:px-6 lg:px-0 lg:py-16">
          <div
            className={`mx-auto w-full max-w-5xl transform transition-all duration-500 ${
              pageVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
