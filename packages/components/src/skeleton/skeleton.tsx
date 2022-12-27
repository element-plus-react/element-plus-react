import React,{CSSProperties,PropsWithChildren} from "react"
import classNames from 'classnames'
import { useNamespace } from '@element-plus/hooks'
import SkeletonItem from './skeleton-item'

export type ISkeletonProps = {
  animated?: boolean
  count?: number
  rows?: number
  loading?: boolean
  throttle?: number
  style?: CSSProperties
  template?: React.ReactNode 
}

const Skeleton:React.FC<ISkeletonProps> =(props)=>{
  const {animated = false,count=1,rows=3,loading=true,style,throttle} = props
  const ns = useNamespace('skeleton')
  const classnames = classNames(ns.b(), ns.is('animated', animated))
  return <div className={classnames} style={style}>
    {Array(count).fill(1).map(i=>(  <>
      {loading && <div>
        <SkeletonItem className={ns.is('first')} variant="p" />
        {Array(rows).fill(1).map(i=> <SkeletonItem
          className={classNames(
              ns.e('paragraph'),
              ns.is('last', i === rows && rows > 1),
          )}
            variant="p"
        />)}
        
      </div>}
  </>))}

</div>
} 

export default Skeleton