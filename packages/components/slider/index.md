---
title: Slider 滑块
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Slider 滑块

通过拖动滑块在一个固定区间内进行选择

<style lang="scss">
.slider-demo-block {
  display: flex;
  align-items: center;
  .el-slider {
    margin-top: 0;
    margin-left: 12px;
  }
  .demonstration {
    font-size: 14px;
    color: var(--el-text-color-secondary);
    line-height: 44px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0;
     & + .el-slider {
        flex: 0 0 70%;
    }
  }
}
</style>

## 基础用法

在拖动滑块时，显示当前值

:::demo 通过设置绑定值自定义滑块的初始值

slider/basic-usage

:::

## 离散值

选项可以是离散的

:::demo 改变`step`的值可以改变步长， 通过设置 `show-stops` 属性可以显示间断点

slider/discrete-values

:::

## 带有输入框的滑块

通过输入框设置精确数值

:::demo 设置 `show-input` 属性会在右侧显示一个输入框

slider/slider-with-input-box

:::

## Sizes

:::demo

slider/sizes

:::

## Range selection

Selecting a range of values is supported.

:::demo Setting the `range` attribute activates range mode, where the binding value is an array made up of two boundary values.

slider/range-selection

:::

## Vertical mode

:::demo Setting the `vertical` attribute to `true` enables vertical mode. In vertical mode, the `height` attribute is required.

slider/vertical-mode

:::

## Show marks

:::demo Setting this `marks` attribute can show mark on slider.

slider/show-marks

:::

## Attributes

| 属性                    | 描述                                                                                                       | 类型              | 可选值                     | 默认值     |
| --------------------- | -------------------------------------------------------------------------------------------------------- | --------------- | ----------------------- | ------- |
| model-value / v-model | 选中项绑定值                                                                                                   | number          | —                       | 0       |
| min                   | 最小值                                                                                                      | number          | —                       | 0       |
| max                   | 最大值                                                                                                      | number          | —                       | 100     |
| disabled              | 是否禁用                                                                                                     | boolean         | —                       | false   |
| step                  | 步长                                                                                                       | number          | —                       | 1       |
| show-input            | 是否显示输入框，仅在非范围选择时有效                                                                                       | boolean         | —                       | false   |
| show-input-controls   | 在显示输入框的情况下，是否显示输入框的控制按钮                                                                                  | boolean         | —                       | true    |
| size                  | size of the slider                                                                                       | string          | large / default / small | default |
| input-size            | size of the input box, when set `size`, the default is the value of `size`                               | string          | large / default / small | default |
| show-stops            | whether to display breakpoints                                                                           | boolean         | —                       | false   |
| show-tooltip          | whether to display tooltip value                                                                         | boolean         | —                       | true    |
| format-tooltip        | format to display tooltip value                                                                          | function(value) | —                       | —       |
| range                 | whether to select a range                                                                                | boolean         | —                       | false   |
| vertical              | vertical mode                                                                                            | boolean         | —                       | false   |
| height                | Slider height, required in vertical mode                                                                 | string          | —                       | —       |
| label                 | label for screen reader                                                                                  | string          | —                       | —       |
| debounce              | debounce delay when typing, in milliseconds, works when `show-input` is true                             | number          | —                       | 300     |
| tooltip-class         | custom class name for the tooltip                                                                        | string          | —                       | —       |
| marks                 | marks， type of key must be `number` and must in closed interval `[min, max]`, each mark can custom style | object          | —                       | —       |

## Events

| 事件名    | 说明                        | 参数        |
| ------ | ------------------------- | --------- |
| change | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | val，新状态的值 |
| input  | 数据改变时触发（使用鼠标拖曳时，活动过程实时触发） | val，改变后的值 |
