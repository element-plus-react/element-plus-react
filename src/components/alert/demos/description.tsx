import React from 'react'
import { Alert } from 'element-plus-react'
import './index.scss'

const Demo = () => {
  return (<div  className="alert-list">
    <Alert title="with description" type="success" description="This is a description."></Alert>
  </div>)
}

export default Demo

