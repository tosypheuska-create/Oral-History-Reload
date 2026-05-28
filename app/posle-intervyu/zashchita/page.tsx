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

export default function ZashchitaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/posle-intervyu/zashchita" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">После интервью</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Защитить: анонимизация, закрытие информации, согласование
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <div className="my-8 p-6 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="text-foreground leading-relaxed">
                    Даже если информант подписал согласие на использование интервью, ответственность за 
                    возможные последствия публикации всё равно остаётся на исследователе, архивисте или 
                    авторе проекта. Не все риски можно заранее предсказать, и со временем они могут 
                    меняться вместе с политическим, социальным или личным контекстом.
                  </p>
                </div>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Анонимизация
                </h2>

                <p className="text-foreground leading-relaxed">
                  Поэтому одной из самых распространённых практик остаётся анонимизация интервью. 
                  Она предполагает удаление не только персональных данных, но и любых деталей, 
                  по которым человека можно узнать.
                </p>

                <p className="text-foreground leading-relaxed">
                  Исключение обычно составляют интервью с публичными или уникальными фигурами, 
                  чья биография делает их узнаваемыми даже без указания имени.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Ограничение доступа
                </h2>

                <p className="text-foreground leading-relaxed">
                  Другая важная практика — ограничение доступа к материалам. Во многих архивах оригинальные 
                  записи не публикуются открыто и предоставляются только по запросу или на определённых условиях.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Редактура для публикации
                </h2>

                <p className="text-foreground leading-relaxed">
                  Если интервью создаётся специально для публичного проекта — выставки, сайта, фильма или 
                  онлайн-архива, — особое значение приобретает редактура.
                </p>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed italic">
                    Её задача не в том, чтобы сделать текст «литературным», а в том, чтобы публикация 
                    не причинила вреда ни самому информанту, ни интервьюеру, ни людям, упомянутым в разговоре.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/posle-intervyu/cifrovoy-arkhiv"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Цифровой архив
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/osnovnye-ponyatiya"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Следующий раздел</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Основные понятия
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
