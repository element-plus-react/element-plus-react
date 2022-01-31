import React from 'react'
import {Steps} from 'element-plus-react'

const Demo = ()=> (<Steps active={2} alignCenter>
    <Steps.Step title="Step 1" description="Some description" />
    <Steps.Step title="Step 2" description="Some description" />
    <Steps.Step title="Step 3" description="Some description" />
    <Steps.Step title="Step 4" description="Some description" />
  </Steps>)

export default Demo
