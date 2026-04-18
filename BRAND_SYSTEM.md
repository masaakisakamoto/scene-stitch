# SCENE/STITCH Brand System

## 結論

初回リリースは **Archive Minimal** で行く。

- 白黒 + 紙っぽい背景
- テキスト主体
- 写真はまだ主役にしない
- ロゴは装飾しすぎない
- 共有カードは毎回同じ構造にする

この方向がいちばん強い理由は、**質感は高いのに、公開速度を落とさない** からです。

---

## ブランドの一文

**A subculture archive that reads history through sound and style.**

日本語で言うと、

**音と服の交差点から、サブカルチャーの歴史を読むアーカイブ。**

---

## ロゴの考え方

### Wordmark

`SCENE/STITCH`

- `SCENE` = 音、都市、人物、場所
- `STITCH` = 服、縫い目、接続、編集
- `/` = 切れ目、接続、編集線

### Mark

`S/S`

- favicon
- SNSアイコン
- GitHub profile image
- プレースホルダー的な小アイコン

---

## リリース時のルール

1. **ロゴは黒一色に寄せる**
2. **背景は紙っぽいオフホワイト**
3. **アクセントカラーは入れない**
4. **写真にロゴを重ねない**
5. **SNS共有カードは文字だけで成立させる**

派手さより、**編集された静けさ** を優先する。

---

## 色

- Paper: `#f5f2eb`
- Ink: `#111111`
- Muted: `#5e5a54`
- Line: `#d7d0c6`

この4色だけで十分です。

---

## タイポグラフィ方針

v1 は **system sans** のままでいい。

- 速い
- 破綻しにくい
- OGやアイコンにも転用しやすい

あとから専用フォントを入れるより、先に**余白・行間・階層**を整える方が、完成度が上がる。

---

## OG画像のルール

### ルート

- eyebrow
- title
- subtitle
- meta line
- brand label

この5要素だけにする。

### Scene別

- title は Scene 名
- subtitle は英語1行
- meta line は `年代 • 都市`

### About / Method

- ページごとに固有のOGを置く
- でもレイアウトは固定する

---

## 実装ファイル

- `lib/brand.ts`
- `lib/og.tsx`
- `app/opengraph-image.tsx`
- `app/scene/[slug]/opengraph-image.tsx`
- `app/icon.tsx`
- `app/apple-icon.tsx`
- `public/brand/scene-stitch-wordmark.svg`
- `public/brand/scene-stitch-mark.svg`

---

## 30分でやるべきこと

1. `NEXT_PUBLIC_SITE_URL` を設定する
2. ホームのOGを確認する
3. `punk`, `hip-hop`, `ura-hara`, `shibuya-kei`, `visual-kei` のOGを確認する
4. プロフィール画像に `scene-stitch-mark.svg` を使う
5. X と Instagram の告知文を `LAUNCH_COPY.md` から流す

---

## やらないこと

- 初回からロゴを描き込みすぎる
- グランジ表現を安易なノイズで表す
- Sceneごとに違う色を使う
- OGに写真を無理に入れる

SCENE/STITCH の強さは、**熱量を冷静に見せること** にある。
