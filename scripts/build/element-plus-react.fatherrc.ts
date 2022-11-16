import { defineConfig } from 'father'
import path from 'path'

export default defineConfig({
  extends: './scripts/build/.fatherrc.base.ts',
  cjs: {
    input: 'packages/element-plus-react',
    output: 'packages/element-plus-react/lib/element-plus-react',
    ignores: [
      'packages/element-plus-react/package.json',
      'packages/element-plus-react/es/**',
      'packages/element-plus-react/lib/**',
      'packages/element-plus-react/theme-chalk/**']
  },
  esm: {
    input: 'packages/element-plus-react',
    output: 'packages/element-plus-react/es/element-plus-react',
    ignores: [
      'packages/element-plus-react/package.json',
      'packages/element-plus-react/es/**',
      'packages/element-plus-react/lib/**',
      'packages/element-plus-react/theme-chalk/**']
  }
})