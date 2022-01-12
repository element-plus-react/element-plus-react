---
title: Cascader 级联选择器
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 基础用法

有两种触发子菜单的方式

:::demo 只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。 通过`props.expandTrigger`可以定义展开子级菜单的触发方式。

cascader/basic

:::

## 有禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的

:::demo 本例中，`options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。 在默认情况下，Cascader 会检查数据中每一项的`disabled`字段是否为`true`，如果你的数据中表示禁用含义的字段名不为`disabled`，可以通过`props.disabled`属性来指定（详见下方 API 表格）。 当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。

cascader/option-disabling

:::

## 可清空

通过 `clearable` 设置输入框可清空

:::demo

cascader/clearable

:::

## 仅显示最后一级

可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。

:::demo 属性`show-all-levels`定义了是否显示完整的路径， 将其赋值为 `false` 则仅显示最后一级。

cascader/last-level

:::

## 多选

Add `:props="props"` in tag and set data `props = { multiple: true }` to use multiple selection.

Do:

```html
<template>
  <el-cascader :props="props" />
</template>
<script lang="ts">
  export default {
    setup() {
      return {
        props: {
          // props.
          multiple: true,
        },
      }
    },
  }
</script>
```

Don't do:

```html
<template>
  <!--  Object literal binging here is invalid syntax for cascader  -->
  <el-cascader :props="{ multiple: true }" />
</template>
```

:::demo When using multiple selection, all selected tags will display by default, You can set `collapse-tags = true` to fold selected tags.

cascader/multiple-selection

:::

## 选择任意一级选项

In single selection, only the leaf nodes can be checked, and in multiple selection, check parent nodes will lead to leaf nodes be checked eventually. When enable this feature, it can make parent and child nodes unlinked and you can select any level of options.

:::demo Set `props.checkStrictly = true` to make checked state of a node not affects its parent nodes and child nodes, and then you can select any level of options.

cascader/any-level

:::

## 动态加载

Dynamic load its child nodes when checked a node.

:::demo Set `lazy = true` to use dynamic loading, and you have to specify how to load the data source by `lazyload`. There are two parameters of `lazyload`,the first parameter `node` is the node currently clicked, and the `resolve` is a callback that indicate loading is finished which must invoke. To display the status of node more accurately, you can add a `leaf` field (can be modified by `props.leaf`) to indicate whether it is a leaf node. Otherwise, it will be inferred by if has any child nodes.

cascader/dynamic-loading

:::

## 可搜索

Search and select options with a keyword.

:::demo Adding `filterable` to `el-cascader` enables filtering. Cascader will match nodes whose label or parent's label (according to `show-all-levels`) includes input keyword. Of course, you can customize search logic by `filter-method` which accepts a function, the first parameter is `node`, the second is `keyword`, and need return a boolean value indicating whether it hits.

cascader/filterable

:::

## 自定义节点内容

You can customize the content of cascader node.

:::demo You can customize the content of cascader node by `scoped slot`. You'll have access to `node` and `data` in the scope, standing for the Node object and node data of the current node respectively。

cascader/custom-content

:::

## 级联面板

`CascaderPanel` is the core component of `Cascader` which has various of features such as single selection, multiple selection, dynamic loading and so on.

:::demo Just like `el-cascader`, you can set alternative options by `options`, and enable other features by `props`, see the API form below for details.

cascader/panel

:::

## Cascader 属性

| 属性                    | 说明                                                                                   | 类型                      | 可选值                    | 默认值    |
| --------------------- | ------------------------------------------------------------------------------------ | ----------------------- | ---------------------- | ------ |
| model-value / v-model | 选中项绑定值                                                                               | -                       | —                      | —      |
| options               | 可选项数据源，键名可通过 `Props` 属性配置                                                            | array                   | —                      | —      |
| props                 | 配置选项，具体见下表                                                                           | object                  | —                      | —      |
| size                  | 尺寸                                                                                   | string                  | large / default /small | —      |
| placeholder           | 输入框占位文本                                                                              | string                  | —                      | Select |
| disabled              | 是否禁用                                                                                 | boolean                 | —                      | false  |
| clearable             | 是否支持清空选项                                                                             | boolean                 | —                      | false  |
| show-all-levels       | 输入框中是否显示选中值的完整路径                                                                     | boolean                 | —                      | true   |
| collapse-tags         | 多选模式下是否折叠Tag                                                                         | boolean                 | -                      | false  |
| separator             | 选项分隔符                                                                                | string                  | —                      | ' / '  |
| filterable            | 是否可搜索选项                                                                              | boolean                 | —                      | —      |
| filter-method         | 自定义搜索逻辑，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中                            | function(node, keyword) | -                      | -      |
| debounce              | 搜索关键词输入的去抖延迟，毫秒                                                                      | number                  | —                      | 300    |
| before-filter         | 过滤函数调用之前的钩子函数，该函数接受一个 value 参数。 如果该函数的返回值是 `false` 或者是一个被拒绝的`Promise`，那么接下来的过滤便不会执行。 | function(value)         | —                      | —      |
| popper-class          | 自定义浮层类名                                                                              | string                  | —                      | —      |
| popper-append-to-body | 是否将弹出框插入至 body 元素。 在弹出框的定位出现问题时，可将该属性设置为 false                                       | boolean                 | -                      | true   |

## Cascader 事件

| 事件名            | 说明              | 回调参数                 |
| -------------- | --------------- | -------------------- |
| change         | 当绑定值变化时触发的事件    | value                |
| expand-change  | 当展开节点发生变化时触发    | 各父级选项值组成的数组          |
| blur           | 当失去焦点时触发        | (event: Event)       |
| focus          | 当获得焦点时触发        | (event: Event)       |
| visible-change | 下拉框出现/隐藏时触发     | 出现则为 true，隐藏则为 false |
| remove-tag     | 在多选模式下，移除Tag时触发 | 移除的Tag对应的节点的值        |

## Cascader 方法

| 方法名             | 说明      | 参数                               |
| --------------- | ------- | -------------------------------- |
| getCheckedNodes | 获取选中的节点 | (leafOnly) 是否只是叶子节点，默认值为 `false` |

## Cascader 插槽

| 插槽名   | 说明                                                 |
| ----- | -------------------------------------------------- |
| -     | 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |
| empty | 无匹配选项时的内容                                          |

## CascaderPanel 属性

| 属性                    | 说明                        | 类型     | 可选值 | 默认值 |
| --------------------- | ------------------------- | ------ | --- | --- |
| model-value / v-model | 选中项绑定值                    | -      | —   | —   |
| options               | 可选项数据源，键名可通过 `Props` 属性配置 | array  | —   | —   |
| props                 | 配置选项，具体见下表                | object | —   | —   |

## CascaderPanel 事件

| 事件名称          | 说明           | 回调参数        |
| ------------- | ------------ | ----------- |
| change        | 当选中节点变化时触发   | value       |
| expand-change | 当展开节点发生变化时触发 | 各父级选项值组成的数组 |

## CascaderPanel 方法

| 方法名               | 说明        | 参数                               |
| ----------------- | --------- | -------------------------------- |
| getCheckedNodes   | 获取选中的节点数组 | (leafOnly) 是否只是叶子节点，默认值为 `false` |
| clearCheckedNodes | 清空选中的节点   | -                                |

## CascaderPanel 插槽

| 插槽名 | 说明                                                 |
| --- | -------------------------------------------------- |
| -   | 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |

## Props

| 属性            | 说明                                                   | 类型                                                               | 可选值           | 默认值        |
| ------------- | ---------------------------------------------------- | ---------------------------------------------------------------- | ------------- | ---------- |
| expandTrigger | 次级菜单的展开方式                                            | string                                                           | click / hover | 'click'    |
| multiple      | 是否多选                                                 | boolean                                                          | -             | false      |
| checkStrictly | 是否严格的遵守父子节点不互相关联                                     | boolean                                                          | -             | false      |
| emitPath      | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | boolean                                                          | -             | true       |
| lazy          | 是否动态加载子节点，需与 lazyLoad 方法结合使用                         | boolean                                                          | -             | false      |
| lazyLoad      | 加载动态数据的方法，仅在 lazy 为 true 时有效                         | function(node, resolve)，`node`为当前点击的节点，`resolve`为数据加载完成的回调(必须调用) | -             | -          |
| value         | 指定选项的值为选项对象的某个属性值                                    | string                                                           | —             | 'value'    |
| label         | 指定选项标签为选项对象的某个属性值                                    | string                                                           | —             | 'label'    |
| children      | 指定选项的子选项为选项对象的某个属性值                                  | string                                                           | —             | 'children' |
| disabled      | 指定选项的禁用为选项对象的某个属性值                                   | string                                                           | —             | 'disabled' |
| leaf          | 指定选项的叶子节点的标志位为选项对象的某个属性值                             | string                                                           | —             | 'leaf'     |
