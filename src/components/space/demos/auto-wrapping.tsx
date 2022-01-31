import React from 'react'
import { Space, Button } from 'element-plus-react'

const Demo = () => (<Space wrap>
    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(i=>(<div key={i}>
      <Button type="text"> Text button </Button>
      </div>))}
  </Space> )

export default Demo
