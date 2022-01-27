import React, { useMemo, useState } from 'react'
import {
  CheckCircleOutlined,
  WarningFilled,
  CloseCircleOutlined,
  InfoCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import { isFunction } from 'lodash'
import classnames from 'classnames'
import { Transition } from '../../index'

export interface AlertProps {
  title?: string,
  description?: string
  type?: 'success' | 'warning' | 'info' | 'error'
  closable?: boolean,
  closeText?: string,
  showIcon?: boolean,
  center?: boolean,
  effect?: 'light' | 'dark'
  onClose?: (evt: MouseEvent) => void,
}

export const TypeComponentsMap = {
  success: <CheckCircleOutlined/>,
  warning: <WarningFilled/>,
  error: <CloseCircleOutlined/>,
  info: <InfoCircleOutlined/>,
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    type = 'info',
    closable = true,
    effect = 'light',
  } = props
  const [visible, setVisible] = useState(true)

  const typeClass = `el-alert--${props.type}`
  const iconComponent = TypeComponentsMap[type]
  const isBigIcon = useMemo(
    () => props.description || props.children ? 'is-big' : '',
    [props.children, props.description])
  const isBoldTitle = useMemo(
    () => props.description || props.children ? 'is-bold' : '',
    [props.children, props.description])
  // methods
  const close = (evt: MouseEvent) => {
    setVisible(false)
    if (isFunction(props.onClose)) {
      props.onClose(evt)
    }
  }
  const classNames = classnames('el-alert', typeClass,
    props.center ? 'is-center' : '', `is-${effect}`)
  const iconClassNames = classnames('el-alert__icon', isBigIcon)
  const titleClassNames = classnames('el-alert__title', isBoldTitle)
  return (
    <Transition in={visible} name="el-alert-fade" timeout={200} >
      <div
        // style={!visible ? { display: 'none' } : undefined}
           className={classNames} role="alert">
        {props.showIcon && iconComponent &&
          <i className={iconClassNames}>{iconComponent}</i>}
        <div className="el-alert__content">
          {props.title &&
            <span className={titleClassNames}>{props.title}</span>}
          {props.children || props.description &&
            <p className="el-alert__description">{props.description}</p>}
          {closable &&
            <>{props.closeText ? <div className="el-alert__closebtn is-customed"
                                      onClick={props.onClose}>
              {props.closeText}
            </div> : <CloseOutlined className="el-alert__closebtn"
                                    onClick={close}/>}</>
          }
        </div>
      </div>
    </Transition>
  )
}

export default Alert
