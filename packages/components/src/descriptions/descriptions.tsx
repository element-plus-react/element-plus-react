import classnames from "classnames";
import React, { createContext, useMemo } from "react";
import DescriptionsRow from "./descriptions-row";

export interface InnerDescriptionsProps {
  border?: boolean;
  column?: number;
  direction?: "horizontal" | "vertical";
  size?: "large" | "default" | "small";
  title?: string;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const DescriptionsContext = createContext({});

const filledNode = (node, span, count, isLast = false) => {
  if (!node.props) {
    node.props = {};
  }
  if (span > count) {
    node.props.span = count;
  }
  if (isLast) {
    // set the last span
    return React.cloneElement(node, {
      span: span,
    });
    // node.props.span = span;
  }
  return node;
};
const flattedChildren = (children) => {
  const temp = Array.isArray(children) ? children : [children];
  const res = [];
  temp.forEach((child) => {
    if (Array.isArray(child.children)) {
      res.push(...flattedChildren(child.children));
    } else {
      res.push(child);
    }
  });
  return res;
};
const Descriptions: React.FC<InnerDescriptionsProps> = (props) => {
  const { border = false, column = 3, direction = "horizontal", size, title, extra } = props;

  const getRows = useMemo(() => {
    const children = flattedChildren(props.children).filter(
      (node) => node?.type?.name === "DescriptionsItem",
    );
    const rows: any = [];
    let temp: any = [];
    let count = column;
    let totalSpan = 0; // all spans number of item
    children.forEach((node, index) => {
      const span = node.props?.span || 1;
      if (index < children.length - 1) {
        totalSpan += span > count ? count : span;
      }
      if (index === children.length - 1) {
        // calculate the last item span
        const lastSpan = column - (totalSpan % column);
        temp.push(filledNode(node, lastSpan, count, true));
        rows.push(temp);
        return;
      }
      if (span < count) {
        count -= span;
        temp.push(node);
      } else {
        temp.push(filledNode(node, span, count));
        rows.push(temp);
        count = column;
        temp = [];
      }
    });
    return rows;
  }, [column]);
  // console.log(column, props.children);
  const descriptionKls = classnames("el-descriptions", `is-el-descriptions--${size}`);
  const state = useMemo(() => ({ direction, border }), [border, direction]);
  return (
    <DescriptionsContext.Provider value={state}>
      <div className={descriptionKls} style={props.style}>
        {(title || extra) && (
          <div className="el-descriptions__header">
            <div className="el-descriptions__title">{title}</div>
            <div className="el-descriptions__extra">{extra}</div>
          </div>
        )}
        <div className="el-descriptions__body">
          <table className={classnames("el-descriptions__table", { "is-bordered": border })}>
            <tbody>
              {getRows.map((row, index) => (
                <DescriptionsRow row={row} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DescriptionsContext.Provider>
  );
};

export default Descriptions;
