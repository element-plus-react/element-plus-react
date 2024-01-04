import React from "react";

export interface DescriptionsItemProps {
  label?: string;
  span?: number; // 1
  width?: number;
  minWidth?: number;
  align?: string; // left
  labelAlign?: string;
  className?: string;
  labelClassName?: string;
  children?: React.ReactNode;
}

const DescriptionsItem: React.FC<DescriptionsItemProps> = (props) => props.children;

export default DescriptionsItem;
