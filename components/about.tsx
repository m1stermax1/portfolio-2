"use client"

import { Zap, Target, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="border-b py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-8 sm:space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{t.about.title}</h2>
            <p className="text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">{t.about.intro1}</p>
            <p className="text-pretty text-sm sm:text-base leading-relaxed text-muted-foreground">{t.about.intro2}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">{t.about.whatIBring}</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold">{t.about.softSkillsTitle}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.about.softSkillsDesc}</p>
              </div>

              <div className="space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold">{t.about.businessImpactTitle}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.about.businessImpactDesc}</p>
              </div>

              <div className="space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold">{t.about.processImprovementTitle}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.about.processImprovementDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
