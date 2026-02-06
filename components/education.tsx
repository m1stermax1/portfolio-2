"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function Education() {
  const { t } = useLanguage();
  const [openCert, setOpenCert] = useState(false);
  const { elementRef, isVisible } = useScrollReveal();

  // Expected PDF path (place your PDF in public/certs/certificate.pdf)
  const pdfPath = "/certs/certificate.pdf";

  return (
    <section id="education" className="border-b py-16 sm:py-20 md:py-24" ref={elementRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`mb-8 sm:mb-12 space-y-4 animate-slide-in-left scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
            {t.education.title}
          </h2>
          <p className={`text-pretty text-muted-foreground animate-slide-in-up delay-100 scroll-reveal-left ${isVisible ? 'visible' : ''}`}>
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {/* Education */}
          <Card className={`p-4 sm:p-6 lg:col-span-2 group hover:shadow-lg hover:shadow-primary/20 transition-smooth hover:-translate-y-2 border-t-2 border-primary/30 hover:border-t-primary scroll-reveal-scale ${isVisible ? 'visible' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 items-start">
              <div className="lg:col-span-2 title-certificate-grid-area">
                <div className="mb-4 flex items-start sm:items-center gap-3 group-hover:text-primary transition-smooth">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-smooth" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base">
                      {t.education.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {t.education.university}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between gap-2 group-hover:translate-x-1 transition-smooth">
                    <span className="text-muted-foreground">
                      {t.education.duration}
                    </span>
                    <Badge variant="secondary" className="text-xs hover:bg-primary hover:text-background transition-smooth">
                      2022 - 2023
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between gap-2 group-hover:translate-x-1 transition-smooth">
                    <span className="text-muted-foreground">
                      {t.education.focus}
                    </span>
                    <span className="font-medium text-sm">
                      {t.education.focusArea}
                    </span>
                  </div>
                  <div className="mt-4 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                    {t.education.description}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className={`p-4 sm:p-6 lg:col-span-2 group hover:shadow-lg hover:shadow-primary/20 transition-smooth hover:-translate-y-2 border-t-2 border-primary/30 hover:border-t-primary scroll-reveal-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:row-[max-content / max-content] gap-4 items-start">
              <div className="lg:col-span-2 title-certificate-grid-area">
                <div className="mb-4 flex items-start sm:items-center gap-3 group-hover:text-primary transition-smooth">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-smooth" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base">
                      {t.education.degree1}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {t.education.university1}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-start-2 lg:row-span-2 flex items-center justify-end certificate-grid-area">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenCert(true)}
                  onKeyDown={(e) => e.key === "Enter" && setOpenCert(true)}
                  className="cursor-pointer rounded overflow-hidden border w-32 h-40 flex items-center justify-center bg-white hover:scale-110 hover:shadow-lg transition-smooth">
                  <img
                    src="/certs/certificate.png"
                    alt={t.education.certificateAlt || "Thumbnail del certificado"}
                    className="w-full h-full object-cover certificate"
                  />
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between gap-2 group-hover:translate-x-1 transition-smooth">
                    <span className="text-muted-foreground">
                      {t.education.duration}
                    </span>
                    <Badge variant="secondary" className="text-xs hover:bg-primary hover:text-background transition-smooth">
                      2026
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between gap-2 group-hover:translate-x-1 transition-smooth">
                    <span className="text-muted-foreground">
                      {t.education.focus}
                    </span>
                    <span className="font-medium text-sm">
                      {t.education.focusArea1}
                    </span>
                  </div>
                  <div className="mt-4 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                    {t.education.description1}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {openCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpenCert(false)}
            aria-hidden
          />

          <div className="relative z-10 max-w-4xl w-full h-[80vh] bg-white rounded shadow-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <h3 className="text-sm font-medium">
                {t.education.certificateTitle || "Certificado"}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground px-2 py-1"
                >
                  {t.education.openFull || "Abrir PDF"}
                </a>
                <button
                  onClick={() => setOpenCert(false)}
                  className="px-2 py-1 text-sm bg-muted rounded"
                >
                  Cerrar
                </button>
              </div>
            </div>

            <div className="h-full">
              <iframe
                src={pdfPath}
                title="Certificado completo"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
