import React from 'react'
import { Row, Col } from 'element-plus-react'
import './index.scss'

const BasicLayout = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="grid-content bg-purple-dark"/>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={12}>
          <div className="grid-content bg-purple-light"></div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={8}>
          <div className="grid-content bg-purple-light"></div>
        </Col>
        <Col span={8}>
          <div className="grid-content bg-purple"></div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={6}>
          <div className="grid-content bg-purple-light"></div>
        </Col>
        <Col span={6}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={6}>
          <div className="grid-content bg-purple-light"></div>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={4}>
          <div className="grid-content bg-purple-light"></div>
        </Col>
        <Col span={4}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={4}>
          <div className="grid-content bg-purple-light"></div>
        </Col>
        <Col span={4}>
          <div className="grid-content bg-purple"></div>
        </Col>
        <Col span={4}>
          <div className="grid-content bg-purple-light"></div>
        </Col>
      </Row>
    </>
  )
}

export default BasicLayout
