import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import jsx from 'acorn-jsx';
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { terser } from 'rollup-plugin-terser'


export default {
  input: "./index.ts",
  output: [
    {
      file: './dist/index.js',
      format: 'umd',
      name: 'ElementPlusReact',
      global:{
        react: 'React',
        lodash: '_',
      },
    },
    {
      file: './es/element-plus-react.js',
      format: 'es',
      global:{
        react: 'React',
        lodash: '_',
      },
    },
    {
      file: './cjs/element-plus-react.js',
      format: 'cjs',
      global:{
        react: 'React',
        lodash: '_',
      },
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins:[
    typescript({jsx:'preserve'}),
    resolve(),
    commonjs(),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: '**/node_modules/**',
    }),
    postcss({
      plugins: [
        autoprefixer(),
        cssnano(),
      ],
      // extract: 'css/index.css',
    }),
    // terser(),
  ],
  external:[
    'react',
    'lodash',
  ],
}
