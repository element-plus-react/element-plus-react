import React from 'react'
import { Card, Row, Col } from 'element-plus-react'

const Demo = () => {
  return (
    <Row gutter={12}>
      <Col span={8}>
        <Card shadow="always"> Always </Card>
      </Col>
      <Col span={8}>
        <Card shadow="hover"> Hover </Card>
      </Col>
      <Col span={8}>
        <Card shadow="never"> Never </Card>
      </Col>
    </Row>
  )
}

export default Demo
