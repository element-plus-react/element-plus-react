---
title: Backtop 回到顶部
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Backtop 回到顶部

返回页面顶部的操作按钮

## 基础用法

通过滑动来查看容器右下角的按钮

:::demo

backtop/basic

:::

## 自定义内容

显示区域被固定为 40px \* 40px 的区域, 其中的内容可支持自定义。

:::demo

backtop/custom

:::

## 属性

| 属性                | 说明               | 类型     | 可选值 | 默认值 |
| ----------------- | ---------------- | ------ | --- | --- |
| target            | 触发滚动的对象          | string |     |     |
| visibility-height | 滚动高度达到此参数值才出现    | number |     | 200 |
| right             | 控制其显示位置，距离页面右边距  | number |     | 40  |
| bottom            | 控制其显示位置，距离页面底部距离 | number |     | 40  |

## 事件

| 事件名   | 说明        | 回调参数  |
| ----- | --------- | ----- |
| click | 点击按钮触发的事件 | event |

## 插槽

| 插槽名 | 说明      |
| --- | ------- |
| —   | 自定义默认内容 |
