"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export function Experience() {
  const { t } = useLanguage();

  const experiences = [

    {
      title: t.experience.softwareDev,
      company: t.experience.company,
      period: t.experience.date,
      location: t.experience.location,
      achievements: [
        t.experience.achievement1,
        t.experience.achievement2,
        t.experience.achievement3,
      ],
      stack: [
        "JAVA",
        "React",
        "TypeScript",
        "Node.js",
        "neo4j",
        "AWS",
        "SpEL",
        "SQL",
      ],
    },

    {
      title: t.experience.manager,
      company: t.experience.managerCompany,
      period: t.experience.managerDate,
      managerLocation: t.experience.managerLocation,
      achievements: [t.experience.achManager1, t.experience.achManager2],
    },
  ];

  return (
    <section id="experience" className="border-b py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 space-y-4 animate-slide-in-left">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
            {t.experience?.title}
          </h2>
          <p className="text-pretty text-muted-foreground animate-slide-in-up delay-100">
            {t.experience?.subtitle}
          </p>
        </div>

        <div className="relative space-y-8">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary to-accent md:block" />

          {experiences.map((exp, index) => (
            <div key={index} className={`relative md:pl-8 animate-slide-in-up`} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <div className="absolute left-[-4px] top-6 hidden h-2 w-2 rounded-full bg-primary md:block shadow-[0_0_8px_var(--gradient-start)] hover:scale-150 transition-smooth" />

              <Card className="p-4 sm:p-6 hover:shadow-lg hover:shadow-primary/20 transition-smooth hover:-translate-y-1 cursor-pointer group border-l-2 md:border-l-0 border-primary/50" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                <div className="mb-4 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1 group-hover:text-primary transition-smooth">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {exp?.title}
                    </h3>
                    <p className="text-muted-foreground">{exp?.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp?.location}
                    </p>
                  </div>
                  <div className="shrink-0 text-sm text-muted-foreground">
                    {exp?.period}
                  </div>
                </div>

                <ul className="mb-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 hover:text-foreground transition-smooth">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary group-hover:scale-150 transition-smooth" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp?.stack?.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="hover:bg-primary/20 hover:text-primary transition-smooth hover:scale-110 cursor-pointer"
                    >
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
  );
}
