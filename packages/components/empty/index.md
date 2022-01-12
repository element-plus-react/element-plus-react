---
title: Empty 空状态
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Empty 空状态

空状态时的占位提示。

## 基础用法

:::demo

empty/basic-usage

:::

## 自定义图片

通过设置 `image` 属性传入图片 URL。

:::demo

empty/custom-image

:::

## 图片尺寸

Use `image-size` prop to control image size.

:::demo

empty/image-size

:::

## Bottom content

使用默认插槽可在底部插入内容。

:::demo

empty/bottom-content

:::

## Empty 属性

| 属性          | 说明       | 类型     | 可选值 | 默认值 |
| ----------- | -------- | ------ | --- | --- |
| image       | 图片地址     | string | —   | —   |
| image-size  | 图片大小（宽度） | number | —   | —   |
| description | 说明       | string | —   | —   |

## Empty 插槽

| 插槽名         | 说明      |
| ----------- | ------- |
| default     | 自定义底部内容 |
| image       | 自定义图片   |
| description | 自定义描述文字 |
