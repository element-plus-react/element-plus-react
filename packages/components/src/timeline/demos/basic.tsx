import React from 'react'
import { Timeline } from 'element-plus-react'
import './index.scss'

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
const Demo = () => (<div className="block">
  <Timeline>
    {activities.map((activity, index) => (<Timeline.Item
      key={index}
      timestamp={activity.timestamp}
    >
      {activity.content}
    </Timeline.Item>))}

  </Timeline>
</div>)
export default Demo

