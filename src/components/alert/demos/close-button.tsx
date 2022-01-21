import React from 'react'
import { Alert } from 'element-plus-react'
import './index.scss'

const hello = () => {
  alert('Hello World!')
}

const Demo = () => {
  return (<div className="alert-list">
    <Alert title="unclosable alert" type="success" closable={false}></Alert>
    <Alert title="customized close-text" type="info" closeText="Gotcha"></Alert>
    <Alert title="alert with callback" type="warning" onClose={hello}></Alert>
  </div>)
}

export default Demo

