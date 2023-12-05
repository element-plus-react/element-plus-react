import classnames from "classnames";
import React, { useContext } from "react";
import { DescriptionsContext } from "./descriptions";

interface DescriptionsCellProps {
  cell: object;
  tag: string;
  type: string;
  children: React.ReactNode;
}

const DescriptionsCell: React.FC<DescriptionsCellProps> = (props) => {
  const { cell, tag: Component, type } = props;
  const descriptions = useContext(DescriptionsContext);
  const { border, direction } = descriptions;
  const isVertical = direction === "vertical";
  const { label } = cell.props;
  const content = cell.props.children;
  const { span = 1 } = cell.props;
  const align = cell.props.align ? `is-${cell.props.align}` : "";
  const labelAlign = cell.props.labelAlign ? `is-${cell.props.labelAlign}` : "" || align;
  const { className } = cell.props;
  const { labelClassName } = cell.props;
  const style = {
    width: cell.props.width,
    minWidth: cell.props.minWidth,
  };
  console.log(props.cell, props.cell.props.span);
  switch (type) {
    case "label":
      return (
        <Component
          style={style}
          className={classnames([
            "el-descriptions__cell",
            "el-descriptions__label",
            { "is-bordered-label": border },
            { "is-vertical-label": isVertical },
            labelAlign,
            labelClassName,
          ])}
          colSpan={isVertical ? span : 1}
        >
          {label}
        </Component>
      );
    case "content":
      return (
        <Component
          style={style}
          className={classnames([
            "el-descriptions__cell",
            "el-descriptions__content",
            { "is-bordered-content": border },
            { "is-vertical-content": isVertical },
            align,
            className,
          ])}
          colSpan={isVertical ? span : span * 2 - 1}
        >
          {content}
        </Component>
      );
    default:
      return (
        <td style={style} className={classnames(["el-descriptions__cell", align])} colSpan={span}>
          <span className={classnames("el-descriptions__label", labelClassName)}>{label}</span>
          <span className={classnames("el-descriptions__content", className)}>{content}</span>
        </td>
      );
  }
};

export default DescriptionsCell;
