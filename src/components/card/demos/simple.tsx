import React from 'react'
import { Card } from 'element-plus-react'
import './index.scss'

const Demo = () => {
  return (
    <Card className="box-card">
      {[1,2,3,4].map((o) => <div key={o} className="text item">{`List item ${o}`}</div>)}
    </Card>
  )
}

export default Demo

