import classnames from "classnames";
import React from "react";

type BorderStyle = CSSStyleDeclaration["borderStyle"];

interface DividerProps {
  direction?: "horizontal" | "vertical";
  contentPosition?: "left" | "center" | "right";
  borderStyle?: BorderStyle;
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = (props) => {
  const { direction = "horizontal", contentPosition = "center", borderStyle = "solid" } = props;
  const classNames = classnames(["el-divider", `el-divider--${direction}`]);
  const childClassNames = classnames("el-divider__text", `is-${contentPosition}`);
  return (
    // @ts-ignore
    <div className={classNames} style={{ "--el-border-style": borderStyle }}>
      {props.children && direction !== "vertical" && (
        <div className={childClassNames}>{props.children}</div>
      )}
    </div>
  );
};

export default Divider;
