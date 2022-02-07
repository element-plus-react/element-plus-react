import React from 'react'
import {Divider} from 'element-plus-react'
import {StarFilled} from '@ant-design/icons'

const Demo = ()=>(<div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <Divider content-position="left">Rabindranath Tagore</Divider>
    <span
      >My wishes are fools, they shout across thy song, my Master. Let me but
      listen.</span
    >
    <Divider>
      <StarFilled />
    </Divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <Divider content-position="right">Rabindranath Tagore</Divider>
  </div>)

export default Demo
