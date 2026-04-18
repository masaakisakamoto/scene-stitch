import Link from 'next/link'
import { Container } from '@/components/container'
import { site } from '@/lib/site'

const sourceGroups = [
  {
    title: '一次資料',
    items: ['公式サイト', 'アーカイブ映像', '当時の雑誌', 'コレクション記録', '作品クレジット'],
  },
  {
    title: '二次資料',
    items: ['学術論文', '展覧会テキスト', '信頼できるインタビュー', '美術館や研究機関の解説'],
  },
  {
    title: '編集メモ',
    items: ['時代のズレがある用語は補注する', '複数の都市がある場合はローカル差を分ける', '未確定な論点は断定しない'],
  },
] as const

export default function SourcesPage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-black/45">Sources & corrections</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">出典と修正について</h1>
          <p className="mt-6 text-base leading-8 text-black/72">
            SCENE/STITCH は、音楽・ファッション・都市文化を扱うアーカイブとして、記事ごとに参考資料を明示し、
            後から見直しや更新ができる形を優先しています。初回公開では、まず強い5本を出し、出典と修正方針も同時に公開します。
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {sourceGroups.map((group) => (
              <section key={group.title} className="rounded-3xl border border-black/10 bg-white p-5">
                <h2 className="text-lg font-semibold tracking-tight">{group.title}</h2>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-black/72">
                  {group.items.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-black/10 bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">修正ポリシー</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-black/72">
              <p>
                年代、人物、店舗、リリース、ブランドの記述に誤りや不正確さが見つかった場合は、修正を優先します。
              </p>
              <p>
                議論が分かれる論点については、どの見方に立っているかを本文か注で示し、必要に応じて複数の見解を併記します。
              </p>
              <p>
                このサイトは完成した百科事典ではなく、出典を持ちながら育っていく編集アーカイブです。
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-[var(--background)] p-6">
            <h2 className="text-lg font-semibold tracking-tight">公開後の更新をどう見るか</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-black/72">
              <p>
                構成や主張に影響する更新は
                <Link href="/changelog" className="underline underline-offset-4">
                  Changelog
                </Link>
                に残します。軽微な誤字修正は即時反映し、読者の理解に影響する変更だけを公開ログとして可視化します。
              </p>
              {site.contactEmail ? (
                <p>
                  修正提案の連絡先:{' '}
                  <a href={`mailto:${site.contactEmail}`} className="underline underline-offset-4">
                    {site.contactEmail}
                  </a>
                </p>
              ) : (
                <p>修正提案の連絡先は `.env.local` の `NEXT_PUBLIC_CONTACT_EMAIL` を設定すると表示されます。</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
