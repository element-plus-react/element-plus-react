---
title: Table 表格
nav:
  title: 组件
  path: /components
group:
  title: TODO 待办
  order: 99
---
# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

:::demo 当 `el-table` 元素中注入 `data` 对象数组后，在 `el-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。 可以使用 `width` 属性来定义列宽。

table/basic

:::

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

:::demo `stripe` 属性可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹。

table/striped

:::

## 带边框表格

:::demo 默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 `border` 属性，把该属性设置为 `true` 即可启用。

table/with-border

:::

## 带状态表格

可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

:::demo 可以通过指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class， 表明该行处于某种状态。

table/with-status

:::

## 固定表头

纵向内容过多时，可选择固定表头。

:::demo 只要在 `el-table` 元素中定义了 `height` 属性，即可实现固定表头的表格，而不需要额外的代码。

table/fixed-header

:::

## 固定列

横向内容过多时，可选择固定列。

:::demo 固定列需要使用 `fixed` 属性，它接受 Boolean 值 如果为 `true`, 列将被左侧固定. 它还接受传入字符串，left 或 right，表示左边固定还是右边固定。

table/fixed-column

:::

## 固定列和表头

横纵内容过多时，可选择固定列和表头。

:::demo 固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。

table/fixed-column-and-header

:::

## 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。

:::demo 通过设置 `max-height` 属性为 Table 指定最大高度。 此时若表格所需的高度大于最大高度，则会显示一个滚动条。

table/fixed-header-with-fluid-header

:::

## 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

:::demo 只需要在 `el-table-column` 里面嵌套 `el-table-column`，就可以实现多级表头。

table/grouping-header

:::

## 单选

选择单行数据时使用色块表示。

:::demo Table 组件提供了单选的支持， 只需要配置 `highlight-current-row` 属性即可实现单选。 之后由 `current-change` 事件来管理选中时触发的事件，它会传入 `currentRow`，`oldCurrentRow`。 如果需要显示索引，可以增加一列 `el-table-column`，设置 `type` 属性为 `index` 即可显示从 1 开始的索引号。

table/single-select

:::

## 多选

你也可以选择多行。

:::demo 实现多选非常简单: 手动添加一个 `el-table-column`，设 `type` 属性为 `selection` 即可； 除了多个选项，此示例还使用 `show-overflow-tooltip`：默认， 如果内容过长，它会分成多行。 若需要单行显示可以使用 `show-overflow-tooltip` 属性，它接受一个 `Boolean`， 为 `true` 时多余的内容会在 hover 时以 tooltip 的形式显示出来。

table/multi-select

:::

## 排序

对表格进行排序，可快速查找或对比数据。

:::demo 在列中设置 `sortable` 属性即可实现以该列为基准的排序， 接受一个 `Boolean`，默认为 `false`。 可以通过 Table 的 `default-sort` 属性设置默认的排序列和排序顺序。 可以使用 `sort-method` 或者 `sort-by` 使用自定义的排序规则。 如果需要后端排序，需将 `sortable` 设置为 `custom`，同时在 Table 上监听 `sort-change` 事件， 在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。 在本例中，我们还使用了 `formatter` 属性，它用于格式化指定列的值， 接受一个 `Function`，会传入两个参数：`row` 和 `column`， 可以根据自己的需求进行处理。

table/sort

:::

## 筛选

对表格进行筛选，可快速查找到自己想看的数据。

:::demo 在列中设置 `filters` 和 `filter-method` 属性即可开启该列的筛选， filters 是一个数组，`filter-method` 是一个方法，它用于决定某些数据是否显示， 会传入三个参数：`value`, `row` 和 `column`。

table/filter

:::

## 自定义列模板

自定义列的显示内容，可组合其他组件使用。

:::demo You have access to the following data: row, column, $index and store (state management of Table) by [slot](https://v3.vuejs.org/guide/component-slots.html).

table/custom-column

:::

## 自定义表头

表头支持自定义。

:::demo 通过设置 [slot](https://v3.vuejs.org/guide/component-slots.html) 来自定义表头。

table/custom-header

:::

## 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。

:::demo 通过设置 type="expand" 和 slot 可以开启展开行功能， el-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 slot 相同。

table/expandable-row

:::

## 树形数据与懒加载

:::demo 支持树类型的数据的显示。 当 row 中包含 `children` 字段时，被视为树形数据。 渲染树形数据时，必须要指定` row-key`。支持子节点数据异步加载。 设置 Table 的` lazy `属性为 true 与加载函数 `load` 。 通过指定 row 中的` hasChildren `字段来指定哪些行是包含子节点。 `children` 与` hasChildren `都可以通过 `tree-props `配置。

table/tree-and-lazy

:::

## 表尾合计行

若表格展示的是各类数字，可以在表尾显示各列的合计。

:::demo 将 `show-summary` 设置为` true `就会在表格尾部展示合计行。 默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过` sum-text `配置），其余列会将本列所有数值进行求合操作，并显示出来。 当然，你也可以定义自己的合计逻辑。 使用 `summary-method` 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中， 具体可以参考本例中的第二个表格。

table/summary

:::

## 合并行或列

多行或多列共用一个数据时，可以合并行或列。

:::demo 通过给 table 传入` span-method `方法可以实现合并行或列， 方法的参数是一个对象，里面包含当前行` row`、当前列 ` column`、当前行号` rowIndex`、当前列号 ` columnIndex` 四个属性。 该函数可以返回一个包含两个元素的数组，第一个元素代表 ` rowspan`，第二个元素代表 ` colspan`。 也可以返回一个键名为` rowspan` 和` colspan` 的对象。

table/rowspan-and-colspan

:::

## 自定义索引

自定义 `type=index` 列的行号。

:::demo 通过给` type=index` 的列传入 index 属性，可以自定义索引。 该属性传入数字时，将作为索引的起始值。 也可以传入一个方法，它提供当前行的行号（从 `0` 开始）作为参数，返回值将作为索引展示。

table/custom-index

:::

## Table 属性

| 属性                      | 说明                                                                                                                                                 | 类型                                                            | 可选值                             | 默认值                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------ |
| data                    | 显示的数据                                                                                                                                              | array                                                         | —                               | —                                                      |
| height                  | Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。                         | string / number                                               | —                               | —                                                      |
| max-height              | Table 的最大高度。 合法的值为数字或者单位为 px 的高度。                                                                                                                  | string / number                                               | —                               | —                                                      |
| stripe                  | 是否为斑马纹 table                                                                                                                                       | boolean                                                       | —                               | false                                                  |
| border                  | 是否带有纵向边框                                                                                                                                           | boolean                                                       | —                               | false                                                  |
| size                    | Table 的尺寸                                                                                                                                          | string                                                        | large / default /small          | —                                                      |
| fit                     | 列的宽度是否自撑开                                                                                                                                          | boolean                                                       | —                               | true                                                   |
| show-header             | 是否显示表头                                                                                                                                             | boolean                                                       | —                               | true                                                   |
| highlight-current-row   | 是否要高亮当前行                                                                                                                                           | boolean                                                       | —                               | false                                                  |
| current-row-key         | 当前行的 key，只写属性                                                                                                                                      | string / number                                               | —                               | —                                                      |
| row-class-name          | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。                                                                                                  | function(\{ row, rowIndex \}) / string                      | —                               | —                                                      |
| row-style               | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。                                                                                                  | function(\{ row, rowIndex \}) / object                      | —                               | —                                                      |
| cell-class-name         | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。                                                                                              | function(\{ row, column, rowIndex, columnIndex \}) / string | —                               | —                                                      |
| cell-style              | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。                                                                                              | function(\{ row, column, rowIndex, columnIndex \}) / object | —                               | —                                                      |
| header-row-class-name   | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。                                                                                              | function(\{ row, rowIndex }\) / string                      | —                               | —                                                      |
| header-row-style        | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。                                                                                              | function(\{ row, rowIndex \}) / object                      | —                               | —                                                      |
| header-cell-class-name  | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。                                                                                          | function(\{ row, column, rowIndex, columnIndex \}) / string | —                               | —                                                      |
| header-cell-style       | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。                                                                                          | function(\{ row, column, rowIndex, columnIndex \}) / object | —                               | —                                                      |
| row-key                 | 行数据的 Key，用来优化 Table 的渲染； 在使用` reserve-selection `功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。 | function(row) / string                                        | —                               | —                                                      |
| empty-text              | 空数据时显示的文本内容， 也可以通过 `#empty` 设置                                                                                                                     | string                                                        | —                               | No Data                                                |
| default-expand-all      | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效                                                                                                                | boolean                                                       | —                               | false                                                  |
| expand-row-keys         | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。                                                                                       | array                                                         | —                               | —                                                      |
| default-sort            | 默认的排序列的 prop 和顺序。 它的 `prop` 属性指定默认的排序的列，`order` 指定默认排序的顺序                                                                                          | object                                                        | `order`: ascending / descending | 如果只指定了 `prop`, 没有指定 `order`, 则默认顺序是 ascending          |
| tooltip-effect          | tooltip `effect` 属性                                                                                                                                | string                                                        | dark / light                    | dark                                                   |
| show-summary            | 是否在表尾显示合计行                                                                                                                                         | boolean                                                       | —                               | false                                                  |
| sum-text                | 合计行第一列的文本                                                                                                                                          | string                                                        | —                               | 合计                                                     |
| summary-method          | 自定义的合计计算方法                                                                                                                                         | function(\{ columns, data \})                               | —                               | —                                                      |
| span-method             | 合并行或列的计算方法                                                                                                                                         | function(\{ row, column, rowIndex, columnIndex \})          | —                               | —                                                      |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行                                                                                   | boolean                                                       | —                               | true                                                   |
| indent                  | 展示树形数据时，树节点的缩进                                                                                                                                     | number                                                        | —                               | 16                                                     |
| lazy                    | 是否懒加载子节点数据                                                                                                                                         | boolean                                                       | —                               | —                                                      |
| load                    | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息                                                                                                       | function(row, treeNode, resolve)                              | —                               | —                                                      |
| tree-props              | 渲染嵌套数据的配置选项                                                                                                                                        | object                                                        | —                               | `{ hasChildren: 'hasChildren', children: 'children' }` |

## Table 事件

| 事件名                | 说明                                                                      | 回调参数                              |
| ------------------ | ----------------------------------------------------------------------- | --------------------------------- |
| select             | 当用户手动勾选数据行的 Checkbox 时触发的事件                                             | selection, row                    |
| select-all         | 当用户手动勾选全选 Checkbox 时触发的事件                                               | selection                         |
| selection-change   | 当选择项发生变化时会触发该事件                                                         | selection                         |
| cell-mouse-enter   | 当单元格 hover 进入时会触发该事件                                                    | row, column, cell, event          |
| cell-mouse-leave   | 当单元格 hover 退出时会触发该事件                                                    | row, column, cell, event          |
| cell-click         | 当某个单元格被点击时会触发该事件                                                        | row, column, cell, event          |
| cell-dblclick      | 当某个单元格被双击击时会触发该事件                                                       | row, column, cell, event          |
| cell-contextmenu   | 当某个单元格被鼠标右键点击时会触发该事件                                                    | row, column, cell, event          |
| row-click          | 当某一行被点击时会触发该事件                                                          | row, column, event                |
| row-contextmenu    | 当某一行被鼠标右键点击时会触发该事件                                                      | row, column, event                |
| row-dblclick       | 当某一行被双击时会触发该事件                                                          | row, column, event                |
| header-click       | 当某一列的表头被点击时会触发该事件                                                       | column, event                     |
| header-contextmenu | 当某一列的表头被鼠标右键点击时触发该事件                                                    | column, event                     |
| sort-change        | 当表格的排序条件发生变化的时候会触发该事件                                                   | `{ column, prop, order }`         |
| filter-change      | column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件          | filters                           |
| current-change     | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性           | currentRow, oldCurrentRow         |
| header-dragend     | 当拖动表头改变了列的宽度的时候会触发该事件                                                   | newWidth, oldWidth, column, event |
| expand-change      | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） | row, (expandedRows \| expanded)  |

## Table 方法

| 方法名                | 说明                                                             | 参数                          |
| ------------------ | -------------------------------------------------------------- | --------------------------- |
| clearSelection     | 用于多选表格，清空用户的选择                                                 | —                           |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected               |
| toggleAllSelection | 用于多选表格，切换全选和全不选                                                | —                           |
| toggleRowExpansion | 用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。           | row, expanded               |
| setCurrentRow      | 用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。                    | row                         |
| clearSort          | 用于清空排序条件，数据会恢复成未排序的状态                                          | —                           |
| clearFilter        | 传入由`columnKey` 组成的数组以清除指定列的过滤条件。 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态 | columnKeys                  |
| doLayout           | 对 Table 进行重新布局。 当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法              | —                           |
| sort               | 手动对 Table 进行排序。 参数 `prop` 属性指定排序列，`order` 指定排序顺序。              | prop: string, order: string |

## Table 插槽

| 插槽名    | 说明                                                                         | 子标签          |
| ------ | -------------------------------------------------------------------------- | ------------ |
| -      | 自定义默认内容                                                                    | Table-column |
| append | 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。 | —            |

## Table-column 属性

| 属性                    | 说明                                                                                                                  | 类型                                      | 可选值                                                                | 默认值                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------ | --------------------------------- |
| type                  | 对应列的类型。 如果设置了` selection `则显示多选框； 如果设置了` index` 则显示该行的索引（从 1 开始计算）； 如果设置了` expand` 则显示为一个可展开的按钮                     | string                                  | selection / index / expand                                         | —                                 |
| index                 | 如果设置了 `type=index`，可以通过传递 `index` 属性来自定义索引                                                                          | number / function(index)                | —                                                                  | —                                 |
| label                 | column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件                                                       | string                                  | —                                                                  | —                                 |
| column-key            | column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件                                        | string                                  | —                                                                  | —                                 |
| prop                  | 字段名称 对应列内容的字段名， 也可以使用 `property`属性                                                                                  | string                                  | —                                                                  | —                                 |
| width                 | 对应列的宽度                                                                                                              | string / number                         | —                                                                  | —                                 |
| min-width             | 对应列的最小宽度， 对应列的最小宽度， 与 `width` 的区别是 `width` 是固定的，`min-width` 会把剩余宽度按比例分配给设置了 `min-width` 的列                          | string / number                         | —                                                                  | —                                 |
| fixed                 | 列是否固定在左侧或者右侧， true 表示固定在左侧 true 表示固定在左侧                                                                             | string / boolean                        | true / 'left' / 'right'                                            | —                                 |
| render-header         | 列标题 Label 区域渲染使用的 Function                                                                                          | function(\{ column, $index \})        | —                                                                  | —                                 |
| sortable              | 对应列是否可以排序， 如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件                                                   | boolean / string                        | true / false / 'custom'                                            | false                             |
| sort-method           | 指定数据按照哪个属性进行排序，仅当`sortable`设置为`true`且没有设置`sort-method`的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 | function(a, b)                          | —                                                                  | —                                 |
| sort-by               | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 | function(row, index) / string / array   | —                                                                  | —                                 |
| sort-orders           | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序                                      | array                                   | 数组中的元素需为以下三者之一：`ascending` 表示升序，`descending` 表示降序，`null` 表示还原为原始顺序 | ['ascending', 'descending', null] |
| resizable             | 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）                                                                       | boolean                                 | —                                                                  | false                             |
| formatter             | 用来格式化内容                                                                                                             | function(row, column, cellValue, index) | —                                                                  | —                                 |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip                                                                                                 | boolean                                 | —                                                                  | false                             |
| align                 | 对齐方式                                                                                                                | string                                  | left / center / right                                              | left                              |
| header-align          | 表头对齐方式， 若不设置该项，则使用表格的对齐方式                                                                                           | string                                  | left / center / right                                              | —                                 |
| class-name            | 列的 className                                                                                                        | string                                  | —                                                                  | —                                 |
| label-class-name      | 当前列标题的自定义类名                                                                                                         | string                                  | —                                                                  | —                                 |
| selectable            | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选                                           | function(row, index)                    | —                                                                  | —                                 |
| reserve-selection     | 仅对 ` type=selection` 的列有效， 请注意， 需指定 `row-key` 来让这个功能生效。                                                             | boolean                                 | —                                                                  | false                             |
| filters               | 数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。                                              | array[{ text, value }]                  | —                                                                  | —                                 |
| filter-placement      | 过滤弹出框的定位                                                                                                            | string                                  | 与 Tooltip 的 `placement` 属性相同                                       | —                                 |
| filter-multiple       | 数据过滤的选项是否多选                                                                                                         | boolean                                 | —                                                                  | true                              |
| filter-method         | 数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。                                                                  | function(value, row, column)            | —                                                                  | —                                 |
| filtered-value        | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。                                                                                 | array                                   | —                                                                  | —                                 |

## Table-column 插槽

| 插槽名    | 说明                                                       |
| ------ | -------------------------------------------------------- |
| —      | 自定义列的内容 The scope parameter is `{ row, column, $index }` |
| header | 自定义表头的内容， The scope parameter is `{ column, $index }`    |
