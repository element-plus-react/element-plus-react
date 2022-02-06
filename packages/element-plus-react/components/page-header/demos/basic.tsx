import React from 'react'
import {PageHeader} from 'element-plus-react'

const goBack = () => {
  console.log('go back')
}
const Demo = ()=><PageHeader content="detail" onBack={goBack} />
export default Demo
