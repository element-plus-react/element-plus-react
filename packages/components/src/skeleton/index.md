---
title: Skeleton 骨架屏
order: 14
nav:
  title: 组件
  path: /components
group:
  title: Data 数据展示
  order: 4
---
# Skeleton 骨架屏

在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。

## 基础用法

基础的骨架效果。

<code src="./demos/basic-usage.tsx"></code>

## 更多参数

可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。

<code src="./demos/configurable-rows.tsx"></code>

## 动画效果

我们提供了一个开关标志，表明是否显示加载动画， 调用 `animated` 如果真真是这样，所有的 `el-skeleton` 的子节点将显示动画。

<code src="./demos/animation.tsx"></code>

## 自定义样式

Element Plus 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot `template` 来自己设定模板。

我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。 另外，在构建您自己自定义的骨架时，您应该尽可能更接近于真正的DOM。 避免DOM因高度差而发生抖动。

<code src="./demos/customized-template.tsx"></code>

## 加载状态

当 `Loading` 结束之后，我们往往需要显示真实的 UI， 可以通过 `loading` 的值来控制是否显示加载后的 DOM。 然后通过 具名 Slot `default` 来设置当 loading 结束之后需要展示的 UI。

<code src="./demos/loading-state.tsx"></code>

## 渲染多条数据

大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 UI。 利用 `count` 这个属性就能控制渲染多少条假的数据在页面上

:::tip

请注意, 请尽可能的将 count 的大小保持在最小状态, 即使是假的 UI, DOM 元素多了之后, 照样会引起性能问题, 并且在骨架屏销毁时所消耗的时间也会更长（相对来说）。

:::

<code src="./demos/rendering-with-data.tsx"></code>

## 防止渲染抖动

有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪， 此时为了避免这种情况，就需要通过 `throttle` 属性来避免这个问题。

<code src="./demos/avoiding-rendering-bouncing.tsx"></code>

## Skeleton 属性

| 属性       | 说明                          | 类型      | 可选值          | 默认值   |
| -------- | --------------------------- | ------- | ------------ | ----- |
| animated | 是否使用动画                      | boolean | true / false | false |
| count    | 渲染多少个 template, 建议使用尽可能小的数字 | number  | integer      | 1     |
| loading  | 是否显示加载结束后的 DOM 结构           | boolean | true / false | false |
| rows     | 骨架屏段落数量                     | number  | integer      | 3     |
| throttle | 延迟占位 DOM 渲染的时间, 单位是毫秒       | number  | integer      | 0     |

## Skeleton Item 属性

| 属性      | 说明           | 类型           | 可选值                                                                  | 默认值  |
| ------- | ------------ | ------------ | -------------------------------------------------------------------- | ---- |
| variant | 当前显示的占位元素的样式 | Enum(string) | p / text / h1 / h3 / text / caption / button / image / circle / rect | text |

## Skeleton 插槽

| 插槽名      | 说明              |
| -------- | --------------- |
| default  | 用来展示加载状态结束后的 UI |
| template | 用来展示自定义占位符      |
