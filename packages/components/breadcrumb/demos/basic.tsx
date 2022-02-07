import React from 'react'
import {Breadcrumb} from 'element-plus-react'

const Demo =()=> (<Breadcrumb separator="/">
    <Breadcrumb.Item >homepage</Breadcrumb.Item>
    <Breadcrumb.Item><a href="/">promotion management</a></Breadcrumb.Item>
    <Breadcrumb.Item>promotion list</Breadcrumb.Item>
    <Breadcrumb.Item>promotion detail</Breadcrumb.Item>
  </Breadcrumb>)
export default Demo
