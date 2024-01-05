---
title: Statistic 统计组件
order: 22
nav:
  title: 组件
  path: /components
group:
  title: Data 数据展示
  order: 4
---
# Statistic 统计组件

显示统计数据。

## 基础用法

<code src="./demos/basic.tsx"  title=" " description="用于突出某个或某组数字时，如统计数值、金额、排名等，数值和标题前后都可以加icon、单位等元素。 可以使用 [vueuse](https://vueuse.org/core/useTransition/) 实现数值的变化动效"></code>

## 倒计时
  
<code src="./demos/countdown.tsx" title=" " description="倒计时组件，支持添加其他组件来控制。"></code>

:::info
在格式化过程中，建议在天数范围内
:::

## 统计卡片

<code src="./demos/card.tsx" title=" " description="卡片式用法展示，可以自由组合"></code>

## Statistic API

### Statistic Attributes

| Attribute         | 描述       | 类型                                                                    | 默认值 |
| ----------------- | -------- | --------------------------------------------------------------------- | --- |
| value             | 数字内容     | ^[number]                                                             | 0   |
| decimal-separator | 设置小数点符号  | ^[string]                                                             | .   |
| formatter         | 自定义数字格式化 | ^[Function]`(value: number) => string \| number`                  | —   |
| group-separator   | 设置千分位标识符 | ^[string]                                                             | ,   |
| precision         | 数字精度     | ^[number]                                                             | 0   |
| prefix            | 设置数字的前缀  | ^[string]                                                             | —   |
| suffix            | 设置数字的后缀  | ^[string]                                                             | —   |
| title             | 数字标题     | ^[string]                                                             | —   |
| value-style       | 数字样式     | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —   |

### Statistic 插槽

| 插槽名    | 详情    |
| ------ | ----- |
| prefix | 数字区之前 |
| suffix | 数字区之后 |
| title  | 数字标题  |

### Statistic Exposes

| 名称           | 描述    | 类型                                      |
| ------------ | ----- | --------------------------------------- |
| displayValue | 当前显示值 | ^[object]`Ref<string \| number>` |

## Countdown API

### Countdown 属性

| 属性          | 详情       | 类型                                                                    | 默认值      |
| ----------- | -------- | --------------------------------------------------------------------- | -------- |
| value       | 目标时间     | ^[number] / ^[Dayjs]                                                  | —        |
| format      | 格式化倒计时   | ^[string]                                                             | HH:mm:ss |
| prefix      | 设置倒计时前缀  | ^[string]                                                             | —        |
| suffix      | 设置倒计时的后缀 | ^[string]                                                             | —        |
| title       | 倒计时标题    | ^[string]                                                             | —        |
| value-style | 倒计时值的样式  | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —        |

### Countdown 事件

| 方法     | 描述      | 类型                                      |
| ------ | ------- | --------------------------------------- |
| change | 时间差改变事件 | ^[Function]`(value: number) => void` |
| finish | 倒计时结束事件 | ^[Function]`() => void`              |

### Countdown 插槽

| 事件名    | 描述     |
| ------ | ------ |
| prefix | 倒计时值前缀 |
| suffix | 倒计时后缀  |
| title  | 倒计时标题  |

### Countdown Exposes

| 名称           | 详情    | 类型                           |
| ------------ | ----- | ---------------------------- |
| displayValue | 当前显示值 | ^[object]`Ref<string>` |