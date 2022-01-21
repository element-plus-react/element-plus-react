---
title: Avatar 头像
order: 1
nav:
  title: 组件
  path: /components
group:
  title: Data 数据展示
  order: 4
---
# Avatar 头像

Avatar 组件可以用来代表人物或对象， 支持使用图片，图标或者文字作为 Avatar

## 基础用法

使用 `shape` 和 `size` 属性来控制 Avatar 的形状和大小。

<code src="./demos/basic.tsx"></code>

## 展示类型

该用例会展示如何使用不同类型的 Avatar。

<code src="./demos/types.tsx"></code>

## 图片加载失败的回滚行为

当展示类型为图片的时候，图片加载失败的 fallback 行为

<code src="./demos/fallback.tsx"></code>

## 图片如何适应容器

当使用图片作为用户头像时，设置该图片如何在容器中展示。与[ object-fit ](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) 属性一致

<code src="./demos/fit.tsx"></code>

## 属性

| 属性     | 说明                                          | 类型                 | 可选值                                        | 默认值     |
| ------ | ------------------------------------------- | ------------------ | ------------------------------------------ | ------- |
| icon   | 设置头像的图标类型，参考 Icon 组件                        | string / Component |                                            |         |
| size   | 设置头像的大小                                     | number/string      | number / large / default /small            | default |
| shape  | 设置头像的形状                                     | string             | circle / square                            | circle  |
| src    | 图片头像的资源地址                                   | string             |                                            |         |
| srcSet | 以逗号分隔的一个或多个字符串列表，设置一组 User Agent 使用的可能的图像源。 | string             |                                            |         |
| alt    | 描述图像的替换文本                                   | string             |                                            |         |
| fit    | 当展示类型为图片的时候，设置图片如何适应容器                      | string             | fill / contain / cover / none / scale-down | cover   |

## 事件

| 事件名   | 说明                                          | 回调参数       |
| ----- | ------------------------------------------- | ---------- |
| error | 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 | (e: Event) |

## 插槽

| 插槽名     | 说明        |
| ------- | --------- |
| default | 自定义头像展示内容 |

<style lang="scss">
.example-showcase {
  .demo-basic {
    text-align: center;

    .demo-basic--circle,
    .demo-basic--square {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .block {
        flex: 1;
      }

      .block:not(:last-child) {
        border-right: 1px solid var(--el-border-color-base);
      }
    }

    .el-col:not(:last-child) {
      border-right: 1px solid var(--el-border-color-base);
    }
  }

  .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--el-text-color-secondary);
  }



  .demo-type {
    display: flex;

    > div {
      flex: 1;
      text-align: center;
    }

    > div:not(:last-child) {
      border-right: 1px solid var(--el-border-color-base);
    }
  }

  .demo-fit {
    display: flex;
    text-align: center;
    justify-content: space-between;

    .block {
      flex: 1;
      display: flex;
      flex-direction: column;
      flex-grow: 0;
    }

    .title {
      margin-bottom: 10px;
      font-size: 14px;
      color: var(--el-text-color-secondary);
    }
  }
}
</style>
