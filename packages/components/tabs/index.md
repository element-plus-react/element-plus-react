---
title: Tabs 标签页
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

<style lang="scss">

:not(.el-tabs--border-card) > .el-tabs__content {
  padding: 32px;
  background-color: #F4F5F7;
  color: #6B778C;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right, .el-tabs--left {
  .el-tabs__content {
    height: 100%;
  }
}
</style>

## 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

tabs/basic

:::

## 卡片风格的标签

你可以设置具有卡片风格的标签。

:::demo 只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。

tabs/card-style

:::

## 带有边框的卡片风格

你还可以设置标签页为带有边框的卡片

:::demo 将 `type` 设置为 `border-card`。

tabs/border-card

:::

## 标签位置的设置

可以通过 `tab-position` 设置标签的位置

:::demo 标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`

tabs/tab-position

:::

## 自定义标签页的内容

可以通过具名插槽来实现自定义标签页的内容

:::demo

tabs/custom-tab

:::

## 动态增减标签页

增减标签页按钮只能在选项卡样式的标签页下使用

:::demo

tabs/dynamic-tabs

:::

## 自定义增加标签页触发器

:::demo

tabs/customized-trigger

:::

## Tabs 属性

| 属性                    | 说明                                                          | 类型                                  | 可选值                   | 默认值          |
| --------------------- | ----------------------------------------------------------- | ----------------------------------- | --------------------- | ------------ |
| model-value / v-model | 绑定值，选中选项卡的 name                                             | string                              | —                     | 第一个选项卡的 name |
| type                  | 风格类型                                                        | string                              | card/border-card      | —            |
| closable              | 标签是否可关闭                                                     | boolean                             | —                     | false        |
| addable               | 标签是否可增加                                                     | boolean                             | —                     | false        |
| editable              | 标签是否同时可增加和关闭                                                | boolean                             | —                     | false        |
| tab-position          | 选项卡所在位置                                                     | string                              | top/right/bottom/left | top          |
| stretch               | 标签的宽度是否自撑开                                                  | boolean                             | -                     | false        |
| before-leave          | 切换标签之前的钩子函数， 若返回 `false ` 或者返回被 reject 的 ` Promise `，则阻止切换。 | Function(activeName, oldActiveName) | —                     | —            |

## Tabs 事件

| 事件名        | 说明                        | 回调参数                 |
| ---------- | ------------------------- | -------------------- |
| tab-click  | tab 被选中时触发                | tab 被点击的标签           |
| tab-remove | 点击 tab 移除按钮后触发            | name，被删除的标签的名字       |
| tab-add    | 点击 tabs 的新增按钮后触发          | —                    |
| edit       | 点击 tabs 的新增按钮或 tab 被关闭后触发 | (targetName, action) |

## Tabs 插槽

| 插槽名 | 说明   | 子标签      |
| --- | ---- | -------- |
| -   | 默认插槽 | Tab-pane |

## Tab-pane 属性

| 属性       | 说明                           | 类型      | 可选值 | 默认值                          |
| -------- | ---------------------------- | ------- | --- | ---------------------------- |
| label    | 选项卡标题                        | string  | —   | —                            |
| disabled | 是否禁用                         | boolean | —   | false                        |
| name     | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string  | —   | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable | 标签是否可关闭                      | boolean | —   | false                        |
| lazy     | 标签是否延迟渲染                     | boolean | —   | false                        |

## Tab-pane 插槽

| 插槽名   | 说明             |
| ----- | -------------- |
| -     | Tab-pane 的内容   |
| label | Tab-pane 的标题内容 |
