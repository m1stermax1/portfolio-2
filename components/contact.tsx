"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, MapPin, Send, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 space-y-4 text-center">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{t.contact.title}</h2>
          <p className="text-pretty text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <h3 className="mb-4 font-semibold text-sm sm:text-base">{t.contact.contactInfo}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{t.contact.email}</p>
                    <a
                      href="mailto:maxipompas@gmail.com"
                      className="font-medium hover:underline text-sm sm:text-base truncate block hover:text-primary transition-colors"
                    >
                      maxipompas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{t.contact.linkedin}</p>
                    <a
                      href="https://www.linkedin.com/in/maximiliano-pompas-681a3318b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline text-sm break-all hover:text-primary transition-colors"
                    >
                      linkedin.com/in/maximiliano-pompas
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{t.contact.github}</p>
                    <a
                      href="https://github.com/m1stermax1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline text-sm break-all hover:text-primary transition-colors"
                    >
                      github.com/m1stermax1
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t.contact.location}</p>
                    <p className="font-medium text-sm sm:text-base">{t.contact.locationValue}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <h3 className="mb-4 font-semibold text-sm sm:text-base">{t.contact.availability}</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="gap-2 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  {t.contact.available}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {t.contact.remote}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {t.contact.hybrid}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {t.contact.onsite}
                </Badge>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{t.contact.availabilityDesc}</p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <h3 className="mb-4 font-semibold text-sm sm:text-base">{t.contact.sendMessage}</h3>

            {isSubmitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{t.contact.messageSent}</h4>
                  <p className="text-sm text-muted-foreground">{t.contact.thankYou}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t.contact.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className="focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    rows={6}
                    required
                    className="focus:border-primary"
                  />
                </div>

                <Button type="submit" className="w-full gap-2 gradient-primary text-white border-0">
                  <Send className="h-4 w-4" />
                  {t.contact.send}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 sm:mt-20 md:mt-24 border-t py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              © 2025 Maximiliano Pompas. {t.contact.footer}
            </p>
            <div className="flex gap-2 sm:gap-4">
              <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                <a
                  href="https://www.linkedin.com/in/maximiliano-pompas-681a3318b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                <a href="https://github.com/m1stermax1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                <a href="mailto:maxipompas@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
