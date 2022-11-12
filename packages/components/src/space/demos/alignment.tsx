import React from 'react'
import { Space, Card, Button } from 'element-plus-react'

const Demo = () => (<>
  <div
    style={{
      width: 240,
      marginBottom: 20,
      padding: 8,
      border: '1px solid #ccc',
      }}
  >
    <Space>
      string
      <Button> button </Button>
      <Card header="header">
        body
      </Card>
    </Space>
  </div>
  <div
    style={{
      width: 240,
      marginBottom: 20,
      padding: 8,
      border: '1px solid #ccc',
    }}
  >
    <Space alignment="flex-start">
      string
      <Button> button </Button>
      <Card header="header">
        body
      </Card>
    </Space>
  </div>
  <div
    style={{
      width: 240,
      marginBottom: 20,
      padding: 8,
      border: '1px solid #ccc',
    }}
  >
    <Space alignment="flex-end">
      string
      <Button> button </Button>
      <Card header="header">
        body
      </Card>
    </Space>
  </div>
</> )

export default Demo

