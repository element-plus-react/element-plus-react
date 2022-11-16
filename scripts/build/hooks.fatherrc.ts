import { defineConfig } from 'father'
import path from 'path'

export default defineConfig({
  extends: './scripts/build/.fatherrc.base.ts',
  cjs: {
    input: 'packages/hooks',
    output: 'packages/element-plus-react/lib/hooks',
    ignores: ['packages/hooks/package.json']
  },
  esm: {
    input: 'packages/hooks',
    output: 'packages/element-plus-react/es/hooks',
    ignores: ['packages/hooks/package.json']
  }
})