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

export default function DopolnitelnyeMaterialyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe/dopolnitelnye-materialy" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">В процессе</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Анкеты, конспекты, полевые дневники
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <p className="text-foreground leading-relaxed">
                  Если вы записываете воспоминания для семейного архива или личного проекта, обычно 
                  достаточно сохранить запись и отметить, с кем и когда состоялся разговор. Но если 
                  интервью становятся частью исследовательского или архивного проекта, важно подумать 
                  не только о хранении материалов, но и о том, как с ними будут работать в будущем.
                </p>

                <p className="text-foreground leading-relaxed">
                  Устноисторическое интервью — объёмный и сложный источник, поэтому полезно сразу 
                  создавать дополнительные материалы: анкету, конспект и полевой дневник.
                </p>

                <div className="grid gap-4 my-6">
                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                      Анкета
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      Краткая информация об информанте: возраст, образование, место рождения, профессия 
                      и другие важные для проекта данные. Набор вопросов зависит от задач исследования.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                      Конспект
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      Заметки, сделанные во время интервью. В них можно фиксировать ключевые темы, 
                      важные сюжеты, особенности речи или эмоциональные реакции. Вести разговор и 
                      одновременно делать подробные записи сложно, поэтому интервью часто проводят вдвоём.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                      Полевой дневник
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      Короткая запись впечатлений и наблюдений после интервью. Его лучше писать сразу 
                      или в течение ближайших суток: что получилось, что оказалось неожиданным, какие 
                      возникли сложности, какие мысли и эмоции остались после разговора.
                    </p>
                  </div>
                </div>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed">
                    Такие материалы помогают не только сохранить контекст интервью, но и лучше осмыслить 
                    услышанное. В устной истории сбор материала и его анализ происходят одновременно: 
                    исследователь начинает интерпретировать разговор уже в процессе беседы.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe/tekhnika"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Техника
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/posle-intervyu"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Следующий раздел</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      После интервью
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
