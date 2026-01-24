"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type ProjectFilter = "All" | "Frontend" | "Backend" | "DevOps" | "Full-Stack"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All")
  const { t } = useLanguage()

  const filters: ProjectFilter[] = ["All", "Full-Stack", "Frontend", "Backend", "DevOps"]

  const projects = [
    {
      title: t.projects.travelAgency?.title,
      description: t.projects.travelAgency?.description,
      problem: t.projects.travelAgency?.problem,
      category: "Full-Stack" as ProjectFilter,
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const filterLabels = {
    All: t.projects.all,
    "Full-Stack": t.projects.fullStack,
    Frontend: t.projects.frontend,
    Backend: t.projects.backend,
    DevOps: t.projects.devops,
  }

  return (
    <section id="projects" className="border-b py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 space-y-4">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{t.projects?.title}</h2>
          <p className="text-pretty text-muted-foreground">{t.projects?.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={`text-xs sm:text-sm ${activeFilter === filter ? "gradient-primary text-white border-0" : "hover:border-primary"}`}
            >
              {filterLabels[filter]}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="flex flex-col p-4 sm:p-6 hover:shadow-lg transition-all hover:scale-[1.02]">
              <div className="mb-4 space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold">{project?.title}</h3>
                <p className="text-sm text-muted-foreground">{project?.description}</p>
              </div>

              <div className="mb-4 space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">{project.problem}</span>
                </div>
           
              </div>

 
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
