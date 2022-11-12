---
title: Result 结果
order: 13
nav:
  title: 组件
  path: /components
group:
  title: Data 数据展示
  order: 4
---
# Result 结果

用于对用户的操作结果或者异常状态做反馈。

## 基础用法

<code src="./demos/basic-usage.tsx" ></code>

## 自定义内容

<code src="./demos/customized-content.tsx" ></code>

## Result 属性

| 属性        | 说明   | 类型     | 可选值                              | 默认值  |
| --------- | ---- | ------ | -------------------------------- | ---- |
| title     | 标题   | string | —                                | —    |
| sub-title | 二级标题 | string | —                                | —    |
| icon      | 图标类型 | string | success / warning / info / error | info |

## Result 插槽

| 名称       | 说明        |
| -------- | --------- |
| icon     | 自定义图标     |
| title    | 自定义标题     |
| subTitle | 自定义二级标题   |
| extra    | 自定义底部额外区域 |
