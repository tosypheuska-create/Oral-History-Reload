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

export default function EtikaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe/etika" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">В процессе</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Этика, бюрократия и ответственность
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <p className="text-foreground leading-relaxed">
                  Воспоминания — яркий и ценный источник для самых разных медийных и культурных проектов: 
                  от городских аудиогидов, спектаклей и музейных выставок до статей и книг. Но записанные на 
                  диктофон воспоминания — это, прежде всего, документальные источники, рассчитанные на 
                  потенциально широкое и непредсказуемое использование в будущем.
                </p>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed italic">
                    Именно поэтому важно изначально относиться к интервью как к материалу, с которым может 
                    работать не только сам исследователь. Независимо от той роли, которую исследователь 
                    выбрал в начале проекта, он всегда остаётся отчасти архивистом.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Наша задача — обеспечить сохранность материала и возможность его дальнейшего использования, 
                  что требует не только тщательной фиксации содержания и контекста интервью, но и внимательного 
                  отношения к юридическим правам всех участников.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Правовые аспекты
                </h2>

                <p className="text-foreground leading-relaxed">
                  Организация работы с устной историей во многом зависит от законодательства страны, где ведётся 
                  исследование. Эти нормы призваны обеспечивать этические стандарты и защищать права всех сторон 
                  на хранение и использование материалов.
                </p>

                <p className="text-foreground leading-relaxed">
                  Сложность заключается в том, что в правовой практике обычно отсутствует отдельное понятие 
                  «исследовательское интервью». При этом оно одновременно является и авторским текстом, 
                  и личным документом, и объектом персональных данных.
                </p>

                <p className="text-foreground leading-relaxed">
                  Поэтому для того, чтобы обеспечить и легальность хранения, и безопасность участников, 
                  исследователю приходится работать на пересечении разных правовых сфер — авторского права, 
                  архивного законодательства и регулирования персональных данных.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Информированное согласие
                </h2>

                <p className="text-foreground leading-relaxed">
                  В европейской практике для этого существует развитая система этических комиссий и документов, 
                  регулирующих сбор и использование интервью. В России в последние десятилетия также распространилась 
                  практика информированного согласия, в рамках которой участник может определить допустимые формы 
                  использования своих воспоминаний и выразить согласие или несогласие с их публикацией.
                </p>

                <p className="text-foreground leading-relaxed">
                  Однако такие документы пока не обладают строгой юридической силой. Более формализованные варианты 
                  нередко превращаются в многостраничные согласия на обработку персональных данных, составленные 
                  по требованиям современного законодательства.
                </p>

                <p className="text-foreground leading-relaxed">
                  Дискуссии о том, какие формы согласий использовать и как делать их понятными для собеседников 
                  без излишней бюрократии, продолжаются до сих пор. Многие исследователи предпочитают обходиться 
                  более простыми согласиями, составленными без канцелярита и не требующими указания паспортных данных.
                </p>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe/tipy-intervyu"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Интервью и истории о жизни
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/v-processe/kontakt"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Установление контакта
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
