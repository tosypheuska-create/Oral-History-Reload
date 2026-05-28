import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function PochitatEschePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Почитать ещё</span>
          </nav>

          {/* Content */}
          <article className="prose-custom">
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              Почитать ещё
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Подборка книг, статей, онлайн-ресурсов и примеров проектов для тех, 
              кто хочет углубить свои знания в области устной истории.
            </p>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Книги
              </h2>
              <div className="space-y-4">
                <div className="p-5 bg-secondary/30 rounded-lg border border-border">
                  <p className="text-muted-foreground italic">
                    Раздел будет дополнен рекомендациями по книгам об устной истории.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Статьи и публикации
              </h2>
              <div className="space-y-4">
                <div className="p-5 bg-secondary/30 rounded-lg border border-border">
                  <p className="text-muted-foreground italic">
                    Раздел будет дополнен ссылками на полезные статьи и публикации.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Онлайн-ресурсы
              </h2>
              <div className="space-y-4">
                <div className="p-5 bg-secondary/30 rounded-lg border border-border">
                  <p className="text-muted-foreground italic">
                    Раздел будет дополнен ссылками на полезные сайты и архивы.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Примеры проектов
              </h2>
              <div className="space-y-4">
                <div className="p-5 bg-secondary/30 rounded-lg border border-border">
                  <p className="text-muted-foreground italic">
                    Раздел будет дополнен примерами успешных устноисторических проектов.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* Navigation */}
          <nav className="mt-12 pt-8 border-t border-border">
            <Link
              href="/refleksii"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Рефлексии</span>
            </Link>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  )
}
