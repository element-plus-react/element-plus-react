import classnames from "classnames";
import React, { useContext, useMemo } from "react";
import { RowContext } from "../row";
import "./style";

type SizeObject = {
  span?: number;
  offset?: number;
};
type Size = number | SizeObject;

export interface ColProps {
  tag?: string;
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
  xs?: number | Size;
  sm?: number | Size;
  md?: number | Size;
  lg?: number | Size;
  xl?: number | Size;
  className?: string;
  children?: React.ReactNode;
}

const Col: React.FC<ColProps> = (props) => {
  const rowState = useContext(RowContext);
  const { tag = "div" } = props;
  const { gutter } = rowState;
  const style = useMemo(() => {
    if (gutter) {
      return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
      };
    }
    return {};
  }, [gutter]);
  const classList = useMemo(() => {
    const classes: string[] = [];

    const pos = ["span", "offset", "pull", "push"] as const;
    pos.forEach((prop) => {
      const size = props[prop];
      if (typeof size === "number") {
        if (prop === "span") classes.push(`el-col-${props[prop]}`);
        else if (size > 0) classes.push(`el-col-${prop}-${props[prop]}`);
      }
    });

    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
    sizes.forEach((size) => {
      if (typeof props[size] === "number") {
        classes.push(`el-col-${size}-${props[size]}`);
      } else if (typeof props[size] === "object") {
        const sizeProps: any = props[size];
        Object.keys(sizeProps).forEach((prop) => {
          classes.push(
            prop !== "span"
              ? `el-col-${size}-${prop}-${sizeProps[prop]}`
              : `el-col-${size}-${sizeProps[prop]}`,
          );
        });
      }
    });
    // this is for the fix
    if (gutter) {
      classes.push("is-guttered");
    }

    return classes;
  }, [gutter, props]);

  const Tag = `${tag}`;

  const className = classnames("el-col", props.className, classList);

  return (
    <Tag style={style} className={className}>
      {props.children}
    </Tag>
  );
};

export default Col;
