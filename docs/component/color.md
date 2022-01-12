---
title: Color 色彩
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---

# Color 色彩

Element Plus 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

<style lang="scss">
.demo-color-box {
  position: relative;
  border-radius: 4px;
  padding: 20px;
  margin: 5px 0;
  height: 114px;
  box-sizing: border-box;
  color: var(--el-color-white);
  font-size: 14px;

  .bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;

    .bg-blue-sub-item {
      width: 11.1111111%;
      height: 100%;
      display: inline-block;

      &:first-child {
        border-radius: 0 0 0 var(--el-border-radius-base);
      }
    }

    .bg-secondary-sub-item {
      width: 50%;
      height: 100%;
      display: inline-block;
      &:first-child {
        border-radius: 0 0 0 var(--el-border-radius-base);
      }
    }
  }
}

.demo-color-box-lite {
  color: var(--el-text-color-primary);

  .value {
    font-size: 12px;
    opacity: .69;
    line-height: 24px;
  }
}

.bg-transparent {
  color: var(--el-text-color-primary);
  background-image: linear-gradient(
      45deg,
      rgb(249, 249, 250) 25%,
      transparent 25%
    ),
  linear-gradient(135deg, rgb(249, 249, 250) 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, rgb(249, 249, 250) 75%),
  linear-gradient(135deg, transparent 75%, rgb(249, 249, 250) 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
}
</style>

## 主色

Element Plus 默认的主题色是明亮、友好的蓝色。

<!-- Do not touch -->

[//]: # (<ClientOnly>)

[//]: # (  <MainColor />)

[//]: # (</ClientOnly>)

## 辅助色

除了主颜色外，您需要在不同的场景中使用不同的场景颜色 (例如，危险的颜色表示危险的操作)

<!-- Do not touch -->

[//]: # (<ClientOnly>)

[//]: # (  <SecondaryColors />)

[//]: # (</ClientOnly>)

## 中性色

中性色用于文本、背景和边框颜色。 通过运用不同的中性色，来表现层次结构。

<!-- Do not touch -->

[//]: # (<ClientOnly>)

[//]: # (  <NeutralColor />)

[//]: # (</ClientOnly>)
