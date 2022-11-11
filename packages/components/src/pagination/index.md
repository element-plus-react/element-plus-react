---
title: Pagination 分页
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Pagination 分页

当数据量过多时，使用分页分解数据。

## 基础用法

:::demo 设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。 `prev`表示上一页，`next`为下一页，`pager`表示页码列表，除此以外还提供了`jumper`和`total`，`size`和特殊的布局符号`->`，`->`后的元素会靠右显示，`jumper`表示跳页元素，`total`表示总条目数，`size`用于设置每页显示的页码数量。

pagination/basic-usage

:::

## 设置最大页码按钮数

:::demo 默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。 通过 `pager-count` 属性可以设置最大页码按钮数。

pagination/number-of-pagers

:::

## 带有背景色的分页

:::demo 设置`background`属性可以为分页按钮添加背景色。

pagination/background-color

:::

## 小型分页

在空间有限的情况下，可以使用简单的小型分页。

:::demo 只需要设置 `small` 属性为 `true` 即可让分页变小。

pagination/small-pagination

:::

## 当只有一页时隐藏分页

当只有一页时，通过设置 `hide-on-single-page` 属性来隐藏分页。

:::demo

pagination/auto-hide-pagination

:::

## 附加功能

根据场景需要，可以添加其他功能模块。

:::demo 此示例是一个完整的用例。 使用了 `size-change` 和 `current-change` 事件来处理页码大小和当前页变动时候触发的事件。 `page-sizes`接受一个整数类型的数组，数组元素为展示的选择每页显示个数的选项，`[100, 200, 300, 400]` 表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。

pagination/more-elements

:::

## 属性

| 属性                   | 说明                                                                                    | 类型       | 可选值                                                                         | 默认值                                    |
| -------------------- | ------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------- | -------------------------------------- |
| small                | 是否使用小型分页样式                                                                            | boolean  | —                                                                           | false                                  |
| background           | 是否为分页按钮添加背景色                                                                          | boolean  | —                                                                           | false                                  |
| page-size            | 每页显示条目个数，支持 v-model 双向绑定                                                              | number   | —                                                                           | 10                                     |
| default-page-size    | 每页显示条目数的初始值                                                                           | number   | -                                                                           | -                                      |
| total                | 总条目数                                                                                  | number   | —                                                                           | —                                      |
| page-count           | 总页数 `total` 和 `page-count` 设置任意一个就可以达到显示页码的功能；如果要支持 `page-sizes` 的更改，则需要使用 `total` 属性 | number   | —                                                                           | —                                      |
| pager-count          | 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠                                                       | number   | 5 ≤ x ≤ 21 的奇数                                                              | 7                                      |
| current-page         | 当前页数，支持 v-model 双向绑定                                                                  | number   | —                                                                           | 1                                      |
| default-current-page | 当前页数的初始值                                                                              | number   | -                                                                           | -                                      |
| layout               | 组件布局，子组件名用逗号分隔                                                                        | string   | `sizes` / `prev` / `pager` / `next` / `jumper` / `->` / `total` / `slot` | 'prev, pager, next, jumper, ->, total' |
| page-sizes           | 每页显示个数选择器的选项设置                                                                        | number[] | —                                                                           | [10, 20, 30, 40, 50, 100]              |
| popper-class         | 每页显示个数选择器的下拉框类名                                                                       | string   | —                                                                           | —                                      |
| prev-text            | 替代图标显示的上一页文字                                                                          | string   | —                                                                           | —                                      |
| next-text            | 替代图标显示的下一页文字                                                                          | string   | —                                                                           | —                                      |
| disabled             | 是否禁用分页                                                                                | boolean  | —                                                                           | false                                  |
| hide-on-single-page  | 只有一页时是否隐藏                                                                             | boolean  | —                                                                           | -                                      |

:::warning

我们现在会检查一些不合理的用法，如果发现分页器未显示，可以核对是否违反以下情形：

- `total` 和 `page-count` 必须传一个，不然组件无法判断总页数；优先使用 `page-count`;
- 如果传入了 `current-page` 必须监听 `current-page` 变更的事件（`onUpdate:currentPage`）；否则分页切换不起作用；
- 如果传入了 `page-size`，且布局包含 page-size 选择器（即 `layout` 包含 `sizes`），必须监听 `page-size` 变更的事件（`onUpdate:pageSize`），否则 `page-size` 切换不起作用；

:::

## 事件

| 事件名            | 说明                     | 参数    |
| -------------- | ---------------------- | ----- |
| size-change    | `pageSize` 改变时触发       | 新每页条数 |
| current-change | `current-change` 改变时触发 | 新当前页  |
| prev-click     | 用户点击上一页按钮改变当前页时触发      | 新当前页  |
| next-click     | 用户点击下一页按钮改变当前页时触发      | 新当前页  |

:::warning

以上事件不推荐使用（但由于兼容的原因仍然支持，在以后的版本中将会被删除）；如果要监听 current-page 和 page-size 的改变，使用 `v-model` 双向绑定是个更好的选择。

:::

## 插槽

| 名称 | 说明                                 |
| -- | ---------------------------------- |
| —  | 自定义内容 设置文案，需要在 `layout` 中列出 `slot` |
