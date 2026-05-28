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

export default function IssledovatelskieVoprosyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe/issledovatelskie-voprosy" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">В процессе</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Исследовательские вопросы
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-4">
                <p className="text-foreground leading-relaxed">
                  Частая ошибка — прямо спрашивать:
                </p>
                
                <ul className="space-y-2 text-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Что для вас значило это событие?
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Какую роль этот опыт сыграл в вашей жизни?
                  </li>
                </ul>

                <p className="text-foreground leading-relaxed">
                  Иногда такие вопросы работают, но часто провоцируют готовые, поверхностные или случайные ответы.
                </p>

                <div className="my-8 p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed">
                    Вопрос «Что значил этот опыт для участников?» — это прежде всего ваш исследовательский вопрос. 
                    Отвечать на него предстоит вам, опираясь на это и другие интервью, знание общего социального 
                    контекста, используя аналитический инструментарий современных социальных наук.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Вы не сможете делегировать эту работу даже самому лучшему информанту. И перед тем, как начать 
                  интервью, вам придется определиться с тем, как вы планируете отвечать на этот вопрос, что именно 
                  поможет вам ответить на него, что именно вам нужно узнать (и как спросить об этом!), чтобы получить 
                  ответ на свой вопрос.
                </p>

                <p className="text-foreground leading-relaxed">
                  Вместо прямого вопроса стоит создать условия для развернутого рассказа-воспоминания. 
                  Лучше попросить человека рассказать о жизни, событиях, отношениях, выборе, чувствах. 
                  Тогда смысл проявится сам:
                </p>

                <ul className="space-y-2 text-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    В каком порядке человек рассказывает о различных событиях
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    чему уделяет больше внимания
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    о чем говорит сухо или уклончиво
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    что вызывает эмоции и в каких словах он(а) о них рассказывает
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    чего стыдится
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    какие события считает судьбоносными, сформировавшими его или ее собственное «Я»
                  </li>
                </ul>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Важно не только сказанное, но и несказанное
                </h2>

                <p className="text-foreground leading-relaxed">
                  Паузы, пропуски, путаница дат, противоречия, смещения акцентов — не «ошибки памяти», 
                  а её конструктивные особенности. Они тоже помогают понять, какое значение прошлое 
                  имеет для человека.
                </p>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe"
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
                  href="/v-processe/voprosy-informantu"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Вопросы информанту
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
