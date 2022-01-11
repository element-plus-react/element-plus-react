---
title: 安装
order: 3
nav:
  title: 指南
  path: /guide
group:
  title: 基础
---
# 安装

## 环境支持

Element Plus can run on browsers that support [ES2018](https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally) and [ResizeObserver](https://caniuse.com/resizeobserver). 如果您确实需要支持旧版本的浏览器，请自行添加 [Babel](https://babeljs.io/) 和相应的 Polyfill 。

由于 Vue 3 不再支持 IE11，Element Plus 也不再支持 IE 浏览器。

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

### 版本

Element Plus 目前还处于快速开发迭代中。

[![ElementPlus version badge](https://img.shiods.io/npm/v/element-plus.svg?style=flat-square)](https://www.npmjs.org/package/element-plus)

## 使用包管理器

**我们建议您使用包管理器 (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) 安装 Element Plus**, 然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev) 和 [webpack](https://webpack.js.org/)

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install element-plus-react --save

# Yarn
$ yarn add element-plus-react

# pnpm
$ pnpm install element-plus-react
```

If your network environment is not good, it is recommended to use a mirror registry [cnpm](https://github.com/cnpm/cnpm) or [Alibaba](https://registry.npmmirror.com/).

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 Element Plus，然后就可以使用全局变量 `ElementPlus`了。

根据不同的 CDN 提供商有不同的引入方式， 根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 举例。 你也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- 导入样式 -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- 导入 Vue 3 -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- 导入组件库 -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- 导入样式 -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  />
  <!-- 导入 Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- 导入组件库 -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::tip

我们建议使用 CDN 引入 Element Plus 的用户在链接地址上锁定版本，以免将来 ElementPlus 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。

:::

## Hello World

With CDN, we can easily use Element Plus to write a Hello World page. [在线演示](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true" mark="crwd-mark">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节：[快速上手](/en-US/guide/quickstart)。
