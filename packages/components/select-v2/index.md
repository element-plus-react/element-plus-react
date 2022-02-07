---
title: Virtualized Select 虚拟化选择器
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# <ElBadge value="beta">Select V2 虚拟列表选择器</ElBadge>

:::tip

这个组件目前在测试当中，如果在使用中发现任何漏洞和问题，请在[ Github](https://github.com/element-plus/element-plus/issues)中提交 issue 以便我们进行处理。

:::

## 背景

在数据量爆发的今天，很多时候一个选择器可能从服务器加载非常多的数据，然而浏览器在一次性把这些数据渲染到页面上的时候会出现卡顿甚至是崩溃的情况，所以虚拟化技术应运而生， 为了更好的用户体验和更好的使用体验，我们决定添加这个组件。

## 基础用法

适用广泛的基础选择器

:::demo

select-v2/basic-usage

:::

## 多选

最基础的多选选择器

:::demo

select-v2/multiple

:::

## 隐藏多余标签的多选

:::demo

select-v2/hide-extra-tags

:::

## 可过滤的多选

当选项太多时，你可以使用 `filterable` 选项来启用过滤功能来找到所需的选项

:::demo

select-v2/filterable

:::

## 禁用选择器本身或选项

你可以选择禁用 Select 或者 Select 的 某个选项

:::demo

select-v2/disabled

:::

## 给选项进行分组

我们可以为选项分组，只需要和下面这个例子一样便可。

:::demo

select-v2/grouping

:::

## 自定义选项的渲染模板

我们也可以通过自己自定义模板来渲染自己想要的选项内容。

:::demo

select-v2/customized-option

:::

## 一键清除

一键删除所有的选项（也可适用于单选）

:::demo

select-v2/clearable

:::

## 创建临时选项

可以创建并选中选项中不存在的条目

:::demo 通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 `allow-create` 正确的工作， `filterable` 的值必须为 `true`.

select-v2/allow-create

:::

## 远程搜索

从服务器搜索数据，输入关键字进行查找

:::demo 为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。

select-v2/remote-search

:::

## SelectV2 属性

| 属性                    | 说明                                                        | 类型                                 | 可选值                 | 默认值           |
| --------------------- | --------------------------------------------------------- | ---------------------------------- | ------------------- | ------------- |
| model-value / v-model | 绑定值                                                       | string / number / boolean / object | —                   | —             |
| multiple              | 是否多选                                                      | boolean                            | —                   | false         |
| disabled              | 是否禁用                                                      | boolean                            | —                   | false         |
| value-key             | 作为 value 唯一标识的键名，绑定值为对象类型时必填                              | string                             | —                   | value         |
| size                  | 输入框尺寸                                                     | string                             | large/default/small | default       |
| clearable             | 是否可以清空选项                                                  | boolean                            | —                   | false         |
| collapse-tags         | 多选时是否将选中值按文字的形式展示                                         | boolean                            | —                   | false         |
| multiple-limit        | 多选时用户最多可以选择的项目数， 为 0 则不限制                                 | number                             | —                   | 0             |
| name                  | 选择器的输入框的原生 name 属性                                        | string                             | —                   | —             |
| autocomplete          | 选择器的输入框的原生 autocomplete 属性                                | string                             | —                   | off           |
| placeholder           | 占位符                                                       | string                             | —                   | Please select |
| filterable            | 是否可搜索                                                     | boolean                            | —                   | false         |
| allow-create          | 是否允许用户创建新条目， 只有当 `filterable` 设置为 true 时才会生效。             | boolean                            | —                   | false         |
| no-data-text          | 选项为空时显示的文字，也可以使用 empty 插槽自定义该内容                           | string                             | —                   | No Data       |
| popper-class          | 下拉菜单的类名                                                   | string                             | —                   | —             |
| popper-append-to-body | 是否将弹出框插入至 body 元素。 在弹出框的定位出现问题时，可将该属性设置为 false            | boolean                            | -                   | false         |
| popper-options        | [popper.js](https://popper.js.org/documentation.html) 的参数 | object                             | -                   | -             |
| automatic-dropdown    | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单                        | boolean                            | -                   | false         |
| clear-icon            | 自定义清除图标                                                   | string / Component                 | —                   | CircleClose   |
| height                | 下拉菜单的高度，每一个子选项的高度是 34px                                   | number                             | -                   | 170px         |
| scrollbar-always-on   | 控制是否总是展示滚动条                                               | boolean                            | -                   | false         |

<span style="display: none;">
<!-- | no-match-text | 搜索条件无匹配时显示的文字，也可以使用`#empty`设置 | string | — | 无匹配数据 | -->
<!-- | reserve-keyword | 多选且可搜索时，是否在选中一个Option后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean | - | false |
| clear-icon | 自定义清空图标的类名 | string / component | — | CircleClose |
| allow-create | 是否允许用户创建新条目，需配合 `filterable` 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 | -->
</span>

## SelectV2 事件

| 事件名            | 说明                   | 回调参数                     |
| -------------- | -------------------- | ------------------------ |
| change         | 选中值发生变化时触发           | val，目前的选中值               |
| visible-change | 下拉框出现/隐藏时触发          | val，出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除tag时触发        | val，移除的tag值              |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                        |
| blur           | 当选择器的输入框失去焦点时触发      | (event: FocusEvent)      |
| focus          | 当选择器的输入框获得焦点时触发      | (event: FocusEvent)      |

## SelectV2 插槽

| 插槽名     | 说明            |
| ------- | ------------- |
| default | 自定义 Option 模板 |
| empty   | 没有选项时的渲染模板    |

<!-- | prefix  | Select 组件头部内容 | -->
