# PRODUCTION_SMOKE_TEST

本番公開の直前と直後に、これだけは確認する。  
5〜10分で終わる最小スモークテストです。

---

## 1. 本番URL

- [ ] `https://www.your-domain.com` が開く
- [ ] apex から primary へ redirect される
- [ ] preview URL と本番URLを取り違えていない

---

## 2. 主要ページ

- [ ] `/`
- [ ] `/scene`
- [ ] `/scene/punk`
- [ ] `/scene/hip-hop`
- [ ] `/scene/ura-hara`
- [ ] `/scene/shibuya-kei`
- [ ] `/scene/visual-kei`
- [ ] `/about`
- [ ] `/method`
- [ ] `/sources`

---

## 3. シェアとSEO

- [ ] `/opengraph-image` が開く
- [ ] `/scene/punk/opengraph-image` が開く
- [ ] `/robots.txt` が開く
- [ ] `/sitemap.xml` が開く
- [ ] `/manifest.webmanifest` が開く
- [ ] ページタイトルが route ごとに変わる
- [ ] canonical が本番ドメインになっている

---

## 4. 壊れやすい場所

- [ ] Header のナビ
- [ ] Footer の external links
- [ ] Scene card から各記事への導線
- [ ] 404 ページ
- [ ] 日本語が文字化けしていない

---

## 5. モバイル

- [ ] iPhone 幅で崩れない
- [ ] ボタンが押しやすい
- [ ] Hero の改行が不自然でない
- [ ] Scene 記事のメタ情報が読める

---

## 6. 公開後 30 分以内

- [ ] Vercel build logs に error がない
- [ ] Vercel deployment resources が異常に重くない
- [ ] OG preview を実際に SNS で試す
- [ ] About / Method / Sources の3ページが見える
- [ ] 友人1人に URL を送って初見フィードバックをもらう

---

## 合格ライン

上のチェックで **重大エラーが 0** なら公開してよい。  
細かい改善は公開後に積む。
