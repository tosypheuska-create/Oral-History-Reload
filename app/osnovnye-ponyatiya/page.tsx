import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarNav } from "@/components/sidebar-nav"
import { ArrowLeft, ArrowRight } from "lucide-react"

const navItems = [
  { title: "Введение", href: "/osnovnye-ponyatiya" },
  { title: "Достоверность", href: "/osnovnye-ponyatiya/dostovernost" },
  { title: "Доверие", href: "/osnovnye-ponyatiya/doverie" },
  { title: "Точка насыщения", href: "/osnovnye-ponyatiya/tochka-nasyshcheniya" },
  { title: "Эмпатия", href: "/osnovnye-ponyatiya/empatiya" },
  { title: "Нарратив", href: "/osnovnye-ponyatiya/narrativ" },
  { title: "Соучаствующее слушание", href: "/osnovnye-ponyatiya/souchastvuyushchee-slushanie" },
  { title: "Коммуникативная память", href: "/osnovnye-ponyatiya/kommunikativnaya-pamyat" },
]

export default function OsnovnyePonyatiyaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={navItems} currentPath="/osnovnye-ponyatiya" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              {/* Mobile Navigation */}
              <div className="lg:hidden mb-6 flex gap-2 overflow-x-auto pb-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      item.href === "/osnovnye-ponyatiya"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">Раздел 04</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Основные понятия
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  В этом разделе мы разбираем ключевые понятия, которые помогут вам глубже понять 
                  природу устноисторического исследования и осознанно подходить к работе с воспоминаниями.
                </p>
              </header>

              <div className="prose prose-slate max-w-none">
                <p className="text-foreground leading-relaxed mb-8">
                  Устная история опирается на набор специфических понятий, которые отличают её от других 
                  форм исторического исследования. Понимание этих терминов поможет вам лучше ориентироваться 
                  в методологии и практике работы с воспоминаниями.
                </p>

                <div className="grid gap-4">
                  {navItems.slice(1).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group block p-6 bg-secondary/30 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h2>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/posle-intervyu/zashchita"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Защита информантов
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/osnovnye-ponyatiya/dostovernost"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Достоверность
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
