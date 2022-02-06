import React from 'react'
import './style'
import InnerDescriptions, { InnerDescriptionsProps } from './descriptions'
import DescriptionsItem from './descriptions-item'

interface DescriptionsProps extends React.FC<InnerDescriptionsProps> {
  Item: typeof DescriptionsItem
}

const Descriptions = InnerDescriptions as DescriptionsProps
Descriptions.Item = DescriptionsItem

export default Descriptions

