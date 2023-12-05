import classnames from "classnames";
import { isNumber } from "lodash-es";
import React, { useEffect, useMemo, useState } from "react";
import { SpaceProps } from "./space";

const SIZE_MAP: Record<string, number> = {
  small: 8,
  default: 12,
  large: 16,
};

export function useSpace(props: SpaceProps) {
  const {
    className,
    direction = "horizontal",
    alignment: propsAlign = "center",
    wrap = false,
    fill = false,
    fillRatio = 100,
    size = "small",
  } = props;
  const classes = useMemo(
    () => classnames(["el-space", `el-space--${direction}`, className]),
    [className, direction],
  );

  const [horizontalSize, setHorizontalSize] = useState(0);
  const [verticalSize, setVerticalSize] = useState(0);

  const containerStyle = useMemo(() => {
    const wrapKls: React.CSSProperties =
      wrap || fill ? { flexWrap: "wrap", marginBottom: -verticalSize } : {};
    const alignment: React.CSSProperties = {
      alignItems: propsAlign,
    };
    return { ...wrapKls, ...alignment, ...props.style };
  }, [fill, props.style, propsAlign, verticalSize, wrap]);

  const itemStyle = useMemo(() => {
    const itemBaseStyle: React.CSSProperties = {
      paddingBottom: verticalSize,
      marginRight: horizontalSize,
    };

    const fillStyle: React.CSSProperties = fill ? { flexGrow: 1, minWidth: `${fillRatio}%` } : {};

    return { ...itemBaseStyle, ...fillStyle };
  }, [horizontalSize, fill, fillRatio, verticalSize]);
  useEffect(() => {
    // when the specified size have been given
    if (Array.isArray(size)) {
      const [h = 0, v = 0] = size;
      setHorizontalSize(h);
      setVerticalSize(v);
    } else {
      let val: number;
      if (isNumber(size)) {
        val = size as number;
      } else {
        val = SIZE_MAP[size] || SIZE_MAP.small;
      }
      if ((wrap || fill) && direction === "horizontal") {
        setHorizontalSize(val);
        setVerticalSize(val);
      } else if (direction === "horizontal") {
        setHorizontalSize(val);
        setVerticalSize(0);
      } else {
        setVerticalSize(val);
        setHorizontalSize(0);
      }
    }
  }, [direction, fill, size, wrap]);

  return {
    classes,
    containerStyle,
    itemStyle,
  };
}
