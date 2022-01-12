---
title: Image 图片
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Image 图片

图片容器，在保留所有原生 img 的特性下，支持懒加载，自定义占位、加载失败等

<style lang="scss">
.demo-image {
  .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color-base);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
    &:last-child {
      border-right: none;
    }
  }

  .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
}

.demo-image__placeholder,
.demo-image__error {
  @extend .demo-image;

  .block {
    width: 49%;
  }

  .el-image {
    padding: 0 5px;
    max-width: 300px;
    max-height: 200px;
  }

  .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: var(--el-text-color-secondary);
    font-size: 14px;
  }
}

.demo-image__placeholder {
  .dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
  }
}

.demo-image__error {
  .image-slot {
    font-size: 30px;
    .el-icon {
      font-size: 30px;
    }
  }
  .el-image {
    width: 100%;
    height: 200px;
  }
}
</style>

## 基础用法

:::demo 可通过`fit`确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

image/basic-usage

:::

## 占位内容

:::demo 可通过`slot = placeholder`可自定义占位内容

image/placeholder

:::

## 加载失败

:::demo 可通过`slot = error`可自定义加载失败内容

image/load-failed

:::

## 懒加载

:::demo 可通过`lazy`开启懒加载功能， 当图片滚动到可视范围内才会加载。 可通过 `scroll-container` 来设置滚动容器， 若未定义，则为最近一个 overflow 值为 auto 或 scroll 的父元素。

image/lazy-load

:::

## 图片预览

:::demo 可通过 `previewSrcList` 开启预览大图的功能。 你可以通过 `initial-index` 初始化第一张预览图片的位置。 默认初始位置为 0。

image/image-preview

:::

## Image 属性

| 属性                  | 说明                                                                                        | 类型                   | 可选值                                        | 默认值                                 |
| ------------------- | ----------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------ | ----------------------------------- |
| alt                 | 原生 alt                                                                                    | string               | -                                          | -                                   |
| fit                 | 确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | string               | fill / contain / cover / none / scale-down | -                                   |
| hide-on-click-modal | 当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview                                                     | boolean              | true / false                               | false                               |
| initial-index       | 初始预览图像索引，小于 `url-list` 的长度                                                                | number               | int                                        | 0                                   |
| lazy                | 是否使用懒加载                                                                                   | boolean              | —                                          | false                               |
| preview-src-list    | 开启图片预览功能                                                                                  | Array                | —                                          | -                                   |
| referrer-policy     | 原生 referrer-policy 属性                                                                     | string               | -                                          | -                                   |
| src                 | 图片源，同原生属性一致                                                                               | string               | —                                          | -                                   |
| scroll-container    | 开启懒加载后，监听 scroll 事件的容器                                                                    | string / HTMLElement | —                                          | 最近一个 overflow 值为 auto 或 scroll 的父元素 |
| z-index             | 设置图片预览的 z-index                                                                           | Number               | —                                          | 2000                                |

## Image 事件

| 事件名   | 说明       | 参数         |
| ----- | -------- | ---------- |
| load  | 图片加载成功触发 | (e: Event) |
| error | 图片加载失败触发 | (e: Error) |

## Image 插槽

| 插槽名         | 说明         |
| ----------- | ---------- |
| placeholder | 图片未加载的占位内容 |
| error       | 加载失败的内容    |

## ImageViewer 属性

| 属性                  | 说明                                                             | 类型                | 可选值                   | 默认值   |
| ------------------- | -------------------------------------------------------------- | ----------------- | --------------------- | ----- |
| url-list            | 用于预览的图片链接列表                                                    | Array\<string\> | -                     | []    |
| z-index             | 预览时遮罩层的 z-index                                                | number / string   | int / string\<int\> | 2000  |
| initial-index       | 预览的首张图片的位置, 小于等于数组长度                                           | number            | int                   | 0     |
| infinite            | 是否可以无限循环预览                                                     | boolean           | true / false          | true  |
| hide-on-click-modal | 是否可以通过点击遮罩层关闭预览                                                | boolean           | true / false          | false |
| append-to-body      | image 自身是否插入至 body 元素上。 嵌套的父元素设置了 transform 属性必须指定该属性并赋值为 true | boolean           | —                     | false |

## ImageViewer 事件

| 事件名    | 说明                                               | 回调参数                  |
| ------ | ------------------------------------------------ | --------------------- |
| close  | 当点击 X 按钮或者在 hide-on-click-modal 为 true 时点击遮罩层时触发 | 无                     |
| switch | 当图片切换时触发                                         | (val: number) 切换目标的下标 |
