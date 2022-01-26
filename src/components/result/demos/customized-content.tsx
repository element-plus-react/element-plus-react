import React from 'react'
import { Result, Button /* Image */ } from 'element-plus-react'

const Demo = () => (<Result
  title="404"
  subTitle="Sorry, request error"
/*
  icon={<Image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"/>}
*/
  extra={<Button type="primary">Back</Button>}
  />
)

export default Demo

