import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "src/components/EmbeddedShogi/index.tsx"),
      formats: ["umd"],
      name: "embeddedChat",
      fileName: "embedded-chat",
    },
  },
  define: {
    "process.env": {},
  },
});
