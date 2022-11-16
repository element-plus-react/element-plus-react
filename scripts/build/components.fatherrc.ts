import { defineConfig } from 'father'
import path from 'path'

export default defineConfig({
  extends: './scripts/build/.fatherrc.base.ts',
  cjs: {
    input: 'packages/components',
    output: 'packages/element-plus-react/lib/components',
    ignores: ['packages/components/package.json']
  },
  esm: {
    input: 'packages/components',
    output: 'packages/element-plus-react/es/components',
    ignores: ['packages/components/package.json']
  }
})