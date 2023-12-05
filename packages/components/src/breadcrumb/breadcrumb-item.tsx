import classnames from "classnames";
import React, { useContext, useEffect, useRef } from "react";
import { BreadcrumbStore } from "./breadcrumb";

interface BreadcrumbItemProps {
  to?: never;
  replace?: never;
  children?: React.ReactNode;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const state: any = useContext(BreadcrumbStore);
  const link = useRef<HTMLSpanElement | null>(null);
  const linkClass = classnames(["el-breadcrumb__inner", props.to ? "is-link" : ""]);
  useEffect(() => {
    link.current!.setAttribute("role", "link");
  }, []);
  return (
    <span className="el-breadcrumb__item">
      <span ref={link} className={linkClass} role="link">
        {props.children}
      </span>
      {state.separatorIcon ? (
        <i className="el-breadcrumb__separator">{state.separatorIcon}</i>
      ) : (
        <span className="el-breadcrumb__separator" role="presentation">
          {state.separator}
        </span>
      )}
    </span>
  );
};

export default BreadcrumbItem;
