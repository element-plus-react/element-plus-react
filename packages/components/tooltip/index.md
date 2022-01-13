---
title: Tooltip 文字提示
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

:::demo 使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement`属性值为：`[方向]-[对齐位置]`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

tooltip/basic

:::

## 主题

Tooltip 组件提供了两个不同的主题：`dark`和`light`。

:::tip

要使用自定义主题，您必须知道您的工具提示在哪里渲染， 如果您的工具提示被呈现为根元素，您将需要全局设置css规则。

建议您使用自定义主题并同时显示箭头时不使用线性渐变背景颜色。 因为弹出箭头和内容是两个不同的元素， 弹出箭头的样式需要单独设置， 当它到渐变背景颜色时，会看起来很奇怪。

:::

:::demo 通过设置 `effect` 来修改主题，默认值为 `dark`.

tooltip/theme

:::

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

:::demo 用具名 slot `content`，替代`tooltip`中的`content`属性。

tooltip/rich-content

:::

## 高级扩展

除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

`transition` 属性可以定制显隐的动画效果，默认为`fade-in-linear`。

如果需要关闭 `tooltip` 功能，`disabled` 属性可以满足这个需求， 你只需要将其设置为 `true`。

事实上，Tooltip 是一个基于 [ElPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper) 的扩展，您可以使用 ElPopper 中允许的任何属性。

:::demo

tooltip/advanced-usage

:::

:::tip

Tooltip 内不支持 `router-link` 组件，请使用 `vm.$router.push` 代替。

tooltip 内不支持 disabled form 元素，参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)， 请在 disabled form 元素外层添加一层包裹元素。

:::

## 显示 HTML 内容

内容属性可以设置为 HTML 字符串。

:::warning

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。 因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。

:::

:::demo

tooltip/html-content

:::

## 虚拟触发

有时候我们想把 tooltip 的触发元素放在别的地方，而不需要写在一起，这时候就可以使用虚拟触发。

:::tip

需要注意的是，虚拟触发的 tooltip 是受控组件，因此你必须自己去控制 tooltip 是否显示，**你将无法**通过点击空白处来关闭 tooltip。

:::

:::demo

tooltip/virtual-trigger

:::

## 单例模式

Tooltip 可以作为单例，也就是是说你可以同时有多个触发同一个 tooltip 的触发元素，这个功能是在 `虚拟触发` 的基础上开发的。

:::tip

已知问题：当使用单例模式时，tooltip 的触发元素发生改变的时候可能会发生弹跳。

:::

:::demo

tooltip/singleton

:::

## 受控模式

Tooltip 可以通过`v-model` 来控制它的显示与关闭。

:::demo

tooltip/controlled

:::

## 自定义动画

工具提示可以自定义动画，您可以按照自己的愿望设置所需的动画功能。

:::demo

tooltip/animations

:::

## 属性

<table spaces-before="0">
  <tr>
    <th>
      属性
    </th>

    <th>
      说明
    </th>

    <th>
      类型
    </th>

    <th>
      可选值
    </th>

    <th>
      默认值
    </th>
  </tr>

  <tr>
    <td>
      append-to-body
    </td>

    <td>
      Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true
    </td>

    <td>
      boolean
    </td>

    <td>
      —
    </td>

    <td>
      true
    </td>
  </tr>

  <tr>
    <td>
      effect
    </td>

    <td>
      Tooltip 主题，内置了 <code>dark</code> / <code>light</code> 两种
    </td>

    <td>
      string
    </td>

    <td>
      string
    </td>

    <td>
      dark
    </td>
  </tr>

  <tr>
    <td>
      content
    </td>

    <td>
      显示的内容，也可以通过 <code>slot#content</code> 传入 DOM
    </td>

    <td>
      String
    </td>

    <td>
      —
    </td>

    <td>
      —
    </td>
  </tr>

  <tr>
    <td>
      placement
    </td>

    <td>
      Tooltip 的出现位置
    </td>

    <td>
      string
    </td>

    <td>
      top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
    </td>

    <td>
      bottom
    </td>
  </tr>

  <tr>
    <td>
      model-value / v-model
    </td>

    <td>
      Tooltip 是否可见
    </td>

    <td>
      boolean
    </td>

    <td>
      —
    </td>

    <td>
      false
    </td>
  </tr>

  <tr>
    <td>
      disabled
    </td>

    <td>
      Tooltip 是否禁用
    </td>

    <td>
      boolean
    </td>

    <td>
      —
    </td>

    <td>
      false
    </td>
  </tr>

  <tr>
    <td>
      offset
    </td>

    <td>
      出现位置的偏移量
    </td>

    <td>
      number
    </td>

    <td>
      —
    </td>

    <td>
      0
    </td>
  </tr>

  <tr>
    <td>
      transition
    </td>

    <td>
      过渡函数的名字
    </td>

    <td>
      string
    </td>

    <td>
      —
    </td>

    <td>
      el-fade-in-linear
    </td>
  </tr>

  <tr>
    <td>
      visible-arrow
    </td>

    <td>
      是否显示 Tooltip 箭头， 欲了解更多信息，请检查 <a href="https://github.com/element-plus/element-plus/tree/dev/packages/components/popper">ElPopper</a> 页面
    </td>

    <td>
      boolean
    </td>

    <td>
      —
    </td>

    <td>
      true
    </td>
  </tr>

  <tr>
    <td>
      popper-options
    </td>

    <td>
      <a href="https://popper.js.org/documentation.html">popper.js</a> 参数
    </td>

    <td>
      Object
    </td>

    <td>
      参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档
    </td>

    <td>
      <code>{ boundariesElement: 'body', gpuAcceleration: false }</code>
    </td>
  </tr>

  <tr>
    <td>
      show-after
    </td>

    <td>
      在触发后多久显示内容，单位毫秒
    </td>

    <td>
      number
    </td>

    <td>
      —
    </td>

    <td>
      0
    </td>
  </tr>

  <tr>
    <td>
      hide-after
    </td>

    <td>
      关闭时的延迟
    </td>

    <td>
      number
    </td>

    <td>
      —
    </td>

    <td>
      0
    </td>
  </tr>

  <tr>
    <td>
      auto-close
    </td>

    <td>
      Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏
    </td>

    <td>
      number
    </td>

    <td>
      —
    </td>

    <td>
      0
    </td>
  </tr>

  <tr>
    <td>
      manual
    </td>

    <td>
      已移除，请使用 v-model
    </td>

    <td>
      boolean
    </td>

    <td>
      —
    </td>

    <td>
      false
    </td>
  </tr>

  <tr>
    <td>
      popper-class
    </td>

    <td>
      为 Tooltip 的 popper 添加类名
    </td>

    <td>
      string
    </td>

    <td>
      —
    </td>

    <td>
      —
    </td>
  </tr>

  <tr>
    <td>
      enterable
    </td>

    <td>
      鼠标是否可进入到 tooltip 中
    </td>

    <td>
      Boolean
    </td>

    <td>
      —
    </td>

    <td>
      true
    </td>
  </tr>

  <tr>
    <td>
      tabindex
    </td>

    <td>
      Tooltip 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a>
    </td>

    <td>
      number
    </td>

    <td>
      —
    </td>

    <td>
      0
    </td>
  </tr>

  <tr>
    <td>
      trigger
    </td>

    <td>
      如何触发 Tooltip
    </td>

    <td>
      string
    </td>

    <td>
      hover / click / focus / contextmenu
    </td>

    <td>
      hover
    </td>
  </tr>

  <tr>
    <td>
      <el-space>virtual-triggering <el-tag size="small">v1.3.0</el-tag></el-space>
    </td>

    <td>
      用来标识虚拟触发是否被启用
    </td>

    <td>
      boolean
    </td>

    <td>
      -
    </td>

    <td>
      false
    </td>
  </tr>

  <tr>
    <td>
      <el-space>virtual-ref <el-tag size="small">v1.3.0</el-tag></el-space>
    </td>

    <td>
      标识虚拟触发时的触发元素
    </td>

    <td>
      HTMLElement
    </td>

    <td>
      -
    </td>

    <td>
      -
    </td>
  </tr>
</table>

## Slots

| 插槽名     | 说明                 |
| ------- | ------------------ |
| —       | Tooltip 触发 & 引用的元素 |
| content | 自定义内容              |
