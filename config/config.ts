import { defineConfig } from 'dumi';
// import * as path from "path";

export default defineConfig({
  mfsu: false,
  styles: ['https://cdn.jsdelivr.net/npm/element-plus@2.2.19/theme-chalk/index.css'],
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
    // includes: ['docs', 'packages/components'],
  },
});
