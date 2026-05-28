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

export default function KontaktPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe/kontakt" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">В процессе</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Установление контакта
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <p className="text-foreground leading-relaxed">
                  Устноисторическое интервью характеризуется глубиной погружения во внутренний мир собеседника. 
                  Если человек часто рассказывал о себе, наша задача — преодолеть «отполированный» слой 
                  привычного нарратива. Если не рассказывал вовсе — помочь начать этот рассказ.
                </p>

                <p className="text-foreground leading-relaxed">
                  Обе задачи не решаются простым набором вопросов и требуют особой атмосферы доверия и безопасности. 
                  В обычной жизни она формируется годами, в интервью — за минуты или часы. Поэтому важно не питать 
                  иллюзий: интервьюер не становится ни близким другом, ни психотерапевтом, ни исповедником.
                </p>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed italic">
                    И тем не менее главная стратегия интервью — создать пространство, в котором человек 
                    не чувствует давления, ожиданий или угрозы и может говорить свободно.
                  </p>
                </div>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Раппорт
                </h2>

                <p className="text-foreground leading-relaxed">
                  В антропологии это состояние описывается понятием «раппорт», означающим отношения взаимного 
                  доверия, открытости и понимания между исследователем и информантом, позволяющие снизить 
                  самоцензуру и говорить даже на чувствительные темы.
                </p>

                <p className="text-foreground leading-relaxed">
                  Установление раппорта не такая уж трудная вещь. Как и в любых отношениях, здесь необходима 
                  эмпатия, толерантность, уверенность, спокойствие и личная открытость.
                </p>

                <p className="text-foreground leading-relaxed">
                  Особенность интервью заключается в том, что в этих отношениях инициатива всегда принадлежит 
                  исследователю, которому приходится брать на себя всю нагрузку по моделированию регистра 
                  коммуникации. Возможно, вы не чувствуете эмпатии, не разделяете взглядов вашего информанта, 
                  не уверены в себе, обеспокоены проблемами собственной жизни. Возможно, вы по натуре замкнутый 
                  и закрытый человек, не склонный к общению с незнакомцами.
                </p>

                <p className="text-foreground leading-relaxed">
                  Но в ситуации интервью придётся временно пренебречь неуверенностью и беспокойством, 
                  социофобией и даже личными ценностями, взяв на себя роль, которая поможет разговору состояться.
                </p>

                <div className="my-8 p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed">
                    Если вы хотите, чтобы человек открылся перед вами, придётся приоткрыть себя перед собеседником. 
                    Но ваши старания непременно будут вознаграждены важными открытиями и ценными находками.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe/etika"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Этика и ответственность
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/v-processe/tekhnika"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Техника
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
