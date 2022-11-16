import { defineConfig } from 'umi';

export default defineConfig({
  mfsu: false,
  alias: {
    //'element-plus-react': '../../../packages/element-plus-react',
  },
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  extraBabelIncludes: ['element-plus-react'],
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: true,
});
