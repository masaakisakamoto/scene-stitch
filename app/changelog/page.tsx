import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { SectionTitle } from '@/components/section-title'
import { changelog, changelogKinds } from '@/lib/changelog'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Changelog',
  description: '公開後の更新、修正、構造変更を残す公開ログ。',
}

const kindLabel: Record<(typeof changelogKinds)[number], string> = {
  Launch: 'Launch',
  Essay: 'Essay',
  Policy: 'Policy',
  Infra: 'Infra',
  Correction: 'Correction',
}

export default function ChangelogPage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="公開ログ" eyebrow="Changelog" />

        <div className="max-w-4xl space-y-6 text-[16px] leading-8 text-black/78">
          <p className="text-lg leading-9 text-black/86 md:text-xl">
            SCENE/STITCH は、<strong>早く出して、雑にしない</strong>ために、公開後の変更も見える形で残します。
          </p>
          <p>
            ここには、新しい記事の公開、構造の変更、大きな修正、根拠の更新を記録します。軽微な誤字や読みやすさの調整は即時反映し、記事の理解に影響する変更だけをこのページに残します。
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-black/45">
          {changelogKinds.map((kind) => (
            <span key={kind} className="rounded-full border border-black/10 bg-white px-3 py-2 text-[11px]">
              {kindLabel[kind]}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {changelog.map((entry) => (
            <article key={`${entry.date}-${entry.title}`} className="rounded-3xl border border-black/10 bg-white p-6 md:p-7">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-black/45">{entry.kind}</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">{entry.title}</h2>
                </div>
                <p className="text-sm text-black/50">{entry.date}</p>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-black/75">{entry.summary}</p>

              {entry.notes?.length ? (
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {entry.notes.map((note) => (
                    <div key={note} className="rounded-2xl border border-black/10 bg-[var(--background)] p-4 text-sm leading-7 text-black/72">
                      {note}
                    </div>
                  ))}
                </div>
              ) : null}

              {entry.href ? (
                <div className="mt-5">
                  <Link href={entry.href} className="text-sm underline underline-offset-4 transition-opacity hover:opacity-60">
                    関連ページを見る
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-black p-7 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">修正提案や指摘について</h2>
          <div className="mt-5 max-w-4xl space-y-5 text-sm leading-7 text-white/78">
            <p>
              年代、固有名詞、店舗名、発売年、ブランド史の記述に誤りがある場合は、根拠が確認できた時点で優先して修正します。
            </p>
            <p>
              大きな修正はここに残し、軽微な調整は即時反映します。議論が割れる論点は、どの見方に立っているかを本文または注で明示します。
            </p>
            {site.contactEmail ? (
              <p>
                連絡先:{' '}
                <a href={`mailto:${site.contactEmail}`} className="underline underline-offset-4">
                  {site.contactEmail}
                </a>
              </p>
            ) : (
              <p>連絡先メールは `.env.local` の `NEXT_PUBLIC_CONTACT_EMAIL` を設定するとここに表示されます。</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
