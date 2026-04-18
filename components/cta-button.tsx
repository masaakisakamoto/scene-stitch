import Link from 'next/link'

export function CtaButton({ href, children, secondary = false }: { href: string; children: string; secondary?: boolean }) {
  return (
    <Link
      href={href}
      className={
        secondary
          ? 'inline-flex items-center rounded-full border border-black/15 px-4 py-2 text-sm transition hover:bg-black/5'
          : 'inline-flex items-center rounded-full bg-black px-4 py-2 text-sm text-white transition hover:opacity-85'
      }
    >
      {children}
    </Link>
  )
}
