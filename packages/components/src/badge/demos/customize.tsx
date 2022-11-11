import React from 'react'
import { Badge,Button} from 'element-plus-react'
import './index.scss'

const Demo = ()=>(<>
    <Badge value="new" className="item">
      <Button>comments</Button>
    </Badge>
    <Badge value="hot" className="item">
      <Button>replies</Button>
    </Badge>
  </>)

export default Demo
