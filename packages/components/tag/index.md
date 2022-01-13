---
title: Tag 标签
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Tag 标签

用于标记和选择。

## 基础用法

:::demo 由 `type` 属性来选择 tag 的类型。 也可以通过 `color` 属性来自定义背景色。

tag/basic

:::

## 可移除标签

:::demo 设置 `closable` 属性可以定义一个标签是否可移除。 它接受一个 `Boolean`。 默认的标签移除时会附带渐变动画。 如果不想使用，可以设置 `disable-transitions` 属性，它接受一个 `Boolean`，`true` 为关闭。 当 Tag 被移除时会触发 `close` 事件。

tag/removable

:::

## 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现。

:::demo

tag/editable

:::

## 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo Use attribute `size` to set additional sizes with `large`, `default` or `small`.

tag/sizes

:::

## 主题

Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`。

:::demo 通过设置 `effect` 属性来改变主题，默认为 `light`。

tag/theme

:::

## 可选中的标签

有时候因为业务需求，我们可能会需要用到类似复选框的标签，但是**按钮式的复选框**的样式又不满足需求，此时我们就可以用到 `check-tag`。

:::demo check-tag 的基础使用方法，check-tag 提供的 API 非常简单。

tag/checkable

:::

## 属性

| 属性                  | 说明       | 类型      | 可选值                         | 默认值     |
| ------------------- | -------- | ------- | --------------------------- | ------- |
| type                | 类型       | string  | success/info/warning/danger | —       |
| closable            | 是否可关闭    | boolean | —                           | false   |
| disable-transitions | 是否禁用渐变动画 | boolean | —                           | false   |
| hit                 | 是否有边框描边  | boolean | —                           | false   |
| color               | 背景色      | string  | —                           | —       |
| size                | 尺寸       | string  | large / default /small      | default |
| effect              | 主题       | string  | dark / light / plain        | light   |

## 事件

| 事件名   | 说明            | 参数 |
| ----- | ------------- | -- |
| click | 点击 Tag 时触发的事件 | —  |
| close | 关闭 Tag 时触发的事件 | —  |

## 插槽

| 名称 | 说明      |
| -- | ------- |
| —  | 自定义默认内容 |

## CheckTag 属性

| 属性      | 说明   | 类型      | 可选值        | 默认值 |
| ------- | ---- | ------- | ---------- | --- |
| checked | 是否选中 | boolean | true/false | —   |

## CheckTag 事件

| 事件名    | 说明                  | 参数      |
| ------ | ------------------- | ------- |
| change | 点击 Check Tag 时触发的事件 | checked |

## CheckTag 插槽

| 名称 | 说明      |
| -- | ------- |
| —  | 自定义默认内容 |
