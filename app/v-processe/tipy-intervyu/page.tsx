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

export default function TipyIntervyuPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe/tipy-intervyu" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">В процессе</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Интервью и истории о жизни
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <p className="text-foreground leading-relaxed">
                  Интервью — это не только интересный разговор, но и способ создания источника. В зависимости 
                  от цели мы выбираем стратегию беседы. Как бы интервьюер ни стремился к равенству с собеседником, 
                  именно он задаёт ход разговора: направляет его, определяет темп и глубину, формирует атмосферу и, 
                  в итоге, жанр будущего источника.
                </p>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed italic">
                    Главная задача — найти тонкий баланс: не навязывать свою логику, следовать за ходом мысли 
                    собеседника и одновременно контролировать общую ткань беседы. Это непросто и требует опыта, 
                    но важно помнить, что обе стороны этого баланса одинаково значимы.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Хотя интервьюер и собеседник создают воспоминание вместе, первый всегда должен быть чуть-чуть 
                  впереди и постоянно слышать беседу из потенциального будущего, в котором он или она будет 
                  работать с только что созданным источником.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Типы интервью
                </h2>

                <p className="text-foreground leading-relaxed">
                  Выбор стратегии беседы зависит от того, что мы хотим получить в результате. В социологии 
                  разработана подробная типология интервью, но для наших целей достаточно понимать различие 
                  между двумя полюсами — полностью стандартизированным и полностью свободным интервью.
                </p>

                <div className="grid gap-4 my-6">
                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                      Стандартизированное интервью
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      По сути, анкета или опросник, чаще всего в письменной форме: вы получаете список вопросов 
                      и отвечаете на них кратко и по существу. С подобными форматами вы, вероятно, сталкивались 
                      в социологических опросах или анкетах рекламных служб.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                      Полностью свободное интервью
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      Беседа, полностью направляемая информантом. Человек говорит обо всём, о чём считает нужным.
                    </p>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed">
                  Ни одно интервью полностью не соответствует этим моделям, но может тяготеть к одному из полюсов. 
                  Устноисторическое интервью обычно ближе к свободной беседе.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Глубинное интервью
                </h2>

                <p className="text-foreground leading-relaxed">
                  Наиболее распространённый тип интервью в устноисторических проектах — так называемое глубинное, 
                  исследовательское, нарративное, полуструктурированное или полуфокусированное интервью. 
                  Это формат, в котором разговор направляется интервьюером, но при этом сохраняется значительное 
                  пространство для свободы рассказа, а основной акцент делается на поддержке нарративности собеседника.
                </p>

                <p className="text-foreground leading-relaxed">
                  Главная цель такого интервью — не получение кратких ответов, а создание условий, в которых 
                  информант начинает рассказывать. Интервьюер задаёт тему, аккуратно направляет разговор и 
                  предлагает ориентиры, но при этом «погружается» в воспоминания вместе с собеседником, 
                  следует за ним, лишь уточняя и углубляя разговор, выводя на всё больший уровень откровенности 
                  и эмоционального погружения.
                </p>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  История жизни
                </h2>

                <p className="text-foreground leading-relaxed">
                  Самый удобный и продуктивный тип интервью, который чаще всего используется в устноисторических 
                  проектах, — это «история жизни» или биографическое интервью. Это предельный вариант свободного 
                  интервью, в идеальной модели представляющий собой почти неограниченный монолог информанта, 
                  отражающий его личный, субъективный взгляд на собственную жизнь — взгляд, максимально независимый 
                  от вмешательства интервьюера.
                </p>

                <p className="text-foreground leading-relaxed">
                  Как и другие идеальные модели, эта конструкция слабо соотносится с реальной практикой: 
                  даже рассказывая историю своей жизни, человек всегда делает это здесь и сейчас, в присутствии 
                  собеседника. Поэтому и интервьюер, и сама ситуация разговора неизбежно влияют на то, что и как 
                  будет рассказано, задавая рамки, фокус и форму повествования.
                </p>

                <div className="my-8 p-6 bg-secondary/50 rounded-lg border border-border">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    Биографическое интервью позволяет решить несколько важных задач:
                  </h3>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Предлагая человеку рассказать о своей жизни, мы даём ему возможность погрузиться в собственное 
                      прошлое, одновременно создавая пространство доверия и проявляя интерес к его опыту.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Рассказывая историю своей жизни, человек отбирает и оценивает события, выстраивает их в 
                      определённую последовательность. Эти принципы отбора и стоящие за ними ценности отражают 
                      его ретроспективный взгляд на прошлое.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Биографическое интервью также служит эффективным инструментом установления контакта, 
                      «картографирования» ландшафта личных воспоминаний и создания ценного нарративного источника.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe/priemy"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Полезные приёмы
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/v-processe/etika"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Этика и ответственность
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
