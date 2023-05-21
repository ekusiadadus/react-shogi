import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"
import terser from "@rollup/plugin-terser"

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/lib/react-shogi/ShogiGame.tsx"),
      name: "ShogiGame",
      fileName: "ShogiGame"
    },
    rollupOptions: {
      // 必要な外部依存関係を指定します。
      external: ["react", "react-dom"],
      output: {
        // ライブラリのグローバル変数名を指定します。
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        plugins: [terser()]
      }
    }
  }
})
