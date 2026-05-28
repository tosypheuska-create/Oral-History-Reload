import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarNav, MobileSidebarNav } from "@/components/sidebar-nav"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

const sidebarItems = [
  { title: "Введение", href: "/pered-nachalom" },
  { title: "Я и мой собеседник", href: "/pered-nachalom/ya-i-moy-sobesednik" },
  { title: "Сколько интервью нужно", href: "/pered-nachalom/skolko-intervyu" },
  { title: "Типы респондентов", href: "/pered-nachalom/tipy-respondentov" },
  { title: "Подготовка и путеводитель", href: "/pered-nachalom/podgotovka" },
]

export default function PodgotovkaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex gap-10">
            <SidebarNav items={sidebarItems} title="Перед началом" />
            
            <article className="flex-1 min-w-0">
              <MobileSidebarNav items={sidebarItems} title="Перед началом" />
              
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">Перед началом</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Подготовка и путеводитель
                </h1>
              </header>

              <div className="prose-oral-history text-foreground">
                <p className="text-lg leading-relaxed">
                  Интервью не заменяет подготовку. Перед встречей полезно прочитать всё, что доступно о 
                  теме, месте, событии или организации, о которых пойдет речь. Тогда вы лучше поймете 
                  контекст, сможете задавать более точные вопросы и вызовете больше доверия у своего 
                  собеседника.
                </p>

                <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 my-8">
                  <h3 className="font-serif font-semibold text-foreground mb-3">
                    Что такое гайд (путеводитель)?
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Гайд – это ваш рабочий путеводитель. Это не список вопросов, которые нужно зачитать 
                    по порядку, а набор тем, направлений, шпаргалка – ваш помощник, позволяющий 
                    систематизировать все, что вы знаете по теме предстоящей беседы.
                  </p>
                </div>

                <h2>Путеводитель может быть подробным</h2>

                <p>
                  Чем лучше вы подготовите гайд, тем лучше сами разберётесь в теме. Составление 
                  путеводителя помогает систематизировать знания, уточнить вопросы, увидеть пробелы.
                </p>

                <h2>Путеводитель – это не тест для вашего собеседника</h2>

                <p>
                  После подготовки вы можете знать о теме больше, чем ваш информант. Но интервью – не 
                  проверка памяти и не соревнование в знаниях. Путеводитель нужен не для того, чтобы 
                  «поймать на ошибке», а чтобы помочь разговору состояться.
                </p>

                <h3>В путеводителе могут быть:</h3>

                <ul>
                  <li>Темы для разговора</li>
                  <li>Вопросы-уточнения</li>
                  <li>«Крючки памяти», помогающие человеку вспомнить важное</li>
                </ul>

                <h2>Путеводитель – это не строгий маршрут</h2>

                <p>
                  Беседа не обязана идти строго по плану. Вы можете менять порядок тем, возвращаться 
                  назад, уходить в неожиданные стороны и открывать новые сюжеты. Некоторые заранее 
                  придуманные вопросы могут не пригодиться – это нормально.
                </p>

                <h2>Разные группы информантов – разные путеводители</h2>

                <p>
                  Полезно делать один общий путеводитель, сопровождая его несколькими версиями для 
                  разных групп информантов, имея в виду их специфический опыт и экспертизу.
                </p>

                <blockquote>
                  Главное помнить: путеводитель – ваш помощник, а не строгая инструкция для проведения 
                  интервью. Он помогает не потеряться в разговоре, но не должен мешать естественному 
                  ходу беседы.
                </blockquote>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/pered-nachalom/tipy-respondentov"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Типы респондентов
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/v-processe"
                  className="group flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-primary/70 mb-1">Следующий раздел</p>
                    <p className="font-medium text-primary transition-colors">
                      В процессе
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-all" />
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
