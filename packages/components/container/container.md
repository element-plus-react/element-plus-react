---
title: Container 布局容器
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<el-container>`：外层容器。 当子元素中包含 `<el-header>` 或 `<el-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<el-header>`：顶栏容器。

`<el-aside>`：侧边栏容器。

`<el-main>`：主要区域容器。

`<el-footer>`：底栏容器。

:::tip

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<el-container>`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 `<el-container>`

:::

## 常见页面布局

:::demo

container/basic

:::

## 例子

:::demo

container/example

:::

## Container 属性

| 属性        | 说明       | 类型     | 可选值                   | 默认值                                                        |
| --------- | -------- | ------ | --------------------- | ---------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

## Container 插槽

| 插槽名 | 说明      | 子标签                                        |
| --- | ------- | ------------------------------------------ |
| —   | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header 属性

| 属性     | 说明   | 类型     | 可选值 | 默认值  |
| ------ | ---- | ------ | --- | ---- |
| height | 顶栏高度 | string | —   | 60px |

## Header 插槽

| 插槽名 | 说明      |
| --- | ------- |
| —   | 自定义默认内容 |

## Aside 属性

| 属性    | 说明    | 类型     | 可选值 | 默认值   |
| ----- | ----- | ------ | --- | ----- |
| width | 侧边栏宽度 | string | —   | 300px |

## Aside 插槽

| 插槽名 | 说明      |
| --- | ------- |
| —   | 自定义默认内容 |

## Main 插槽

| 插槽名 | 说明      |
| --- | ------- |
| —   | 自定义默认内容 |

## Footer 属性

| 属性     | 说明   | 类型     | 可选值 | 默认值  |
| ------ | ---- | ------ | --- | ---- |
| height | 底栏高度 | string | —   | 60px |

## Footer 插槽

| 插槽名 | 说明      |
| --- | ------- |
| —   | 自定义默认内容 |

<style lang="scss">
.example-showcase {
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
  }

  .el-aside {
    color: var(--el-text-color-primary);
  }

  .common-layout {
    .el-header,
    .el-footer {
      text-align: center;
    }

    .el-aside {
      background-color: #d3dce6;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #e9eef3;
      color: var(--el-text-color-primary);
      text-align: center;
      line-height: 160px;
    }

    .el-container {
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
      &:nth-child(5) .el-aside,
      &:nth-child(6) .el-aside {
        line-height: 260px;
      }

      &:nth-child(7) .el-aside {
        line-height: 320px;
      }
    }
  }
}
</style>
