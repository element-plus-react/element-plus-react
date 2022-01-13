---
title: Scrollbar 滚动条
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Scrollbar 滚动条

用于替换浏览器原生滚动条。

<style lang="scss">
.example-showcase {
  .el-scrollbar {
    .scrollbar-demo-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      margin: 10px;
      text-align: center;
      border-radius: 4px;
      background: var(--el-color-primary-light-9);
      color: var(--el-color-primary);
    }

    .flex-content {
      display: flex;

      .scrollbar-demo-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-danger-lighter);
        color: var(--el-color-danger);
      }
    }
  }
  .el-slider {
    margin-top: 20px;
  }
}
</style>

## 基础用法

:::demo 通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

scrollbar/basic-usage

:::

## 横向滚动

:::demo 当元素宽度大于滚动条宽度时，会显示横向滚动条。

scrollbar/horizontal-scroll

:::

## 最大高度

:::demo 当元素高度超过最大高度，才会显示滚动条。

scrollbar/max-height

:::

## 手动滚动

:::demo 通过使用 `setScrollTop` 与 `setScrollLeft` 方法，可以手动控制滚动条滚动。

scrollbar/manual-scroll

:::

## Scrollbar 属性

| 属性         | 说明                                 | 类型              | 可选值 | 默认值   |
| ---------- | ---------------------------------- | --------------- | --- | ----- |
| height     | 滚动条高度                              | string / number | —   | —     |
| max-height | 滚动条最大高度                            | string / number | —   | —     |
| native     | 是否使用原生滚动条样式                        | boolean         | —   | false |
| wrap-style | 包裹容器的自定义样式                         | string          | —   | —     |
| wrap-class | 包裹容器的自定义类名                         | string          | —   | —     |
| view-style | 视图的自定义样式                           | string          | —   | —     |
| view-class | 视图的自定义类名                           | string          | —   | —     |
| noresize   | 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能 | boolean         | —   | false |
| tag        | 视图的元素标签                            | string          | —   | div   |
| always     | 滚动条总是显示                            | boolean         | —   | false |
| min-size   | 滚动条最小尺寸                            | number          | —   | 20    |

## Scrollbar 事件

| 事件名    | 说明       | 参数                                                |
| ------ | -------- | ------------------------------------------------- |
| scroll | 滚动时触发的事件 | distance of scrolling `{ scrollLeft, scrollTop }` |

## Scrollbar 方法

| 方法名           | 说明          | 参数                   |
| ------------- | ----------- | -------------------- |
| setScrollTop  | 设置滚动条到顶部的距离 | (scrollTop: number)  |
| setScrollLeft | 设置滚动条到左边的距离 | (scrollLeft: number) |
| update        | 手动更新滚动条状态   | —                    |

## Scrollbar 插槽

| 名称 | 说明      |
| -- | ------- |
| —  | 自定义默认内容 |
