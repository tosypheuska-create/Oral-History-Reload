import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "О проекте | Устная история. Перезагрузка",
  description: "О проекте «Устная история. Перезагрузка» — практическое руководство для исследователей устной истории",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
            О проекте
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              «Устная история. Перезагрузка» — это практическое руководство для всех, кто хочет 
              записывать и сохранять устные воспоминания. Сайт создан как помощник в реализации 
              устноисторических проектов.
            </p>
            
            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              Для кого этот сайт
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Этот ресурс ориентирован на специалистов с небольшим или отсутствующим опытом 
              в области устной истории:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Молодые историки и исследователи</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Музейные кураторы и сотрудники</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Работники краеведческих библиотек</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Энтузиасты, которым интересно попробовать сделать проект, связанный с устными воспоминаниями</span>
              </li>
            </ul>
            
            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              Структура сайта
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Материалы организованы в шесть основных блоков, которые проведут вас через 
              весь процесс создания устноисторического проекта:
            </p>
            <div className="space-y-3 mb-6">
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h3 className="font-medium text-foreground">Перед началом</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Подготовка к проекту: выбор роли, поиск собеседников, составление путеводителя
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h3 className="font-medium text-foreground">В процессе</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Проведение интервью: вопросы, контакт, запись, атмосфера доверия
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h3 className="font-medium text-foreground">После интервью</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Работа с материалами: расшифровка, архивирование, публикация
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h3 className="font-medium text-foreground">Основные понятия</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Ключевые концепции устной истории: достоверность, доверие, эмпатия, нарратив
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h3 className="font-medium text-foreground">Рефлексии</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Размышления о практике, личный опыт и открытые вопросы
                </p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-lg">
                <h3 className="font-medium text-foreground">Почитать ещё</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Книги, статьи, ресурсы и примеры проектов для дальнейшего изучения
                </p>
              </div>
            </div>
            
            <h2 className="font-serif text-xl font-semibold text-foreground mt-10 mb-4">
              Как пользоваться сайтом
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Вы можете читать материалы последовательно, следуя логике проекта от подготовки 
              до завершения. Или обращаться к отдельным разделам по мере необходимости — 
              каждый из них самодостаточен и может быть полезен на любом этапе работы.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/pered-nachalom"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Начать с первого раздела
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
