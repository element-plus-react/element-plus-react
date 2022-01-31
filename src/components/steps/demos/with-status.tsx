import React  from 'react'
import {Steps} from 'element-plus-react'

const Demo = ()=> (<Steps space={200} active={1} finishStatus="success">
    <Steps.Step title="Done" />
    <Steps.Step title="Processing" />
    <Steps.Step title="Step 3" />
  </Steps>)

export default Demo
