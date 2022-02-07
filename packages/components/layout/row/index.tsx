import React, { createContext, useMemo } from 'react'
import classnames from "classnames";
import './style'

export interface RowProps {
  tag?: string
  gutter?: number
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between'
  align?: 'top' | 'middle' | 'bottom'
  className?: string
}

export const RowContext = createContext<Pick<RowProps,'gutter'>>({})

const Row: React.FC<RowProps> = (props) => {
  const {tag='div', gutter = 0, justify = 'start', align = 'top' } = props

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
  const Tag = `${tag}`
  const className = classnames('el-row', justify !== 'start' ? `is-justify-${justify}` : '',
    align !== 'top' ? `is-align-${align}` : '',props.className)
  const state = useMemo(()=>({gutter:props.gutter}),[props.gutter])
  return (<RowContext.Provider value={state}>
    <Tag style={style} className={className}>{props.children}</Tag>
  </RowContext.Provider>)
}

export default Row
