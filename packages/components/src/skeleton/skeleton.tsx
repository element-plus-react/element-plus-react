import { useNamespace } from "@element-plus/hooks";
import classNames from "classnames";
import React, { CSSProperties } from "react";
import SkeletonItem from "./skeleton-item";

export type ISkeletonProps = {
  animated?: boolean;
  count?: number;
  rows?: number;
  loading?: boolean;
  throttle?: number;
  style?: CSSProperties;
  template?: React.ReactNode;
  children?: React.ReactNode;
};

const Skeleton: React.FC<ISkeletonProps> = (props) => {
  const { animated = false, count = 1, rows = 3, loading = true, style } = props;
  const ns = useNamespace("skeleton");
  const classnames = classNames(ns.b(), ns.is("animated", animated));
  return (
    <div className={classnames} style={style}>
      {loading
        ? Array(count)
            .fill(1)
            .map(() => (
              <React.Fragment key={count}>
                <div>
                  <SkeletonItem className={ns.is("first")} variant="p" />
                  {Array(rows)
                    .fill(1)
                    .map((i, index) => (
                      <SkeletonItem
                        key={index}
                        className={classNames(
                          ns.e("paragraph"),
                          ns.is("last", i === rows && rows > 1),
                        )}
                        variant="p"
                      />
                    ))}
                </div>
              </React.Fragment>
            ))
        : props.children}
    </div>
  );
};

export default Skeleton;
