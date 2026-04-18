# DEPLOY_VERCEL

SCENE/STITCH を **速く、でも雑にせず** 公開するための最短手順です。  
おすすめは **Git 連携** です。preview を見てから production に出せるので、早く出しつつ質を落としません。

---

## 0. 事前準備

### ローカルで
```bash
npm install
cp .env.example .env.local
npm run preflight
npm run typecheck
npm run build
```

### `.env.local`
最低限これを入れておく。

```env
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

独自ドメインを取ったら、ここを **最終 canonical URL** に変える。  
例: `https://www.scene-stitch.com`

---

## 1. GitHub に push する

`main` を production にする前提で進める。

```bash
git init
git add .
git commit -m "Initial launch"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 2. Vercel でプロジェクトを作る

1. Vercel にログイン
2. **New Project**
3. GitHub リポジトリを import
4. Framework は **Next.js** が自動検出されるはず
5. Build 設定は基本デフォルトで進める

---

## 3. Environment Variables を入れる

Project Settings → **Environment Variables**

最低限おすすめ:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_AUTHOR`
- `NEXT_PUBLIC_GITHUB_URL`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_X_URL`

### 初期値の考え方
- ドメイン未設定の段階: `https://your-project.vercel.app`
- ドメイン設定後: `https://www.your-domain.com`

---

## 4. System Environment Variables を有効にする

Project Settings → Environment Variables  
**Automatically expose System Environment Variables** を ON にする。

このスターターは以下を fallback として読めるようにしてある:

- `VERCEL_PROJECT_PRODUCTION_URL`
- `VERCEL_URL`

つまり、`NEXT_PUBLIC_SITE_URL` をまだ最終値にしていない段階でも、Vercel 上では比較的安全に canonical / metadataBase を組める。  
ただし、**本番前には `NEXT_PUBLIC_SITE_URL` を最終ドメインへ固定**するのがおすすめ。

---

## 5. 最初の preview を確認する

Git 連携すると、ブランチ push ごとに preview ができる。

### 最低限見るページ
- `/`
- `/scene`
- `/scene/punk`
- `/scene/hip-hop`
- `/scene/ura-hara`
- `/scene/shibuya-kei`
- `/scene/visual-kei`
- `/about`
- `/method`
- `/sources`
- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- `/opengraph-image`
- `/scene/punk/opengraph-image`

---

## 6. 独自ドメインを付ける

ドメインの基本方針は `DOMAIN_SETUP.md` を参照。  
最小構成なら:

- primary: `www.your-domain.com`
- redirect: `your-domain.com` → `www.your-domain.com`

### Vercel 側
Project → Settings → **Domains** → Add Domain

---

## 7. ドメイン設定後にやること

1. `NEXT_PUBLIC_SITE_URL` を最終 URL に更新  
   例: `https://www.scene-stitch.com`
2. 再デプロイ
3. 本番ドメインで以下を再確認
   - canonical
   - OG画像
   - sitemap
   - robots
   - 404

---

## 8. Production に出す

### Git 連携の場合
- `main` に merge / push

### CLI の場合
```bash
npm i -g vercel
vercel --prod
```

---

## 9. 公開後すぐに見る場所

- Vercel Deployments
- Build logs
- Functions / Static assets summary
- Speed Insights
- Search Console（ドメイン取得後）

---

## 10. 公開初日のおすすめ運用

### 出すもの
- 5本の旗艦記事
- About
- Method
- Sources

### まだ出さなくていいもの
- 量の少ない Notes
- 未完成の city/person/brand 動的ページ
- 中途半端な関係グラフ

公開の質は、**本数ではなく最初の5本の強さ**で決まる。
