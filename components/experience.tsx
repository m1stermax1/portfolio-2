"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t.experience.softwareDev,
      company: t.experience.company,
      period: "Jul 2021 - Present",
      location: t.experience.location,
      achievements: [t.experience.achievement1, t.experience.achievement2],
      stack: ["JAVA", "React", "TypeScript", "Node.js", "neo4j", "AWS", "Spell", "SQL"],
    },
  ]

  return (
    <section id="experience" className="border-b py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 space-y-4">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
            {t.experience.title}
          </h2>
          <p className="text-pretty text-muted-foreground">{t.experience.subtitle}</p>
        </div>

        <div className="relative space-y-8">
          <div className="absolute left-0 top-0 hidden h-full w-px gradient-primary md:block" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative md:pl-8">
              <div className="absolute left-[-4px] top-6 hidden h-2 w-2 rounded-full bg-primary md:block shadow-[0_0_8px_var(--gradient-start)]" />

              <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="shrink-0 text-sm text-muted-foreground">{exp.period}</div>
                </div>

                <ul className="mb-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="hover:bg-primary/10 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
