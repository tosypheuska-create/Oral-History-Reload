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

export default function TipyRespondentovPage() {
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
                  Типы респондентов: кого и где искать
                </h1>
              </header>

              <div className="prose-oral-history text-foreground">
                <p className="text-lg leading-relaxed">
                  Иногда тема сама подсказывает круг собеседников. Иногда поиск занимает больше времени, 
                  чем интервью.
                </p>

                <p>
                  Если ваш проект предполагает запись воспоминаний, можно ориентироваться на такую 
                  классификацию респондентов:
                </p>

                <div className="space-y-4 my-8">
                  <div className="p-5 bg-card rounded-lg border border-border">
                    <h3 className="font-serif font-semibold text-foreground mb-2">Эксперты</h3>
                    <p className="text-sm leading-relaxed">
                      Люди, хорошо знающие тему благодаря профессии или опыту. Они помогают понять контекст 
                      и подсказывают, куда двигаться дальше. Это могут быть краеведы, музейные сотрудники, 
                      бывшие руководители, активисты, историки и другие специалисты. Их опыт включает не 
                      только личную память, но и знание более общих процессов.
                    </p>
                  </div>

                  <div className="p-5 bg-card rounded-lg border border-border">
                    <h3 className="font-serif font-semibold text-foreground mb-2">Уникальные респонденты</h3>
                    <p className="text-sm leading-relaxed">
                      Люди с редким или исключительным опытом, интервью с которыми невозможно заменить 
                      другими. Это непосредственные очевидцы важных событий, знаменитые авторы или создатели 
                      уникальных произведений, проектов, организаций.
                    </p>
                  </div>

                  <div className="p-5 bg-card rounded-lg border border-border">
                    <h3 className="font-serif font-semibold text-foreground mb-2">Типичные представители</h3>
                    <p className="text-sm leading-relaxed">
                      Люди с характерным, типичным опытом, который и представляет для вас основной интерес 
                      в рамках выбранной темы. Это представители определенной социальной среды, поколения, 
                      профессии. Их интервью помогают понять повседневную жизнь и общий опыт группы.
                    </p>
                  </div>
                </div>

                <h2>Социальные параметры</h2>

                <p>
                  Решая вопрос о том, с кем записывать интервью, стоит принимать во внимание и стандартные 
                  социальные параметры:
                </p>

                <ul>
                  <li>Пол</li>
                  <li>Возраст / поколение</li>
                  <li>Образование</li>
                  <li>Наличие определенного опыта</li>
                </ul>

                <h2>Где искать информантов</h2>

                <ul>
                  <li>Через знакомых и рекомендации</li>
                  <li>В местных сообществах и соцсетях</li>
                  <li>Через музеи, библиотеки, архивы</li>
                  <li>Через профессиональные организации</li>
                  <li>На тематических встречах и мероприятиях</li>
                </ul>

                <div className="p-5 bg-primary/5 rounded-lg border border-primary/20 my-8">
                  <h3 className="font-serif font-semibold text-foreground mb-3">
                    Метод «снежного кома»
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Каждый уже записанный собеседник рекомендует следующего. Это самый работающий принцип 
                    поиска информантов. Но помните, что обратная сторона его простоты – социальный пузырь, 
                    в который вы неизбежно попадете. Если вам важны разные точки зрения, не стоит 
                    ограничиваться контактами одного человека.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/pered-nachalom/skolko-intervyu"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Сколько интервью нужно
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/pered-nachalom/podgotovka"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Подготовка и путеводитель
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
