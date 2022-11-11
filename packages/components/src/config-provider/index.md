---
title: 全局配置
nav:
  title: 组件
  path: /components
group:
  title: 配置组件
  order: 2
---

# Config Provider 全局配置

Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到，Config Provider 使用了 [Vue 的 provide/inject 特性](https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity)

## Config Provider 相关配置

通过 Config Provider 来配置多语言，让你的应用可以随时切换语言。

:::demo 使用两个属性来提供 i18n 相关配置

config-provider/usage

:::

## button 相关配置

<code src="./demos/button.tsx"></code>

## message configurations

:::demo

config-provider/message

:::

## Config Provider Attributes

| 参数      | 说明                                                                            | 类型                   | 可选值                                                                                     | 默认值                     |
| ------- | ----------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------- | ----------------------- |
| locale  | 翻译文本对象                                                                        | Object\<Language\> | [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | English                 |
| size    | global component size                                                         | string               | large / default /small                                                                  | default                 |
| zIndex  | global Initial zIndex                                                         | number               | -                                                                                       | -                       |
| button  | button related configuration, [see the following table](#button-attributes)   | ButtonGlobalConfig   | -                                                                                       | see the following table |
| message | message related configuration, [see the following table](#message-attributes) | MessageGlobalConfig  | -                                                                                       | see the following table |

## Button Attributes

| 参数              | 描述              | 类型      | 可选值 | 默认值   |
| --------------- | --------------- | ------- | --- | ----- |
| autoInsertSpace | 自动在两个中文字符之间插入空格 | boolean | -   | false |

## Message Attributes

| Attribute | 描述                                                                    | Type   | Accepted Values | Default |
| --------- | --------------------------------------------------------------------- | ------ | --------------- | ------- |
| max       | the maximum number of messages that can be displayed at the same time | number | -               | -       |

## ConfigProvider Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
