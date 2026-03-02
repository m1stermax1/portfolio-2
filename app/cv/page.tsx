"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function CVPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-8 flex items-center justify-between print:hidden">
            <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
            <Button onClick={handlePrint} className="gap-2">
              <Download className="h-4 w-4" />
              Print / Save as PDF
            </Button>
          </div>

          <div className="space-y-12 print:space-y-8">
            {/* Header */}
            <section>
              <h1 className="mb-2 text-4xl font-bold">Maximiliano Pompas</h1>
              <p className="mb-4 text-xl text-muted-foreground">
                Software Developer
              </p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Buenos Aires, Argentina (GMT-3)</p>
                <p>maxipompas@gmail.com</p>
                <a href="https://www.linkedin.com/in/maximiliano-pompas-681a3318b/">
                  linkedin.com/in/maximiliano-pompas-681a3318b{" "}
                </a>{" "}
                |
                <a href="https://github.com/m1stermax1">
                  {" "}
                  https://github.com/m1stermax1
                </a>
              </div>
            </section>

            {/* Summary */}
            <section>
              <h2 className="mb-4 border-b pb-2 text-2xl font-bold">
                Professional Summary
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                My journey into software development started with curiosity, wanting to understand how systems work beneath the surface and how technology can translate ideas into real, functional products.<br></br><br></br>As a Software Developer working on a dynamic enterprise platform (ABLE), I specialized in translating complex business requirements into scalable technical solutions. <br></br><br></br>I worked extensively with configuration-driven architectures using structured JSON, embedded runtime logic with Spring Expression Language (SpEL), and designed graph-based queries in Neo4j to support real-world business workflows.<br></br><br></br>Beyond implementation, I collaborated directly with clients to define rules, features, and system behavior. This experience strengthened not only my technical skills, but also my ability to think in terms of product value, system design, and long-term scalability.   <br></br><br></br>Throughout this process, I developed capabilities in:    <br></br>Backend logic and API-driven systems (Java / Spring ecosystem)<br></br>Graph databases (Neo4j / Cypher)
                <br></br>Data access patterns (JDBC, GraphQL, SQL fundamentals)
                <br></br>CI/CD environments (Jenkins)
                <br></br>Technical communication and client collaboration<br></br>Containerized deployments (Docker)
                <br></br>Cross-functional collaboration and feature ownership<br></br><br></br>Today, I am motivated by building and leading projects that create measurable impact products where technical decisions align with business strategy and user value.<br></br><br></br>My goal is to continue evolving toward leadership in software projects, contributing not only through code, but through architectural thinking, product awareness, and team collaboration.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="mb-4 border-b pb-2 text-2xl font-bold">
                Work Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Software Developer (Platform / Full-Stack Oriented)
                      </h3>
                      <p className="text-muted-foreground">Search Rebel - San Diego, CA, Estados Unidos</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Remoto - Jul 2021 - Jan 2026
                    </p>
                  </div>
                  <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      I designed and developed components to be integrated into
                      production applications.
                    </li>
                    <li>
                      I worked directly with product owners to conceptualize,
                      build, and test applications.
                    </li>
                    <li>
                      I trained new employees and led implementations using the
                      company's technical stack.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="mb-4 border-b pb-2 text-2xl font-bold">
                Technical Skills
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Languages</h3>
                  <p className="text-sm text-muted-foreground">
                    JavaScript, TypeScript, SQL
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Frameworks</h3>
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, Node.js, Express
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Cloud & DevOps</h3>
                  <p className="text-sm text-muted-foreground">
                    AWS, GitHub Actions, Vercel
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Databases</h3>
                  <p className="text-sm text-muted-foreground">
                    PostgreSQL, MongoDB, GraphQL
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-4 border-b pb-2 text-2xl font-bold">
                Education & Certifications
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex items-start justify-between">
                    <h3 className="font-semibold">Full Stack Developer - MERN</h3>
                    <p className="text-sm text-muted-foreground">2022</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Coderhouse</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Certifications</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Web Developer</li>
                    <li>• Javascript</li>
                    <li>• React</li>
                    <li>• Backend (NodeJS, Express, MongoDB)</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="mb-1 flex items-start justify-between">
                  <h3 className="font-semibold">Responsive Web Design</h3>
                  <p className="text-sm text-muted-foreground">2026</p>
                </div>
                <p className="text-sm text-muted-foreground">freeCodeCamp</p>
              </div>

              <div>
                <div className="mb-1 flex items-start justify-between">
                  <h3 className="font-semibold">HTML de 0 a Experto</h3>
                  <p className="text-sm text-muted-foreground">2021</p>
                </div>
                <p className="text-sm text-muted-foreground">Udemy</p>
              </div>

              <div>
                <div className="mb-1 flex items-start justify-between">
                  <h3 className="font-semibold">CSS de 0 a Experto</h3>
                  <p className="text-sm text-muted-foreground">2021</p>
                </div>
                <p className="text-sm text-muted-foreground">Udemy</p>
              </div>

              <div className="space-y-4 pt-4">
                <div>
                  <div className="mb-1 flex items-start justify-between">
                    <h3 className="font-semibold">Agility and SCRUM</h3>
                    <p className="text-sm text-muted-foreground">2026</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Academia Kleer</p>
                  <p>I have completed training in agile methodologies and the Scrum framework, acquiring practical knowledge of sprint planning, backlog management, estimation techniques, and iterative product delivery. I have strengthened my ability to collaborate in cross-functional teams and align technical execution with business priorities.</p>
                </div>

                <div>
                  <div className="mb-1 flex items-start justify-between">
                    <h3 className="font-semibold">Agile Estimates</h3>
                    <p className="text-sm text-muted-foreground">2026</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Academia Kleer</p>
                  <p>Comprehensive training in agile estimation techniques, including story points, planning poker, backlog refinement, and velocity tracking. I developed the ability to assess effort based on complexity and uncertainty, rather than fixed time assumptions.</p>
                </div>



              </div>
            </section>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:space-y-8 > * + * {
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </>
  );
}
