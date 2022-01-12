---
title: Drawer 抽屉
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Drawer 抽屉

有些时候, `Dialog` 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, `Drawer` 拥有和 `Dialog` 几乎相同的 API, 在 UI 上带来不一样的体验.

:::tip

在 Vue 3 之后的版本 v-model 可以用于任何一个组件，`visible.sync` 已被移除，请使用 `v-model="visibilityBinding"` 来控制抽屉组件的显示和隐藏状态。

:::

<style lang="scss" scoped>
.example-showcase {
  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    form {
      flex: 1;
    }
  }

  &__footer {
    display: flex;
    button {
      flex: 1;
    }
  }
}

.el-drawer__body {
  padding: 20px;
}

</style>

## 基础用法

呼出一个临时的侧边栏，支持上下左右四个方向。

:::demo 你必须像 `Dialog`一样为 `Drawer` 设置 `model-value` 来控制 `Drawer` 的显示与隐藏状态，该属性接受一个 `boolean` 类型。 `Drawer` 包含两部分内容：`title` 和 `body`，其中`title`是一个具名插槽，你既可以通过设置 title 属性来改变 title 的内容，也可以给 Drawer 传入一个具名的插槽 `title` 来改变内容，该属性默认为一个空的字符串；`body` 部分是 `Drawer` 的主要部分，包含了用户自定义的内容，该部分内容可以通过默认插槽来进行控制，详见页面底部插槽部分。 当 `Drawer` 打开时，默认设置是**从右至左**打开 **30%** 浏览器宽度。 你可以通过传入对应的 `direction` 和 `size` 属性来修改这一默认行为。 下面一个示例将展示如何使用 `before-close` API，更多详细用法请参考页面底部的 API 部分。

drawer/basic-usage

:::

## 不添加 Title

当你不需要标题的时候，你可以将标题移除。

:::demo 通过设置 `with-header` 属性为 **false** 来控制是否显示标题。 如果你的应用需要具备可访问性，请务必设置好 `title`。

drawer/no-title

:::

## 自定义内容

就像 `Dialog` 一样，`Drawer` 可以做更多丰富的交互操作。

:::demo

drawer/customization-content

:::

## 多层嵌套

你可以像 `Dialog` 一样拥有多层嵌套的 `Drawer`

:::demo 如果你需要在不同图层中多个抽屉，你必须设置 `append-to-body` 属性到 **true**

drawer/nested-drawer

:::

:::tip

Drawer 内的内容是懒加载的，也就是说在第一次打开 Drawer 之前，你传入的插槽内容是不会被渲染到 DOM 上的，这个功能可以用来优化页面性能。但因此带来的后果是如果你想要对 Drawer 中间的内容进行 DOM API 操纵，例如使用 `ref` 来控制，你应当在 Drawer 的 `open` 事件触发之后来做。

:::

:::tip

Drawer 还提供一个 `destroy-on-close` 的 API，用来控制是否在 Drawer 隐藏之后把 Drawer 的默认插槽内的内容销毁。 当你需要你的 `挂载的` 生命周期每次打开时你可以使用此 API。

:::

## Drawer 属性

| 属性                    | 说明                                                                                      | 类型                              | 可选值                   | 默认值   |
| --------------------- | --------------------------------------------------------------------------------------- | ------------------------------- | --------------------- | ----- |
| model-value / v-model | 是否显示 Drawer                                                                             | boolean                         | —                     | false |
| append-to-body        | Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 **true**                                 | boolean                         | —                     | false |
| lock-scroll           | 是否在 Drawer 出现时将 body 滚动锁定                                                               | boolean                         | —                     | true  |
| before-close          | 关闭前的回调，会暂停 Drawer 的关闭                                                                   | function(done)，done 用于关闭 Drawer | —                     | —     |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Drawer                                                                | boolean                         | —                     | true  |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Drawer                                                                  | boolean                         | —                     | true  |
| open-delay            | Drawer 打开的延时时间，单位毫秒                                                                     | number                          | —                     | 0     |
| close-delay           | Drawer 关闭的延时时间，单位毫秒                                                                     | number                          | —                     | 0     |
| custom-class          | Drawer 的自定义类名                                                                           | string                          | —                     | —     |
| destroy-on-close      | 控制是否在关闭 Drawer 之后将子元素全部销毁                                                               | boolean                         | -                     | false |
| modal                 | 是否需要遮罩层                                                                                 | boolean                         | —                     | true  |
| direction             | Drawer 打开的方向                                                                            | Direction                       | rtl / ltr / ttb / btt | rtl   |
| show-close            | 是否显示关闭按钮                                                                                | boolean                         | —                     | true  |
| size                  | Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以 `number` 类型解释 | number / string                 | -                     | '30%' |
| title                 | Drawer 的标题，也可通过具名 slot （见下表）传入                                                          | string                          | —                     | —     |
| with-header           | 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效              | boolean                         | -                     | true  |
| modal-class           | 遮罩层的自定义类名                                                                               | string                          | -                     | -     |
| z-index               | 设置 z-index                                                                              | number                          | -                     | -     |

## Drawer 插槽

| 插槽名   | 说明            |
| ----- | ------------- |
| —     | Drawer 的内容    |
| title | Drawer 标题区的内容 |

## Drawer 方法

| 名称          | 说明                                       |
| ----------- | ---------------------------------------- |
| handleClose | 用于关闭 Drawer, 该方法会调用传入的 `before-close` 方法 |

## Drawer 事件

| 事件名称   | 说明                | 参数 |
| ------ | ----------------- | -- |
| open   | Drawer 打开的回调      | —  |
| opened | Drawer 打开动画结束时的回调 | —  |
| close  | Drawer 关闭的回调      | —  |
| closed | Drawer 关闭动画结束时的回调 | —  |
