---
title: DateTimePicker 日期时间选择器
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# DateTimePicker 日期时间选择器

在同一个选择器里选择日期和时间

:::tip

日期时间选择器来自日期选择器和时间选择器的组合。 关于属性的更详细解释，请参阅日期选择器和时间选择器。

:::

<style lang="scss">
.example-showcase  {
  .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color-base);
    flex: 1;
    &:last-child {
      border-right: none;
    }
  }

  .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>

## 日期和时间点

:::demo 设置 `type` 为 `datetimerange` 即可选择日期和时间范围。 快捷方式的使用方法与 Date Picker 相同。

datetime-picker/date-and-time

:::

## DateTime Formats

Use `format` to control displayed text's format in the input box. Use `value-format` to control binding value's format.

By default, the component accepts and emits a `Date` object.

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

:::warning

Pay attention to capitalization

:::

:::demo

datetime-picker/date-and-time-formats

:::

## Date and time range

:::demo You can select date and time range by setting `type` to `datetimerange`.

datetime-picker/date-and-time-range

:::

## Default time value for start date and end date

:::demo When picking date range on the date panel with type `datetimerange`, `00:00:00` will be used as the default time value for start and end date. We can control it with the `default-time` attribute. `default-time` accepts an array of up to two Date objects. The first item controls time value of the start date and the second item controls time value of the end date.

datetime-picker/default-time

:::

## Attributes

| 属性                    | 说明                                                                                                    | 类型                                                | 可选值                                                                                          | 默认值                 |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------- |
| model-value / v-model | 选中项绑定值                                                                                                | date(DateTimePicker) / array(DateTimeRangePicker) | —                                                                                            | —                   |
| readonly              | 只读                                                                                                    | boolean                                           | —                                                                                            | false               |
| disabled              | 禁用                                                                                                    | boolean                                           | —                                                                                            | false               |
| editable              | 文本框可输入                                                                                                | boolean                                           | —                                                                                            | true                |
| clearable             | 是否显示清除按钮                                                                                              | boolean                                           | —                                                                                            | true                |
| size                  | 输入框尺寸                                                                                                 | string                                            | large/default/small                                                                          | default             |
| placeholder           | 非范围选择时的占位内容                                                                                           | string                                            | —                                                                                            | —                   |
| start-placeholder     | 范围选择时开始日期的占位内容                                                                                        | string                                            | —                                                                                            | —                   |
| end-placeholder       | 范围选择时结束日期的占位内容                                                                                        | string                                            | —                                                                                            | —                   |
| time-arrow-control    | whether to pick time using arrow buttons                                                              | boolean                                           | —                                                                                            | false               |
| type                  | 显示类型                                                                                                  | string                                            | year/month/date/datetime/ week/datetimerange/daterange                                       | date                |
| format                | 显示在输入框中的格式                                                                                            | string                                            | see [date formats](/en-US/component/date-picker#date-formats)                                | YYYY-MM-DD HH:mm:ss |
| popper-class          | DateTimePicker 下拉框的类名                                                                                 | string                                            | —                                                                                            | —                   |
| range-separator       | 选择范围时的分隔符                                                                                             | string                                            | -                                                                                            | '-'                 |
| default-value         | 可选，选择器打开时默认显示的时间                                                                                      | Date                                              | 可被`new Date()`解析的所有值                                                                         | —                   |
| default-time          | 选中日期后的默认具体时刻                                                                                          | 若为非时间范围: Date / 若为时间范围: Date[]                    | 非范围选择时：Date 对象；范围选择时：数组，长度为 2，每项值为 Date 对象，第一项指定开始日期的时刻，第二项指定结束日期的时刻。 不指定会使用时刻 `00:00:00`    | —                   |
| value-format          | optional, format of binding value. If not specified, the binding value will be a Date object          | string                                            | see [date formats](https://day.js.org/docs/en/display/format)                                | —                   |
| id                    | same as `id` in native input                                                                          | string / array(string)                            | String `id="my-datetime"` or array `:id="['my-range-start', 'my-range-end']"` for date range | -                   |
| name                  | same as `name` in native input                                                                        | string                                            | —                                                                                            | —                   |
| unlink-panels         | unllink two date-panels in range-picker                                                               | boolean                                           | —                                                                                            | false               |
| prefix-icon           | Custom prefix icon component                                                                          | string                                            | —                                                                                            | Date                |
| clear-icon            | Custom clear icon component                                                                           | string                                            | —                                                                                            | CircleClose         |
| shortcuts             | an object array to set shortcut options                                                               | object[{ text: string, value: date / function }]  | —                                                                                            | —                   |
| disabledDate          | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | function                                          | —                                                                                            | —                   |
| cellClassName         | set custom className                                                                                  | Function(Date)                                    | —                                                                                            | —                   |

## Events

| 事件名             | 说明                                                            | 回调参数         |
| --------------- | ------------------------------------------------------------- | ------------ |
| change          | 用户确认选定的值时触发                                                   | value        |
| blur            | 在组件 Input 失去焦点时触发                                             | instance     |
| focus           | 在组件 Input 获得焦点时触发                                             | instance     |
| calendar-change | 如果用户没有选择日期，那默认展示当前日的月份。 选中日历日期后会执行的回调，只有当 `datetimerange` 才生效 | [Date, Date] |

## Methods

| 方法名   | 说明           | 参数 |
| ----- | ------------ | -- |
| focus | 使 input 获取焦点 | —  |
