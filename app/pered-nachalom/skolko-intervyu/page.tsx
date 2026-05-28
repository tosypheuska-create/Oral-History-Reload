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

export default function SkolkoIntervyuPage() {
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
                  Сколько интервью нужно
                </h1>
              </header>

              <div className="prose-oral-history text-foreground">
                <p className="text-lg leading-relaxed font-medium">
                  Столько, сколько нужно для решения вашей задачи.
                </p>

                <p>
                  Если вы записываете семейную историю, иногда достаточно одного разговора. Если делаете 
                  исследование, интервью может понадобиться много. Если создаете архив, сбор может 
                  продолжаться годами.
                </p>

                <p>
                  К сожалению, такое решение вопроса о количестве интервью редко помогает тем, кто только 
                  начинает работу, планирует свой первый проект или пишет заявку на грант и новое 
                  исследование. Поэтому вот несколько простых рекомендаций:
                </p>

                <div className="space-y-6 my-8">
                  <div className="p-5 bg-card rounded-lg border border-border">
                    <h3 className="font-serif font-semibold text-foreground mb-3">
                      О качественных методах
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Устноисторические методы – это качественные методы исследования. Есть много примеров 
                      работы с одним единственным интервью, которого может быть достаточно для того, чтобы 
                      увидеть механизмы работы памяти. Понятия «репрезентативность» и «выборка» – привычные 
                      в количественных социологических исследованиях – не применимы в случае устной истории. 
                      Что, конечно, не снимает с вас обязанности подбора респондентов, прямо связанных с 
                      интересующей вас темой.
                    </p>
                  </div>

                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-serif font-semibold text-foreground mb-3">
                      Точка насыщения: ~20 интервью
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Обычно 20 интервью бывает достаточно для того, чтобы достигнуть «точки насыщения» 
                      в любом проекте. Это не значит, что 20 интервью достаточно для ваших целей. Но этого 
                      количества будет достаточно для того, чтобы решить, что делать дальше: сместить фокус 
                      проекта, уточнить исследовательский вопрос, изменить принцип отбора информантов или 
                      поменять стратегии интервьюирования.
                    </p>
                    <p className="text-sm leading-relaxed mt-3">
                      20 интервью точно достаточно для того, чтобы понять, какие болевые точки и структурные 
                      особенности есть в тех воспоминаниях, которые вы записываете. За точкой насыщения 
                      обычно следует уточнение или переориентация проекта.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/pered-nachalom/ya-i-moy-sobesednik"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Я и мой собеседник
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/pered-nachalom/tipy-respondentov"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Типы респондентов
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
