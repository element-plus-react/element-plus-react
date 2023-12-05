import classnames from "classnames";
import React, { useMemo } from "react";

interface BadgeProps {
  value?: string | number;
  max?: number;
  isDot?: boolean;
  hidden?: boolean;
  type?: "primary" | "success" | "warning" | "info" | "danger";
  className?: string;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = (props) => {
  const { max = 99, type = "danger" } = props;
  const classNames = classnames(props.className, "el-badge");
  const supClassNames = classnames("el-badge__content", [
    `el-badge__content--${type}`,
    {
      "is-fixed": props.children,
      "is-dot": props.isDot,
    },
  ]);
  const content = useMemo<string>(() => {
    if (props.isDot) return "";

    if (typeof props.value === "number" && typeof max === "number") {
      return max < props.value ? `${max}+` : `${props.value}`;
    }
    return `${props.value}`;
  }, [max, props.isDot, props.value]);
  return (
    <div className={classNames}>
      {props.children}
      {/* <transition name="el-zoom-in-center"> */}
      <sup
        style={
          !(!props.hidden && (content || content === "0" || props.isDot))
            ? { display: "none" }
            : undefined
        }
        className={supClassNames}
      >
        {content}
      </sup>
      {/* </transition> */}
    </div>
  );
};

export default Badge;
