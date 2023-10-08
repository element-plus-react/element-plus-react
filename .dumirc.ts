import { defineConfig } from 'dumi';

export default defineConfig({
  alias: {
    'element-plus-react': 'element-plus-react/src',
    '@element-plus/components': '@element-plus/components/src',
    '@element-plus/utils': '@element-plus/utils/src',
    '@element-plus/hooks': '@element-plus/hooks/src',
  },
  // mfsu: false,
  // monorepoRedirect: {},
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
