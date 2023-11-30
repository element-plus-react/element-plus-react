import type { Property } from "csstype";
import { isArray } from "lodash-es";
import React from "react";
import SpaceItem from "./space-item";
import { useSpace } from "./useSpace";

export interface SpaceProps {
  direction?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
  alignment?: Property.AlignItems;
  prefixCls?: string;
  spacer?: React.ReactNode;
  wrap?: boolean;
  fill?: boolean;
  fillRatio?: number;
  size?: "large" | "default" | "small" | number;
}

const Space: React.FC<SpaceProps> = (props) => {
  const {
    direction = "horizontal",
    alignment = "center",
    wrap = false,
    fill = false,
    fillRatio = 100,
    spacer,
    prefixCls,
  } = props;
  const { classes, containerStyle, itemStyle } = useSpace(props);

  // retrieve the children out via a simple for loop
  // the edge case here is that when users uses directives like <v-for>, <v-if>
  // we need to go one layer deeper

  if ((props.children ?? []).length === 0) return null;

  // loop the children, if current children is rendered via `renderList` or `<v-for>`
  if (isArray(props.children)) {
    let extractedChildren: React.ReactNode[] = [];
    props.children.forEach((child, loopKey) => {
      extractedChildren.push(
        <SpaceItem style={itemStyle} prefixCls={prefixCls} key={`LoopKey${loopKey}`}>
          {child}
        </SpaceItem>,
      );
    });

    if (spacer) {
      // track the current rendering index, when encounters the last element
      // then no need to add a spacer after it.
      const len = extractedChildren.length - 1;
      extractedChildren = extractedChildren.reduce<React.ReactNode[]>((acc, child, idx) => {
        const children = [...acc, child];
        if (idx !== len) {
          const style = {
            ...itemStyle,
          };
          if (direction === "vertical") {
            style.width = "100 %";
          }
          children.push(
            <span style={style} key={idx}>
              {spacer}
            </span>,
          );
        }
        return children;
      }, []);
    }
    // spacer container.
    console.log(extractedChildren);
    return (
      <div className={classes} style={containerStyle}>
        {extractedChildren}
      </div>
    );
  }
  return props.children;
};

export default Space;
