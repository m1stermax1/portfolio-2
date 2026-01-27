"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden border-b">
      {/* Added gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 md:py-32 relative">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              {/* Added gradient border to availability badge */}
              <div className="inline-flex items-center gap-2 rounded-full gradient-border bg-background px-3 py-1 text-xs sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                {t.hero.available}
              </div>

              {/* Added gradient text to name */}
              <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight gradient-text">
                {t.hero.name}
              </h1>

              <p className="text-pretty text-lg sm:text-xl md:text-2xl text-muted-foreground">
                {t.hero.title}
              </p>

              <p className="text-sm sm:text-base text-muted-foreground">
                📍 {t.hero.location}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-sm">{t.hero.highlight1}</span>
              </div>
              <div className="flex items-start sm:items-center gap-2 text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-sm">{t.hero.highlight2}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Added gradient background to primary button */}
              <Button
                size="lg"
                className="gap-2 w-full sm:w-auto gradient-primary text-white border-0"
                asChild
              >
                <a href="/cv" target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" />
                  {t.hero.downloadCV}
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent w-full sm:w-auto hover:bg-primary/10"
                onClick={scrollToContact}
              >
                <Mail className="h-4 w-4" />
                {t.hero.getInTouch}
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a
                  href="https://www.linkedin.com/in/maximiliano-pompas-681a3318b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a
                  href="https://github.com/m1stermax1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a href="mailto:maxipompas@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Added gradient border to profile image */}
            <div className="relative h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full gradient-border">
              <Image
                src="/images/perfilMaxi.png"
                alt="Maximiliano Pompas"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
