import React from 'react'
import { Alert } from 'element-plus-react'
import './index.scss'

const Demo = () => (<div  className="alert-list">
    <Alert
  title="success alert"
  type="success"
  description="more text description"
  showIcon
  />
    <Alert title="info alert" type="info" description="more text description" showIcon/>
    <Alert
      title="warning alert"
      type="warning"
      description="more text description"
      showIcon
     />
    <Alert
      title="error alert"
      type="error"
      description="more text description"
      showIcon
     />
  </div>)

export default Demo

