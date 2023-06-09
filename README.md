# react-shogi

Shogi library for react user

デモサイト: <https://ekusiadadus.github.io/react-shogi/>

![react-shogi1](https://github.com/ekusiadadus/react-shogi/assets/70436490/9c028d4c-ccef-47e0-9659-96adf5a4857a)


## 使い方

```typescript
<ShogiGame
  KIF={`1 ２六歩(27) (00:00/00:00:00)
2 ８四歩(83) (00:00/00:00:00)`}
/>
```

## 将棋盤を静的なサイトに埋め込む

```html
<!DOCTYPE html>

<head>
  <meta charset="utf-8" />
  <title>example</title>
</head>

<script
  id="shogi"
  type="text/javascript"
  async
  src="../dist/embedded-shogi.umd.cjs"
></script>

<script type="text/javascript">
  const script = document.getElementById("shogi")
  script.addEventListener("load", () => {
    globalThis.run()
  })
</script>
```

## 開発者向け

### インストール

```bash
$ pnpm install
```

### 立ち上げ

```bash
$ pnpm dev
```

### ビルド

```bash
$ pnpm build
```

### 組み込み

```bash
$ pnpm build:shogi
```

### ライブラリ

```bash
$ pnpm build:lib
```
