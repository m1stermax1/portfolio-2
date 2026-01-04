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
      title: t.projects.ecommerce.title,
      description: t.projects.ecommerce.description,
      problem: t.projects.ecommerce.problem,
      approach: t.projects.ecommerce.approach,
      outcome: t.projects.ecommerce.outcome,
      tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
      category: "Full-Stack" as ProjectFilter,
      github: "https://github.com/maxi-placeholder/ecommerce",
      demo: "https://demo.example.com",
    },
    {
      title: t.projects.analytics.title,
      description: t.projects.analytics.description,
      problem: t.projects.analytics.problem,
      approach: t.projects.analytics.approach,
      outcome: t.projects.analytics.outcome,
      tags: ["React", "TypeScript", "WebSocket", "Redis", "Chart.js"],
      category: "Frontend" as ProjectFilter,
      github: "https://github.com/maxi-placeholder/analytics",
      demo: "https://demo.example.com",
    },
    {
      title: t.projects.apiGateway.title,
      description: t.projects.apiGateway.description,
      problem: t.projects.apiGateway.problem,
      approach: t.projects.apiGateway.approach,
      outcome: t.projects.apiGateway.outcome,
      tags: ["Node.js", "Express", "Docker", "Kubernetes", "AWS"],
      category: "Backend" as ProjectFilter,
      github: "https://github.com/maxi-placeholder/api-gateway",
      demo: "https://demo.example.com",
    },
    {
      title: t.projects.cicd.title,
      description: t.projects.cicd.description,
      problem: t.projects.cicd.problem,
      approach: t.projects.cicd.approach,
      outcome: t.projects.cicd.outcome,
      tags: ["GitHub Actions", "Docker", "AWS", "Terraform"],
      category: "DevOps" as ProjectFilter,
      github: "https://github.com/maxi-placeholder/cicd-pipeline",
    },
    {
      title: t.projects.componentLib.title,
      description: t.projects.componentLib.description,
      problem: t.projects.componentLib.problem,
      approach: t.projects.componentLib.approach,
      outcome: t.projects.componentLib.outcome,
      tags: ["React", "TypeScript", "Storybook", "Jest"],
      category: "Frontend" as ProjectFilter,
      github: "https://github.com/maxi-placeholder/component-library",
      demo: "https://demo.example.com",
    },
    {
      title: t.projects.dbOptimization.title,
      description: t.projects.dbOptimization.description,
      problem: t.projects.dbOptimization.problem,
      approach: t.projects.dbOptimization.approach,
      outcome: t.projects.dbOptimization.outcome,
      tags: ["PostgreSQL", "Redis", "Node.js", "SQL"],
      category: "Backend" as ProjectFilter,
      github: "https://github.com/maxi-placeholder/db-optimization",
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
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold">{t.projects.title}</h2>
          <p className="text-pretty text-muted-foreground">{t.projects.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="text-xs sm:text-sm"
            >
              {filterLabels[filter]}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="flex flex-col p-4 sm:p-6">
              <div className="mb-4 space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>

              <div className="mb-4 space-y-3 text-sm">
                <div>
                  <span className="font-medium text-foreground">{t.projects.problem}</span>{" "}
                  <span className="text-muted-foreground">{project.problem}</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">{t.projects.approach}</span>{" "}
                  <span className="text-muted-foreground">{project.approach}</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">{t.projects.outcome}</span>{" "}
                  <span className="text-muted-foreground">{project.outcome}</span>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-2">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent w-full sm:w-auto" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    {t.projects.code}
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent w-full sm:w-auto" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {t.projects.demo}
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
