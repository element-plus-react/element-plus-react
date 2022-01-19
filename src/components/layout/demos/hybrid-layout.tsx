import React from 'react'
import { Row, Col } from 'element-plus-react'
import './index.scss'

const Column = () => {
  return (
    <>
      <Row gutter={20}>
        <Col span={16}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={8}>
          <div className="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={8}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={8}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={4}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={4}>
          <div className="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={4}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={16}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={4}>
          <div className="grid-content bg-purple"></div>
        </Col>
      </Row>
    </>
  )
}

export default Column
