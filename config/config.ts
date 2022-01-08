import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'Element Plus React',
  mode: 'site',
  hash: true,
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