---
title: TimeSelect 时间选择
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# TimeSelect 时间选择

用于选择或输入日期

## 固定时间点

提供几个固定的时间点供用户选择

:::demo 使用 el-time-select 标签，分别通过`start`、`end`和`step`指定可选的起始时间、结束时间和步长

time-select/basic

:::

## 固定时间范围

若先选择开始时间，则结束时间内备选项的状态会随之改变

:::demo

time-select/time-range

:::

## 属性

| 属性                    | 说明                 | 类型                 | 可选值                     | 默认值         |
| --------------------- | ------------------ | ------------------ | ----------------------- | ----------- |
| model-value / v-model | 选中项绑定值             | string             | —                       | —           |
| disabled              | 禁用状态               | boolean            | —                       | false       |
| editable              | 文本框可输入             | boolean            | —                       | true        |
| clearable             | 是否显示清除按钮           | boolean            | —                       | true        |
| size                  | 输入框尺寸              | string             | large / default / small | default     |
| placeholder           | 非范围选择时的占位内容        | string             | —                       | —           |
| name                  | 原生属性               | string             | —                       | —           |
| prefix-icon           | 自定义前缀图标            | string / Component | —                       | Clock       |
| clear-icon            | 自定义清除当前选择的图标       | string / Component | —                       | CircleClose |
| start                 | 开始时间               | string             | —                       | 09:00       |
| end                   | 结束时间               | string             | —                       | 18:00       |
| step                  | 间隔时间               | string             | —                       | 00:30       |
| min-time              | 最小时间，小于该时间的时间段将被禁用 | string             | —                       | 00:00       |
| max-time              | 最大时间，大于该时间的时间段将被禁用 | string             | —                       | —           |

## 事件

| 事件名    | 说明                | 回调参数      |
| ------ | ----------------- | --------- |
| change | 用户确认选定的值时触发       | val，组件绑定值 |
| blur   | 在组件 Input 失去焦点时触发 | 组件实例      |
| focus  | 在组件 Input 获得焦点时触发 | 组件实例      |

## 方法

| 方法名   | 说明           | 参数 |
| ----- | ------------ | -- |
| focus | 使 input 获取焦点 | —  |
| blur  | 使 input 失去焦点 | —  |
