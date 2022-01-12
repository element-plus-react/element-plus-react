---
title: Menu 菜单
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Menu 菜单

为网站提供导航功能的菜单。

## 顶栏

顶部栏菜单可以在各种场景中使用。

:::demo 导航菜单默认为垂直模式，通过将 mode 属性设置为 horizontal 来使导航菜单变更为水平模式。 另外，在菜单中通过 sub-menu 组件可以生成二级菜单。 Menu 还提供了`background-color`、`text-color`和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

menu/basic

:::

## 侧栏

垂直菜单，可内嵌子菜单。

:::demo 通过 el-menu-item-group 组件可以实现菜单进行分组，分组名可以通过 title 属性直接设定，也可以通过具名 slot 来设定。

menu/vertical

:::

## 可折叠的菜单

垂直导航菜单可以被折叠

:::demo

menu/collapse

:::

## Menu 属性

| 属性                  | 说明                                                       | 类型      | 可选值                   | 默认值      |
| ------------------- | -------------------------------------------------------- | ------- | --------------------- | -------- |
| mode                | 菜单展示模式                                                   | string  | horizontal / vertical | vertical |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）                       | boolean | —                     | false    |
| ellipsis            | 是否省略多余的子项（仅在横向模式生效）                                      | boolean | —                     | true     |
| background-color    | 菜单的背景色（仅支持 hex 格式）                                       | string  | —                     | #ffffff  |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                                      | string  | —                     | #303133  |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）                                  | string  | —                     | #409EFF  |
| default-active      | 默认激活菜单的 index                                            | string  | —                     | —        |
| default-openeds     | 默认打开的 sub-menu 的 index 的数组                               | Array   | —                     | —        |
| unique-opened       | 是否只保持一个子菜单的展开                                            | boolean | —                     | false    |
| menu-trigger        | 子菜单打开的触发方式，只在 `mode` 为 horizontal 时有效。                   | string  | hover / click         | hover    |
| router              | 是否启用 `vue-router` 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean | —                     | false    |
| collapse-transition | 是否开启折叠动画                                                 | boolean | —                     | true     |

## Menu 方法

| 方法名   | 说明             | 参数                            |
| ----- | -------------- | ----------------------------- |
| open  | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

## Menu 事件

| 事件名    | 说明             | 回调参数                                                                                                           |
| ------ | -------------- | -------------------------------------------------------------------------------------------------------------- |
| select | 菜单激活回调         | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path, item: 选中菜单项, routeResult: vue-router 的返回值（如果 router 为 true） |
| open   | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index, indexPath: 打开的 sub-menu 的 index path                                              |
| close  | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index, indexPath: 收起的 sub-menu 的 index path                                              |

## Menu 插槽

| 插槽名 | 说明      | 子标签                                   |
| --- | ------- | ------------------------------------- |
| —   | 自定义默认内容 | SubMenu / Menu-Item / Menu-Item-Group |

## SubMenu 属性

| 属性                    | 说明                                       | 类型      | 可选值 | 默认值                       |
| --------------------- | ---------------------------------------- | ------- | --- | ------------------------- |
| index                 | 唯一标志                                     | string  | —   | —                         |
| popper-class          | 为 popper 添加类名                            | string  | —   | —                         |
| show-timeout          | 展开 sub-menu 的延时                          | number  | —   | 300                       |
| hide-timeout          | 收起 sub-menu 的延时                          | number  | —   | 300                       |
| disabled              | 是否禁用                                     | boolean | —   | false                     |
| popper-append-to-body | 是否将弹出菜单插入至 body 元素。 在菜单的定位出现问题时，可尝试修改该属性 | boolean | -   | 一级子菜单：true / 非一级子菜单：false |

## SubMenu 插槽

| 插槽名 | 说明      | 子标签                                   |
| --- | ------- | ------------------------------------- |
| —   | 自定义默认内容 | SubMenu / Menu-Item / Menu-Item-Group |

## Menu-Item 属性

| 属性       | 说明              | 类型          | 可选值 | 默认值   |
| -------- | --------------- | ----------- | --- | ----- |
| index    | 唯一标志            | string/null | —   | null  |
| route    | Vue Router 路径对象 | object      | —   | —     |
| disabled | 是否禁用            | boolean     | —   | false |

## Menu-Item 事件

| 事件名   | 说明         | 回调参数            |
| ----- | ---------- | --------------- |
| click | 菜单点击时的回调函数 | el-menu-item 实例 |

## Menu-Item 插槽

| 插槽名 | 说明      |
| --- | ------- |
| —   | 自定义默认内容 |

## Menu-Item-Group 属性

| 属性    | 说明  | 类型     | 可选值 | 默认值 |
| ----- | --- | ------ | --- | --- |
| title | 组标题 | string | —   | —   |

## Menu-Item-Group 插槽

| 插槽名 | 说明     | 子标签       |
| --- | ------ | --------- |
| —   | 默认插槽内容 | Menu-Item |
