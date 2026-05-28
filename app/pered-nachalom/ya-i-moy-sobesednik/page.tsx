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

export default function YaIMoySobesednikPage() {
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
                  Я и мой собеседник
                </h1>
              </header>

              <div className="prose-oral-history text-foreground">
                <p className="text-lg leading-relaxed">
                  Перед тем как записывать воспоминания, стоит задуматься о ваших отношениях с респондентом. 
                  Кто для вас собеседник – источник информации? Объект исследовательского интереса? 
                  Коллега-помощник-соавтор?
                </p>

                <p>
                  Важно определиться и с тем, кто вы для своего информанта. Контролер из вышестоящей 
                  организации? Внук или внучка, которого хочется приголубить и напоить чаем? Докучливый 
                  журналист? Неопытный историк-дилетант? Важно, что все эти роли не даны вам изначально. 
                  Даже если вы никогда не были журналистом, именно так вас может воспринимать известный 
                  художник, у которого вы хотите взять устноисторическое интервью. Даже если вы очень 
                  опытный и профессиональный историк, вас все равно могут считать дилетантом, добродушным 
                  внучком или внучкой, любителем попить чай с пряниками или школяром-неучем.
                </p>

                <p>
                  То, как вас воспринимает информант, прямо связано с отношениями во время интервью и 
                  разницей ваших социальных позиций. Именно ее и нужно попытаться установить заранее. 
                  Эта разница определяется полом, возрастом, уровнем образования, должностью и местом 
                  работы или учебы, вашим внешним видом, а также тем, что именно вы расскажете о себе 
                  и своем проекте при первом знакомстве.
                </p>

                <blockquote>
                  Более низкие «воображаемые» позиции в этих отношениях совсем необязательно представляют 
                  проблему и требуют преодоления. Наоборот! В большинстве случаев именно более низкая 
                  социальная позиция по отношению к вашему информанту обеспечивает доверие и готовность 
                  разговаривать.
                </blockquote>

                <p>
                  Бабушка куда охотнее поделится воспоминаниями с тем, в ком видит дорогого внука, чем 
                  с умудренным историческим опытом доктором наук. Местный краевед гораздо охотнее расскажет 
                  о локальном фольклоре тому, кого считает неумехой-дилетантом, чем тому, в ком увидит 
                  конкурента.
                </p>

                <p>
                  «Прикинуться дурачком» – рабочий инструмент любого интервьюера, который часто спасает 
                  в ситуации, когда нет изначального доверия и открытости в общении. Но бывают и другие 
                  обстоятельства, которые, наоборот, требуют от интервьюера демонстрации авторитета и 
                  статуса. Такие ситуации включают интервью с руководителями различных организаций, 
                  экспертами, а также людьми, у которых есть болезненные воспоминания – они вряд ли будут 
                  делиться ими с тем, кто кажется им недостаточно компетентным.
                </p>

                <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 my-8">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Определитесь перед началом интервью
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>Кто для вас информант?</li>
                    <li>Кто вы для информанта?</li>
                    <li>Какие отношения обеспечат наибольшее доверие и открытость во время беседы?</li>
                    <li>Что поможет перевести стартовые позиции в желаемые?</li>
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/pered-nachalom"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Введение
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/pered-nachalom/skolko-intervyu"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Сколько интервью нужно
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
