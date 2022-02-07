import React from 'react'
import { Result, Button, Row, Col } from 'element-plus-react'

const Demo = () => (<Row>
    <Col sm={12} lg={6}>
      <Result
        icon="success"
        title="Success Tip"
        subTitle="Please follow the instructions"
        extra={<Button type="primary">Back</Button>}
      />
    </Col>
    <Col sm={12} lg={6}>
      <Result
        icon="warning"
        title="Warning Tip"
        subTitle="Please follow the instructions"
        extra={<Button type="primary">Back</Button>}
      />
    </Col>
    <Col sm={12} lg={6}>
      <Result
        icon="error"
        title="Error Tip"
        subTitle="Please follow the instructions"
        extra={<Button type="primary">Back</Button>}
      />
    </Col>
    <Col sm={12} lg={6}>
      <Result
        icon="info"
        title="Info Tip"
        subTitle="Please follow the instructions"
        extra={<Button type="primary">Back</Button>}
      />
    </Col>
  </Row>)

export default Demo

