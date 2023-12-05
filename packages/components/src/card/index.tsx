import classnames from "classnames";
import React from "react";
import "./style";

interface CardProps {
  header?: React.ReactNode;
  shadow?: "always" | "hover" | "never";
  bodyStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const classNames = classnames(
    "el-card",
    props.className,
    props?.shadow ? `is-${props.shadow}-shadow` : "is-always-shadow",
  );
  const headerNode = props.header ? <div className="el-card__header">{props.header}</div> : null;
  return (
    <div className={classNames} style={props.style}>
      {headerNode}
      <div className="el-card__body" style={props.bodyStyle}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
