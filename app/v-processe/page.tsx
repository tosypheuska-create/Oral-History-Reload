import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarNav } from "@/components/sidebar-nav"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

const sidebarItems = [
  { title: "Вопрошание", href: "/v-processe" },
  { title: "Исследовательские вопросы", href: "/v-processe/issledovatelskie-voprosy" },
  { title: "Вопросы информанту", href: "/v-processe/voprosy-informantu" },
  { title: "Общие принципы коммуникации", href: "/v-processe/kommunikaciya" },
  { title: "Базовые правила вопрошания", href: "/v-processe/pravila-voproshaniya" },
  { title: "Полезные приёмы", href: "/v-processe/priemy" },
  { title: "Интервью и истории о жизни", href: "/v-processe/tipy-intervyu" },
  { title: "Этика и ответственность", href: "/v-processe/etika" },
  { title: "Установление контакта", href: "/v-processe/kontakt" },
  { title: "Техника", href: "/v-processe/tekhnika" },
  { title: "Анкеты, конспекты, дневники", href: "/v-processe/dopolnitelnye-materialy" },
]

export default function VProcessePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              {/* Mobile Navigation */}
              <div className="lg:hidden mb-6 flex gap-2 overflow-x-auto pb-2">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 text-sm rounded-full whitespace-nowrap ${
                      item.href === "/v-processe"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">Раздел 02</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  В процессе
                </h1>
              </header>

              <div className="prose prose-slate max-w-none">
                <p className="text-foreground leading-relaxed">
                  Один из самых трудных моментов в устной истории — переход от своих исследовательских 
                  вопросов к тем вопросам, которые стоит задать собеседнику.
                </p>
                
                <p className="text-foreground leading-relaxed mt-4">
                  Интуитивно кажется, что интервью это просто: нужно найти подходящего человека, 
                  задать ему вопрос и получить ответ. Но глубокое интервью работает иначе.
                </p>

                <p className="text-foreground leading-relaxed mt-4">
                  Не каждый вопрос решается интервью. Если вам нужно точно установить дату, 
                  последовательность событий, список участников или проверить исторический факт, 
                  иногда лучше обратиться к архивам, документам и публикациям.
                </p>

                <p className="text-foreground leading-relaxed mt-4">
                  Интервью особенно ценно там, где важны не столько факты, сколько человеческий 
                  опыт, память и смысл.
                </p>

                <div className="my-8 p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    Устная история интересуется не столько тем, что произошло, сколько тем:
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      что человек помнит, а что забывает
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      как рассказывает о прошлом
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      какое место отводит событию в своей биографии
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      какими словами описывает свои чувства и эмоции
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      как интерпретация прошлого зависит от сегодняшних взглядов и убеждений
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      что остается недосказанным
                    </li>
                  </ul>
                </div>

                <p className="text-foreground leading-relaxed">
                  Все это вопросы не столько к прошлому, сколько к тому, как прошлое живет в памяти. 
                  И все это — исследовательские вопросы, а не вопросы для собеседника.
                </p>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/pered-nachalom/podgotovka"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Подготовка и путеводитель
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/v-processe/issledovatelskie-voprosy"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Исследовательские вопросы
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
