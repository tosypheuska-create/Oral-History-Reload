"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface SidebarItem {
  title: string
  href: string
  children?: { title: string; href: string }[]
}

interface SidebarNavProps {
  items: SidebarItem[]
  title?: string
}

export function SidebarNav({ items, title }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 pr-4">
        {title && (
          <h2 className="font-serif text-lg font-semibold mb-4 text-foreground">
            {title}
          </h2>
        )}
        <nav className="space-y-1">
          {items.map((item) => {
            const isActive = pathname === item.href
            const hasActiveChild = item.children?.some(child => pathname === child.href)
            
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors",
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-2 py-1.5 text-sm rounded-md transition-colors",
                            isChildActive 
                              ? "text-primary font-medium" 
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {child.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

// Mobile sidebar for documentation pages
export function MobileSidebarNav({ items, title }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className="lg:hidden mb-8 pb-6 border-b border-border">
      {title && (
        <h2 className="font-serif text-lg font-semibold mb-3 text-foreground">
          {title}
        </h2>
      )}
      <nav className="flex flex-wrap gap-2">
        {items.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-1.5 text-sm rounded-full border transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              )}
            >
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
