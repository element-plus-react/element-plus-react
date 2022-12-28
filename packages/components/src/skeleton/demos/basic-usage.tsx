import React from "react"
import { Skeleton } from 'element-plus-react'

const Demo = () => {
  return(
  <>
  <Skeleton />
  <Skeleton template={<Skeleton.Item variant="circle" />}>

  </Skeleton>
  </>)
}
export default Demo
