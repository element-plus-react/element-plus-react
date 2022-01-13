---
title: Notification 通知
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

:::demo Element Plus 注册了 `$notify` 方法并且它接受一个 Object 作为其参数。 在最简单的情况下，你可以通过设置 `title` 和 `message` 属性来设置通知的标题和正文内容。 默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 `duration` 属性来自定义通知的展示时间。 如果你将它设置为 `0`，那么通知将不会自动关闭。 需要注意的是 `duration` 接收一个 `Number`，单位为毫秒。

notification/basic

:::

## 不同类型的通知

我们提供了四种不同类型的提醒框：success、warning、info 和error。

:::demo Element Plus 为 Notification 组件准备了四种通知类型：`success`, `warning`, `info`, `error`。 他们可以设置 `type` 字段来修改，除上述的四个值之外的值会被忽略。 同时，我们也为 Notification 的各种 type 注册了单独的方法，可以在不传入 `type` 字段的情况下像 `open3` 和 `open4` 那样直接调用。

notification/different-types

:::

## 自定义消息弹出的位置

可以让 Notification 从屏幕四角中的任意一角弹出

:::demo 使用 `position` 属性设置 Notification 的弹出位置， 支持四个选项：`top-right`、`top-left`、`bottom-right` 和 `bottom-left`， 默认为 `top-right`。

notification/positioning

:::

## 有位置偏移的通知栏

能够设置偏移量来使 Notification 偏移默认位置。

:::demo Notification 提供设置偏移量的功能，通过设置 `offset` 字段，可以使弹出的消息距屏幕边缘偏移一段距离。 注意在同一时刻，每一个的 Notification 实例应当具有一个相同的偏移量。

notification/offsetting

:::

## 使用 HTML 片段作为正文内容

`message` 支持传入 HTML 字符串来作为正文内容。

:::demo 将 `dangerouslyUseHTMLString` 属性设置为 true，`message` 属性就会被当作 HTML 片段处理。

notification/raw-html

:::

:::warning

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。

:::

## 隐藏关闭按钮

通知的关闭按钮可以被设置为隐藏。

:::demo 将 ` showClose ` 属性设置为 `false` 即可隐藏关闭按钮。

notification/no-close

:::

## 全局方法

Element Plus 为 `app.config.globalProperties` 添加了全局方法 `$notify`。 因此在 Vue instance 中可以采用本页面中的方式调用 `Notification`。

## 单独引用

```javascript
import { ElNotification } from 'element-plus'
```

你可以在对应的处理函数内调用 `ElNotification(options)` 来呼出通知栏。 我们也提前定义了多个 type 的单独调用方法，如 `ElNotification.success(options)`。 当你需要关闭页面上所有的通知栏的时候，可以调用 `ElNotification.closeAll()` 来关闭所有的实例。

## 配置项

| 属性                       | 说明                                                     | 类型                   | 可选值                                         | 默认值           |
| ------------------------ | ------------------------------------------------------ | -------------------- | ------------------------------------------- | ------------- |
| title                    | 标题                                                     | string               | —                                           | —             |
| message                  | 通知栏正文内容                                                | string/Vue.VNode     | —                                           | —             |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理                             | boolean              | —                                           | false         |
| type                     | 通知的类型                                                  | string               | success/warning/info/error                  | —             |
| icon                     | 自定义图标。 若设置了 `type`，则 `icon` 会被覆盖                       | string / Component   | —                                           | —             |
| custom-class             | 自定义类名                                                  | string               | —                                           | —             |
| duration                 | 显示时间, 单位为毫秒。 值为 0 则不会自动关闭                              | number               | —                                           | 4500          |
| position                 | 自定义弹出位置                                                | string               | top-right/top-left/bottom-right/bottom-left | top-right     |
| show-close               | 是否显示关闭按钮                                               | boolean              | —                                           | true          |
| on-close                 | 关闭时的回调函数                                               | function             | —                                           | —             |
| on-click                 | 点击 Notification 时的回调函数                                 | function             | —                                           | —             |
| offset                   | 相对屏幕顶部的偏移量 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | number               | —                                           | 0             |
| appendTo                 | 设置通知栏在 DOM 中的亲元素                                      | string / HTMLElement | -                                           | document.body |

## 方法

调用 `Notification` 或 `this.$notify` 会返回当前 Notification 的实例。 如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名   | 说明      |
| ----- | ------- |
| close | 关闭当前的通知 |
