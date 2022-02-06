---
title: Divider 分割线
order: 2
nav:
  title: 组件
  path: /components
group:
  title: Others 其他
  order: 7
---
# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。

<code src="./demos/basic-usage.tsx"></code>

## 设置文案

可以在分割线上自定义文本内容。

<code src="./demos/custom-content.tsx"></code>

## dashed line

You can set the style of divider.

<code src="./demos/line-dashed.tsx"></code>

## Vertical divider

<code src="./demos/vertical-divider.tsx" ></code>

## Divider Attributes

| 属性               | 说明                                        | 类型     | 可选值                                                                               | 默认值        |
| ---------------- | ----------------------------------------- | ------ | --------------------------------------------------------------------------------- | ---------- |
| direction        | 设置分割线方向                                   | string | horizontal / vertical                                                             | horizontal |
| border-style     | Set the style of divider                  | string | [CSS/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid      |
| content-position | customize the content on the divider line | String | left / right / center                                                             | center     |
