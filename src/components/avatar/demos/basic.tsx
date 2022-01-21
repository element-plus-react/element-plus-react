import React from 'react'
import { Avatar, Row, Col } from 'element-plus-react'
import './index.scss'

const state = {
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['large', 'default', 'small'],
}
const Demo = () => (<Row className="demo-avatar demo-basic">
    <Col span={12}>
      <div className="sub-title">circle</div>
      <div className="demo-basic--circle">
        <div className="block">
          <Avatar size={50} src={state.circleUrl} />
        </div>
        {state.sizeList.map(size => (<div key={size} className="block">
          <Avatar size={size} src={state.circleUrl}/>
        </div>))}
      </div>
    </Col>
    <Col span={12}>
      <div className="sub-title">square</div>
      <div className="demo-basic--circle">
        <div className="block">
          <Avatar shape="square" size={50} src={state.squareUrl}/>
        </div>
        {state.sizeList.map(size => (<div
          key={size} className="block">
          <Avatar shape="square" size={size} src={state.squareUrl}/>
        </div>))}
      </div>
    </Col>
  </Row>)

export default Demo

