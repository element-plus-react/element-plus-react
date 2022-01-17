---
title: Icon 图标
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 1
---

# Icon 图标

Element Plus 提供了一套常用的图标集合。

:::warning

⚠️ **Font Icon** has been removed, since version `1.2.0-beta.1`.

:::

## Icon Usage

- 如果你想像用例一样**直接使用**，你需要[全局注册组件](https://v3.vuejs.org/guide/component-registration.html#global-registration)，才能够直接在项目里使用。

- If you want to see all available SVG icons please check [@element-plus/icons-vue](https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/es/) and the source [element-plus-icons](https://github.com/element-plus/element-plus-icons) out or [Icon Collection](#icons-collection)

- CDN importing and [auto importing](https://github.com/antfu/unplugin-icons) is under developing.

## 安装

### Using packaging manager

```shell
# Choose a package manager you like.

# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```

## Simple usage

:::warning

Because HTML standard has already defined a tag named [menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu), so you need to use an alias in order to render the icon, if you register `Menu` directly it will not work.

:::

```vue
<!-- Use el-icon to provide attributes to SVG icon -->
<template>
  <div>
    <el-icon :size="size" :color="color">
      <edit></edit>
    </el-icon>
    <!-- Or use it independently without derive attributes from parent -->
    <edit></edit>
  </div>
</template>
```

<script setup>
import { Edit, Share, Delete, Search, Loading } from '@element-plus/icons-vue'
</script>

<ElRow>
  <div>
    <ElIcon :size="30">
      <Edit />
    </ElIcon>
    <Edit />
  </div>
</ElRow>

## Combined with el-icon

`el-icon` provides extra attributes for raw SVG icon, for more detail, please read to the end.

```vue
<template>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <el-icon :size="20">
    <edit />
  </el-icon>
  <el-icon color="#409EFC" class="no-inherit">
    <share />
  </el-icon>
  <el-icon>
    <delete />
  </el-icon>
  <el-icon class="is-loading">
    <loading />
  </el-icon>
  <el-button type="primary">
    <el-icon style="vertical-align: middle;">
      <search />
    </el-icon>
    <span style="vertical-align: middle;"> Search </span>
  </el-button>
</template>
```

<ElRow>
  <p>
    通过添加额外的类名 <b>is-loading</b>，你的图标就可以在 2 秒内旋转 360 度，但让你也可以自己改写想要的动画。
  </p>
  <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
    <ElIcon :size="20">
      <Edit />
    </ElIcon>
    <ElIcon color="#409EFC" class="no-inherit">
      <Share />
    </ElIcon>
    <ElIcon>
      <Delete />
    </ElIcon>
    <ElIcon class="is-loading">
      <Loading />
    </ElIcon>
    <ElButton type="primary">
      <ElIcon style="vertical-align: middle; color: #fff;">
        <Search />
      </ElIcon>
      <span style="vertical-align: middle;">搜索</span>
    </ElButton>
  </div>
</ElRow>

## Using SVG icon directly

```vue
<template>
  <div style="font-size: 20px;">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <edit style="width: 1em; height: 1em; margin-right: 8px;" />
    <share style="width: 1em; height: 1em; margin-right: 8px;" />
    <delete style="width: 1em; height: 1em; margin-right: 8px;" />
    <search style="width: 1em; height: 1em; margin-right: 8px;" />
  </div>
</template>
```

<ElRow>
  <div style="font-size: 20px;">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px;" />
    <Share style="width: 1em; height: 1em; margin-right: 8px;" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px;" />
    <Search style="width: 1em; height: 1em; margin-right: 8px;" />
  </div>
</ElRow>

## Icon Collection

:::tip

**You can use SVG icon in any version** as long as you install it

**You can click the icon to copy it**

:::

<IconList />

## Icon Attributes

| 属性    | 说明                    | 类型                               | 可选值    | 默认值                        |
| ----- | --------------------- | -------------------------------- | ------ | -------------------------- |
| color | svg 的 fill 颜色         | Pick\<CSSProperties, 'color'\> | -      | inherit                    |
| size  | SVG 图标的大小，size x size | number/                          | string | -                | inherit |

## Icon Slots

| 名称 | 说明      |
| -- | ------- |
| —  | 自定义默认内容 |
