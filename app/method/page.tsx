import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { SectionTitle } from '@/components/section-title'

export const metadata: Metadata = {
  title: 'Method',
  description: 'SCENE/STITCH の調査方法、文章設計、公開基準。',
}

const articleStructure = [
  {
    step: '01',
    title: 'まず、時間と場所を固定する',
    body:
      'いつ、どこで、どのような空気のもとで立ち上がったシーンなのかを先に定める。時代背景と都市の質感が曖昧なままでは、後の記述が全部ぼやける。',
  },
  {
    step: '02',
    title: '音・服・場所・メディアを同じ重さで見る',
    body:
      '代表作や有名人だけではなく、店、クラブ、レコードショップ、雑誌、フライヤー、アイテム、身体表現まで含めてシーンを組み立てる。',
  },
  {
    step: '03',
    title: 'facts と reading を分ける',
    body:
      '確認できる事実と、そこから導く解釈を混同しない。事実は具体的に、解釈は筋道を見せて書く。',
  },
  {
    step: '04',
    title: '最後に現在へ接続する',
    body:
      '歴史を過去の箱に閉じ込めず、いまのスタイル、ブランド、感覚、再評価とのつながりまで示して終える。',
  },
] as const

const sourceOrder = [
  '公式アーカイブ、公式年表、ミュージアム、大学研究などの一次・準一次資料を優先する。',
  '時代の空気を拾うために、当時の雑誌、インタビュー、写真、フライヤー、ショップ資料も重視する。',
  '後年のまとめ記事を使う場合は、神話化や単純化が入っていないかを慎重に見る。',
  '根拠が薄いもの、出典がたどれない話、定番の逸話だけで成立している説明は避ける。',
] as const

const publishRules = [
  '中心となる主張が一文で言えること。',
  '年代、都市、人物、キーワードが整理されていること。',
  '最低限の参考資料が置けること。',
  '関連シーンへの接続が見えること。',
  '読み切ったあとに、そのシーンの輪郭が立つこと。',
] as const

const correctionRules = [
  '誤字や軽微な言い回しの修正は即時反映する。',
  '構成や主張に影響する更新は、記事末尾で更新内容がわかる形にする。',
  '新しい資料で見え方が変わる場合は、過去の説明を残しながら上書きの理由を示す。',
] as const

export default function MethodPage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="Method" eyebrow="How SCENE/STITCH works" />

        <div className="max-w-4xl space-y-6 text-[16px] leading-8 text-black/78">
          <p className="text-lg leading-9 text-black/86 md:text-xl">
            SCENE/STITCH は、勢いだけのカルチャー論にも、無機質な年表整理にも寄らないために、
            記事の作り方と公開基準を先に決めています。
          </p>
          <p>
            目指しているのは、読むと熱が伝わり、あとから参照もしやすい文章です。つまり、
            <strong>熱量のある資料</strong>として機能すること。そのために、以下のルールで組み立てています。
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {articleStructure.map((item) => (
            <article key={item.step} className="rounded-3xl border border-black/10 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-black/45">Step {item.step}</p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-black/75">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <h2 className="text-2xl font-semibold tracking-tight">Sources</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-black/75">
              {sourceOrder.map((item) => (
                <p key={item}>— {item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <h2 className="text-2xl font-semibold tracking-tight">What counts as publishable</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-black/75">
              {publishRules.map((item) => (
                <p key={item}>— {item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-7">
          <h2 className="text-2xl font-semibold tracking-tight">Correction policy</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {correctionRules.map((item) => (
              <div key={item} className="rounded-2xl border border-black/10 bg-[var(--background)] p-5">
                <p className="text-sm leading-7 text-black/75">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-black p-7 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">Release philosophy</h2>
          <div className="mt-5 max-w-4xl space-y-5 text-sm leading-7 text-white/78">
            <p>
              世界トップレベルの質を目指すことと、早く公開することは両立できます。両立させる鍵は、
              すべてを先に作ろうとしないことです。
            </p>
            <p>
              SCENE/STITCH では、少数の旗艦記事、明確な構造、公開後の継続更新という順番を取ります。これにより、サイト全体の思想を保ったまま、早く世に出せる。
              深さは後から足すのではなく、最初の数本で証明する。残りはその型に沿って増やしていく。
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
