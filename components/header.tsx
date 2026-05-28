"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  children?: { title: string; href: string }[]
}

const navigation: NavItem[] = [
  {
    title: "Перед началом",
    href: "/pered-nachalom",
    children: [
      { title: "Введение", href: "/pered-nachalom" },
      { title: "Я и мой собеседник", href: "/pered-nachalom/ya-i-moy-sobesednik" },
      { title: "Сколько интервью нужно", href: "/pered-nachalom/skolko-intervyu" },
      { title: "Типы респондентов", href: "/pered-nachalom/tipy-respondentov" },
      { title: "Подготовка и путеводитель", href: "/pered-nachalom/podgotovka" },
    ],
  },
  {
    title: "В процессе",
    href: "/v-processe",
  },
  {
    title: "После интервью",
    href: "/posle-intervyu",
  },
  {
    title: "Основные понятия",
    href: "/osnovnye-ponyatiya",
  },
  {
    title: "Рефлексии",
    href: "/refleksii",
  },
  {
    title: "Почитать ещё",
    href: "/pochitat-esche",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-lg sm:text-xl font-semibold text-foreground">
              Устная история
            </span>
            <span className="hidden sm:inline text-muted-foreground font-light">
              Перезагрузка
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                {item.title}
              </Link>
            ))}
            <div className="w-px h-5 bg-border mx-2" />
            <Link
              href="/o-proekte"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
            >
              О проекте
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2 text-base text-foreground hover:bg-secondary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-border my-2" />
            <Link
              href="/o-proekte"
              className="flex items-center justify-between px-3 py-2 text-base text-foreground hover:bg-secondary rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              О проекте
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
