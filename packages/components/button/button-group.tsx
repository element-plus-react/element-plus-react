import React from "react";
import {ButtonProps} from './button'

type ButtonGroupProps = Pick<ButtonProps, 'type' | 'size'>

const ButtonGroup:React.FC<ButtonGroupProps> = (props)=><div className="el-button-group">{props.children}</div>

export default ButtonGroup
