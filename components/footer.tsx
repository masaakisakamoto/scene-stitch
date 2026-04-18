import Link from 'next/link'
import { Container } from '@/components/container'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <Container className="flex flex-col gap-6 text-sm text-black/60 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-black/12 px-2 text-[10px] font-semibold tracking-[0.16em] text-black">
              S/S
            </span>
            <p className="font-semibold tracking-[0.14em] text-black">SCENE/STITCH</p>
          </div>
          <p className="mt-3 max-w-md leading-7">
            音楽とファッションが交差したサブカルの歴史を、シーン単位でたどるためのアーカイブ。
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="transition-opacity hover:opacity-60">
            About
          </Link>
          <Link href="/method" className="transition-opacity hover:opacity-60">
            Method
          </Link>
          <Link href="/sources" className="transition-opacity hover:opacity-60">
            Sources
          </Link>
          <Link href="/changelog" className="transition-opacity hover:opacity-60">
            Changelog
          </Link>
          <Link href="/notes" className="transition-opacity hover:opacity-60">
            Notes
          </Link>
          {site.socialLinks.map((item) => (
            <a key={item.label} href={item.href} className="transition-opacity hover:opacity-60" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
