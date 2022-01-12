---
title: Collapse 折叠面板
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Collapse 折叠面板

通过折叠面板收纳内容区域

<style lang="scss">
.demo-collapse {
  .el-collapse {
    padding: 8px;
    background: white;
  }
}
</style>

## 基础用法

可同时展开多个面板，面板之间不影响

:::demo

collapse/basic

:::

## 手风琴效果

每次只能展开一个面板

:::demo 通过 `accordion` 属性来设置是否以手风琴模式显示。

collapse/accordion

:::

## 自定义面板标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。

:::demo

collapse/customization

:::

## Collapse 属性

| 属性                    | 详情                                            | 类型                                                   | 可选值 | 默认值   |
| --------------------- | --------------------------------------------- | ---------------------------------------------------- | --- | ----- |
| model-value / v-model | 当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`) | string (accordion mode) / array (non-accordion mode) | —   | —     |
| accordion             | 是否手风琴模式                                       | boolean                                              | —   | false |

## Collapse 事件

| 事件名    | 说明                                                            | 回调参数                                                                |
| ------ | ------------------------------------------------------------- | ------------------------------------------------------------------- |
| change | 当前激活面板改变时触发(如果是手风琴模式，参数 `activeNames` 类型为`string`，否则为`array`) | (activeNames: array (non-accordion mode) / string (accordion mode)) |

## Collapse 插槽

| 插槽名 | Description | 子标签           |
| --- | ----------- | ------------- |
| -   | 自定义默认内容     | Collapse Item |

## Collapse Item 属性

| 属性       | 说明    | 类型            | 可选值 | 默认值 |
| -------- | ----- | ------------- | --- | --- |
| name     | 唯一标志符 | string/number | —   | —   |
| title    | 面板标题  | string        | —   | —   |
| disabled | 是否禁用  | boolean       | —   | —   |

## Collapse Item 插槽

| 插槽名   | 说明                             |
| ----- | ------------------------------ |
| —     | content of Collapse Item       |
| title | content of Collapse Item title |
