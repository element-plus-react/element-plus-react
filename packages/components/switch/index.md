---
title: Switch 开关
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

:::demo 绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `active-color` 属性与 `inactive-color` 属性来设置开关的背景色。

switch/basic

:::

## Sizes

:::demo

switch/sizes

:::

## Text description

You can add `active-text` and `inactive-text` attribute to show texts. use `inline-prompt` attribute to control text is displayed inside dot.

:::demo You can add `active-text` and `inactive-text` attribute to show texts.

switch/text-description

:::

## Display custom icons

:::tip

Use the `active-icon` and `active-icon` attribute to add icon. You can pass either string for the component name (registered in advance) or the component itself which is a SVG Vue component. Element Plus has provided a set of icon that you can find at [icon](/en-US/component/icon)

:::

:::demo You can add `active-icon` and `inactive-icon` attribute to show icons. use `inline-prompt` attribute to control icon is displayed inside dot.

switch/custom-icons

:::

## Extended value types

:::demo You can set `active-value` and `inactive-value` attributes. They both receive a `Boolean`, `String` or `Number` typed value.

switch/extended-value-types

:::

## Disabled

:::demo Adding the `disabled` attribute disables Switch.

switch/disabled

:::

## Loading

:::demo Setting the `loading` attribute to `true` indicates a loading state on the Switch.

switch/loading

:::

## prevent switching

:::demo set the `before-change` property, If `false` is returned or a `Promise` is returned and then is rejected, will stop switching.

switch/prevent-switching

:::

## Attributes

| 属性                    | 说明                                                                                                                                              | 类型                        | 可选值                     | 默认值     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------------- | ------- |
| model-value / v-model | 绑定值，必须等于 `active-value` 或 `inactive-value`，默认为 `Boolean` 类型                                                                                     | boolean / string / number | —                       | —       |
| disabled              | 是否禁用                                                                                                                                            | boolean                   | —                       | false   |
| loading               | 是否显示加载中                                                                                                                                         | boolean                   | —                       | false   |
| size                  | size of Switch                                                                                                                                  | string                    | large / default / small | default |
| width                 | width of Switch                                                                                                                                 | number                    | —                       | 40      |
| inline-prompt         | whether icon or text is displayed inside dot, only the first character will be rendered for text                                                | boolean                   | —                       | false   |
| active-icon           | component of the icon displayed when in `on` state, overrides `active-text`                                                                     | string / Component        | —                       | —       |
| inactive-icon         | component of the icon displayed when in `off` state, overrides `inactive-text`                                                                  | string / Component        | —                       | —       |
| active-text           | text displayed when in `on` state                                                                                                               | string                    | —                       | —       |
| inactive-text         | text displayed when in `off` state                                                                                                              | string                    | —                       | —       |
| active-value          | switch value when in `on` state                                                                                                                 | boolean / string / number | —                       | true    |
| inactive-value        | switch value when in `off` state                                                                                                                | boolean / string / number | —                       | false   |
| active-color          | background color when in `on` state                                                                                                             | string                    | —                       | #409EFF |
| inactive-color        | background color when in `off` state                                                                                                            | string                    | —                       | #C0CCDA |
| border-color          | border color of the switch                                                                                                                      | string                    | —                       | —       |
| name                  | input name of Switch                                                                                                                            | string                    | —                       | —       |
| validate-event        | whether to trigger form validation                                                                                                              | boolean                   | —                       | true    |
| before-change         | before-change hook before the switch state changes. If `false` is returned or a `Promise` is returned and then is rejected, will stop switching | function                  | —                       | —       |

## Events

| 事件名    | 说明                  | 回调参数      |
| ------ | ------------------- | --------- |
| change | switch 状态发生变化时的回调函数 | val，新状态的值 |

## Methods

| 方法    | 说明            | 参数 |
| ----- | ------------- | -- |
| focus | 使 Switch 获取焦点 | —  |
