import React from 'react'
import { Card, Button } from 'element-plus-react'
import './index.scss'

const Demo = () => {
  return (<Card className="box-card" header={<div className="card-header">
    <span>Card name</span>
    <Button className="button" type="text">Operation button</Button>
  </div>}>
    {[1,2,3,4].map((o) => <div key={o} className="text item">{`List item ${o}`}</div>)}
  </Card>)
}

export default Demo
