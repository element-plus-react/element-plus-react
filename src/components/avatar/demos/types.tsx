import React from 'react'
import { Avatar } from 'element-plus-react'
import { UserOutlined} from '@ant-design/icons'
import './index.scss'

const Demo = () => (<div className="demo-type">
  <div>
    <Avatar icon={<UserOutlined/>}/>
  </div>
  <div>
    <Avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
  </div>
  <div>
    <Avatar> user </Avatar>
  </div>
</div>)

export default Demo
