---
title: Popover 气泡卡片
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Popover 气泡卡片

## 基础用法

Similar to Tooltip, Popover is also built with `ElPopper`. 因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

:::demo The `trigger` attribute is used to define how popover is triggered: `hover`, `click`, `focus` or `manual`.

popover/basic-usage

:::

## Virtual triggering

Like Tooltip, Popover can be triggered by virtual elements, if your use case includes separate the trigging element and the content element, you should definitely use the mechanism, normally we use `#reference` to place our triggering element, with `triggering-element` API you can set your triggering element anywhere you like, but notice that the triggering element should be an element that accepts `mouse` and `keyboard` event.

:::warning

`v-popover` is about to be deprecated, please use `virtual-ref` as alternative.

:::

:::demo

popover/virtual-triggering

:::

## Rich content

Other components/elements can be nested in popover. Following is an example of nested table.

:::demo replace the `content` attribute with a default `slot`.

popover/nested-information

:::

## Nested operation

Of course, you can nest other operations. It's more light-weight than using a dialog.

:::demo

popover/nested-operation

:::

## Directive

You can still using popover in directive way but this is **not recommended** anymore since this makes your application complicated, you may refer to the virtual triggering for more information.

:::demo

popover/directive-usage

:::

## Attributes

| 属性                        | 说明                                                                                                                                           | 类型              | 可选值                                                                                                       | 默认值                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| trigger                   | 触发方式                                                                                                                                         | string          | click/focus/hover/manual                                                                                  | click                                                   |
| title                     | 标题                                                                                                                                           | string          | —                                                                                                         | —                                                       |
| content                   | 显示的内容，也可以通过 `slot` 传入 DOM                                                                                                                    | string          | —                                                                                                         | —                                                       |
| width                     | 宽度                                                                                                                                           | string / number | —                                                                                                         | 最小宽度 150px                                              |
| placement                 | 出现位置                                                                                                                                         | string          | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                  |
| disabled                  | Popover 是否可用                                                                                                                                 | boolean         | —                                                                                                         | false                                                   |
| visible / v-model:visible | Popover 是否显示                                                                                                                                 | Boolean         | —                                                                                                         | false                                                   |
| offset                    | 出现位置的偏移量                                                                                                                                     | number          | —                                                                                                         | 0                                                       |
| transition                | 定义渐变动画                                                                                                                                       | string          | —                                                                                                         | el-fade-in-linear                                       |
| show-arrow                | 是否显示 Tooltip 箭头， For more info, please refer to [ElPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper) | boolean         | —                                                                                                         | true                                                    |
| popper-options            | [popper.js](https://popper.js.org/docs/v2/) 的参数                                                                                              | object          | 请参考 [popper.js](https://popper.js.org/docs/v2/)                                                           | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class              | 为 popper 添加类名                                                                                                                                | string          | —                                                                                                         | —                                                       |
| show-after                | 延迟出现，单位毫秒                                                                                                                                    | number          | —                                                                                                         | 0                                                       |
| hide-after                | 延迟关闭，单位毫秒                                                                                                                                    | number          | —                                                                                                         | 200                                                     |
| auto-close                | Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏                                                                                                           | number          | —                                                                                                         | 0                                                       |
| tabindex                  | Popover 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)                                         | number          | —                                                                                                         | —                                                       |

## Slots

| 插槽名       | 说明                     |
| --------- | ---------------------- |
| —         | Popover 内嵌 HTML 文本     |
| reference | 触发 Popover 显示的 HTML 元素 |

## Events

| 事件名         | 说明          | 回调参数 |
| ----------- | ----------- | ---- |
| show        | 显示时触发       | —    |
| after-enter | 显示动画播放完毕后触发 | —    |
| hide        | 隐藏时触发       | —    |
| after-leave | 隐藏动画播放完毕后触发 | —    |
