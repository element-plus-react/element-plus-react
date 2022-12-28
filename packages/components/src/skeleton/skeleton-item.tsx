import React from "react"
import { useNamespace } from '@element-plus/hooks'
import {PictureFilled} from '@ant-design/icons'
import classNames from "classnames"

export type ISkeletonItemProps = {
  variant?: 'circle'|'rect'|  'h1'|  'h3'|  'text'|  'caption'|  'p'|  'image'|  'button'
  className?: string
  style?: React.CSSProperties
}

const SkeletonItem:React.FC<ISkeletonItemProps> =(props)=>{
  const {variant,style } = props
  const ns = useNamespace('skeleton')
  const classnames = classNames(ns.e('item'), ns.e(variant),props.className)
  return <div className={classnames} style={style}>
  {variant === 'image' && <PictureFilled  />}
</div>
} 

export default SkeletonItem