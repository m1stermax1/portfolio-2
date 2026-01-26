"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function CVPage() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

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
              <p className="mb-4 text-xl text-muted-foreground">Full-Stack Developer | Java, React, Node.js, AWS</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Buenos Aires, Argentina (GMT-3)</p>
                <p>maxipompas@gmail.com</p>
                <a href="https://www.linkedin.com/in/maximiliano-pompas-681a3318b/">linkedin.com/in/maximiliano-pompas-681a3318b </a> | 
                <a href="https://github.com/m1stermax1"> https://github.com/m1stermax1</a>
              </div>
            </section>

            {/* Summary */}
            <section>
              <h2 className="mb-4 border-b pb-2 text-2xl font-bold">Professional Summary</h2>
              <p className="leading-relaxed text-muted-foreground">
                Results-driven Full-Stack Developer with 5+ years of experience building scalable web applications.
                Specialized in React, Node.js, and AWS cloud infrastructure. Proven track record of improving system
                performance by 40%, reducing deployment time by 60%, and delivering high-impact features that increased
                user engagement by 35%. Passionate about clean code, automation, and measurable business outcomes.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="mb-4 border-b pb-2 text-2xl font-bold">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Senior Full-Stack Developer</h3>
                      <p className="text-muted-foreground">TechFlow Solutions</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Mar 2022 - Present</p>
                  </div>
                  <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
                    <li>Architected and deployed microservices infrastructure on AWS, reducing API latency by 45%</li>
                    <li>
                      Led migration from monolith to React-based SPA, improving page load times by 3.2s (60% faster)
                    </li>
                    <li>Implemented CI/CD pipeline with GitHub Actions, cutting deployment time from 2hrs to 15min</li>
                    <li>Mentored 3 junior developers, conducting code reviews and pair programming sessions</li>
                    <li>Technologies: React, TypeScript, Node.js, PostgreSQL, AWS (EC2, S3, Lambda), Docker</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Full-Stack Developer</h3>
                      <p className="text-muted-foreground">Digital Innovations Inc.</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Jun 2020 - Feb 2022</p>
                  </div>
                  <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      Built real-time analytics dashboard processing 50K+ events/day, increasing user engagement by 35%
                    </li>
                    <li>
                      Optimized database queries and implemented caching with Redis, reducing response time by 70%
                    </li>
                    <li>Developed RESTful APIs serving 1M+ requests/month with 99.9% uptime</li>
                    <li>Integrated payment processing with Stripe, facilitating $500K+ in transactions</li>
                    <li>Technologies: React, Next.js, Express, MongoDB, Redis, Stripe API</li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Frontend Developer</h3>
                      <p className="text-muted-foreground">Creative Web Studio</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Jan 2019 - May 2020</p>
                  </div>
                  <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
                    <li>
                      Developed 12+ responsive websites for clients across e-commerce, healthcare, and education sectors
                    </li>
                    <li>Improved SEO performance, achieving 85+ Lighthouse scores across all projects</li>
                    <li>Collaborated with design team to implement pixel-perfect UI components</li>
                    <li>Technologies: React, JavaScript, SASS, Tailwind CSS, Webpack</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="mb-4 border-b pb-2 text-2xl font-bold">Technical Skills</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Languages</h3>
                  <p className="text-sm text-muted-foreground">JavaScript, TypeScript, Python, SQL</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Frameworks</h3>
                  <p className="text-sm text-muted-foreground">React, Next.js, Node.js, Express, NestJS</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Cloud & DevOps</h3>
                  <p className="text-sm text-muted-foreground">AWS, Docker, GitHub Actions, Vercel, Terraform</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Databases</h3>
                  <p className="text-sm text-muted-foreground">PostgreSQL, MongoDB, Redis, DynamoDB</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Testing</h3>
                  <p className="text-sm text-muted-foreground">Jest, React Testing Library, Playwright, Cypress</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Observability</h3>
                  <p className="text-sm text-muted-foreground">Datadog, Sentry, New Relic, CloudWatch</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-4 border-b pb-2 text-2xl font-bold">Education & Certifications</h2>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex items-start justify-between">
                    <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-sm text-muted-foreground">2015 - 2018</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Universidad de Buenos Aires</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Certifications</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• AWS Certified Solutions Architect - Associate (2023)</li>
                    <li>• Google Cloud Professional Cloud Architect (2022)</li>
                    <li>• Certified Scrum Master (CSM) (2021)</li>
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
  )
}
