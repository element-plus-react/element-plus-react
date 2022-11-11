import { Space, Card, Button } from 'element-plus-react'
import React, { useState } from 'react'
import './index.scss'

const Demo = () => {
  const [fill, setFill] = useState(false)
  return (<div>
      <div style={{ marginBottom: 15 }}>
        fill: <Button onClick={()=>setFill(i=> !i)}>{fill}</Button>
      </div>
      <Space fill={fill} wrap>
        {[1, 2, 3].map(
          i => (
            <Card key={i} className="box-card" header={
              <div className="card-header">
                <span>Card name</span>
                <Button className="button" type="text">Operation button</Button>
              </div>}>
              {[1, 2, 3, 4].map(
                o => (<div key={o}
                          className="text item">{`List item ${o}`}</div>))}
            </Card>))}
      </Space>
    </div>)
}

export default Demo
