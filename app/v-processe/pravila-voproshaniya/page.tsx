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

export default function PravilaVoproshaniyaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe/pravila-voproshaniya" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">В процессе</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Базовые правила вопрошания
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <div className="space-y-6">
                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      <strong>1.</strong> Вопросы, которые вы задаёте, должны быть открытыми: у собеседника 
                      не должно возникать возможности ответить «да», «нет» или ограничиться односложной репликой. 
                      Открытые вопросы предполагают развернутый ответ.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      <strong>2.</strong> Лучшие вопросы — это даже не совсем вопросы, а приглашения к рассказу. 
                      Старайтесь использовать именно такую форму: «Расскажите о...», «Вы упомянули... 
                      Можете подробнее об этом рассказать?»
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      <strong>3.</strong> Не задавайте несколько вопросов одновременно. Если задать их подряд, 
                      собеседник, скорее всего, ответит только на последний. Один вопрос — один ответ.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      <strong>4.</strong> Старайтесь формулировать вопросы максимально простым и понятным языком. 
                      Избегайте абстрактных понятий и сложных философских категорий, допускающих множество трактовок. 
                      Чем сложнее формулировка, тем труднее понять, что именно имеет в виду собеседник. 
                      Лучше опираться на конкретные ситуации, события, людей и опыт.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      <strong>5.</strong> Вопросы о рефлексии, оценках и смыслах лучше задавать в конце разговора — 
                      когда уже есть доверие и взаимопонимание, а собеседник не боится осуждения и меньше себя цензурирует.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      <strong>6.</strong> Не навязывайте собеседнику свой язык, свой взгляд на мир, свои интерпретации. 
                      Это правило не такое уж простое, как может показаться.
                    </p>
                  </div>
                </div>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed">
                    Например, вопрос «Как вы пережили весь этот ужас?» уже содержит оценку и ограничивает собеседника. 
                    Возможно, человек воспринимает свой опыт иначе. Важно дать ему или ей возможность самому подобрать слова.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Об этом писал Примо Леви, прошедший через Холокост и работавший с большим архивом видеоинтервью 
                  с евреями, выжившими в концлагерях. Восторженные интервьюеры, стараясь поддержать своих собеседников, 
                  лишали их возможности самостоятельно подобрать слова для описания того опыта, который им было трудно проговорить.
                </p>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe/kommunikaciya"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Общие принципы коммуникации
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/v-processe/priemy"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Полезные приёмы
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
