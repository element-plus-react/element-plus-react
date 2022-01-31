import React from 'react'

interface SpaceItemProps {
  style?: React.CSSProperties
  prefixCls?: string
}

const SpaceItem: React.FC<SpaceItemProps> = (props) => {
  const { prefixCls = 'el-space',style } = props
  const classes = `${prefixCls}__item`
  return <div className={classes} style={style}>{props.children}</div>
}

export default SpaceItem
