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
import { useScrollReveal } from "@/lib/useScrollReveal"
import emailjs from '@emailjs/browser'

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { t } = useLanguage()
  const { elementRef, isVisible } = useScrollReveal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'maxipompas@hotmail.com', // Your email address
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error('Email send failed:', err)
      setError(t.contact.errorMessage || 'Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24" ref={elementRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`mb-8 sm:mb-12 space-y-4 text-center animate-fade-in scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className={`text-balance text-2xl sm:text-3xl md:text-4xl font-bold gradient-text animate-glow-text scroll-reveal ${isVisible ? 'visible' : ''}`}>{t.contact.title}</h2>
          <p className={`text-pretty text-muted-foreground animate-slide-in-up delay-100 scroll-reveal-left ${isVisible ? 'visible' : ''}`}>{t.contact.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className={`space-y-4 sm:space-y-6 animate-slide-in-left scroll-reveal-left ${isVisible ? 'visible' : ''}`}>
            <Card className={`p-4 sm:p-6 hover:shadow-lg hover:shadow-primary/20 transition-smooth hover:-translate-y-2 group border-l-4 border-primary/30 hover:border-primary scroll-reveal-left ${isVisible ? 'visible' : ''}`}>
              <h3 className="mb-4 font-semibold text-sm sm:text-base group-hover:text-primary transition-smooth">{t.contact.contactInfo}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group-hover:translate-x-2 transition-smooth">
                  <Mail className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-smooth" />
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

                <div className="flex items-center gap-3 group-hover:translate-x-2 transition-smooth">
                  <Linkedin className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-smooth" />
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

                <div className="flex items-center gap-3 group-hover:translate-x-2 transition-smooth">
                  <Github className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-smooth" />
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

                <div className="flex items-center gap-3 group-hover:translate-x-2 transition-smooth">
                  <MapPin className="h-5 w-5 text-primary shrink-0 group-hover:scale-110 transition-smooth" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t.contact.location}</p>
                    <p className="font-medium text-sm sm:text-base">{t.contact.locationValue}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className={`p-4 sm:p-6 hover:shadow-lg hover:shadow-primary/20 transition-smooth hover:-translate-y-2 group border-l-4 border-primary/30 hover:border-primary scroll-reveal-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <h3 className="mb-4 font-semibold text-sm sm:text-base group-hover:text-primary transition-smooth">{t.contact.availability}</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="gap-2 text-xs hover:bg-green-500/20 hover:border-green-500/50 transition-smooth">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  {t.contact.available}
                </Badge>
                <Badge variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary transition-smooth">
                  {t.contact.remote}
                </Badge>
                <Badge variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary transition-smooth">
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
          <Card className={`p-4 sm:p-6 hover:shadow-lg hover:shadow-primary/20 transition-smooth hover:-translate-y-2 group border-l-4 border-primary/30 hover:border-primary scroll-reveal-right ${isVisible ? 'visible' : ''}`}>
            <h3 className="mb-4 font-semibold text-sm sm:text-base group-hover:text-primary transition-smooth">{t.contact.sendMessage}</h3>

            {isSubmitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center space-y-4 text-center animate-scale-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary hover:scale-110 transition-smooth">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{t.contact.messageSent}</h4>
                  <p className="text-sm text-muted-foreground">{t.contact.thankYou}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 hover:translate-x-1 transition-smooth">
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
                    className="focus:border-primary focus:scale-105 transition-smooth"
                  />
                </div>

                <div className="space-y-2 hover:translate-x-1 transition-smooth">
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
                    className="focus:border-primary focus:scale-105 transition-smooth"
                  />
                </div>

                <div className="space-y-2 hover:translate-x-1 transition-smooth">
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
                    className="focus:border-primary focus:scale-105 transition-smooth"
                  />
                </div>

                {error && (
                  <div className="text-sm text-red-600 bg-red-50 p-2 rounded animate-slide-in-up">
                    {error}
                  </div>
                )}

                <Button type="submit" disabled={isLoading} className="w-full gap-2 gradient-primary text-white border-0 hover:scale-105 transition-smooth hover:shadow-lg hover:shadow-primary/50">
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      {t.contact.sending || 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t.contact.send}
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 sm:mt-20 md:mt-24 border-t py-6 sm:py-8 animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row group-hover:text-primary transition-smooth">
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left hover:text-foreground transition-smooth">
              © 2025 Maximiliano Pompas.
            </p>
            <div className="flex gap-2 sm:gap-4">
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-smooth">
                <a
                  href="https://www.linkedin.com/in/maximiliano-pompas-681a3318b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-smooth">
                <a href="https://github.com/m1stermax1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:scale-110 transition-smooth">
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
