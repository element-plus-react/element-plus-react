import React, { useState } from 'react'
import { Space, Card, Button } from 'element-plus-react'

const Demo = () => {
  const [size, setSize] = useState(10)
  return (
    <>
      <input type="number" onChange={e=>setSize(+e.target.value)} value={size}/>
      <Space wrap size={size}>
        {[1, 2, 3].map(
          i => (
            <Card key={i} className="box-card" style={{ width: 250 }} header={
              <div className="card-header">
                <span>Card name</span>
                <Button className="button" type="text">Operation button</Button>
              </div>}>
              {[1, 2, 3, 4].map(
                o => (<div key={o}
                          className="text item">{`List item ${o}`}</div>))}
            </Card>))}
      </Space>
    </>
  )
}

export default Demo

