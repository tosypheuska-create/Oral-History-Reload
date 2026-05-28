import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-3">
              Устная история. Перезагрузка
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Практическое руководство для тех, кто хочет записывать и сохранять устные воспоминания.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-sm">Разделы</h4>
            <nav className="space-y-2">
              <Link href="/pered-nachalom" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Перед началом
              </Link>
              <Link href="/v-processe" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                В процессе
              </Link>
              <Link href="/posle-intervyu" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                После интервью
              </Link>
              <Link href="/osnovnye-ponyatiya" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Основные понятия
              </Link>
              <Link href="/refleksii" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Рефлексии
              </Link>
              <Link href="/pochitat-esche" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Почитать ещё
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-sm">О проекте</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Этот сайт создан для поддержки исследователей, музейных работников, краеведов и всех, кто интересуется устной историей.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Устная история. Перезагрузка
          </p>
        </div>
      </div>
    </footer>
  )
}
