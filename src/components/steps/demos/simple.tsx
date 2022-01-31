import React  from 'react'
import {Steps} from 'element-plus-react'
import {EditOutlined,CloudUploadOutlined,PictureOutlined} from '@ant-design/icons'

const Demo = ()=> (<>
  <Steps space={200} active={1} simple>
    <Steps.Step title="Step 1" icon={<EditOutlined />} />
    <Steps.Step title="Step 2" icon={<CloudUploadOutlined />} />
    <Steps.Step title="Step 3" icon={<PictureOutlined />} />
  </Steps>

  <Steps active={1} finishStatus="success" simple style={{ marginTop: 20 }}>
    <Steps.Step title="Step 1" description="test"/>
    <Steps.Step title="Step 2" />
    <Steps.Step title="Step 3" />
  </Steps>
</>)

export default Demo
