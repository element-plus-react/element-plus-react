import React from "react";
import { Button, Row } from 'element-plus-react'

export default () => (<Row className="mb-4">
      <Button loading>Default</Button>
      <Button type="primary" loading>Primary</Button>
      <Button type="success" loading>Success</Button>
      <Button type="info" loading>Info</Button>
      <Button type="warning" loading>Warning</Button>
      <Button type="danger" loading>Danger</Button>
    </Row>)
