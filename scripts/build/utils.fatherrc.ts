import { defineConfig } from 'father'
import path from 'path'

export default defineConfig({
  extends: './scripts/build/.fatherrc.base.ts',
  cjs: {
    input: 'packages/utils',
    output: 'packages/element-plus-react/lib/utils',
    ignores: ['packages/utils/package.json']
  },
  esm: {
    input: 'packages/utils',
    output: 'packages/element-plus-react/es/utils',
    ignores: ['packages/utils/package.json']
  }
})