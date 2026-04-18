import Link from 'next/link'
import { navigation } from '@/lib/site'
import { Container } from '@/components/container'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--background)]/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="inline-flex items-center gap-3 transition-opacity hover:opacity-70">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-black/12 px-2 text-[10px] font-semibold tracking-[0.16em] text-black">
            S/S
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-black">SCENE/STITCH</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-black/65 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-60">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
