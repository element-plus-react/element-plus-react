import React from "react";
import { Button, Row } from 'element-plus-react'

export default () => (<>
    <Row className="mb-4">
      <Button disabled>Default</Button>
      <Button type="primary" disabled>Primary</Button>
      <Button type="success" disabled>Success</Button>
      <Button type="info" disabled>Info</Button>
      <Button type="warning" disabled>Warning</Button>
      <Button type="danger" disabled>Danger</Button>
    </Row>

    <Row>
      <Button plain disabled>Plain</Button>
      <Button type="primary" plain disabled>Primary</Button>
      <Button type="success" plain disabled>Success</Button>
      <Button type="info" plain disabled>Info</Button>
      <Button type="warning" plain disabled>Warning</Button>
      <Button type="danger" plain disabled>Danger</Button>
    </Row>
  </>)
