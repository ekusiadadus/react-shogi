import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/react-shogi/ShogiGame.tsx"),
      name: "ShogiGame",
      fileName: "ShogiGame"
    }
  }
})
