import React from "react";
import { Row, Col } from 'element-plus-react'
import './index.scss'

const radiusGroup = [
  {
    name: 'No Radius',
    type: '',
  },
  {
    name: 'Small Radius',
    type: 'small',
  },
  {
    name: 'Large Radius',
    type: 'base',
  },
  {
    name: 'Round Radius',
    type: 'round',
  },
]

const getValue = (type: string) => {
  const getCssVarValue = (prefix, type) =>
    getComputedStyle(document.documentElement).getPropertyValue(
      `--el-${prefix}-${type}`
    )
  return getCssVarValue('border-radius', type)
}

const Border = () => {
  return (
    <Row gutter={12} className="demo-radius">
      {radiusGroup.map((radius, i) => <Col
        key={i}
        span={6}
        xs={{ span: 12 }}
      >
        <div className="title">{radius.name}</div>
        <div className="value">
          <code>border-radius: {getValue(radius.type) || '0px'}</code>
        </div>
        <div
          className="radius"
          style={{
            borderRadius: radius.type
              ? `var(--el-border-radius-${radius.type})`
              : '',
          }}
        />
      </Col>)}
    </Row>
  )
}

export default Border