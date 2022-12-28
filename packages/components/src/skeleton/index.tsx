import React,{PropsWithChildren} from 'react'
import InnerSkeleton,{ISkeletonProps as InnerISkeletonProps} from "./skeleton";
import SkeletonItem from './skeleton-item'
import "./style"

interface ISkeletonProps extends React.FC<PropsWithChildren<InnerISkeletonProps>>{
  Item: typeof SkeletonItem
}
const Skeleton = InnerSkeleton as ISkeletonProps
Skeleton.Item = SkeletonItem

export default Skeleton