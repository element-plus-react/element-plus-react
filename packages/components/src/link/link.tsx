import classnames from "classnames";
import { isFunction } from "lodash-es";
import React from "react";

interface LinkProps {
  type?: "primary" | "success" | "warning" | "info" | "danger" | "default";
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (evt: MouseEvent) => void;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = (props) => {
  const { type = "default", disabled = false, underline = true, href = "" } = props;
  const classNames = classnames([
    "el-link",
    type ? `el-link--${type}` : "",
    disabled && "is-disabled",
    underline && !disabled && "is-underline",
  ]);
  const handleClick = (event: any) => {
    if (!props.disabled && isFunction(props.onClick)) {
      props.onClick?.(event);
    }
  };
  return (
    <a className={classNames} href={disabled || !href ? undefined : href} onClick={handleClick}>
      {props.icon}
      <span className="el-link--inner">{props.children}</span>
    </a>
  );
};

export default Link;
