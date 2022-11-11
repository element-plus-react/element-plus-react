import React, { useState } from 'react'
import {Steps,Button} from 'element-plus-react'

const Demo = ()=> {
  const [active,setActive] = useState(0)
  const next = () => {
    setActive(i=> i<3? i+1:0)
  }
  return(<>
    <Steps active={active} finishStatus="success">
      <Steps.Step title="Step 1" />
      <Steps.Step title="Step 2" />
      <Steps.Step title="Step 3" />
    </Steps>
    <Button style={{ marginTop: 12 }} onClick={next}>Next step{active}</Button>
  </>)
}

export default Demo

