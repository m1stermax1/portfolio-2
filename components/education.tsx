"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="border-b py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 space-y-4">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold">{t.education.title}</h2>
          <p className="text-pretty text-muted-foreground">{t.education.subtitle}</p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {/* Education */}
          <Card className="p-4 sm:p-6">
            <div className="mb-4 flex items-start sm:items-center gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base">{t.education.degree}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t.education.university}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="text-muted-foreground">{t.education.duration}</span>
                <Badge variant="secondary" className="text-xs">
                  2015 - 2018
                </Badge>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-muted-foreground">{t.education.focus}</span>
                <span className="font-medium text-sm">{t.education.focusArea}</span>
              </div>
              <div className="mt-4 text-xs sm:text-sm text-muted-foreground">{t.education.description}</div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-4 sm:p-6">
            <div className="mb-4 flex items-start sm:items-center gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm sm:text-base">{t.education.certifications}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{t.education.certificationsSubtitle}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs sm:text-sm font-medium">{t.education.awsCert}</span>
                  <Badge variant="secondary" className="shrink-0 text-xs">
                    2023
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Amazon Web Services</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs sm:text-sm font-medium">{t.education.gcpCert}</span>
                  <Badge variant="secondary" className="shrink-0 text-xs">
                    2022
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Google Cloud</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs sm:text-sm font-medium">{t.education.scrumCert}</span>
                  <Badge variant="secondary" className="shrink-0 text-xs">
                    2021
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">Scrum Alliance</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
