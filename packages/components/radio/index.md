---
title: Radio 单选框
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Radio 单选框

在一组备选项中进行单选

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应 Radio `label`属性的值， `label`可以是`String`、`Number` 或 `Boolean`。

radio/basic-usage

:::

## 禁用状态

`disabled` 属性可以用来控制单选框的禁用状态。

:::demo 你只需要为单选框设置 `disabled` 属性就能控制其禁用状态。

radio/disabled

:::

## 单选框组

适用于在多个互斥的选项中选择的场景

:::demo 结合`el-radio-group`元素和子元素`el-radio`可以实现单选组， 为 `el-radio-group` 绑定 `v-model`，再为 每一个 `el-radio` 设置好 `label` 属性即可， 另外，还可以通过 `change` 事件来响应变化，它会传入一个参数 `value` 来表示改变之后的值。

radio/radio-button-group

:::

## 按钮样式

你可以让单选框看起来像一个按钮一样。

:::demo 只需要把 `el-radio` 元素换成 `el-radio-button` 元素即可， 此外，Element Plus 还提供了 `size` 属性用来控制单选框的大小。

radio/button-style

:::

## 带有边框

:::demo 设置 `border` 属性为 true 可以渲染为带有边框的单选框。

radio/with-borders

:::

## Radio 属性

| 属性                    | 说明         | 类型                        | 可选值                    | 默认值   |
| --------------------- | ---------- | ------------------------- | ---------------------- | ----- |
| model-value / v-model | 选中项绑定值     | string / number / boolean | —                      | —     |
| label                 | 单选框对应的值    | string / number / boolean | —                      | —     |
| disabled              | 是否禁用单选框    | boolean                   | —                      | false |
| border                | 是否显示边框     | boolean                   | —                      | false |
| size                  | Radio 的尺寸  | string                    | large / default /small | —     |
| name                  | 原生 name 属性 | string                    | —                      | —     |

## Radio 事件

| 事件名    | 说明          | 回调参数              |
| ------ | ----------- | ----------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

## Radio 插槽

| 插槽名 | 说明      |
| --- | ------- |
| —   | 自定义默认内容 |

## Radio-group 属性

| 属性                    | 说明                      | 类型                        | 可选值                   | 默认值     |
| --------------------- | ----------------------- | ------------------------- | --------------------- | ------- |
| model-value / v-model | 绑定值                     | string / number / boolean | —                     | —       |
| size                  | 单选框组尺寸                  | string                    | large / small / small | default |
| disabled              | 是否禁用                    | boolean                   | —                     | false   |
| text-color            | 按钮形式的 Radio 激活时的文本颜色    | string                    | —                     | #ffffff |
| fill                  | 按钮形式的 Radio 激活时的填充色和边框色 | string                    | —                     | #409EFF |

## Radio-group 事件

| 事件名    | 说明          | 回调参数              |
| ------ | ----------- | ----------------- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

## Radio-group 插槽

| 插槽名 | 说明      | 子标签                  |
| --- | ------- | -------------------- |
| —   | 自定义默认内容 | Radio / Radio-button |

## Radio-button 属性

| 属性       | 说明            | 类型              | 可选值 | 默认值   |
| -------- | ------------- | --------------- | --- | ----- |
| label    | radio 的 value | string / number | —   | —     |
| disabled | 是否禁用          | boolean         | —   | false |
| name     | 原生 name 属性    | string          | —   | —     |

## Radio-button 插槽

| 插槽名 | 说明     |
| --- | ------ |
| —   | 默认插槽内容 |
