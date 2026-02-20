"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { useScrollReveal } from "@/lib/useScrollReveal";

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
    case "Advanced":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function Skills() {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollReveal();

  const skillCategories = [
    {
      category: t.skills.languages,
      skills: [
        { name: "JAVA", level: t.skills.basic },
        { name: "JavaScript", level: t.skills.intermediate },
        { name: "TypeScript", level: t.skills.basic },
        { name: "SQL", level: t.skills.basic },
      ],
    },
    {
      category: t.skills.frameworks,
      skills: [
        { name: "Spring Boot", level: t.skills.basic },
        { name: "React", level: t.skills.basic },
        { name: "Next.js", level: t.skills.basic },
        { name: "Express", level: t.skills.basic },
      ],
    },
    {
      category: t.skills.cloud,
      skills: [
        { name: "AWS", level: t.skills.basic },
        { name: "GitHub Actions", level: t.skills.intermediate },
        { name: "Vercel", level: t.skills.intermediate },
      ],
    },
    {
      category: t.skills.databases,
      skills: [
        { name: "Neo4j", level: t.skills.basic },
        { name: "GraphQL", level: t.skills.basic },
        { name: "MongoDB", level: t.skills.basic },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="border-b py-16 sm:py-20 md:py-24"
      ref={elementRef}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`mb-8 sm:mb-12 space-y-4 animate-slide-in-left scroll-reveal ${isVisible ? "visible" : ""}`}
        >
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
            {t.skills.title}
          </h2>
          <p
            className={`text-pretty text-muted-foreground animate-slide-in-up delay-100 scroll-reveal-left ${isVisible ? "visible" : ""}`}
          >
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-4 sm:p-6 hover:shadow-lg hover:shadow-primary/20 transition-smooth hover:-translate-y-2 hover:border-primary/50 cursor-pointer group border-t-2 border-transparent hover:border-t-primary scroll-reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="mb-4 font-semibold text-sm sm:text-base text-primary group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-smooth">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2 group/skill hover:translate-x-2 transition-smooth"
                  >
                    <span className="text-sm text-muted-foreground group-hover/skill:text-primary transition-smooth">
                      {skill.name}
                    </span>

                    <Badge variant="outline">{skill?.level}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
