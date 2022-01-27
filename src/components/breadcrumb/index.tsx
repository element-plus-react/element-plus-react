import React from 'react'
import './style'
import InnerBreadcrumb, { InnerBreadcrumbProps } from './breadcrumb'
import BreadcrumbItem from './breadcrumb-item'

interface BreadcrumbProps extends React.FC<InnerBreadcrumbProps> {
  Item: typeof BreadcrumbItem
}

const Breadcrumb = InnerBreadcrumb as BreadcrumbProps

Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb



