import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@layout": fileURLToPath(new URL("./src/layout", import.meta.url)),
      "@interface": fileURLToPath(new URL("./src/interface", import.meta.url)),
      "@todo": fileURLToPath(new URL("./src/components/todo", import.meta.url)),
    },
  },
  base: "/practice-vue/",
});
