import React from 'react'
import { Alert } from 'element-plus-react'
import './index.scss'

const Demo = () => (<div  className="alert-list">
    <Alert title="success alert" type="success" effect="dark" />
    <Alert title="info alert" type="info" effect="dark" />
    <Alert title="warning alert" type="warning" effect="dark" />
    <Alert title="error alert" type="error" effect="dark" />
  </div>)

export default Demo

