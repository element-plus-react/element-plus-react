import React from "react";
import { Button, Row } from 'element-plus-react'
import { Search } from '@element-plus/icons-react'


export default () => (<>
    <Row className="mb-4">
      <Button>Default</Button>
      <Button type="primary"  size="large">Primary</Button>
      <Button type="success">Success</Button>
      {/* <Button type="info" icon={<Search/>}>Info</Button> */}
      <Button type="warning" size="small">Warning</Button>
      <Button type="danger" size="small">Danger</Button>
      <Button>中文</Button>
    </Row>

    <Row className="mb-4">
      <Button plain>Plain</Button>
      <Button type="primary" plain  size="large">Primary</Button>
      <Button type="success" plain size="small">Success</Button>
        {/* <Button type="info" plain icon={<Search/>}>Info</Button> */}
      <Button type="warning" plain  size="large">Warning</Button>
      <Button type="danger" plain>Danger</Button>
    </Row>

    <Row className="mb-4">
      <Button round>Round</Button>
      <Button type="primary" round>Primary</Button>
      <Button type="success" round  size="large">Success</Button>
      {/* <Button type="info" round icon={<Search/>}>Info</Button> */}
      <Button type="warning" round size="small">Warning</Button>
      <Button type="danger" round>Danger</Button>
    </Row>
  </>)
