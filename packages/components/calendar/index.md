---
title: Calendar 日历
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Calendar 日历

显示日期

## 基础用法

:::demo 设置 `value` 来指定当前显示的月份。 如果 `value` 未指定，则显示当月。 `value` 支持 `v-model` 双向绑定。

calendar/basic

:::

## 自定义内容

:::demo 通过设置名为 `dateCell` 的 `scoped-slot` 来自定义日历单元格中显示的内容。 在 `scoped-slot` 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。 详情解释参考下方的 API 文档。

calendar/customize

:::

## 范围

:::demo 设置 `range` 属性指定日历的显示范围。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。

calendar/range

:::

## 自定义日历头部

:::demo

calendar/header

:::

## 国际化

由于 Element Plus 的默认语言为英语，如果你需要设置其它的语言，请参考[国际化](/zh-CN/guide/i18n)文档。

要注意的是：日期相关的文字（月份，每一周的第一天等等）也都是通过国际化来配置的。

## 属性

| 属性                    | 说明                                                      | 类型          | 可选值 | 默认值 |
| --------------------- | ------------------------------------------------------- | ----------- | --- | --- |
| model-value / v-model | 选中项绑定值                                                  | Date        | —   | —   |
| range                 | 时间范围，包括开始时间与结束时间。 开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。 | [Date]Array | —   | —   |

## 插槽

| 插槽名      | 说明                                                                                                                                                              | 参数   |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| dateCell | { type, isSelected, day, date }. `type` 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；`isSelected` 标明该日期是否被选中；`day` 是格式化的日期，格式为 yyyy-MM-dd；`date` 是单元格的日期 | data |
