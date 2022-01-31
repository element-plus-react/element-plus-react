import React  from 'react'
import {Steps} from 'element-plus-react'

const Demo = ()=> (<div style={{ height: 300 }}>
    <Steps direction="vertical" active={1}>
      <Steps.Step title="Step 1" />
      <Steps.Step title="Step 2" />
      <Steps.Step title="Step 3" />
    </Steps>
  </div>)

export default Demo
