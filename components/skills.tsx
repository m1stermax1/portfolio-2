"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
    case "Advanced":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      category: t.skills.languages,
      skills: [ 
      { name: "JAVA" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "SQL" },
      ],
    },
    {
      category: t.skills.frameworks,
      skills: [
      { name: "Spring Boot", level: t.skills.expert },
        { name: "React", level: t.skills.expert },
        { name: "Next.js", level: t.skills.expert },
        { name: "Express", level: t.skills.advanced },
      ],
    },
    {
      category: t.skills.cloud,
      skills: [
        { name: "AWS", level: t.skills.advanced },
        { name: "GitHub Actions", level: t.skills.advanced },
        { name: "Vercel", level: t.skills.expert },
      ],
    },
    {
      category: t.skills.databases,
      skills: [
        { name: "Neo4j", level: t.skills.advanced },
        { name: "MongoDB", level: t.skills.advanced },
      ],
    },
  ]

  return (
    <section id="skills" className="border-b py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 space-y-4">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{t.skills.title}</h2>
          <p className="text-pretty text-muted-foreground">{t.skills.subtitle}</p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <h3 className="mb-4 font-semibold text-sm sm:text-base text-primary">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center justify-between gap-2">
                    <span className="text-sm text-muted-foreground truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
