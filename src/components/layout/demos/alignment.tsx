import React from 'react'
import { Row, Col } from 'element-plus-react'
import './index.scss'

const Column = () => {
  return (<>
  <Row className="row-bg">
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
    <Col span={6}><div className="grid-content bg-purple-light"></div></Col>
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
  </Row>
  <Row className="row-bg" justify="center">
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
    <Col span={6}><div className="grid-content bg-purple-light"></div></Col>
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
  </Row>
  <Row className="row-bg" justify="end">
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
    <Col span={6}><div className="grid-content bg-purple-light"></div></Col>
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
  </Row>
  <Row className="row-bg" justify="space-between">
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
    <Col span={6}><div className="grid-content bg-purple-light"></div></Col>
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
  </Row>
  <Row className="row-bg" justify="space-around">
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
    <Col span={6}><div className="grid-content bg-purple-light"></div></Col>
    <Col span={6}><div className="grid-content bg-purple"></div></Col>
  </Row>
</>)
}

export default Column

