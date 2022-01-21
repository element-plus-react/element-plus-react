import React from 'react'
import {Alert} from 'element-plus-react'
import './index.scss'

const Demo = ()=>{
return (<div className="alert-list">
  <Alert title="success alert" type="success" center showIcon></Alert>
  <Alert title="info alert" type="info" center showIcon></Alert>
  <Alert title="warning alert" type="warning" center showIcon></Alert>
  <Alert title="error alert" type="error" center showIcon></Alert>
</div>)
}

export default Demo


