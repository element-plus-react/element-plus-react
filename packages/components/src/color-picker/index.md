---
title: ColorPicker 颜色选择器
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# ColorPicker 颜色选择器

用于颜色选择，支持多种格式。

## 基础用法

:::demo 使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。

color-picker/basic

:::

## 选择透明度

:::demo ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色， 要启用 Alpha 选择，只需添加 `show-alpha` 属性。

color-picker/alpha

:::

## 预定义颜色

:::demo ColorPicker 支持预定义颜色

color-picker/predefined-color

:::

## 不同尺寸

:::demo

color-picker/sizes

:::

## 属性

| 属性                    | 说明                      | 类型                 | 可选值                    | 默认值                                                    |
| --------------------- | ----------------------- | ------------------ | ---------------------- | ------------------------------------------------------ |
| model-value / v-model | 选中项绑定值                  | string             | —                      | —                                                      |
| disabled              | 是否禁用                    | boolean            | —                      | false                                                  |
| size                  | 尺寸                      | string             | large / default /small | —                                                      |
| show-alpha            | 是否支持透明度选择               | boolean            | —                      | false                                                  |
| color-format          | 写入 v-model 的颜色的格式       | string             | hsl / hsv / hex / rgb  | hex (当 show-alpha 为 false) / rgb (当 show-alpha 为 true) |
| popper-class          | ColorPicker 下拉菜单自定义图标组件 | string / Component | —                      | —                                                      |
| predefine             | 预定义颜色                   | array              | —                      | —                                                      |

## 事件

| 事件名           | 说明                | 回调参数     |
| ------------- | ----------------- | -------- |
| change        | 当绑定值变化时触发         | 当前值      |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
