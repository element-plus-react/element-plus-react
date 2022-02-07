import React from 'react'
import {BackTop} from 'element-plus-react'

const Demo = ()=>(<>
  Scroll down to see the bottom-right button.
  <BackTop bottom={100}>
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#f2f5f6',
        boxShadow: '0 0 6px rgba(0, 0, 0, 0.12)',
        textAlign: 'center',
        lineHeight: '40px',
        color:' #1989fa',
        }}
    >
      UP
    </div>
  </BackTop>
</>)

export default Demo
