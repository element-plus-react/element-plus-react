---
title: Dialog 对话框
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

<style lang="scss" scoped>
.example-showcase {
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  .full-image {
    width: 100%;
  }
  .el-dialog__wrapper {
    margin: 0;
  }
  .el-select {
    width: 300px;
  }
  .el-input {
    width: 300px;
  }
  .el-button--text {
    margin-right: 15px;
  }
}
</style>

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。 Dialog 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。 `title` 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 `before-close` 的用法。

dialog/basic-usage

:::

:::tip

`before-close` 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 `footer` 具名插槽里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。

:::

## 自定义内容

对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何使用在对话框中添加表单和表格。

:::demo

dialog/customizations

:::

## 嵌套的 Dialog

如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 `append-to-body` 属性。

:::demo 通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地平整它们，呈现一个平级关系。 如果你必须在另一个对话框内排出对话框，将嵌套对话框的 `append-to-body` 设置为真。 并且它将附加到正文而不是其亲节点，所以两个对话框都可以被正确渲染。

dialog/nested-dialog

:::

## 居中布局

对话框的内容可以居中。

:::demo 设置 `center` 为 `true` 中心将水平对话框的标题和页脚。 `center`仅影响标题和底部区域。 Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。 如果需要内容也水平居中，请自行为其添加 CSS。

dialog/centered-content

:::

:::tip

对话框的内容会懒渲染，这意味着你传入的 default 插槽的内容不会已开始就呈现到 DOM 上，直到 Dialog 第一次打开为止。 因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。

:::

## 关闭时销毁 DOM 内容

启用此功能时，default 插槽下的内容将会被 `v-if` 指令销毁。 当您有性能问题时启用此功能。

:::demo 需要注意的是，当这个属性被启用时，Dialog 内并不会有任何的 DOM 节点存在，除了 `overlay`，`header` （如果有）`footer` （如果有）。

dialog/destroy-on-close

:::

:::tip

当 `modal` 的值为 false 时，请一定要确保 `append-to-body` 属性为 **true**，由于 `Dialog` 使用 `position: relative` 定位，当外层的遮罩层被移除时，`Dialog` 则会根据当前 DOM 上的祖先节点来定位，因此可能造成定位问题。

:::

## 属性

| 属性                    | 说明                                                   | 类型                              | 可选值 | 默认值   |
| --------------------- | ---------------------------------------------------- | ------------------------------- | --- | ----- |
| model-value / v-model | 是否显示 Dialog                                          | boolean                         | —   | —     |
| title                 | Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入           | string                          | —   | —     |
| width                 | Dialog 的宽度                                           | string / number                 | —   | 50%   |
| fullscreen            | 是否为全屏 Dialog                                         | boolean                         | —   | false |
| top                   | Dialog CSS 中的 margin-top 值                           | string                          | —   | 15vh  |
| modal                 | 是否需要遮罩层                                              | boolean                         | —   | true  |
| append-to-body        | Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true | boolean                         | —   | false |
| lock-scroll           | 是否在 Dialog 出现时将 body 滚动锁定                            | boolean                         | —   | true  |
| custom-class          | Dialog 的自定义类名                                        | string                          | —   | —     |
| open-delay            | Dialog 打开的延时时间，单位毫秒                                  | number                          | —   | 0     |
| close-delay           | Dialog 关闭的延时时间，单位毫秒                                  | number                          | —   | 0     |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog                             | boolean                         | —   | true  |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog                               | boolean                         | —   | true  |
| show-close            | 是否显示关闭按钮                                             | boolean                         | —   | true  |
| before-close          | 关闭前的回调，会暂停 Dialog 的关闭                                | function(done)，done 用于关闭 Dialog | —   | —     |
| center                | 是否对头部和底部采用居中布局                                       | boolean                         | —   | false |
| destroy-on-close      | 关闭时销毁 Dialog 中的元素                                    | boolean                         | —   | false |

## 插槽

| 插槽名    | 说明              |
| ------ | --------------- |
| —      | Dialog 的内容      |
| title  | Dialog 标题区的内容   |
| footer | Dialog 按钮操作区的内容 |

## 事件

| 事件名    | 说明                | 参数 |
| ------ | ----------------- | -- |
| open   | Dialog 打开的回调      | —  |
| opened | Dialog 打开动画结束时的回调 | —  |
| close  | Dialog 关闭的回调      | —  |
| closed | Dialog 关闭动画结束时的回调 | —  |
