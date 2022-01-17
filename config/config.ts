import { defineConfig } from 'dumi'
import * as path from "path";

export default defineConfig({
  title: 'Element Plus React',
  mode: 'site',
  hash: true,
  dynamicImport: {},
  base: process.env.NODE_ENV === 'production' ? '/element-plus-react/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/element-plus-react/' : '/',
  outputPath: 'dist',
  alias: {
    'element-plus-react': path.resolve(__dirname,'../src'),
  },
  resolve: {
    includes: ['docs', 'src'],
  },
  sass: {
    sassOptions: {},
  },
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/element-plus-react/element-plus-react',
    },
  ],
})
