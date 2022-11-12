---
title: Empty 空状态
order: 8
nav:
  title: 组件
  path: /components
group:
  title: Data 数据展示
  order: 4
---
# Empty 空状态

空状态时的占位提示。

## 基础用法

<code src="./demos/basic-usage.tsx" ></code>

## 自定义图片

通过设置 `image` 属性传入图片 URL。

<code src="./demos/custom-image.tsx"></code>

## 图片尺寸

Use `image-size` prop to control image size.

<code src="./demos/image-size.tsx" ></code>

## Bottom content

使用默认插槽可在底部插入内容。

<code src="./demos/bottom-content.tsx"></code>

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
