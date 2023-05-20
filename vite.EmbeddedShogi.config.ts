import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "src/components/EmbeddedShogi/index.tsx"),
      formats: ["umd"],
      name: "embeddedShogi",
      fileName: "embedded-shogi"
    }
  },
  define: {
    "process.env": {}
  }
})
