import React from 'react'
import classnames from 'classnames'

interface TimelineItemProps {
  timestamp?: string
  hideTimestamp?: boolean
  center?: boolean
  placement?: string
  type?: string
  color?: string
  size?: string
  icon?: React.ReactNode
  hollow?: boolean
  dot?: React.ReactNode
}

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const {
    size = 'normal',
    placement = 'bottom',
    center = false,
    hideTimestamp = false,
    color,
    icon,
    dot,
    type,
    hollow,
    timestamp,
  } = props
  const listClass = classnames(
    ['el-timeline-item', { 'el-timeline-item__center': center }])
  const dotClass = classnames([
    'el-timeline-item__node',
    `el-timeline-item__node--${size}`,
    `el-timeline-item__node--${type}`,
    { 'is-hollow': hollow }])
  return (<li className={listClass}>
    <div className="el-timeline-item__tail" />
    {!dot && <div className={dotClass} style={{ backgroundColor: color }}>
      {icon && <i className="el-timeline-item__icon">{icon}</i>}
    </div>}
    {dot && <div className="el-timeline-item__dot">{dot}</div>}
    <div className="el-timeline-item__wrapper">
      {!hideTimestamp && placement === 'top' && <div
        className="el-timeline-item__timestamp is-top">
        {timestamp}</div>}
      <div className="el-timeline-item__content">
        {props.children}
      </div>
      {!hideTimestamp && placement === 'bottom' &&
        <div className="el-timeline-item__timestamp is-bottom">
          {timestamp}
        </div>}
    </div>
  </li>)
}

export default TimelineItem
