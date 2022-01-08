import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'Element Plus React',
  mode: 'site',
  hash: true,
  base: process.env.NODE_ENV === 'production' ? '/element-plus-react/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/element-plus-react/' : '/',
  outputPath: 'dist',
  resolve:{
    includes: ['docs','components']
  },
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/element-plus-react/element-plus-react',
    },
  ],
})