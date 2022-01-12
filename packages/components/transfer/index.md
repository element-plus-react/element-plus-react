---
title: Transfer 穿梭框
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Transfer 穿梭框

## 基础用法

可以对列表标题文案、按钮文案、数据项的渲染函数、列表底部的勾选状态文案、列表底部的内容区等进行自定义。

:::demo 可以使用 `titles`、`button-texts`、`render-content` 和 `format` 属性分别对列表标题文案、按钮文案、数据项的渲染函数和列表顶部的勾选状态文案进行自定义。 并且，数据项的渲染还可以使用 `scoped-slot` 进行自定义。 对于列表底部的内容区，提供了两个具名 slot：`left-footer` 和 `right-footer`。 此外，如果希望某些数据项在初始化时就被勾选，可以使用 `left-default-checked` 和 `right-default-checked` 属性。 最后，本例还展示了 `change` 事件的用法。 注意：由于 jsfiddle 不支持 JSX 语法，所以使用 `render-content` 自定义数据项的例子在 jsfiddle 中无法运行。 但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。

transfer/basic

:::

## 可搜索

默认情况下，Transfer 仅能识别数据项中的 `key`、`label` 和 `disabled` 字段。 如果你的数据的字段名不同，可以使用 `props` 属性为它们设置别名。

:::demo 本例中的数据源没有 `key` 和 `label` 字段，在功能上与它们相同的字段名为 `value` 和 `desc`。 因此可以使用 `props` 属性为 `key` 和 `label` 设置别名。

transfer/prop-alias

:::

## 属性

| 属性                    | 说明                                                                                       | 类型                                | 可选值                       | 默认值                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------- | --------------------------------- | ------------------------- | ------------------------------------------------------------------------- |
| model-value / v-model | 选中项绑定值                                                                                   | array                             | —                         | —                                                                         |
| data                  | Transfer 的数据源                                                                            | array[`{ key, label, disabled }`] | —                         | [ ]                                                                       |
| filterable            | 是否可搜索                                                                                    | boolean                           | —                         | false                                                                     |
| filter-placeholder    | 搜索框占位符                                                                                   | string                            | —                         | Enter keyword                                                             |
| filter-method         | 自定义搜索方法                                                                                  | function                          | —                         | —                                                                         |
| target-order          | 右侧列表元素的排序策略： 若为 `original`，则保持与数据源相同的顺序； 若为 `push`，则新加入的元素排在最后； 若为 `unshift`，则新加入的元素排在最前 | string                            | original / push / unshift | original                                                                  |
| titles                | 自定义列表标题                                                                                  | array                             | —                         | ['List 1', 'List 2']                                                      |
| button-texts          | 自定义按钮文案                                                                                  | array                             | —                         | [ ]                                                                       |
| render-content        | 自定义数据项渲染函数                                                                               | function(h, option)               | —                         | —                                                                         |
| format                | 列表顶部勾选状态文案                                                                               | object`{noChecked, hasChecked}`   | —                         | `{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }` |
| props                 | 数据源的字段别名                                                                                 | object`{key, label, disabled}`    | —                         | —                                                                         |
| left-default-checked  | 初始状态下左侧列表的已勾选项的 key 数组                                                                   | array                             | —                         | [ ]                                                                       |
| right-default-checked | 初始状态下右侧列表的已勾选项的 key 数组                                                                   | array                             | —                         | [ ]                                                                       |

## 插槽

| 插槽名          | 说明                       |
| ------------ | ------------------------ |
| —            | 自定义数据项的内容， 参数为{ option } |
| left-footer  | 左侧列表底部的内容                |
| right-footer | 右侧列表底部的内容                |

## 方法

| 方法名        | 说明           | 参数               |
| ---------- | ------------ | ---------------- |
| clearQuery | 清空某个面板的搜索关键词 | 'left' / 'right' |

## 事件

| 事件名                | 说明                    | 回调参数                                         |
| ------------------ | --------------------- | -------------------------------------------- |
| change             | 右侧列表元素变化时触发           | 当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组 |
| left-check-change  | 左侧列表元素被用户选中 / 取消选中时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组         |
| right-check-change | 右侧列表元素被用户选中 / 取消选中时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组         |
