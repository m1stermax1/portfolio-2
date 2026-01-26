"use client";

import { Zap, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
              {t.about.title}
            </h2>
            <p className="text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              {t.about.intro1}
            </p>
            <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
              {t.about.intro2}
            </p>
            <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
              {t.about.intro3}
            </p>
            <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">
              {t.about.intro4}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
