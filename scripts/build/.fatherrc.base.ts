import { defineConfig } from 'father'
import path from 'path'

export default defineConfig({
  alias: {
    '@element-plus/components': path.resolve(__dirname, '../../packages/components'),
    '@element-plus/utils': path.resolve(__dirname, '../../packages/utils'),
    '@element-plus/hooks': path.resolve(__dirname, '../../packages/hooks'),
    '@element-plus/theme-chalk': path.resolve(__dirname, '../../../theme-chalk'),
  }
})