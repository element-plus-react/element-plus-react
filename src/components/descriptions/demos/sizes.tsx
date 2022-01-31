import React, { useMemo, useState } from 'react'
import { Descriptions, Button } from 'element-plus-react'

const Demo = () =>{
   const [size, setSize] = useState<'large' | 'default' | 'small'>('default')
  const blockMargin = useMemo(() => {
    const marginMap = {
      large: '32px',
      default: '28px',
      small: '24px',
    }
    return {
      marginTop: marginMap[size] || marginMap.default,
    }
  },[size])
   return (<>
     {size}
    <div onClick={(e)=>setSize(e.target.innerText)}>
      <span>large</span>
      <span>default</span>
      <span>small</span>
    </div>
    <Descriptions title="User Info"
                  size={size}
                  border
                  extra={<Button type="primary">Operation</Button>}
    >
      <Descriptions.Item label="Username">kooriookami</Descriptions.Item>
      <Descriptions.Item label="Telephone">18100000000</Descriptions.Item>
      <Descriptions.Item label="Place">Suzhou</Descriptions.Item>
      <Descriptions.Item
        label="Remarks"><Button>School</Button></Descriptions.Item>
      <Descriptions.Item label="Address">No.1188, Wuzhong Avenue, Wuzhong
        District, Suzhou, Jiangsu Province</Descriptions.Item>
    </Descriptions>
    <Descriptions title="User Info" size={size} extra={<Button type="primary">Operation</Button>} style={blockMargin }>
      <Descriptions.Item label="Username">kooriookami</Descriptions.Item>
      <Descriptions.Item label="Telephone">18100000000</Descriptions.Item>
      <Descriptions.Item label="Place">Suzhou</Descriptions.Item>
      <Descriptions.Item
        label="Remarks"><Button>School</Button></Descriptions.Item>
      <Descriptions.Item label="Address">No.1188, Wuzhong Avenue, Wuzhong
        District, Suzhou, Jiangsu Province</Descriptions.Item>
    </Descriptions>
  </>)}

export default Demo
