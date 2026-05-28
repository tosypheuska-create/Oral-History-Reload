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

export default function TekhnikaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe/tekhnika" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">В процессе</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Техника — зло?
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <p className="text-foreground leading-relaxed italic text-muted-foreground">
                  Я помню время, когда в экспедиции мы ездили с большими устройствами под названием 
                  Marantz — профессиональными стереодиктофонами с двумя выносными микрофонами. 
                  Их использовали специалисты фольклорного центра консерватории для качественной 
                  записи музыкального фольклора. Чаще мы работали с более компактными, но всё 
                  равно дорогими диктофонами, которые продавались в специальных магазинах.
                </p>

                <p className="text-foreground leading-relaxed italic text-muted-foreground">
                  Помню свой первый профессиональный диктофон — маленький, удобный, работавший 
                  от одной батарейки. Он до сих пор лежит у меня в тумбочке. Недавно я достала его, 
                  чтобы сравнить запись с него и запись со смартфона — сегодня приложение диктофона 
                  есть практически в каждом телефоне. И оказалось, что даже базовое приложение на 
                  моём смартфоне записывает звук лучше, чем тот когда-то продвинутый диктофон.
                </p>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed">
                    Технический прогресс работает в нашу пользу: сегодня не нужно думать о батарейках, 
                    носителях или подключении к компьютеру. Если у вас в кармане есть заряженный 
                    смартфон, можно начинать запись.
                  </p>
                </div>

                <h2 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                  Что стоит учитывать при аудиозаписи
                </h2>

                <div className="space-y-4">
                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      Любой фоновый звук — в кафе, на улице, в торговом центре — станет серьёзной помехой 
                      при расшифровке и возможном последующем использовании аудиозаписи. Старайтесь найти 
                      тихое, уединённое место для разговора. Если в комнате включен телевизор или радио, 
                      не стесняйтесь попросить их выключить. Подумайте заранее о том месте, где будете 
                      брать интервью: не назначайте встреч в шумных и людных местах.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      Выносные микрофоны с эффектом шумоподавления будут хорошими помощниками, особенно 
                      если вы планируете использовать саму аудиозапись.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      Не забудьте предупредить информанта о том, что планируете вести аудиозапись, и 
                      положите смартфон или диктофон поближе к собеседнику, но так, чтобы не стеснять 
                      и не смущать его. Попробуйте заранее, насколько далеко от рассказчика может лежать 
                      ваша техника, чтобы это расстояние не повлияло на качество звука.
                    </p>
                  </div>

                  <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                    <p className="text-foreground leading-relaxed">
                      Обязательно протестируйте своё приложение для диктофона заранее! Разберитесь с тем, 
                      как и куда нужно жать, чтобы включить запись, поставить на паузу или остановить. 
                      Не стоит надеяться на собственную техническую компетентность — к сожалению, она 
                      крайне редко успевает за развитием новых интерфейсов и обновлений.
                    </p>
                  </div>
                </div>

                <div className="my-8 p-6 bg-destructive/10 rounded-lg border border-destructive/20">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    И самое главное!
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Не забудьте перенести все записи на компьютер как можно быстрее после окончания записи. 
                    Делайте копии аудиофайлов! Цифровая среда — очень удобная, но очень хрупкая основа 
                    для эфемерных воспоминаний. Берегите их.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe/kontakt"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Установление контакта
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/v-processe/dopolnitelnye-materialy"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Анкеты, конспекты, дневники
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
