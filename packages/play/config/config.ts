import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  extraBabelIncludes:[
   '../../element-plus-react',
    '../../components',
  ],
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
