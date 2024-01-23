import react from "@vitejs/plugin-react";
import { resolve } from "path";
import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "es",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "../../packages/components/src/index.ts"),
      //entry: resolve(__dirname, "./src/index.ts"),
      formats: ["es"],
      fileName: (format, entryName) => {
        return entryName + ".js";
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "react",
        "react/jsx-runtime",
        "lodash-es",
        "dayjs",
        "react-dom",
        "classnames",
        "ahooks",
        "react-transition-group",
        "@ant-design/icons",
        "@ctrl/tinycolor",
        /@element-plus-react\/theme-chalk/,
      ],
      output: {
        preserveModules: true,
      },
      plugins: [
        copy({
          targets: [
            {
              src: "../../README.md",
              dest: "./",
            },
          ],
          verbose: true,
        }),
      ],
    },
  },
});
