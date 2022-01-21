import React from 'react'

interface SwitchProps {
  value?: boolean | string | number,
  disabled?: boolean,
  width?: number,
  inlinePrompt?: boolean,
  activeIcon?: React.ReactNode
  inactiveIcon?: React.ReactNode
  activeText?: string
  inactiveText?: string
  activeColor?: string
  inactiveColor?: string
  borderColor?: string
  activeValue?: boolean | string | number
  inactiveValue?: boolean | string | number
  name?: string
  validateEvent?: boolean
  id?: string
  loading?: boolean
}

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    width = 40,
  } = props
  return (<div>switch</div>)
}

export default Switch
