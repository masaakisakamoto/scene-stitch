import Link from 'next/link'
import { Container } from '@/components/container'

export default function NotFound() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-black/45">404 / Not found</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            そのページは見つかりませんでした
          </h1>
          <p className="mt-5 text-base leading-8 text-black/72">
            URL が変わったか、まだ公開していないページです。まずは公開中のシーンかトップページから入り直してください。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              トップへ戻る
            </Link>
            <Link
              href="/scene"
              className="inline-flex rounded-full border border-black/12 bg-white px-4 py-2 text-sm font-medium transition hover:bg-black/4"
            >
              公開中のシーンを見る
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
