import React from 'react'
import { Affix, Button } from 'element-plus-react'

const Demo = () => {
  return (
  <Affix position="bottom" offset={20}>
    <Button type="primary">Offset bottom 20px</Button>
  </Affix>
)
}

export default Demo

