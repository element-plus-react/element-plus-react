import React from 'react'
import './style'
import InnerTimeline from './timeline'
import TimelineItem from './timeline-item'

interface TimelineProps extends React.FC{
  Item: typeof TimelineItem
}

const Timeline = InnerTimeline as TimelineProps

Timeline.Item = TimelineItem

export default Timeline
