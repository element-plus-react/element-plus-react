import React, { useMemo,useContext } from "react";
import classnames from 'classnames'
import { TinyColor } from '@ctrl/tinycolor'
import {isFunction} from 'lodash'
import {LoadingOutlined } from '@element-plus/icons-react'
import {getCssVar,GlobalConfig} from '../_utils/index'
import ButtonGroup from "./button-group";

export interface ButtonProps {
  size?: "large" | "default" | "small"
  disabled?: boolean,
  type?: 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'
  icon?: any
  nativeType?: 'button' | 'submit' | 'reset'
  loading?: boolean,
  plain?: boolean,
  autofocus?: boolean,
  round?: boolean,
  circle?: boolean,
  color?: string,
  autoInsertSpace?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
}

const InternalButton: React.ForwardRefRenderFunction<unknown,ButtonProps> = (props,ref) => {
  const { disabled, autofocus, nativeType, loading, type: buttonType='', plain, round, circle } = props
  const globalConfig = useContext(GlobalConfig)
  const buttonRef = (ref as any) || React.createRef<HTMLElement>();
  const autoInsertSpace = useMemo(() => props.autoInsertSpace ?? globalConfig?.autoInsertSpace ?? false,[props.autoInsertSpace,globalConfig.autoInsertSpace])
  const buttonSize = useMemo(()=> props.size ?? globalConfig?.size,[props.size,globalConfig.size])
  // add space between two characters in Chinese
  const shouldAddSpace = useMemo(() => {
    const defaultSlot = props.children
    if (autoInsertSpace && typeof defaultSlot === 'string' && defaultSlot?.length === 2) {
      return true
    }
    return false
  }, [autoInsertSpace])

  const typeColor = useMemo(()=> getCssVar(`--el-color-${buttonType}`),[buttonType])
  // calculate hover & active color by color
  const buttonStyle = useMemo(() => {
    let styles = {}

    const buttonColor = props.color || typeColor
    if (buttonColor) {
      const shadeBgColor = new TinyColor(buttonColor).shade(10).toString()

      if (plain) {
        styles = {
          '--el-button-bg-color': new TinyColor(buttonColor)
            .tint(90)
            .toString(),
          '--el-button-text-color': buttonColor,
          '--el-button-hover-text-color': 'var(--el-color-white)',
          '--el-button-hover-bg-color': buttonColor,
          '--el-button-hover-border-color': buttonColor,
          '--el-button-active-bg-color': shadeBgColor,
          '--el-button-active-text-color': 'var(--el-color-white)',
          '--el-button-active-border-color': shadeBgColor,
        }
      } else {
        const tintBgColor = new TinyColor(buttonColor).tint(20).toString()
        styles = {
          '--el-button-bg-color': buttonColor,
          '--el-button-border-color': buttonColor,
          '--el-button-hover-bg-color': tintBgColor,
          '--el-button-hover-border-color': tintBgColor,
          '--el-button-active-bg-color': shadeBgColor,
          '--el-button-active-border-color': shadeBgColor,
        }
      }

      if (disabled) {
        const disabledButtonColor = new TinyColor(buttonColor)
          .tint(50)
          .toString()
        styles['--el-button-disabled-bg-color'] = disabledButtonColor
        styles['--el-button-disabled-border-color'] = disabledButtonColor
      }
    }

    return styles
  }, [plain])

  const handleClick = (event: MouseEvent) => {
    isFunction(props?.onClick) && props?.onClick(event)
  }

  const className = classnames(
    'el-button',
    buttonType ? `el-button--${buttonType}` : '',
    buttonSize ? `el-button--${buttonSize}` : '',
    {
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
    },
    props.className,
  )
  const renderIcon = loading ?
        (<span className="el-icon is-loading"><LoadingOutlined /></span> )
    : props.icon
      ?
     (<span className="el-icon">{props.icon}</span>)
    : null
  const kids = props.children?  <span className={shouldAddSpace ? 'el-button__text--expand' : ''} >{props.children}</span>: null

  return (<button
    className={className}
    disabled={disabled || loading}
    autoFocus={autofocus}
    type={nativeType}
    style={buttonStyle}
    onClick={handleClick}
    ref={buttonRef}
  >
    {renderIcon}
    {kids}
  </button>)
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
  Group: typeof ButtonGroup;
}

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent;

Button.Group = ButtonGroup

export default Button
