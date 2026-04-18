# DOMAIN_SETUP

SCENE/STITCH の公開ドメインを決めるための実務メモです。  
**Vercel 推奨に寄せるなら、`www` を primary にする** のがいちばん安全です。

---

## 推奨構成

- **Primary**: `www.your-domain.com`
- **Redirect**: `your-domain.com` → `www.your-domain.com`

### 例
- `www.scene-stitch.com` を本番URL
- `scene-stitch.com` は redirect

---

## なぜ `www` primary がいいのか

Vercel は **`www` を primary にして apex を redirect** する構成を推奨している。  
理由は、subdomain 側では **CNAME** を使えるので、Vercel CDN がトラフィック制御・信頼性・速度・セキュリティ面で扱いやすいから。

つまり、**体感URLはほぼ同じでも、運用上は `www` primary のほうが素直**。

---

## DNS のざっくり整理

### Apex domain
`your-domain.com`

- 一般に **A record** で向ける

### Subdomain
`www.your-domain.com`

- 一般に **CNAME** で向ける

Vercel の Domains 画面で、必要な値はその場で案内される。

---

## 実際の手順

1. Vercel の Project Settings → **Domains**
2. `your-domain.com` を追加
3. 提案されたら `www.your-domain.com` も追加
4. `www` を **Primary**
5. apex を `www` へ redirect
6. レジストラ側で DNS を設定
7. Verified になるのを待つ
8. `NEXT_PUBLIC_SITE_URL=https://www.your-domain.com` に更新
9. 再デプロイ

---

## どちらを canonical にするか迷ったら

### 迷わない答え
**`www` を canonical にする**

---

## ただし non-www を使いたい場合

`https://your-domain.com` を primary にしても公開はできる。  
その場合は:

- `www` も追加
- `www` → apex redirect
- `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

で統一する。

---

## SCENE/STITCH 向けのおすすめ

ブランドの見え方だけを優先すると non-www も綺麗。  
でも **「早く、堅く、事故りにくく」** を優先するなら、

**`www.scene-stitch.com` を本番URLにして、表示上はロゴで美しく見せる**

これが最も実務的。
