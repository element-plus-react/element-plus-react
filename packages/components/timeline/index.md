---
title: Timeline 时间线
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Timeline 时间线

可视化地呈现时间流信息。

## 基础用法

Timeline 可拆分成多个按照时间戳排列的活动， 时间戳是其区分于其他控件的重要特征， 使用时注意与 Steps 步骤条等区分。

:::demo

timeline/basic

:::

## ⾃定义节点样式

可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。

:::demo

timeline/custom-node

:::

## ⾃定义时间戳

当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。

:::demo

timeline/custom-timestamp

:::

## 垂直居中

垂直居中样式的 Timeline-Item

:::demo

timeline/center

:::

## Timeline 插槽

| 插槽名 | 说明  | 子标签           |
| --- | --- | ------------- |
| —   | 时间戳 | Timeline-Item |

## Timeline-Item 属性

| 属性             | 说明      | 类型                 | 可选值                                         | 默认值    |
| -------------- | ------- | ------------------ | ------------------------------------------- | ------ |
| timestamp      | 时间戳     | string             | —                                           | —      |
| hide-timestamp | 是否隐藏时间戳 | boolean            | —                                           | false  |
| center         | 是否垂直居中  | boolean            | —                                           | false  |
| placement      | 时间戳位置   | string             | top / bottom                                | bottom |
| type           | 节点类型    | string             | primary / success / warning / danger / info | —      |
| color          | 节点颜色    | string             | hsl / hsv / hex / rgb                       | —      |
| size           | 节点尺寸    | string             | normal / large                              | normal |
| icon           | 自定义图标   | string / Component | —                                           | —      |
| hollow         | 是否空心点   | boolean            | —                                           | false  |

## Timeline-Item 插槽

| 插槽名 | 说明                |
| --- | ----------------- |
| —   | Timeline-Item 的内容 |
| dot | 自定义节点             |
