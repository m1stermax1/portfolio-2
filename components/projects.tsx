"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

type ProjectFilter = "All" | "Frontend" | "Backend" | "DevOps" | "Full-Stack";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.travelAgency.title,
      description: t.projects.travelAgency.description,
      date: t.projects.travelAgency.date,
      problem: t.projects.travelAgency.problem,
      approach: t.projects.travelAgency.approach,
      outcome: t.projects.travelAgency.outcome,
      tags: ["NextJs", "Javascript", "TypeScript", "CSS"],
      category: "Full-Stack" as ProjectFilter,
      demo: "https://leonturismoyviajes.com/",
    },
    {
      title: t.projects.realStateAgent.title,
      description: t.projects.realStateAgent.description,
      problem: t.projects.realStateAgent.problem,
      date: t.projects.realStateAgent.date,
      approach: t.projects.realStateAgent.approach,
      outcome: t.projects.realStateAgent.outcome,
      tags: ["NextJs", "React", "TypeScript", "TailwindCSS", "Vercel"],
      category: "Full-Stack" as ProjectFilter,
      demo: "https://gayosoyasoc.vercel.app/",
    },
    {
      title: t.projects.ong.title,
      description: t.projects.ong.description,
      problem: t.projects.ong.problem,
      approach: t.projects.ong.approach,
      date: t.projects.ong.date,
      outcome: t.projects.ong.outcome,
      tags: ["v0", "NextJs", "React", "TypeScript", "TailwindCSS", "Vercel"],
      category: "Full-Stack" as ProjectFilter,
      demo: "https://v0-testprojectong.vercel.app/",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filterLabels = {
    All: t.projects.all,
    "Full-Stack": t.projects.fullStack,
    Frontend: t.projects.frontend,
    Backend: t.projects.backend,
    DevOps: t.projects.devops,
  };

  return (
    <section id="projects" className="border-b py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 space-y-4">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold">
            {t.projects.title}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="flex flex-col p-4 sm:p-6">
              <div className="mb-4 space-y-2">
                <div className="shrink-0 text-sm text-muted-foreground">
                  {project.date}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="mb-4 space-y-3 text-sm">
                <div>
                  <span className="font-medium text-foreground">
                    {t.projects.problem}
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {project.problem}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-foreground">
                    {t.projects.approach}
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {project.approach}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-foreground">
                    {t.projects.outcome}
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {project.outcome}
                  </span>
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
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-transparent w-full sm:w-auto"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    {t.projects.code}
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
  );
}
