# SCENE/STITCH Starter

サブカルチャーの歴史アーカイブ **SCENE/STITCH** 用の Next.js + App Router + MDX + Tailwind 雛形です。

## 前提

- Node.js **20.9+**
- npm
- GitHub と Vercel アカウント

## ローカル起動

```bash
npm install
cp .env.example .env.local
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## リリース前の基本コマンド

```bash
npm run preflight
npm run typecheck
npm run build
```

## 公開前に必ずやること

1. `.env.local` を作り、`NEXT_PUBLIC_SITE_URL` を入れる  
   - まだ独自ドメイン未取得なら一時的に `https://your-project.vercel.app`
   - 本番前には最終 canonical ドメインへ更新
2. `app/about` / `app/method` / `app/sources` / `app/changelog` を自分の運用に合わせて調整する
3. `content/scenes/*.mdx` の参考資料と本文を見直す
4. `http://localhost:3000/opengraph-image` と各 `/scene/[slug]/opengraph-image` を開いて OG 画像を確認する
5. `npm run preflight && npm run build` を通す

## この雛形でできること

- App Router ベースの公開サイト
- MDX を使ったシーン記事
- `/scene/[slug]` の静的生成
- トップページ、シーン一覧、年代一覧、都市一覧、Notes、About
- `Method`、`Sources & Corrections`、`Changelog` を含む公開用の信頼性ページ
- `icon.tsx` / `apple-icon.tsx` / `manifest.ts` / `robots.ts` / `sitemap.ts` / `opengraph-image.tsx` の初期セット
- Google Search Console verification meta の差し込み先
- Google Analytics 4 と Vercel Analytics を必要時だけ有効にできる最小セット
- 将来の拡張を見据えた `components / content / lib` 分離
- Vercel 公開を前提にした `.env.example` / `.gitignore` / `vercel.json` / `DEPLOY_VERCEL.md`

## Vercel デプロイ

最短手順は `DEPLOY_VERCEL.md` にまとめてあります。  
独自ドメインの考え方は `DOMAIN_SETUP.md`、本番前の確認は `PRODUCTION_SMOKE_TEST.md` を見てください。

## 検索・計測まわり

- Search Console / Analytics 設定: `SEARCH_CONSOLE_ANALYTICS_SETUP.md`
- 公開直後の運用: `POST_LAUNCH_OPERATIONS.md`
- 修正ログの運用方針: `CHANGELOG_POLICY.md`

## ブランドとOGの置き場

- ロゴ方針: `BRAND_SYSTEM.md`
- OG文言: `OG_COPY_BANK.md`
- 共有用SVG: `public/brand/scene-stitch-wordmark.svg`, `public/brand/scene-stitch-mark.svg`
- 共通OG描画: `lib/og.tsx`
- ルートOG: `app/opengraph-image.tsx`
- Scene別OG: `app/scene/[slug]/opengraph-image.tsx`

## 最初にやること

1. `punk.mdx` / `hip-hop.mdx` / `ura-hara.mdx` / `shibuya-kei.mdx` / `visual-kei.mdx` を看板記事として磨く
2. `lib/scenes.ts` で公開状態と `socialSubtitle` を管理する
3. `BRAND_SYSTEM.md` のルールに沿って About / Method / SNS の文言を揃える
4. `RELEASE_PLAYBOOK.md` と `LAUNCH_THIS_WEEK.md` を読んで公開範囲を絞る
5. `SEARCH_CONSOLE_ANALYTICS_SETUP.md` に沿って Search Console と最低限の計測を入れる
6. `DEPLOY_VERCEL.md` の順で preview → production を通す

## 次の拡張候補

- `/city/[slug]` 動的ページ
- `/person/[slug]` と `/brand/[slug]`
- 関係グラフ表示
- 検索
- 更新履歴ページの記事単位連携
- 写真アーカイブの追加
