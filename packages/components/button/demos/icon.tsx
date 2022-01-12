import React from "react";
import { Button, Row } from 'element-plus-react'
import {SearchOutlined,EditOutlined,CheckCircleOutlined,MessageOutlined,StarOutlined,SoundOutlined} from '@element-plus/icons-react'

export default () => (<Row>
  <Button icon={<SearchOutlined />} circle />
  <Button type="primary" icon={<EditOutlined />}  />
  <Button type="success" icon={<CheckCircleOutlined />}  />
  <Button type="info" icon={<MessageOutlined />}  />
  <Button type="warning" icon={<StarOutlined />}  />
  <Button type="danger" icon={<SoundOutlined />} >按钮</Button>
</Row>)
