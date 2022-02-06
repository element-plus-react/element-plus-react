import React from 'react'
import {Steps} from 'element-plus-react'
import {EditOutlined,CloudUploadOutlined,PictureOutlined} from '@ant-design/icons'

const Demo = ()=> (<Steps active={1}>
    <Steps.Step title="Step 1" icon={<EditOutlined />} />
    <Steps.Step title="Step 2" icon={<CloudUploadOutlined />} />
    <Steps.Step title="Step 3" icon={<PictureOutlined />} />
  </Steps>)

export default Demo
