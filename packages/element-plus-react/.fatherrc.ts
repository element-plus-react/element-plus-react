import { defineConfig } from 'father';

export default defineConfig({
  extends: '../../scripts/build/.fatherrc.base.ts',
  esm: {
    //input: 'src',
    output: '/es/element-plus-react/src',
  },
});
