import classnames from "classnames";
import React, { useMemo } from "react";

export interface InnerContainerProps {
  direction?: "vertical" | "horizontal";
  children?: React.ReactNode;
}

const InnerContainer: React.FC<InnerContainerProps> = (props) => {
  const isVertical = useMemo(() => {
    if (props.direction === "vertical") {
      return true;
    }
    if (props.direction === "horizontal") {
      return false;
    }
    if (props.children) {
      const vNodes = props.children as React.ReactElement[];
      return vNodes?.some((vNode) => {
        const tag = (vNode.type as any)?.name;
        return tag === "Header" || tag === "Footer";
      });
    }
    return false;
  }, [props.children, props.direction]);
  const classNames = classnames("el-container", isVertical ? "is-vertical" : "");
  return <section className={classNames}>{props.children}</section>;
};

export default InnerContainer;
