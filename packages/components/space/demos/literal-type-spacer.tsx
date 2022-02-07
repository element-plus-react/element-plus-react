import React, { useState } from 'react'
import { Space, Button } from 'element-plus-react'

const Demo = () => {
  const [size, setSize] = useState(10)
  return (<Space size={size} spacer="|">
      {[1, 2].map(i => (<div key={i}>
        <Button> button { i } </Button>
      </div>))}
    </Space>)
}

export default Demo

