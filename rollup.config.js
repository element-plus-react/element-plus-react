import clear from 'rollup-plugin-clear'
// import copy from 'rollup-plugin-copy'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import jsx from 'acorn-jsx';
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

// import { terser } from 'rollup-plugin-terser'

// import pkg from './package.json'

const extensions = ['js','ts','tsx','json']

export default {
  input: "./src/index.ts",
  output: [
    // {
    //   file: pkg.main,
    //   format: 'umd',
    //   name: 'ElementPlusReact',
    //   global: {
    //     react: 'React',
    //     lodash: '_',
    //   },
    // },
    {
      dir: 'es',
      format: 'es',
      preserveModules: true,
      exports: 'named',
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    clear({ targets: ["lib", "es", "dist"] }),
    // copy({
    //   targets: [
    //     {
    //       src: '../../README.md',
    //       dest: './',
    //     },
    //   ],
    //   hook: 'writeBundle',
    //   verbose: true,
    // }),
    typescript({
      jsx: 'preserve' ,
      check: false,
      exclude: ["node_modules", "lib", "es","*/demos/*"],
    }),
    resolve(),
    commonjs(),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: '**/node_modules/**',
      extensions,
    }),
    postcss({
      plugins: [
        autoprefixer(),
        cssnano(),
      ],
      extract: true,
    }),
    // terser(),
  ],
  external: [
    'react',
    'lodash',
    'classnames',
    "@ctrl/tinycolor",
    "@ant-design/icons",
  ],
}
