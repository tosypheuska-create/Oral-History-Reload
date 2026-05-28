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

export default function KommunikaciyaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            <SidebarNav items={sidebarItems} currentPath="/v-processe/kommunikaciya" className="hidden lg:block" />
            
            <article className="max-w-3xl">
              <header className="mb-8">
                <p className="text-sm text-primary font-medium mb-2">В процессе</p>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                  Общие принципы коммуникации
                </h1>
              </header>

              <div className="prose prose-slate max-w-none space-y-6">
                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed font-medium">
                    1. Интервью — даже исследовательское и предпринятое с очень конкретной целью — 
                    это всё-таки просто разговор двух людей. Самых обычных людей. Самый обычный разговор.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Мы все делаем это. И знаем, как это делается. Диалог — наиболее естественная форма общения, 
                  и любое интервью опирается на базовые принципы коммуникации. Будьте вежливы, не перебивайте, 
                  не листайте телефон, не отвлекайтесь на другие дела. Ничего особенного. Просто разговаривайте с человеком.
                </p>

                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed font-medium">
                    2. Разговор с незнакомцем сложнее, чем разговор с человеком, которого вы хорошо знаете. 
                    Но и такой опыт нам всем знаком.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Мы разговариваем с незнакомыми коллегами, продавцами в магазинах, временными попутчиками, 
                  таксистами и многими другими людьми, которых видим первый раз в жизни. Это не страшно, 
                  и такой навык не требует специальной подготовки.
                </p>

                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed font-medium">
                    3. Разговор с человеком, чьи взгляды далеки от ваших, ещё сложнее. 
                    Но и такой опыт есть у каждого из нас.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Другое дело, что в обычной жизни мы избегаем подобных ситуаций, однако в интервью с ними 
                  всё равно приходится сталкиваться. В такие моменты на помощь приходит профессиональная эмпатия.
                </p>

                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed font-medium">
                    4. Эмпатия — термин из психологии, означающий способность понимать и разделять 
                    эмоциональные состояния другого человека.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Эмпатия — это способность воспринимать чувства, переживания и внутренний опыт другого человека, 
                  при этом сохраняя осознание различия между собой и другим. Это профессиональный навык, 
                  который развивают психотерапевты и антропологи. Это своего рода «мышца», хорошо тренированная 
                  у специалистов с большим опытом.
                </p>

                <p className="text-foreground leading-relaxed">
                  Эмпатия не требует принятия чужих взглядов, принципов или ценностей. Она не предполагает 
                  выбора чьей-либо стороны. Эмпатия означает готовность посмотреть на мир глазами другого 
                  человека — и это может быть по-настоящему интересно, захватывающе и вдохновляюще.
                </p>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-foreground leading-relaxed italic">
                    Сохранять дистанцию и одновременно оставаться эмпатичным непросто. Однако именно в этом 
                    заключается особая сила устной истории, выходящая за рамки её прикладного применения. 
                    Устноисторическая беседа помогает людям лучше понимать и слышать друг друга, вступая 
                    в непосредственный и доверительный контакт.
                  </p>
                </div>

                <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed font-medium">
                    5. Обратной стороной такого соприкосновения может стать боль.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  По-настоящему глубокое, эмпатичное интервью почти неизбежно приводит к эффекту «обнажения» — 
                  внутреннего раскрытия, близкого по смыслу к психотерапевтическому катарсису. Именно эмпатия 
                  создаёт уровень доверия, которого многим из нас не хватает в повседневной жизни.
                </p>

                <p className="text-foreground leading-relaxed">
                  Глубокое интервью позволяет человеку почувствовать себя в безопасности — не в физическом, 
                  а в психологическом смысле, свободным от давления, оценок и суждений, с которыми мы обычно сталкиваемся. 
                  Естественным следствием становится откровенность и желание поделиться чем-то сокровенным, 
                  чувствительным, иногда болезненным. У каждого есть такой опыт.
                </p>

                <div className="my-8 p-6 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="text-foreground leading-relaxed">
                    Если прошлое собеседника связано с серьёзными травмами, о которых он, возможно, никогда никому 
                    не рассказывал, интервьюер может неожиданно оказаться в роли, к которой не готов. Это важно 
                    вовремя осознать: <strong>интервьюер не является психотерапевтом</strong>, не может оказывать 
                    профессиональную психологическую помощь и не должен брать на себя такой груз.
                  </p>
                </div>

                <p className="text-foreground leading-relaxed">
                  Поэтому в подобных ситуациях прежде всего важно позаботиться о собственной устойчивости. 
                  При необходимости стоит мягко предложить обратиться к специалисту, при возможности — привлечь близких. 
                  Не пугайтесь и не паникуйте, но и не пытайтесь брать на себя роль кризисного консультанта — 
                  это скорее навредит, чем поможет.
                </p>

                <p className="text-foreground leading-relaxed">
                  И снова важно помнить: интервью — это прежде всего разговор. В жизни мы тоже сталкиваемся 
                  с травмами близких и стараемся поддержать их по мере сил. Но при этом необходимо сохранять 
                  собственное равновесие и не забывать «продолжать дышать».
                </p>
              </div>

              {/* Navigation */}
              <nav className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/v-processe/voprosy-informantu"
                  className="group flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Назад</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Вопросы информанту
                    </p>
                  </div>
                </Link>
                <Link 
                  href="/v-processe/pravila-voproshaniya"
                  className="group flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors flex-1"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Далее</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      Базовые правила вопрошания
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
