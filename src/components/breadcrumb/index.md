---
title: Breadcrumb 面包屑
order: 2
nav:
  title: 组件
  path: /components
group:
  title: Navigation 导航
  order: 6
---
# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

<code src="./demos/basic.tsx" desc="在 `el-breadcrumb` 中使用 `el-breadcrumb-item` 标签表示从首页开始的每一级。 该组件接受一个 `String` 类型的参数 `separator`来作为分隔符。 默认值为 '/'。"></code>

## 图标分隔符

<code src="./demos/icon.tsx" desc="通过设置 `separator-class` 可使用相应的 `iconfont` 作为分隔符，注意这将使 `separator` 失效。"></code>

## Breadcrumb 属性

| 属性              | 说明           | 类型                 | 可选值 | 默认值 |
| --------------- | ------------ | ------------------ | --- | --- |
| separator       | 分隔符          | string             | —   | /   |
| separator-class | 图标分隔符的组件或组件名 | string / Component | —   | -   |

## Breadcrumb 插槽

| 插槽名 | 说明      | 子标签             |
| --- | ------- | --------------- |
| -   | 自定义默认内容 | Breadcrumb Item |

## Breadcrumb Item 属性

| 属性      | 说明                             | 类型            | 可选值 | 默认值   |
| ------- | ------------------------------ | ------------- | --- | ----- |
| to      | 路由跳转目标，同 `vue-router` 的 `to`属性 | string/object | —   | —     |
| replace | 如果设置该属性为 `true`, 导航将不会留下历史记录   | boolean       | —   | false |

## Breadcrumb Item 插槽

| 插槽名 | 说明      |
| --- | ------- |
| —   | 自定义默认内容 |
