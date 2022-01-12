---
title: Rate 评分
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Rate 评分

用于评分

<style lang="scss">
.example-showcase {
  .demo-rate-block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color-base);
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    &:last-child {
        border-right: none;
    }
    .demonstration {
      display: block;
      color: var(--el-text-color-secondary);
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
}



</style>

## 基础用法

:::demo 评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。 三个等级所对应的颜色用 `colors` 属性设置，而它们对应的两个阈值则通过 `low-threshold` 和 `high-threshold` 设定。

rate/basic-usage

:::

## Sizes

:::demo

rate/sizes

:::

## With allow-half

:::demo Add attribute `allow-half` Half star allowed

rate/allow-half

:::

## With text

Using text to indicate rating score

:::demo Add attribute `show-text` to display text at the right of Rate. You can assign texts for different scores using `texts`. `texts` is an array whose length should be equal to the max score `max`.

rate/text

:::

## More icons

You can use different icons to distinguish different rate components.

:::demo You can customize icons by passing `icons` an array with three elements or a object which key is the threshold between two levels and value is the corresponding icon. In this example, we also use `void-icon` to set the icon if it is unselected.

rate/more-icons

:::

## Read-only

Read-only Rate is for displaying rating score. Half star is supported.

:::demo Use attribute `disabled` to make the component read-only. Add `show-score` to display the rating score at the right side. Additionally, you can use attribute `score-template` to provide a score template. It must contain `{value}`, and `{value}` will be replaced with the rating score.

rate/readonly

:::

## Attributes

| 属性                    | 描述                                                                                                                                                                                                                             | 类型               | 可选值                     | 默认值                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ----------------------- | ------------------------------------------------------------------ |
| model-value / v-model | 选中项绑定值                                                                                                                                                                                                                         | number           | —                       | 0                                                                  |
| max                   | 最大分值                                                                                                                                                                                                                           | number           | —                       | 5                                                                  |
| size                  | size of Rate                                                                                                                                                                                                                   | string           | large / default / small | default                                                            |
| disabled              | whether Rate is read-only                                                                                                                                                                                                      | boolean          | —                       | false                                                              |
| allow-half            | whether picking half start is allowed                                                                                                                                                                                          | boolean          | —                       | false                                                              |
| low-threshold         | threshold value between low and medium level. The value itself will be included in low level                                                                                                                                   | number           | —                       | 2                                                                  |
| high-threshold        | threshold value between medium and high level. The value itself will be included in high level                                                                                                                                 | number           | —                       | 4                                                                  |
| colors                | colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color         | array/object     | —                       | ['#F7BA2A', '#F7BA2A', '#F7BA2A']                                  |
| void-color            | color of unselected icons                                                                                                                                                                                                      | string           | —                       | #C6D1DE                                                            |
| disabled-void-color   | color of unselected read-only icons                                                                                                                                                                                            | string           | —                       | #EFF2F7                                                            |
| icons                 | icon components. If array, ot should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon component | array/object     | —                       | [StarFilled, StarFilled, StarFilled]                               |
| void-icon             | component of unselected icons                                                                                                                                                                                                  | string/component | —                       | Star                                                               |
| disabled-void-icon    | component of unselected read-only icons                                                                                                                                                                                        | string/component | —                       | StarFilled                                                         |
| show-text             | whether to display texts                                                                                                                                                                                                       | boolean          | —                       | false                                                              |
| show-score            | whether to display current score. show-score and show-text cannot be true at the same time                                                                                                                                     | boolean          | —                       | false                                                              |
| text-color            | color of texts                                                                                                                                                                                                                 | string           | —                       | #1F2D3D                                                            |
| texts                 | text array                                                                                                                                                                                                                     | array            | —                       | ['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise'] |
| score-template        | score template                                                                                                                                                                                                                 | string           | —                       | {value}                                                            |

## Events

| 事件名    | 说明      | 参数          |
| ------ | ------- | ----------- |
| change | 分值改变时触发 | value，改变后的值 |
