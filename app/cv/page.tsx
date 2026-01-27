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
                Full-Stack Developer | Java, React, Node.js, AWS
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
                Full-Stack Developer with over 4 years of professional
                experience building modern, scalable, and high-performance web
                applications, using technologies such as React, Node.js,
                Next.js, and AWS.<br></br>I have a strong self-taught and
                academic background, with continuous growth from web development
                toward frontend and backend, allowing me to add value across the
                entire stack. <br></br>I have contributed to solutions for
                various business models, building platforms focused on user
                experience, conversion, and performance, with measurable impact
                and efficiency results. <br></br>I specialize in creating clear,
                maintainable products aligned with real business goals,
                prioritizing best practices and code quality. <br></br>I
                complement my technical profile with leadership and coordination
                skills acquired in both technological environments and team
                management, enabling effective communication with technical and
                non-technical stakeholders. <br></br>Passionate about
                automation, process optimization, and continuous learning, I
                seek to join teams where I can scale solutions, improve existing
                products, and generate tangible impact.
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
                        Software Developer
                      </h3>
                      <p className="text-muted-foreground">Freelancer</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Jul 2021 - Now
                    </p>
                  </div>
                  <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
                    <li>Continuos learning of new technologies.</li>
                    <li>Participation in varied projects.</li>
                    <li>Proactive search for new challenges and solutions.</li>
                  </ul>
                </div>
                <div>
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Semi Senior Sofware Developer
                      </h3>
                      <p className="text-muted-foreground">Search Rebel</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Jul 2021 - Jan 2026
                    </p>
                  </div>
                  <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
                    <li>Software development with proprietary stack.</li>
                    <li>Creation of different types of web applications.</li>
                    <li>
                      Mentored 2 junior developers, conducting code reviews and
                      pair programming sessions
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
                <div>
                  <h3 className="mb-2 font-semibold">Observability</h3>
                  <p className="text-sm text-muted-foreground">Sawmill</p>
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
                    <h3 className="font-semibold">Full Stack Developer</h3>
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
                    <li>• Backend (NodeJS, Express)</li>
                  </ul>
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
