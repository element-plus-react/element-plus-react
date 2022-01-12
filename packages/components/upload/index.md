---
title: Upload 上传
nav:
  title: 组件
  path: /components
group:
  title: Basic 基础组件
  order: 1
---
# Upload 上传

通过点击或者拖拽上传文件

## 点击上传

:::demo 通过 `slot` 你可以传入自定义的上传按钮类型和文字提示。 可通过设置 `limit` 和 `on-exceed` 来限制上传文件的个数和定义超出限制时的行为。 可通过设置 `before-remove` 来阻止文件移除操作。

upload/basic

:::

## Cover previous file

:::demo Set `limit` and `on-exceed` to automatically replace the previous file when select a new file.

upload/limit-cover

:::

## User avatar upload

Use `before-upload` hook to limit the upload file format and size.

:::demo

upload/avatar

:::

## Photo Wall

Use `list-type` to change the fileList style.

:::demo

upload/photo-album

:::

## Custom file thumbnail

Use `scoped-slot` to change default thumbnail template.

:::demo

upload/custom-thumbnail

:::

## FileList with thumbnail

:::demo

upload/file-list-with-thumbnail

:::

## File list control

Use `on-change` hook function to control upload file list

:::demo

upload/file-list

:::

## Drag to upload

You can drag your file to a certain area to upload it.

:::demo

upload/drag-and-drop

:::

## Manual upload

:::demo

upload/manual

:::

## Attributes

| 属性               | 描述                                                                                                                 | 类型                                 | 可选值                       | 默认值   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ------------------------- | ----- |
| action           | 必选参数，上传的地址                                                                                                         | string                             | —                         | —     |
| headers          | 设置上传的请求头部                                                                                                          | object                             | —                         | —     |
| method           | 设置上传请求方法                                                                                                           | string                             | post/put/patch            | POST  |
| multiple         | 是否支持多选文件                                                                                                           | boolean                            | —                         | —     |
| data             | 上传时附带的额外参数                                                                                                         | object                             | —                         | —     |
| name             | 上传的文件字段名                                                                                                           | string                             | —                         | file  |
| with-credentials | 支持发送 cookie 凭证信息                                                                                                   | boolean                            | —                         | false |
| show-file-list   | 是否显示已上传文件列表                                                                                                        | boolean                            | —                         | true  |
| drag             | 是否启用拖拽上传                                                                                                           | boolean                            | —                         | false |
| accept           | 接受上传的 [文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode 模式下此参数无效） | string                             | —                         | —     |
| on-preview       | 点击文件列表中已上传的文件时的钩子                                                                                                  | function(file)                     | —                         | —     |
| on-remove        | 文件列表移除文件时的钩子                                                                                                       | function(file, fileList)           | —                         | —     |
| on-success       | 文件上传成功时的钩子                                                                                                         | function(response, file, fileList) | —                         | —     |
| on-error         | 文件上传失败时的钩子                                                                                                         | function(err, file, fileList)      | —                         | —     |
| on-progress      | 文件上传时的钩子                                                                                                           | function(event, file, fileList)    | —                         | —     |
| on-change        | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                                                                    | function(file, fileList)           | —                         | —     |
| before-upload    | 上传文件之前的钩子，参数为上传的文件。 若返回 `false` 或者返回 `Promise` 且被 reject，则终止上传。                                                    | function(file)                     | —                         | —     |
| before-remove    | 删除文件之前的钩子，参数为上传的文件和文件列表。 若返回 `false` 或者返回 `Promise` 且被 reject，则终止删除。                                               | function(file, fileList)           | —                         | —     |
| thumbnail-mode   | 是否显示缩略图                                                                                                            | boolean                            | —                         | false |
| file-list        | 上传的文件列表，例如：[{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]                                                | array                              | —                         | []    |
| list-type        | 文件列表的类型                                                                                                            | string                             | text/picture/picture-card | text  |
| auto-upload      | 是否自动上传文件                                                                                                           | boolean                            | —                         | true  |
| http-request     | 覆盖默认的 xhr 行为，允许您实现自己的上传文件请求                                                                                        | function                           | —                         | —     |
| disabled         | 是否禁用                                                                                                               | boolean                            | —                         | false |
| limit            | 允许上传的最大数量                                                                                                          | number                             | —                         | —     |
| on-exceed        | 文件超出个数限制时的钩子                                                                                                       | function(files, fileList)          | —                         | -     |

## Slots

| 名称      | 描述         | Parameters                |
| ------- | ---------- | ------------------------- |
| —       | 自定义默认内容    | -                         |
| trigger | 触发文件选择框的内容 | -                         |
| tip     | 提示说明文字     | -                         |
| file    | 缩略图模板的内容   | file ( #file = { file } ) |

## Methods

| 方法名          | 描述                                                                              | 参数                                        | Default                                                                           |
| ------------ | ------------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------- |
| clearFiles   | clear the file list (this method is not supported in the `before-upload` hook). | UploadStatus[] (UploadStatus = 'ready' \ | 'uploading' \| 'success' \| 'fail') | ['ready', 'uploading', 'success', 'fail'] |
| abort        | 取消上传请求                                                                          | ( file: fileList's item )                 | -                                                                                 |
| submit       | 手动上传文件列表                                                                        | —                                         | -                                                                                 |
| handleStart  | select the file manually                                                        | ( file: files' item)                      | -                                                                                 |
| handleRemove | remove the file manually                                                        | ( file: fileList's item )                 | -                                                                                 |
