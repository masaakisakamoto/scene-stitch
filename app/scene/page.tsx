import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { SceneCard } from '@/components/scene-card'
import { SectionTitle } from '@/components/section-title'
import {
  bridgeEssays,
  japanPillars,
  nextWaveCandidates,
  publishedBridgeEssays,
  publishedJapanPillars,
} from '@/lib/scenes'

export const metadata: Metadata = {
  title: 'Scenes',
  description:
    '海外からの流入、日本での変形、世界への再放出までを含めて読む、SCENE/STITCH の主要シーン一覧。',
}

export default function SceneIndexPage() {
  const plannedBridgeEssays = bridgeEssays.filter((scene) => !scene.published)
  const plannedJapanPillars = japanPillars.filter((scene) => !scene.published)

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-black/45">Scene index</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Japan-focused transnational subculture archive
          </h1>
          <p className="mt-5 text-base leading-8 text-black/70">
            SCENE/STITCH は、日本のサブカルチャーを国内だけで閉じず、海外からの流入、日本での変形、
            世界への再放出まで含めて読むためのアーカイブです。
          </p>
        </div>

        <div className="mt-12">
          <SectionTitle title="海外から入る2つの入口" eyebrow="Bridge essays" />
          <p className="max-w-3xl text-sm leading-7 text-black/68">
            まずは UK / US の大きなシーンから入る。日本の変形を読むための橋として置く導入記事です。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {bridgeEssays.map((scene) => (
              <SceneCard key={scene.slug} scene={scene} />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-16">
          <SectionTitle title="日本の旗艦10テーマ" eyebrow="Japan pillars" />
          <p className="max-w-3xl text-sm leading-7 text-black/68">
            日本独自の変形力が強く、海外読者にも入口があり、将来のサイト全体を支える柱になるテーマ群です。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {japanPillars.map((scene) => (
              <SceneCard key={scene.slug} scene={scene} />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-16">
          <SectionTitle title="いま公開中の核" eyebrow="Published now" />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[...publishedBridgeEssays, ...publishedJapanPillars].map((scene) => (
              <SceneCard key={scene.slug} scene={scene} />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-16">
          <SectionTitle title="次の波で足す候補" eyebrow="Next wave" />
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {nextWaveCandidates.map((item) => (
              <div key={item} className="rounded-3xl border border-black/10 bg-white p-5">
                <p className="text-sm leading-7 text-black/75">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {(plannedBridgeEssays.length > 0 || plannedJapanPillars.length > 0) ? (
          <div className="mt-16 rounded-3xl border border-black/10 bg-white p-6">
            <h2 className="text-lg font-semibold tracking-tight">この構造の意味</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-black/72">
              <p>
                Bridge essays は、海外の読者が自国のカルチャーから日本へ入るための入口です。
              </p>
              <p>
                Japan pillars は、日本で独自の変形が起き、しかも世界との接点を説明しやすいテーマだけを先に重く置いています。
              </p>
              <p>
                つまりこの一覧は、単なるトピック一覧ではなく、SCENE/STITCH の編集方針そのものです。
              </p>
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
