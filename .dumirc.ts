import { defineConfig } from 'dumi';

export default defineConfig({
  alias: {
    'element-plus-react': 'element-plus-react/src/index.ts',
    '@element-plus/components': './packages/components/src',
    '@element-plus/utils': './packages/utils/src',
    '@element-plus/hooks': './packages/hooks/src',
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
    atomDirs: [{ type: 'components', dir: './packages/components/src' }],
  },
});
