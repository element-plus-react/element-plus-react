import React, { useMemo } from "react";
import classnames from "classnames";
import './style'

export interface RowProps {
  tag?: string,
  gutter?: number,
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between',
  align?: 'top' | 'middle' | 'bottom'
}

const Row: React.FC<RowProps> = (props) => {
  const { tag = 'div', gutter = 0, justify = 'start', align = 'top' } = props

  const style = useMemo(() => {
    const ret = {
      marginLeft: '',
      marginRight: '',
    }
    if (gutter) {
      ret.marginLeft = `-${gutter / 2}px`
      ret.marginRight = ret.marginLeft
    }
    return ret
  }, [gutter])
  const className = classnames('el-row', justify !== 'start' ? `is-justify-${justify}` : '',
    align !== 'top' ? `is-align-${align}` : '')

  return <div style={style} className={className}>{props.children}</div>
}

export default Row