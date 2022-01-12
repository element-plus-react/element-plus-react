---
title: Popconfirm 气泡确认框
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Popconfirm 气泡确认框

点击某个元素弹出一个简单的气泡确认框

## 基础用法

Popconfirm 的属性与 Popover 很类似， 因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。

:::demo 在 Popconfirm 中，只有 `title` 属性可用，`content` 属性不会被展示。

popconfirm/basic-usage

:::

## 自定义弹出框的内容

可以在 Popconfirm 中自定义内容。

:::demo

popconfirm/customize

:::

## 多种让 Popconfirm 出现的方法

点击按钮触发事件

:::demo

popconfirm/trigger-event

:::

## 属性

| 属性                | 说明        | 类型                 | 可选值 | 默认值            |
| ----------------- | --------- | ------------------ | --- | -------------- |
| title             | 标题        | String             | —   | —              |
| confirmButtonText | 确认按钮文字    | String             | —   | —              |
| cancelButtonText  | 取消按钮文字    | String             | —   | —              |
| confirmButtonType | 确认按钮类型    | String             | —   | Primary        |
| cancelButtonType  | 取消按钮类型    | String             | —   | Text           |
| icon              | 自定义图标     | String / Component | —   | QuestionFilled |
| icon-color        | Icon 颜色   | String             | —   | #f90           |
| hide-icon         | 是否隐藏 Icon | Boolean            | —   | false          |

## 插槽

| 插槽名       | 说明                        |
| --------- | ------------------------- |
| reference | 触发 Popconfirm 显示的 HTML 元素 |

## 事件

| 事件名     | 说明        | 回调参数 |
| ------- | --------- | ---- |
| confirm | 点击确认按钮时触发 | —    |
| cancel  | 点击取消按钮时触发 | —    |
