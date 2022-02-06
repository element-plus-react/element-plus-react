import React from 'react'
import { Timeline,Card } from 'element-plus-react'
import './index.scss'

const Demo = () => (<div className="block">
    <Timeline>
      <Timeline.Item center timestamp="2018/4/12" placement="top">
        <Card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/12 20:46</p>
        </Card>
      </Timeline.Item>
      <Timeline.Item timestamp="2018/4/3" placement="top">
        <Card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/3 20:46</p>
        </Card>
      </Timeline.Item>
      <Timeline.Item center timestamp="2018/4/2" placement="top">
        Event start
      </Timeline.Item>
      <Timeline.Item timestamp="2018/4/2" placement="top">
        Event end
      </Timeline.Item>
    </Timeline>
  </div>
)

export default Demo
