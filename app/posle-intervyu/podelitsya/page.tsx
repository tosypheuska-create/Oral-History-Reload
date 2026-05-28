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

export default function PodelitsyaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/posle-intervyu/podelitsya" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">После интервью</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Поделиться: приложения, цифровые архивы
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <p className="text-foreground leading-relaxed">
                  За последние десятилетия появилось множество проектов, превращающих воспоминания в карты, 
                  цифровые архивы, аудиогиды и интерактивные платформы.
                </p>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed italic">
                    Такие проекты позволяют услышать множество голосов и делают видимой повседневную историю — 
                    опыт людей, чьи рассказы редко попадают в учебники, музейные витрины или официальные архивы.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  В этом смысле устная история продолжает традицию «истории снизу», возвращая право на рассказ 
                  тем, кто обычно остаётся вне большого исторического повествования.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Архивы для хранения
                </h2>

                <p className="text-foreground leading-relaxed">
                  Но наряду с публичными и медийными проектами не менее важны архивы, задача которых — 
                  не показать, а сохранить. Их ценность заключается не в эффектной визуализации, а в возможности 
                  бережно хранить интервью и работать с ними как с полноценными историческими источниками.
                </p>

                <p className="text-foreground leading-relaxed">
                  Такие архивы менее заметны, но именно они обеспечивают устным воспоминаниям долгую жизнь 
                  и возможность будущих исследований.
                </p>

                <div className="my-8 p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed">
                    Архивный подход требует ответственности и понимания того, что воспоминания — это не просто 
                    личные истории, а ценные документы эпохи. Их важно не только записать, но и сохранить: 
                    организовать файлы, описать материалы, сделать резервные копии, продумать условия доступа 
                    и использования.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed font-medium">
                  Публикация — лишь одна из возможных форм существования интервью. 
                  Архивирование — необходимая основа любой работы с устной историей.
                </p>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/posle-intervyu/rasshifrovka"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Расшифровка интервью
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/posle-intervyu/cifrovoy-arkhiv"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Цифровой архив
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
