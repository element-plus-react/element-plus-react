import React from "react"
import { Skeleton } from 'element-plus-react'

const Demo = () => {
  return(
  <>
  <Skeleton rows={5} animated template={<>
      <Skeleton.Item variant="image" style="width: 240px; height: 240px" />
      <div style="padding: 14px">
        <Skeleton.Item variant="p" style="width: 50%" />
        <div
          style="
            display: flex;
            align-items: center;
            justify-items: space-between;
          "
        >
          <Skeleton.Item variant="text" style="margin-right: 16px" />
          <Skeleton.Item variant="text" style="width: 30%" />
        </div>
      </div>
    </>}>

  </Skeleton>
  
  </>)
}
export default Demo

