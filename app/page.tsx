import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const sections = [
  {
    number: "01",
    title: "Перед началом",
    description: "Зачем записывать воспоминания? Какую роль выбрать? Как найти собеседников и подготовиться к интервью?",
    href: "/pered-nachalom",
  },
  {
    number: "02",
    title: "В процессе",
    description: "Как задавать вопросы, устанавливать контакт, вести запись и создавать атмосферу доверия.",
    href: "/v-processe",
  },
  {
    number: "03",
    title: "После интервью",
    description: "Расшифровка, архивирование, публикация и защита информантов.",
    href: "/posle-intervyu",
  },
  {
    number: "04",
    title: "Основные понятия",
    description: "Достоверность, доверие, эмпатия, нарратив и другие ключевые понятия устной истории.",
    href: "/osnovnye-ponyatiya",
  },
  {
    number: "05",
    title: "Рефлексии",
    description: "Размышления о практике устной истории, личный опыт и открытые вопросы.",
    href: "/refleksii",
  },
  {
    number: "06",
    title: "Почитать ещё",
    description: "Книги, статьи, ресурсы и примеры проектов для дальнейшего изучения.",
    href: "/pochitat-esche",
  },
]

const roles = [
  {
    title: "Наследник",
    description: "Сохраняет семейную память",
  },
  {
    title: "Архивист",
    description: "Собирает коллекцию свидетельств для будущего",
  },
  {
    title: "Исследователь",
    description: "Ищет ответ на конкретный вопрос",
  },
  {
    title: "Автор",
    description: "Создает публичный, образовательный или художественный проект",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
              Устная история.
              <br />
              <span className="text-primary">Перезагрузка</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Практическое руководство для тех, кто хочет записывать и сохранять устные воспоминания — от первой идеи до готового архива.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pered-nachalom"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Начать изучение
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#sections"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
              >
                Обзор разделов
              </Link>
            </div>
          </div>
        </section>

        {/* Main Sections */}
        <section id="sections" className="py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                Маршрут проекта
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Шесть блоков, которые проведут вас через весь процесс создания устноисторического проекта
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section) => (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group block p-6 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-muted-foreground">
                            {section.number}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                Возможные роли
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                В зависимости от ваших целей вы можете выступать в одной или нескольких из этих ролей
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="p-5 bg-card border border-border rounded-lg"
                >
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground italic">
              Часто эти роли сочетаются
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Готовы начать?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Прежде чем включать диктофон, полезно понять, зачем вы хотите записывать воспоминания. От ответа на этот вопрос многое зависит.
            </p>
            <Link
              href="/pered-nachalom"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg"
            >
              Перейти к первому разделу
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
