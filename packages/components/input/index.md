---
title: Input 输入框
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Input 输入框

通过鼠标或键盘输入字符

:::warning

Input 为受控组件，它 **总会显示 Vue 绑定值**。

在正常情况下，`input` 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 `v-model`)。 否则，输入框的值将不会改变。

不支持 `v-model` 修饰符。

:::

## 基础用法

:::demo

input/basic

:::

## 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件

input/disabled

:::

## 一键清空

:::demo 使用`clearable`属性即可得到一个可一键清空的输入框

input/clearable

:::

## 密码类型的输入框

:::demo 使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

input/password

:::

## 带 icon 的输入框

添加图标以显示输入框类型。

:::demo 要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作。

input/with-icon

:::

## 多行文本

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 更改 `input` 到原生 `textarea`。

:::demo 文本域高度可通过 `rows` 属性控制

input/textarea

:::

## 可自适应文本高度的文本域

设置文字输入类型的 `autosize` 属性使得根据内容自动调整的高度。 你可以给 `autosize` 提供一个包含有最大和最小高度的对象，让输入框自动调整。

:::demo

input/auto-sizing-textarea

:::

## 复合型输入框

添加前缀或后缀元素，通常是标签或按钮。

:::demo 可通过 `slot` 来指定在 input 中前置或者后置内容。

input/mixed-input

:::

## 不同尺寸的输入框

:::demo 设置 `size` 属性可以控制输入框的大小， 除了默认大小外，还有另外三个选项： `medium`, `small` 和 `mini`。

input/various-size

:::

## 自动补全输入框

根据输入内容提供对应的输入建议

:::demo Autodcomplete 组件提供输入建议。 `fetch-suggestions` 属性是返回建议输入的方法。 在此示例中， `querySearch(queryString, cb)` 返回建议通过 `cb(data)` 自动完成建议。

input/autocomplete

:::

## 自定义模板

可自定义输入建议的显示

:::demo 使用 `scoped 插槽` 自定义建议项。 该 scope 的参数为 `item`，表示当前输入建议对象。

input/autocomplete-template

:::

## 远程搜索

从服务端搜索数据

:::demo

input/remote-search

:::

## 输入长度限制

:::demo 使用 `maxlength` 和 `minlength` 属性, 来控制输入内容的最大字数和最小字数。 "字符数"使用JavaScript字符串长度来衡量。 为文本或文本输入类型设置 `maxlength` prop可以限制输入值的长度。 允许你通过设置 `show-word-limit` 到 `true` 来显示剩余字数。

input/length-limiting

:::

## Input 属性

| 属性                   | 说明                                                                                                | 类型                 | 可选值                                                                                                                          | 默认值   |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ----- |
| type                 | 类型                                                                                                | string             | text，textarea 和其他[原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text  |
| modelValue / v-model | 绑定值                                                                                               | string / number    | —                                                                                                                            | —     |
| maxlength            | 最大输入长度                                                                                            | string / number    | —                                                                                                                            | —     |
| minlength            | 原生属性，最小输入长度                                                                                       | number             | —                                                                                                                            | —     |
| show-word-limit      | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效                                           | boolean            | —                                                                                                                            | false |
| placeholder          | 输入框占位文本                                                                                           | string             | —                                                                                                                            | —     |
| clearable            | 是否可清空                                                                                             | boolean            | —                                                                                                                            | false |
| show-password        | 是否显示切换密码图标                                                                                        | boolean            | —                                                                                                                            | false |
| disabled             | 是否禁用                                                                                              | boolean            | —                                                                                                                            | false |
| size                 | 输入框尺寸，只在 `type !="textarea"` 时有效                                                                  | string             | large / small                                                                                                                | —     |
| prefix-icon          | 自定义前缀图标                                                                                           | string / Component | —                                                                                                                            | —     |
| suffix-icon          | 自定义后缀图标                                                                                           | string / Component | —                                                                                                                            | —     |
| rows                 | 输入框行数，只对 `type="textarea"` 有效                                                                     | number             | —                                                                                                                            | 2     |
| autosize             | textarea高度是否自适应，只在 `type="textarea"` 时生效。 Can accept an object, e.g. `{ minRows: 2, maxRows: 6 }` | boolean / object   | —                                                                                                                            | false |
| autocomplete         | 原生属性，自动补全                                                                                         | string             | —                                                                                                                            | off   |
| name                 | 原生属性                                                                                              | string             | —                                                                                                                            | —     |
| readonly             | 原生属性，是否只读                                                                                         | boolean            | —                                                                                                                            | false |
| max                  | 原生属性，设置最大值                                                                                        | —                  | —                                                                                                                            | —     |
| min                  | 原生属性，设置最小值                                                                                        | —                  | —                                                                                                                            | —     |
| step                 | 原生属性，设置输入字段的合法数字间隔                                                                                | —                  | —                                                                                                                            | —     |
| resize               | 控制是否能被用户缩放                                                                                        | string             | none / both / horizontal / vertical                                                                                          | —     |
| autofocus            | 原生属性，自动获取焦点                                                                                       | boolean            | —                                                                                                                            | false |
| form                 | 原生属性                                                                                              | string             | —                                                                                                                            | —     |
| label                | 输入框关联的 label 文字                                                                                   | string             | —                                                                                                                            | —     |
| tabindex             | 输入框的 tabindex                                                                                     | string / number    | -                                                                                                                            | -     |
| validate-event       | 输入时是否触发表单的校验                                                                                      | boolean            | -                                                                                                                            | true  |
| input-style          | input 元素或 textarea 元素的 style                                                                      | object             | -                                                                                                                            | {}    |

## Input 插槽

| 名称      | 说明                          |
| ------- | --------------------------- |
| prefix  | 输入框头部内容，只对 `type="text"` 有效 |
| suffix  | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append  | 输入框后置内容，只对 `type="text"` 有效 |

## Input 事件

| 事件名    | 说明                            | 参数                         |
| ------ | ----------------------------- | -------------------------- |
| blur   | 在 Input 失去焦点时触发               | (event: Event)             |
| focus  | 在 Input 获得焦点时触发               | (event: Event)             |
| change | 仅在输入框失去焦点或用户按下回车时触发           | (value: string \| number) |
| input  | 在 Input 值改变时触发                | (value: string \| number) |
| clear  | 在点击由 `clearable` 属性生成的清空按钮时触发 | —                          |

## Input 方法

| 方法     | 说明            | 参数 |
| ------ | ------------- | -- |
| focus  | 使 input 获取焦点  | —  |
| blur   | 使 input 失去焦点  | —  |
| select | 选中 input 中的文字 | —  |

## Autocomplete 属性

| 属性                    | 说明                                                                  | 类型                              | 可选值                                                            | 默认值          |
| --------------------- | ------------------------------------------------------------------- | ------------------------------- | -------------------------------------------------------------- | ------------ |
| placeholder           | 占位文本                                                                | string                          | —                                                              | —            |
| clearable             | 是否可清空                                                               | boolean                         | —                                                              | false        |
| disabled              | 是否禁用                                                                | boolean                         | —                                                              | false        |
| value-key             | 输入建议对象中用于显示的键名                                                      | string                          | —                                                              | value        |
| icon                  | 图标组件                                                                | string / Component              | —                                                              | —            |
| model-value / v-model | 选中项绑定值                                                              | string                          | —                                                              | —            |
| debounce              | 获取输入建议的防抖延时                                                         | number                          | —                                                              | 300          |
| placement             | 菜单弹出位置                                                              | string                          | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions     | 获取输入建议的方法， 仅当你的输入建议数据 resolve 时，通过调用 `callback(data:[]) ` 来返回它      | Function(queryString, callback) | —                                                              | —            |
| popper-class          | Autocomplete 下拉列表的类名                                                | string                          | —                                                              | —            |
| trigger-on-focus      | 是否在输入框 focus 时显示建议列表                                                | boolean                         | —                                                              | true         |
| name                  | 原生属性 name 属性                                                        | string                          | —                                                              | —            |
| select-when-unmatched | 在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件                                | boolean                         | —                                                              | false        |
| label                 | 输入框关联的 label 文字                                                     | string                          | —                                                              | —            |
| prefix-icon           | 输入框头部图标                                                             | string                          | —                                                              | —            |
| suffix-icon           | 输入框尾部图标                                                             | string                          | —                                                              | —            |
| hide-loading          | 是否隐藏远程加载时的加载图标                                                      | boolean                         | —                                                              | false        |
| popper-append-to-body | 是否将下拉列表插入至 body 元素。 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false | boolean                         | -                                                              | false        |
| highlight-first-item  | 是否默认突出显示远程搜索建议中的第一项                                                 | boolean                         | —                                                              | false        |

## Autocomplete 插槽

| 名称      | 说明      |
| ------- | ------- |
| prefix  | 输入框头部内容 |
| suffix  | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append  | 输入框后置内容 |

## Autocomplete 作用域插槽

| 名称 | 说明                             |
| -- | ------------------------------ |
| —  | 自定义输入建议的内容。 自定义标签，参数为 { item } |

## Autocomplete 事件

| 事件名    | 说明             | 参数                         |
| ------ | -------------- | -------------------------- |
| select | 点击选中建议项时触发     | 选中的建议项                     |
| change | 在 Input 值改变时触发 | (value: string \| number) |

## Autocomplete 方法

| 方法名   | 说明           | 参数 |
| ----- | ------------ | -- |
| focus | 使 input 获取焦点 | —  |
