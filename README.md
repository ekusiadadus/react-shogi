# react-shogi

Shogi library for react user

![image](https://github.com/ekusiadadus/react-shogi/assets/70436490/60245b18-264f-4c8f-adc9-97bae1dc4ab2)

## How to use

[Demo Page](https://ekusiadadus.github.io/react-shogi/)

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
