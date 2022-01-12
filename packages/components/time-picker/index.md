---
title: TimePicker 时间选择器
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# TimePicker 时间选择器

用于选择或输入日期

## 任意时间点

可以选择任意时间

:::demo 使用 el-time-picker 标签，通过 `disabledHours` `disabledMinutes` 和 `disabledSeconds` 限制可选时间范围。 提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。

time-picker/basic

:::

## 任意时间范围

可选择任意的时间范围

:::demo 添加 `is-range` 属性即可选择时间范围， 同样支持 `arrow-control` 属性。

time-picker/range

:::

## 属性

| 属性                    | 说明                                                      | 类型                                     | 可选值                                                                                 | 默认值         |
| --------------------- | ------------------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------- | ----------- |
| model-value / v-model | 选中项绑定值                                                  | Date                                   | —                                                                                   | —           |
| readonly              | 完全只读                                                    | boolean                                | —                                                                                   | false       |
| disabled              | 禁用                                                      | boolean                                | —                                                                                   | false       |
| editable              | 文本框可输入                                                  | boolean                                | —                                                                                   | true        |
| clearable             | 是否显示清除按钮                                                | boolean                                | —                                                                                   | true        |
| size                  | 输入框尺寸                                                   | string                                 | large / default / small                                                             | —           |
| placeholder           | 非范围选择时的占位内容                                             | string                                 | —                                                                                   | —           |
| start-placeholder     | 范围选择时开始日期的占位内容                                          | string                                 | —                                                                                   | —           |
| end-placeholder       | 范围选择时结束日期的占位内容                                          | string                                 | —                                                                                   | —           |
| is-range              | 是否为时间范围选择                                               | boolean                                | —                                                                                   | false       |
| arrow-control         | 是否使用箭头进行时间选择                                            | boolean                                | —                                                                                   | false       |
| align                 | 对齐方式                                                    | left / center / right                  | left                                                                                |             |
| popper-class          | TimePicker 下拉框的类名                                       | string                                 | —                                                                                   | —           |
| range-separator       | 选择范围时的分隔符                                               | string                                 | —                                                                                   | '-'         |
| format                | 显示在输入框中的格式                                              | string                                 | 请查看 [date formats](/en-US/component/date-picker#date-formats)                       | HH:mm:ss    |
| default-value         | 可选，选择器打开时默认显示的时间                                        | Date(TimePicker) / string(TimeSelect)  | 可被`new Date()`解析(TimePicker) / 可选值(TimeSelect)                                      | —           |
| id                    | same as `id` in native input                            | string / array(string)                 | String `id="my-time"` or array `:id="['my-range-start', 'my-range-end']"` for range | -           |
| name                  | same as `name` in native input                          | string                                 | —                                                                                   | —           |
| prefix-icon           | Custom prefix icon component                            | string / Component                     | —                                                                                   | Clock       |
| clear-icon            | Custom clear icon component                             | string / Component                     | —                                                                                   | CircleClose |
| disabled-hours        | To specify the array of hours that cannot be selected   | function                               | —                                                                                   | —           |
| disabled-minutes      | To specify the array of minutes that cannot be selected | function(selectedHour)                 | —                                                                                   | —           |
| disabled-seconds      | To specify the array of seconds that cannot be selected | function(selectedHour, selectedMinute) | —                                                                                   | —           |

## 事件

| 事件名    | 说明                | 回调参数      |
| ------ | ----------------- | --------- |
| change | 用户确认选定的值时触发       | val，组件绑定值 |
| blur   | 在组件 Input 失去焦点时触发 | 组件实例      |
| focus  | 在组件 Input 获得焦点时触发 | 组件实例      |

## 方法

| 方法名   | 说明                       | 参数 |
| ----- | ------------------------ | -- |
| focus | 使 input 获取焦点             | —  |
| blur  | blur the Input component | —  |
