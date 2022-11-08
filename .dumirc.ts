import { defineConfig } from 'dumi';
import * as path from "path";

export default defineConfig({
  alias: {
    'element-plus-react': 'element-plus-react/index.ts'
  },
  mfsu: false,
  themeConfig: {
    name: 'Element Plus React',
    // nav: [
    //   {
    //     title: 'Github',
    //     link: 'https://github.com/element-plus-react/element-plus-react',
    //   },
    // ],
  },
  hash: true,
  base: process.env.NODE_ENV === 'production' ? '/element-plus-react/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/element-plus-react/' : '/',
  outputPath: 'dist',
  resolve: {
    atomDirs: [{ type: 'component', dir: './packages/components' }],
  },
});
