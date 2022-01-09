import React, { useMemo } from "react";
import classnames from 'classnames'
import { TinyColor } from '@ctrl/tinycolor'
import {isFunction} from 'lodash'
import {getCssVar} from '../_utils/index'

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
}

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, autofocus, nativeType, loading, size: buttonSize='', type: buttonType='', plain, round, circle, autoInsertSpace } = props
  // add space between two characters in Chinese
  const shouldAddSpace = useMemo(() => {
    const defaultSlot = props.children
    if (autoInsertSpace && defaultSlot?.length === 1) {
      return true
    }
    return false
  }, [])

  const typeColor = useMemo(()=> getCssVar(`--el-color-${buttonType}`),[buttonType]) 
  // calculate hover & active color by color
  const buttonStyle = useMemo(() => {
    let styles = {}

    const buttonColor = props.color || typeColor
    console.log(plain, buttonColor,props.color,typeColor)
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
  )

  return (<button
    className={className}
    disabled={disabled || loading}
    autoFocus={autofocus}
    type={nativeType}
    style={buttonStyle}
    onClick={handleClick}
  >
    <span className={shouldAddSpace ? 'el-button__text--expand' : ''} >
      {props.children}
    </span>
  </button>)
}

export default Button