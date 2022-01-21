import React from 'react'
import { Avatar } from 'element-plus-react'
import './index.scss'

const errorHandler = () => true

const Demo = () => (
  <div className="demo-type">
    <Avatar size={60} src="https://empty" onError={errorHandler}>
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
    </Avatar>
  </div>
  )

export default Demo



