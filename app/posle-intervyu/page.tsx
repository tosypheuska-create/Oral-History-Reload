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

export default function PosleIntervyuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/posle-intervyu" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              {/* Mobile Navigation */}
              <div className="lg:hidden mb-6 flex gap-2 overflow-x-auto pb-2">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 text-sm rounded-full whitespace-nowrap ${
                      item.href === "/posle-intervyu"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">Раздел 03</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  После интервью
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Расшифровка, архивирование, публикация и защита информантов. 
                  Как превратить записанные воспоминания в полноценный источник.
                </p>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Расшифровка интервью
                </h2>

                <p className="text-foreground leading-relaxed">
                  Исследователи до сих пор спорят о том, что именно считать устноисторическим источником: 
                  эфемерное воспоминание, аудиозапись или её расшифровку. Этот вопрос важен, потому что 
                  воспоминание по своей природе нематериально и изменчиво.
                </p>

                <p className="text-foreground leading-relaxed">
                  Каждый рассказ о прошлом зависит от конкретного момента, ситуации и собеседника. 
                  Одно и то же воспоминание можно записывать много раз — и каждый раз оно будет звучать немного иначе.
                </p>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed italic">
                    И всё же исследователь превращает воспоминание в документ. На практике работа чаще всего 
                    ведётся с расшифровками, тогда как аудиозапись сохраняет интонацию и звучание голоса. 
                    Поэтому расшифровка — один из ключевых этапов устноисторического проекта.
                  </p>
                </div>

                <h3 className="font-serif text-lg font-semibold text-foreground mt-8 mb-4">
                  Несколько важных принципов
                </h3>

                <div className="space-y-4">
                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      Расшифровка должна максимально точно передавать речь собеседника. Не стоит «улучшать» текст, 
                      исправлять стиль или сглаживать шероховатости устной речи.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      При этом не нужно стремиться к абсолютной фонетической точности. Задача устной истории — 
                      не лингвистическая фиксация всех особенностей произношения.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      Паузы, оговорки, незаконченные фразы и повторы важно сохранять. Они помогают понять не только 
                      что человек рассказывает, но и как он вспоминает и осмысляет свой опыт.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      Устная речь плохо приспособлена для чтения, поэтому особое значение приобретает пунктуация: 
                      именно она делает расшифровку понятной для читателя.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      Полезно относиться к расшифровке как к публикации архивного документа: добавлять комментарии, 
                      уточнения, пояснения и метаданные, которые помогут работать с интервью в будущем.
                    </p>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed mt-6">
                  Расшифровка интервью — очень трудоёмкий процесс: один час записи может потребовать 
                  нескольких часов обработки.
                </p>

                <p className="text-foreground leading-relaxed">
                  Сегодня эту задачу значительно упрощают нейросети и сервисы автоматической расшифровки. 
                  Они всё ещё требуют проверки и редактуры, но позволяют существенно сэкономить время.
                </p>

                <div className="my-8 p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    Проверенные инструменты для расшифровки
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">1.</span>
                      <a href="https://mymeet.ai/ru/research" className="text-primary hover:underline">mymeet.ai/ru/research</a>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">2.</span>
                      MemoAI
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">3.</span>
                      Riverside
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">4.</span>
                      Transkriptor
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe/dopolnitelnye-materialy"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Анкеты, конспекты, дневники
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/posle-intervyu/rasshifrovka"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Расшифровка интервью
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
