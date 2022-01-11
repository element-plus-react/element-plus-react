---
title: 快速开始
order: 4
nav:
  title: 指南
  path: /guide
group:
  title: 基础
---

# 快速开始

本节将介绍如何在项目中使用 Element Plus。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

#### Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

### 按需导入

您需要使用额外的插件来导入要使用的组件。

#### 自动导入 <el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">推荐</el-tag>

First you need to install `unplugin-vue-components` and `unplugin-auto-import`.

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

Then add the code below into your `Vite` or `Webpack` config file.

##### Vite

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

##### Webpack

```ts
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

For more bundlers ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) and configs please reference [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) and [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install).

### Manually import

Element Plus 提供了基于 ES Module 开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。

我们提供了对应的插件 [Element Plus Vue Cli plugin](https://github.com/element-plus/vue-cli-plugin-element-plus)。 使用 [vue-cli](https://cli.vuejs.org/)，您可以快速搭建一个基于 Element Plus 的项目。

> App.vue

```html
<template>
  <el-button>I am ElButton</el-button>
</template>
<script>
  import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
</script>
```

```ts
// vite.config.ts
import ElementPlus from 'unplugin-element-plus/vite'

export default {
  plugins: [ElementPlus()],
}
```

:::warning

You need to manually import the styles if you're using `unplugin-element-plus` and only used the component API.

Example:

```ts
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
```

:::

## 快捷搭建项目模板

### Vue CLI

We prepared a plugin [Element Plus VueCLI plugin](https://github.com/element-plus/vue-cli-plugin-element-plus). For [vue-cli](https://cli.vuejs.org/), you can setup a project based on Element Plus easily.

### Using Starter Kit

We provide a general [Project Template](https://github.com/element-plus/element-plus-starter), also a [Vite Template](https://github.com/element-plus/element-plus-vite-starter). For Laravel users we have a [Laravel Template](https://github.com/element-plus/element-plus-in-laravel-starter).

## 全局配置

When registering Element Plus, you can pass a global config object with `size` and `zIndex` to set the default `size` for form components, and `zIndex` for popup components, the default value for `zIndex` is `2000`.

Full import:

```ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
```

On-demand:

```vue
<template>
  <el-config-provider :size="size" :zIndex="zIndex">
    <app />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>
```

## 使用 Nuxt.js

We can also use [Nuxt.js](https://nuxtjs.org)：

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## 开始使用

You can bootstrap your project from now on. For each components usage, please refer to the individual component documentation.
