import React, { useMemo } from 'react'
import classnames from 'classnames'
import Step from './step'

export interface InnerStepsProps {
  space?: string | number
  active?: number
  direction?: 'horizontal' | 'vertical'
  alignCenter?: boolean
  simple?: boolean
  finishStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  processStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  style?: React.CSSProperties
}

const Steps: React.FC<InnerStepsProps> = (props) => {
  const steps = useMemo(() => {
    if (!Array.isArray(props.children)) return []
    return props.children.filter(i => i.type.name === 'Step').map(o => o.props)
  }, [props.children])
  const {
    active = 0,
    alignCenter = false,
    simple = false,
    finishStatus = 'finish',
    processStatus = 'process',
    direction = 'horizontal',
  } = props
  const classNames = classnames(
    ['el-steps', simple ? 'el-steps--simple' : `el-steps--${direction}`])
  const parent = useMemo(() => ({
    props: {
      active,
      alignCenter,
      finishStatus,
      processStatus,
      direction,
      simple,
    },
    steps,
  }), [active, alignCenter, direction, finishStatus, processStatus, simple, steps])
  return (
    <div className={classNames} style={props.style}>
      {steps.map(
        (item, index) => <Step {...item} index={index} parent={parent} key={index}/>)}
    </div>
  )
}

export default Steps
