"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Download, Languages } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleDownloadCV = () => {
    window.open("/cv", "_blank")
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  const navItems = [
    { label: t.nav.about, id: "about" },
    { label: t.nav.experience, id: "experience" },
    { label: t.nav.skills, id: "skills" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.contact, id: "contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur-md animate-slide-in-down">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold gradient-text hover:scale-110 transition-smooth">
            MP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 lg:gap-6 md:flex">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground transition-smooth hover:text-primary hover:translate-y-[-2px] relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCV}
              className="hidden gap-2 sm:inline-flex gradient-primary text-white border-0 hover:scale-105 transition-smooth hover:shadow-lg hover:shadow-primary/50 bg-transparent"
            >
              <Download className="h-4 w-4" />
              <span className="hidden lg:inline">{t.nav.cv}</span>
            </Button>

            {/* Language Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={language === "en" ? "Cambiar a Español" : "Switch to English"}
              className="hover:text-primary hover:scale-110 hover:rotate-12 transition-smooth"
            >
              <Languages className="h-5 w-5" />
              <span className="sr-only">{language === "en" ? "ES" : "EN"}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="hover:text-primary hover:scale-110 hover:rotate-12 transition-smooth"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:text-primary hover:scale-110 transition-smooth"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t py-4 md:hidden animate-slide-in-down">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-muted-foreground transition-smooth hover:text-primary hover:translate-x-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadCV}
                className="w-full gap-2 gradient-primary text-white border-0 bg-transparent hover:scale-105 transition-smooth hover:shadow-lg"
              >
                <Download className="h-4 w-4" />
                {t.nav.downloadCV}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
