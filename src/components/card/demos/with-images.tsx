import React from 'react'
import { Card, Row, Col, Button } from 'element-plus-react'
import './index.scss'

const Demo = () => {
  return (
    <Row>
      {[1,2].map((_, index) => (<Col
        key={_}
        span={8}
        offset={index > 0 ? 2 : 0}
        >
        <Card bodyStyle={{padding: '0px'}}>
        <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        className="image"
        />
        <div style={{ padding: '14px' }}>
        <span>Yummy hamburger</span>
        <div className="bottom">
        <time className="time">{new Date().toString()}</time>
        <Button type="text" className="button">Operating</Button>
        </div>
        </div>
        </Card>
        </Col>))}
    </Row>
  )
}

export default Demo


