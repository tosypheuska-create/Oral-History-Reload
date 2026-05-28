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

export default function CifrovoyArkhivPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/posle-intervyu/cifrovoy-arkhiv" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">После интервью</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Как организовать небольшой цифровой архив
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <p className="text-foreground leading-relaxed">
                  Даже для небольшого устноисторического проекта важно сразу выстроить простую и понятную 
                  систему хранения материалов. Самый базовый архив можно создать без специальных программ 
                  и технической подготовки.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Структура папок
                </h2>

                <p className="text-foreground leading-relaxed">
                  Создайте на компьютере отдельную папку проекта. Внутри неё удобно сделать папки для 
                  разных типов материалов: «Аудио», «Расшифровки», «Полевые дневники», «Согласия».
                </p>

                <div className="my-8 p-6 bg-secondary/50 rounded-lg border border-border font-mono text-sm">
                  <p className="text-foreground">📁 Мой проект</p>
                  <p className="text-foreground ml-4">├── 📁 Аудио</p>
                  <p className="text-foreground ml-4">├── 📁 Расшифровки</p>
                  <p className="text-foreground ml-4">├── 📁 Полевые дневники</p>
                  <p className="text-foreground ml-4">├── 📁 Согласия</p>
                  <p className="text-foreground ml-4">└── 📄 Каталог интервью.xlsx</p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Файлы, относящиеся к одному интервью, лучше называть одинаково, чтобы связь между ними 
                  всегда сохранялась.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Каталог интервью
                </h2>

                <p className="text-foreground leading-relaxed">
                  В той же общей папке стоит создать сводную таблицу — каталог интервью. Для этого подойдут 
                  Excel, Google Sheets и другие программы для работы с данными.
                </p>

                <div className="my-8 p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    Обычно в таблицу включают:
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      номер или шифр интервью
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      дату и место записи
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      длительность интервью
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      наличие расшифровки, фотографий и согласия
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      имя информанта
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      дату и место рождения
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      образование и сферу занятости
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      связь с темой проекта
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      ключевые темы интервью
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      комментарии
                    </li>
                  </ul>
                </div>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed italic">
                    Пока интервью немного, такая система может казаться избыточной. Но именно она помогает 
                    не потеряться в материалах, быстро находить нужные записи и постепенно превращает набор 
                    файлов в полноценный цифровой архив.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/posle-intervyu/podelitsya"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Поделиться
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/posle-intervyu/zashchita"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Защита информантов
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
