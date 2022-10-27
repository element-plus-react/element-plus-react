import clear from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import jsx from 'acorn-jsx';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import externals from 'rollup-plugin-node-externals';

// import pkg from './package.json'

const extensions = ['js', 'ts', 'tsx', 'json'];

export default {
  input: './index.ts',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      name: 'ElementPlusReact',
      preserveModules: true,
      exports: 'named',
    },
    {
      dir: 'es',
      format: 'es',
      preserveModules: true,
      exports: 'named',
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    clear({ targets: ['lib', 'es', 'dist'] }),
    externals.externals(),
    typescript({
      jsx: 'preserve',
      check: false,
      exclude: ['node_modules', 'lib', 'es', '*/demos/*'],
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
      plugins: [autoprefixer(), cssnano()],
      extract: true,
    }),
    copy({
      targets: [
        {
          src: '../../node_modules/element-plus/theme-chalk',
          dest: './',
        },
        {
          src: '../../README.md',
          dest: './',
        },
      ],
      verbose: true,
    }),
    clear({
      targets: ['lib/index.css', 'es/index.css'],
      hook: 'closeBundle',
      verbose: true,
    }),
  ],
};
