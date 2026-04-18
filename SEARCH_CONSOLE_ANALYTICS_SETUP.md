# SEARCH CONSOLE / ANALYTICS SETUP

SCENE/STITCH を **早く公開しつつ、公開後に正しく学ぶ** ための最小セット。

## 1. Search Console

### まずやること

- 可能なら **Domain property** を追加して DNS で verify する
- すぐ反映を見たいなら **URL-prefix property** も追加する
- sitemap を `https://your-domain.com/sitemap.xml` で送信する

### この starter での対応

- `app/layout.tsx` に `verification.google` の差し込み先を用意済み
- `.env.local` に `GOOGLE_SITE_VERIFICATION=...` を入れると、`<meta name="google-site-verification">` が出る
- `app/robots.ts` と `app/sitemap.ts` は実装済み

### `.env.local` 例

```env
NEXT_PUBLIC_SITE_URL=https://www.scene-stitch.com
GOOGLE_SITE_VERIFICATION=your-token-here
```

## 2. Google Analytics 4

### 使うかどうか

最初は必須ではない。公開直後に見るべきなのは、

- どの記事が入口になっているか
- トップから Scene へ流れているか
- About / Method に読者がどれだけ来るか

この3つがわかれば十分。

### この starter での対応

- `NEXT_PUBLIC_GA_ID` を入れると Google Analytics 4 を root layout に差し込む
- ID が空なら何も読み込まない

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 3. Vercel Analytics

### 使いどころ

- 参照元とページ別流入を軽く見たい
- preview / production ごとの動きを見たい
- 最初はイベント設計までやらず、ページ単位の学びだけ欲しい

### この starter での対応

```env
NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS=true
```

## 4. 最初の7日で見る数字

1. Top landing pages
2. Referrers
3. `/scene/punk` など旗艦記事の比率
4. `/about` と `/method` の読了導線
5. 国・都市まで見る必要があるかどうか

## 5. やらないこと

- 初日からイベントを増やしすぎない
- スクロール率や細かいクリック計測を最初から盛らない
- 数字に引っ張られて記事の方向を変えすぎない
