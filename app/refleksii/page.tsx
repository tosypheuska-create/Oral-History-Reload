import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Construction, MessageCircle } from "lucide-react"

export default function RefleksiiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Рефлексии</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <p className="text-sm text-primary font-medium">Раздел 05</p>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              Рефлексии
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Пространство для размышлений о практике устной истории. Здесь собраны личные наблюдения, 
              открытые вопросы и темы для обдумывания.
            </p>
          </header>

          <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 mb-8 flex items-center gap-3">
            <Construction className="h-5 w-5 text-accent shrink-0" />
            <p className="text-sm text-muted-foreground">
              Этот раздел находится в разработке. Скоро здесь появятся размышления о практике 
              устной истории, личный опыт и открытые вопросы.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                Личный опыт
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Наблюдения и уроки из практики проведения интервью. Что получается, что не получается, 
                и почему это важно осмыслять.
              </p>
            </div>

            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                Открытые вопросы
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Вопросы, на которые нет однозначных ответов. Этические дилеммы, 
                методологические сомнения, философские размышления.
              </p>
            </div>

            <div className="p-6 bg-secondary/30 rounded-lg border border-border">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                Что меняется в нас
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Как работа с чужими воспоминаниями влияет на нас самих? 
                Трансформация взгляда на историю, память и человеческий опыт.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-12 pt-8 border-t border-border flex justify-between">
            <Link 
              href="/osnovnye-ponyatiya"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Основные понятия</span>
            </Link>
            <Link 
              href="/pochitat-esche"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm">Почитать ещё</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  )
}
