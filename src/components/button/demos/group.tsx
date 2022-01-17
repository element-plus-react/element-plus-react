import React from "react";
import { Button, Row } from "element-plus-react";

export default () => (<>
  <Row className="mb-4">
    <Button.Group type="primary">
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button>Warning</Button>
      <Button>Danger</Button>
    </Button.Group>
  </Row>
  <Row className="mb-4">
    <Button.Group type="primary" size="small">
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button>Warning</Button>
      <Button>Danger</Button>
    </Button.Group>
  </Row>
</>)
