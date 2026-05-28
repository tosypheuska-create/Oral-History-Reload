import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarNav } from "@/components/sidebar-nav"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

const sidebarItems = [
  { title: "Введение", href: "/posle-intervyu" },
  { title: "Расшифровка интервью", href: "/posle-intervyu/rasshifrovka" },
  { title: "Поделиться", href: "/posle-intervyu/podelitsya" },
  { title: "Цифровой архив", href: "/posle-intervyu/cifrovoy-arkhiv" },
  { title: "Защита информантов", href: "/posle-intervyu/zashchita" },
]

export default function RasshifrovkaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/posle-intervyu/rasshifrovka" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">После интервью</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Расшифровка интервью
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <p className="text-foreground leading-relaxed">
                  Подробная информация о расшифровке интервью представлена на главной странице раздела 
                  «После интервью».
                </p>

                <Link 
                  href="/posle-intervyu"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Перейти к введению раздела
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/posle-intervyu"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Введение
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/posle-intervyu/podelitsya"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Поделиться
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </nav>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
