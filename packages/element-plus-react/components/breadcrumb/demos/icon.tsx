import React from 'react'
import {Breadcrumb} from 'element-plus-react'
import {RightOutlined} from '@ant-design/icons'

const Demo =()=> (<Breadcrumb separatorIcon={<RightOutlined />}>
    <Breadcrumb.Item >homepage</Breadcrumb.Item>
    <Breadcrumb.Item>promotion management</Breadcrumb.Item>
    <Breadcrumb.Item>promotion list</Breadcrumb.Item>
    <Breadcrumb.Item>promotion detail</Breadcrumb.Item>
  </Breadcrumb>)
export default Demo
