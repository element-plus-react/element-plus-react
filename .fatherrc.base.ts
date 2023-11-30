import { defineConfig } from "father";

export default defineConfig({
  alias: {
    // "@element-plus/components": path.resolve(__dirname, "./packages/components/src/index.ts"),
    // "@element-plus/utils": path.resolve(__dirname, "./packages/element-plus-react/es/utils"), //path.resolve(__dirname, "./packages/hooks"),
    // "@element-plus/utils": path.resolve(__dirname, "./packages/utils"),
    // "@element-plus/theme-chalk": path.resolve(__dirname, "./theme-chalk"),
  },
  esm: {
    input: "src", // 默认编译目录
    output: "es",
    platform: "browser", // 默认构建为 Browser 环境的产物
    transformer: "babel", // 默认使用 babel 以提供更好的兼容性
  },
});
