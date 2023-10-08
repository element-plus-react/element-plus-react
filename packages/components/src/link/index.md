---
title: Link 链接
order: 7
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Link 链接

文字超链接

## 基础用法

基础的文字链接用法。

<code src="./demos/basic.tsx" ></code>

## 禁用状态

文字链接不可用状态。

<code src="./demos/disabled.tsx"></code>

## 下划线

文字链接下划线。

<code src="./demos/underline.tsx"></code>

## 图标

带图标的链接

:::info
使用 `icon` 属性来为按钮添加图标。 您可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。 Element Plus 提供了一组图标，您可以在 [icon component](/zh-CN/component/icon)
:::

<code src="./demos/with-icon.tsx"></code>

## 属性

| 属性        | 说明         | 类型                 | 可选值                                         | 默认值     |
| --------- | ---------- | ------------------ | ------------------------------------------- | ------- |
| type      | 类型         | string             | primary / success / warning / danger / info | default |
| underline | 是否下划线      | boolean            | —                                           | true    |
| disabled  | 是否禁用状态     | boolean            | —                                           | false   |
| href      | 原生 href 属性 | string             | —                                           | -       |
| icon      | 图标组件       | string / Component | —                                           | -       |

## 插槽

| 插槽名 | 说明      |
| --- | ------- |
| —   | 自定义默认内容 |
