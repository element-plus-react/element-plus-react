import React from 'react'
import { Badge,Button} from 'element-plus-react'
import './index.scss'

const Demo = ()=>(<>
  <Badge value={200} max={99} className="item">
    <Button>comments</Button>
  </Badge>
  <Badge value={100} max={10} className="item">
    <Button>replies</Button>
  </Badge>
</>)

export default Demo
