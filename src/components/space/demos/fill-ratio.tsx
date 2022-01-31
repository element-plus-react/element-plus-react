import { Space, Card, Button } from 'element-plus-react'
import React, { useState } from 'react'
import './index.scss'

const Demo = () => {
  const [direction, setDirection] = useState('horizontal')
  const [fillRatio, setFillRatio] = useState(30)
  return (<div>
      <div style={{ marginBottom: 15 }}>
        direction:
        <Button onClick={() => setDirection('horizontal')}>horizontal</Button>
        <Button onClick={() => setDirection('vertical')}>vertical</Button>
      </div>
      <div style={{ marginBottom: 15 }}>
        fillRatio:<input value={fillRatio} type="number" onChange={(e) => setFillRatio(
        +e.target.value)} />
      </div>
      <Space
        fill
        wrap
        fillRatio={fillRatio}
        direction={direction}
        style={{ width: ' 100% ' }}
      >
        {[1, 2, 3, 4, 5].map(i => (
          <Card key={i} header={
            <div className="card-header">
              <span>Card name</span>
              <Button className="button" type="text">Operation button</Button>
            </div>}>
            {[1, 2, 3, 4].map(
              o => (<div key={o}
                         className="text item">{`List item ${o}`}</div>))}
          </Card>))}
      </Space>
    </div>
  )
}

export default Demo
