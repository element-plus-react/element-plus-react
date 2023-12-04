//import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
//import jsx from "acorn-jsx";
import clear from "rollup-plugin-delete";
//import typescript from "rollup-plugin-typescript2";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

const extensions = ["js", "ts", "tsx", "json"];

export default {
  input: "./src/index.ts",
  // input: "../components/src/index.ts",
  external: [
    "react",
    "react-dom",
    "react-router-dom",
    "ahooks",
    "classnames",
    "@ant-design/icons",
    "@ctrl/tinycolor",
    "dayjs",
    "react-transition-group",
    "lodash-es",
    "@element-plus/theme-chalk",
    "react/jsx-runtime",
  ],
  output: [
    {
      dir: "es",
      format: "es",
      preserveModules: true,
      exports: "named",
      preserveModulesRoot: "@element-plus/components",
    },
  ],
  // acornInjectPlugins: [jsx()],
  plugins: [
    clear({ targets: ["es"] }),
    //  nodeExternals(),
    typescript({
      // jsx: "preserve",
      // // check: false,
      // exclude: ["node_modules", "es", "*/demos/*"],
      // include: ["../components"],
    }),
    nodeResolve({
      //extensions,
      // resolveOnly: ["@element-plus/components"],
      // modulePaths: ["../../node_modules"],
      // moduleDirectories: ["../../node_modules"],
      //modulePaths: ["../../node_modules/@element-plus/components"],
    }),
    // commonjs(),
    // babel({
    //   presets: ["@babel/preset-react"],
    //   babelHelpers: "bundled",
    //   exclude: "**/node_modules/**",
    //   extensions,
    // }),
    postcss({
      extract: true,
    }),
    // copy({
    //   targets: [
    //     {
    //       src: "../components/node_modules/@element-plus/theme-chalk",
    //       dest: "./",
    //     },
    //     {
    //       src: "../../README.md",
    //       dest: "./",
    //     },
    //     {
    //       src: "./es/packages",
    //       dest: "./es",
    //     },
    //   ],
    //   verbose: true,
    // }),
    // clear({
    //   targets: ["es/index.css"],
    //   hook: "closeBundle",
    //   verbose: true,
    // }),
  ],
};
