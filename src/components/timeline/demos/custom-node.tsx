import React from 'react'
import { Timeline } from 'element-plus-react'
import { MoreOutlined} from '@ant-design/icons'
import './index.scss'

const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: <MoreOutlined />,
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]

const Demo = () => (<div className="block">
    <Timeline>
      {activities.map((activity, index)=>( <Timeline.Item
        key={index}
        icon={activity.icon}
        type={activity.type}
        color={activity.color}
        size={activity.size}
        hollow={activity.hollow}
        timestamp={activity.timestamp}
        >{ activity.content }
        </Timeline.Item>))}
    </Timeline>
  </div>
)
export default Demo
