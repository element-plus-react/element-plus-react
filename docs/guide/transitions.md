---
title: 内置过渡动画
order: 3
nav:
  title: 指南
  path: /guide
group:
  title: 进阶
---

# 内置过渡动画

Element Plus 内应用在部分组件的过渡动画，你也可以直接使用。 在使用之前请阅读 [transition 组件文档](https://cn.vuejs.org/v2/api/#transition)。

## Fade 淡入淡出

:::demo 提供 `el-fade-in-linear` 和 `el-fade-in` 两种效果。

transition/fade

:::

## Zoom 缩放

:::demo 提供 `el-zoom-in-center`，`el-zoom-in-top` 和 `el-zoom-in-bottom` 三种效果。

transition/zoom

:::

## Collapse 折叠面板

使用 `el-collapse-transition` 组件实现折叠展开效果。

:::demo

transition/collapse

:::

## 按需导入

```ts
// collapse
import { ElCollapseTransition } from 'element-plus'
// fade/zoom
import 'element-plus/lib/theme-chalk/base.css'
import App from './App.vue'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
```
