import React from 'react'
import { Affix, Button } from 'element-plus-react'
import './index.scss'

const Demo = () => {
return (
  <div className="affix-container">
    <Affix target=".affix-container" offset={80}>
      <Button type="primary">Target container</Button>
    </Affix>
  </div>
)
}

export default Demo
