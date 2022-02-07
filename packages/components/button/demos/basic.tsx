import React from "react";
import { Button, Row } from 'element-plus-react'

export default () => (<>
    <Row className="mb-4">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
      <Button>中文</Button>
    </Row>

    <Row className="mb-4">
      <Button plain>Plain</Button>
      <Button type="primary" plain>Primary</Button>
      <Button type="success" plain>Success</Button>
      <Button type="info" plain>Info</Button>
      <Button type="warning" plain>Warning</Button>
      <Button type="danger" plain>Danger</Button>
    </Row>

    <Row className="mb-4">
      <Button round>Round</Button>
      <Button type="primary" round>Primary</Button>
      <Button type="success" round>Success</Button>
      <Button type="info" round>Info</Button>
      <Button type="warning" round>Warning</Button>
      <Button type="danger" round>Danger</Button>
    </Row>

    {/* <Row>
  <Button :icon="Search" circle></Button>
  <Button type="primary" :icon="Edit" circle></Button>
  <Button type="success" :icon="Check" circle></Button>
  <Button type="info" :icon="Message" circle></Button>
  <Button type="warning" :icon="Star" circle></Button>
  <Button type="danger" :icon="Delete" circle></Button>
</Row>  */}
  </>)
