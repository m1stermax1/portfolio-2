"use client";

import { Zap, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function About() {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section id="about" className="border-b py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`mx-auto max-w-3xl space-y-8 sm:space-y-12 animate-fade-in scroll-reveal ${isVisible ? 'visible' : ''}`} ref={elementRef}>
          <div className="space-y-4">
            <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text animate-slide-in-left">
              {t.about.title}
            </h2>
            <p className="text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground animate-slide-in-up delay-100 transition-smooth hover:text-foreground">
              {t.about.intro1}
            </p>
            <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground animate-slide-in-up delay-200 transition-smooth hover:text-foreground">
              {t.about.intro2}
            </p>
            <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground animate-slide-in-up delay-300 transition-smooth hover:text-foreground">
              {t.about.intro3}
            </p>
            <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground animate-slide-in-up delay-400 transition-smooth hover:text-foreground">
              {t.about.intro4}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
