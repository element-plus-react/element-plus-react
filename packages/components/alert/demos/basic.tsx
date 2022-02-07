import React from 'react'
import {Alert} from 'element-plus-react'
import './index.scss'

const Demo = ()=>{
  return (<div className="alert-list">
    <Alert title="success alert" type="success" />
    <Alert title="info alert" type="info" />
    <Alert title="warning alert" type="warning" />
    <Alert title="error alert" type="error" />
  </div>)
}

export default Demo

