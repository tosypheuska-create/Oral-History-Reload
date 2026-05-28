import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SidebarNav, MobileSidebarNav } from "@/components/sidebar-nav"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const sidebarItems = [
  { title: "Введение", href: "/pered-nachalom" },
  { title: "Я и мой собеседник", href: "/pered-nachalom/ya-i-moy-sobesednik" },
  { title: "Сколько интервью нужно", href: "/pered-nachalom/skolko-intervyu" },
  { title: "Типы респондентов", href: "/pered-nachalom/tipy-respondentov" },
  { title: "Подготовка и путеводитель", href: "/pered-nachalom/podgotovka" },
]

export default function PeredNachalomPage() {
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
                <p className="text-sm text-primary font-medium mb-2">Раздел 01</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Перед началом
                </h1>
              </header>

              <div className="prose-oral-history text-foreground">
                <p className="text-lg leading-relaxed">
                  Прежде чем включать диктофон, полезно понять, зачем вы хотите записывать воспоминания. 
                  От ответа на этот вопрос многое зависит: с кем и о чем говорить, как и что записывать, 
                  и что потом делать с этими записями.
                </p>

                <p>
                  Устная история может быть разной. Для кого-то это семейная память и желание сохранить 
                  голос близкого человека. Для кого-то – исследовательский проект, попытка понять прошлое 
                  через личный опыт. Для музея – способ показать историю через человеческие судьбы и 
                  субъективные воспоминания. Для художника – материал для творчества и новых поисков.
                </p>

                <p className="font-medium text-foreground">
                  Нет одной правильной цели. Но очень важно сформулировать свою.
                </p>

                <h2>Полезные вопросы перед стартом</h2>

                <ul>
                  <li>Хочу ли я записать одно интервью или серию?</li>
                  <li>Меня интересуют уникальные воспоминания конкретного человека или опыт разных людей, объединенных участием в каком-то событии, процессе, связанных общим местом работы или жизни?</li>
                  <li>Я хочу сохранить память или исследовать какую-то тему, вопрос, проблему?</li>
                  <li>Меня интересует информация о прошлом или принципы работы памяти?</li>
                  <li>Записанные материалы останутся в личном архиве или будут опубликованы?</li>
                  <li>Для чего мне нужны эти воспоминания: чтобы узнать новое, поделиться одной из версий прошлого с другими или превратить материал в художественный, музейный или просветительский проект?</li>
                </ul>

                <h2>Возможные роли инициатора проекта</h2>

                <p>
                  В зависимости от того, как вы ответили на стартовые вопросы перед началом проекта, 
                  вы можете выступать в одной из этих ролей. Назовем их условно:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                  {[
                    { title: "Наследник", desc: "сохраняет семейную память" },
                    { title: "Архивист", desc: "собирает коллекцию свидетельств для будущего" },
                    { title: "Исследователь", desc: "ищет ответ на конкретный вопрос" },
                    { title: "Автор", desc: "создает публичный, образовательный или художественный проект" },
                  ].map((role) => (
                    <div key={role.title} className="p-4 bg-secondary/50 rounded-lg border border-border">
                      <h4 className="font-serif font-semibold text-foreground">{role.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{role.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm italic text-muted-foreground">
                  Часто эти роли сочетаются.
                </p>
              </div>

              {/* Navigation to next section */}
              <nav className="mt-12 pt-8 border-t border-border">
                <Link 
                  href="/pered-nachalom/ya-i-moy-sobesednik"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Следующая тема</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Я и мой собеседник
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
