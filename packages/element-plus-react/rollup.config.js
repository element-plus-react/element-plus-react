import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { terser } from 'rollup-plugin-terser'


export default {
  input: "./index.ts",
  output: [
    {
      file: './umd/element-plus-react.js',
      format: 'umd',
      name: 'myLib',
    },
    {
      file: './es/element-plus-react.js',
      format: 'es',
    },
    {
      file: './cjs/element-plus-react.js',
      format: 'cjs',
    },
  ],
  plugins:[
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    // postcss({
    //   plugins: [
    //     autoprefixer(),
    //     cssnano(),
    //   ],
    //   extract: 'css/index.css',
    // }),
    terser(),
  ],
  external:[
    'react',
  ],
}
