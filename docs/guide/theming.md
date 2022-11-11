---
title: 主题
order: 2
nav:
  title: 指南
  path: /guide
group:
  title: 进阶
---

# 自定义主题

Element Plus 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。 但是如果 你需要在大规模上替换样式，例如： 将主题颜色从 蓝色改为橙色或绿色，也许一个人将其覆盖起来不是一个好主意。 我们 提供四种方法来改变风格变量。

## 更换主题色 <el-tag type="success" style="vertical-align: middle;">1.1.0-beta.1 新增</el-tag>

以下是自定义主题的一些例子。

- 全部导入：[element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)
- 按需导入：[unplugin-element-plus/examples/vite](https://github.com/element-plus/unplugin-element-plus)

### 通过 SCSS 变量

`theme-chalk` 使用 SCSS 编写而成。 你可以在 [`packages/theme-chalk/src/common/var.scss`](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss).文件中查找 SCSS 变量。

::: warning

我们使用 sass 模块（[sass:map](https://sass-lang.com/documentation/values/maps)...）来重构所有的 SCSS 变量。

> [介绍 Sass 模块 | CSS-TRICKS](https://css-tricks.com/introducing-sass-modules/)

例如， 使用`$colors`变量映射不同颜色。

`$notification` 是所有`notification` 组件的变量的映射。

未来，我们将为每个组件的自定义变量编写文档。 你也可以直接查看源代码 [var.scss](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss)

:::

```scss
$colors: () !default;
$colors: map.deep-merge(
  (
    'white': #ffffff,
    'black': #000000,
    'primary': (
      'base': #409eff,
    ),
    'success': (
      'base': #67c23a,
    ),
    'warning': (
      'base': #e6a23c,
    ),
    'danger': (
      'base': #f56c6c,
    ),
    'error': (
      'base': #f56c6c,
    ),
    'info': (
      'base': #909399,
    ),
  ),
  $colors
);
```

### 如何覆盖它？

如果你的项目也使用了 SCSS， 那么你可以直接修改 Element Plus 的样式变量。 新建一个样式文件，例如 `styles/element/index.scss`：

```scss
// styles/element/index.scss
/* just override what you need */
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': green,
    ),
  )
);

// If you just import on demand, you can ignore the following content.
// 如果你想导入所有样式:
// @use "element-plus/theme-chalk/src/index.scss" as *;
```

然后在你的项目入口文件中，导入这个样式文件替换 Element Plus 内置的 CSS：

::: tip

在 element-plus scss 文件之前导入`element/index.scss`以避免 sass 混合变量的问题，因为我们需要通过你的自定义变量生成 light-x

:::

创建一个 `element/index.scss` 文件来合并你的变量和 element-plus 的变量。 （如果你在 TypeScript 中导入了它们，他们将不会被合并）

::: tip

除此以外，你应该将 scss 与元素变量 scss 区分开来。 如果将它们混合在一起，`element-plus`的每次热更新都需要编译大量的 scss 文件，导致编译速度变慢。

:::

```ts
import Vue from 'vue';

import './styles/element/index.scss';
import ElementPlus from 'element-plus';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus);
```

如果你正在使用 vite，并且你想在按需导入时自定义主题。

使用 `scss.additionalData` 来编译所有应用 scss 变量的组件。

```ts
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 你同样可以使用 unplugin-vue-components
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 或者使用 unplugin-element-plus
import ElementPlus from 'unplugin-element-plus/vite';

// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // use unplugin-vue-components
    // Components({
    //   resolvers: [
    //     ElementPlusResolver({
    //       importStyle: "sass",
    //       // directives: true,
    //       // version: "1.2.0-beta.1",
    //     }),
    //   ],
    // }),
    // or use unplugin-element-plus
    ElementPlus({
      useSource: true,
    }),
  ],
});
```

### 通过 CSS 变量设置

CSS 变量是一个非常有用的特性，几乎所有的浏览器都支持它。 （IE：啊这？)

> 从这里学习更多关于[使用 CSS 自定义属性(变量) | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

我们用 css 变量来改造了几乎所有组件的样式系统。 (自版本 `1.0.2-beta-70` [#2242](https://github.com/element-plus/element-plus/issues/2242) 开始)

::: tip

CSS 变量和 SCSS 变量系统是兼容的。 因此，我们使用 SCSS 里的函数去自动化生成可直接使用的 CSS 变量。

:::

这意味着你可以动态地改变组件内的个别变量，以便更好地自定义，而不必修改 Scss 然后重新编译它。

> 以后，每个组件的 Css 变量名称和角色文档将被写入到每个组件中。

比如这样：

```css
:root {
  --el-color-primary: green;
}
```

如果你只想自定义一个特定的组件，只需为某些组件单独添加内联样式。

```html
<el-tag style="--el-tag-bg-color: red">Tag</el-tag>
```

出于性能原因，更加推荐你在 class 下添加自定义 css 变量，而不是全局的 `:root`。

```css
.custom-class {
  --el-tag-bg-color: red;
}
```

如果您想要通过脚本控制 css var，请尝试这样做：

```ts
// document.documentElement is global
const el = document.documentElement;
// const el = document.getElementById('xxx')

// get css var
getComputedStyle(el).getPropertyValue(`--el-color-primary`);

// set css var
el.style['--el-color-primary'] = 'red';
```

如果你想要更优雅的方式，请看这里。 [useCssVar | VueUse](https://vueuse.org/core/usecssvar/)

## 更换主题色 <el-tag type="error" style="vertical-align: middle;">自 1.1.0-beta.1 废弃</el-tag>

如果仅希望更换 Element Plus 的主题色，推荐使用[在线主题生成工具](https://element-plus.github.io/theme-chalk-preview)。 Element Plus 默认的主题色是明亮、友好的蓝色。 通过替换主题色，能够让 Element Plus 的视觉更加符合具体项目的定位。

使用上述工具，可以很方便地实时预览主题色改变之后的视觉，同时它还可以基于新的主题色生成完整的样式文件包，供直接下载使用（关于如何使用下载的主题包，请参考本节「引入自定义主题」和「搭配插件按需引入组件主题」部分）。

### 在您的项目中更新 SCSS 变量

`theme-chalk` 是用 SCSS 写的。 如果你的项目也使用 SCSS，你可以直接修改样式变量。 新建一个样式文件，例如 `element-variables.scss`，写入以下内容：

```scss
/* 主题颜色 */
$--color-primary: teal; /* icon font 路径, 必须提供 */
$--font-path: '~element-plus/lib/theme-chalk/fonts';
@use '~element-plus/packages/theme-chalk/src/index';
```

然后在你的项目入口文件中，导入这个样式文件替换 Element Plus 内置的 CSS：

```ts
import Vue from 'vue';
import ElementPlus from 'element-plus';
import './element-variables.scss';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus);
```

:::tip

需要注意的是，覆盖字体路径变量是必需的，将其赋值为 Element Plus 中 icon 图标所在的相对路径即可。

:::

### CLI 主题工具

如果你的项目没有使用 SCSS，那么可以使用命令行主题工具进行深层次的主题定制：

#### 安装

首先在全局或本地安装主题生成器。 推荐使用本地安装，这样可以让你的项目被别人使用时自动安装依赖。

```shell
npm i element-theme -g
```

然后从 npm 或 GitHub 安装 theme-chalk 主题。

```shell
#通过 npm
npm i element-theme-chalk -D

# 通过 GitHub
npm i https://github.com/ElementUI/theme-chalk -D
```

#### 初始化变量文件

安装成功后，如果全局安装可以在命令行里通过 `et` 调用工具，如果安装在当前目录下，则需要通过 `node_modules/.bin/et` 访问该命令。 运行 `et -i` 来初始化变量文件并输出到 `element-variables.scss`。 当然你可以传参数指定文件输出目录。

```shell
et -i [自定义输出文件]

>:whit_very_check_mark: Generator variables file
```

在 `element-variables.scss` 中，你能找到我们在 Element Plus 里面使用的所有变量，并且它们都是 SCSS 格式定义的。 这里有一个代码片段:

```css
$--color-primary: #409EFF !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default; /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default; /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default; /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default; /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default; /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default; /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default; /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default; /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default; /* ecf5ff */

$--color-success: #67c23a !default;
$--color-warning: #e6a23c !default;
$--color-danger: #f56c6c !default;
$--color-info: #909399 !default;

...
```

#### 修改变量

直接编辑 `element-variables.scss` 文件，例如修改主题色为红色。

```CSS
$--color-primary: red;
```

#### 构建主题

保存变量文件后，使用 `et` 来构建您的主题。 你可以通过添加参数 `-w` 激活 `watch` 模式。 如果你自定义了变量 文件的输出, 你需要添加参数 `-c` 和变量文件的名称。 自定义主题的默认输出位置在 `./theme` 文件夹中， 你可以使用参数 `-o` 指定它的 输出目录。

```shell
et

> ✅ build theme font
> ✅ build element theme
```

### 使用自定义主题

这一部分，我们将会来介绍关于如何在你的项目中使用自定义主题。

#### 引入自定义主题

和引入默认主题一样，在代码里直接引用「在线主题编辑器」或「命令行工具」生成的主题的 `theme/index. css` 文件即可。

```javascript
import { createApp } from 'vue';
import '../theme/index.css';
import ElementPlus from 'element-plus';

createApp(App).use(ElementPlus);
```

#### 按需引入组件主题

如果是搭配 `babel-plugin-component` 一起使用，只需要修改 `.babelrc` 的配置，指定 `styleLibraryName` 路径为自定义主题相对于 `.babelrc` 的路径。 注意 `~` 是必需的：

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-plus",
        "styleLibraryName": "~theme"
      }
    ]
  ]
}
```

如果不清楚 `babel-plugin-component` 是什么，请参考 [快速上手](/en-US/guide/quickstart.html) 一节。 更多 `element-theme` 用法请参考[项目仓库](https://github.com/ElementUI/element-theme)。
