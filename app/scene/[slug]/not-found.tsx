import Link from 'next/link'
import { Container } from '@/components/container'

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-xl rounded-3xl border border-black/10 bg-white p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-black/45">Not found</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">まだ公開されていないページです</h1>
          <p className="mt-4 text-sm leading-7 text-black/70">
            このシーンは構成中です。まずは公開済みの Punk / Hip-Hop / Ura-Hara から育てていくのがおすすめです。
          </p>
          <Link href="/scene" className="mt-6 inline-flex rounded-full bg-black px-4 py-2 text-sm text-white">
            シーン一覧へ戻る
          </Link>
        </div>
      </Container>
    </section>
  )
}
