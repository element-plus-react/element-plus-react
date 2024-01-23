---
title: Alert 提示
order: 1
nav:
  title: 组件
  path: /components
group:
  title: Feedback 反馈组件
  order: 6
---
# Alert 提示

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

<code src="./demos/basic.tsx" desc="Alert 组件提供四种类型，由 `type` 属性指定，默认值为 `info`。"></code>

## 主题

Alert 组件提供了两个不同的主题：`light`和`dark`。

<code src="./demos/theme.tsx" desc="通过设置`effect`属性来改变主题，默认为`light`。"></code>

## 自定义关闭按钮

你可以自定义关闭按钮为文字或其他符号。

<code src="./demos/close-button.tsx" desc="你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。 `closable` 属性决定 Alert 组件是否可关闭， 该属性接受一个 `Boolean`，默认为 `false`。 你可以设置 `close-text` 属性来代替右侧的关闭图标， 需要注意的是 `close-text` 必须是一个字符串。 当 Alert 组件被关闭时会触发 `close` 事件。"></code>

## 为 Alert 设置图标

你可以通过为 Alert 组件添加图标来提高可读性。

<code src="./demos/icon.tsx" desc="通过设置 `show-icon` 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。"></code>

## 使文字居中

使用 `center` 属性来让文字水平居中。

<code src="./demos/center.tsx" ></code>

## 自定义描述文案

为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。

<code src="./demos/description.tsx" desc="除了必填的 `title` 属性外，你可以设置 `description` 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。"></code>

## 如何展示一个含有图标以及辅助性文字的 Alert 组件

<code src="./demos/icon-description.tsx" desc="在最后, 这是一个带有图标和描述的例子。"></code>

## 属性

| 参数         | 说明                    | 类型      | 可选值                        | 默认值   |
| ---------- | --------------------- | ------- | -------------------------- | ----- |
| title      | 标题                    | string  | —                          | —     |
| type       | 类型                    | string  | success/warning/info/error | info  |
| 说明         | 辅助性文字。 也可通过默认 slot 传入 | string  | —                          | —     |
| closable   | 是否可关闭                 | boolean | —                          | true  |
| center     | 文字是否居中                | boolean | —                          | false |
| close-text | 关闭按钮自定义文本             | string  | —                          | —     |
| show-icon  | 是否显示图标                | boolean | —                          | false |
| effect     | 选择提供的主题               | string  | light/dark                 | light |

## 插槽

| 插槽名   | 说明    |
| ----- | ----- |
| —     | 辅助性文字 |
| title | 标题的内容 |

## 事件

| 事件名   | 描述              | 参数 |
| ----- | --------------- | -- |
| close | 关闭 Alert 时触发的事件 | —  |

<style lang="scss">
.example-showcase {
  .el-alert {
    margin: 20px 0 0;
    &:first-child {
      margin: 0
    }
  }
}
</style>
