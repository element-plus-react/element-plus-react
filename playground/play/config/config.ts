import { defineConfig } from 'umi';

export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  extraBabelIncludes: ['element-plus-react'],
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: true,
});
