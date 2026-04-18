import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { CtaButton } from '@/components/cta-button'
import { SectionTitle } from '@/components/section-title'

export const metadata: Metadata = {
  title: 'About',
  description: 'SCENE/STITCH の考え方、扱う範囲、公開方針。',
}

const principles = [
  {
    title: 'Scene first',
    body:
      'ジャンル名やブランド名だけでは見えない、場所・人・流通・身体表現の関係から文化を読む。SCENE/STITCH は、その接続そのものを記録する。',
  },
  {
    title: 'Connection over trivia',
    body:
      '細かい情報を大量に並べることよりも、なぜその音が、その服、その都市、その店につながったのかを明快に示すことを優先する。',
  },
  {
    title: 'Publish narrow, grow deep',
    body:
      '最初から百科事典を装わない。看板記事を少数公開し、更新と訂正を重ねながら深くしていく。その速度感も編集の一部だと考える。',
  },
  {
    title: 'Readable, structured, alive',
    body:
      '読みやすさと構造を両立させる。年表、都市、人物、店、メディア、後世への影響を行き来しながら、いまにも接続できる歴史として見せる。',
  },
] as const

const scopes = [
  '音そのものだけでなく、服、身体、店、雑誌、クラブ、レコードショップ、メディア環境まで含めて扱う。',
  '英米の大きな流れだけでなく、東京や日本独自の編集感覚、受容、変形も同じ重さで見る。',
  '作品単体の名盤紹介ではなく、シーンがどのように立ち上がり、広がり、残ったかを追う。',
] as const

const nonGoals = [
  '最初から全部を網羅したふりをしない。',
  '英雄だけで歴史を語らない。場所、流通、メディア、無名の実践も重視する。',
  '根拠の薄い断定や、雰囲気だけの神話化を避ける。',
] as const

export default function AboutPage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <SectionTitle title="SCENE/STITCH について" eyebrow="About" />

        <div className="max-w-4xl space-y-6 text-[16px] leading-8 text-black/78">
          <p className="text-lg leading-9 text-black/86 md:text-xl">
            SCENE/STITCH は、音楽とファッションが交差したサブカルチャーの歴史を、
            <strong> シーン単位 </strong>
            で読み直すためのアーカイブです。
          </p>
          <p>
            ここで追いたいのは、作品単体のレビューでも、ブランド単体のカタログでもありません。音、服、都市、店、雑誌、クラブ、レコードショップ、身体表現が、どのように接続されたときにひとつの文化になったのか。その関係を、読める形で残していくことが目的です。
          </p>
          <p>
            歴史を静的なデータとして並べるのではなく、いまのスタイルや感覚へとつながる流れとして見せたい。だから SCENE/STITCH では、資料性と熱量の両方を大事にします。
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {principles.map((item) => (
            <article key={item.title} className="rounded-3xl border border-black/10 bg-white p-6">
              <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-black/75">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <h2 className="text-2xl font-semibold tracking-tight">なぜ Scene から読むのか</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-8 text-black/75">
              <p>
                文化は、単独の作品や人物だけでは立ち上がりません。ある都市の空気、ある店の棚、あるフライヤー、ある雑誌の編集方針、ある服の着方が重なったときに、はじめて「シーン」と呼べる厚みが生まれます。
              </p>
              <p>
                だからこのサイトでは、<strong>genre</strong> よりも <strong>scene</strong>
                を主軸に置きます。ジャンル分類は便利ですが、それだけでは文化の運動や伝播の仕方を十分に捉えられません。Scene という単位を通すことで、音と服の関係がやっと立体になります。
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <h2 className="text-2xl font-semibold tracking-tight">ここで扱うもの</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-black/75">
              {scopes.map((item) => (
                <p key={item}>— {item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-7">
          <h2 className="text-2xl font-semibold tracking-tight">このサイトがやらないこと</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {nonGoals.map((item) => (
              <div key={item} className="rounded-2xl border border-black/10 bg-[var(--background)] p-5">
                <p className="text-sm leading-7 text-black/75">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-7">
          <h2 className="text-2xl font-semibold tracking-tight">早く出し、深く育てる</h2>
          <div className="mt-5 max-w-4xl space-y-5 text-[15px] leading-8 text-black/75">
            <p>
              SCENE/STITCH は、完成した百科事典として始めるプロジェクトではありません。少数の旗艦記事を先に公開し、その構造と熱量でサイトの思想を示したうえで、継続的に増補していきます。
            </p>
            <p>
              これは妥協ではなく、質を守るためのやり方です。広げすぎると、文化はすぐに薄くなる。だから最初は狭く出す。その代わり、出したものは何度でも磨き直す。SCENE/STITCH の公開方針は、その反復を前提にしています。
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-black p-7 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">いま読めるもの</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75">
            まずは、Punk、Hip-Hop、Ura-Hara、Shibuya-kei、Visual Kei から始める。
            世界史と東京ローカルを往復しながら、サイトの軸を明確にするための最初の5本です。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href="/scene">公開中のシーンを見る</CtaButton>
            <CtaButton href="/method" secondary>
              Method を読む
            </CtaButton>
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/45">
            Build a sharp archive first. Expand only after the structure is real.
          </p>
        </div>

        <div className="mt-10 max-w-3xl text-sm leading-7 text-black/65">
          <p>
            このサイトの文章構成、根拠の置き方、公開基準については
            <Link href="/method" className="underline underline-offset-4">
              Method
            </Link>
            にまとめています。
          </p>
        </div>
      </Container>
    </section>
  )
}
