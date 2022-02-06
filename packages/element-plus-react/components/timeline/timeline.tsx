import React from 'react'

const Timeline:React.FC = (props) => (<ul className="el-timeline">
    {props.children}
  </ul>)

export default Timeline
