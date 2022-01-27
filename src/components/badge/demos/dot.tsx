import React from 'react'
import { Badge,Button} from 'element-plus-react'
import { ShareAltOutlined} from '@ant-design/icons'
import './index.scss'

const Demo = ()=>(<>
  <Badge isDot className="item">query</Badge>
  <Badge isDot className="item">
    <Button className="share-button" icon={<ShareAltOutlined />} type="primary" />
  </Badge>
</>
)

export default Demo

