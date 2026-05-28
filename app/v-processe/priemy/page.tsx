import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarNav } from "@/components/sidebar-nav"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

const sidebarItems = [
  { title: "Введение", href: "/v-processe" },
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

export default function PriemyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe/priemy" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">В процессе</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Несколько полезных приёмов
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <p className="text-foreground leading-relaxed">
                  Есть несколько контринтуитивных приёмов, которые можно применять в отдельных ситуациях 
                  во время интервью и которые помогают добиться и поддерживать доверие и открытость во время беседы.
                </p>

                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Молчание — золото
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Не спешите задавать следующий вопрос. Выдерживайте паузы. Ждите. Дайте собеседнику время. 
                    В паузе нет ничего неловкого. Если вы сохраняете внимание — не отвлекаетесь, не листаете записи 
                    и не смотрите по сторонам — пауза становится пространством, в котором человек может вспомнить, 
                    добавить или решиться сказать что-то важное. Позвольте этому случиться.
                  </p>
                </div>

                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Несколько близких по смыслу слов
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Иногда полезно формулировать вопрос, предлагая несколько близких по смыслу слов. 
                    Это помогает собеседнику «зацепиться» за наиболее точное для него выражение. 
                    При этом вопрос должен оставаться одним и звучать так, чтобы открывать пространство для ответа, 
                    а не загонять человека в жёсткие рамки одной формулировки.
                  </p>
                </div>

                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Короткий отклик
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Иногда вместо нового вопроса достаточно короткого отклика — кивка головой, «угу», 
                    негромкого звука, который служит простым сигналом внимания и показывает, что вы слушаете 
                    и заинтересованы в ответе.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe/pravila-voproshaniya"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Базовые правила вопрошания
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/v-processe/tipy-intervyu"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Интервью и истории о жизни
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
