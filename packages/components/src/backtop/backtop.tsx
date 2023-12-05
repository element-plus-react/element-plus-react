import { ToTopOutlined } from "@ant-design/icons";
import { easeInOutCubic } from "@element-plus/utils";
import { useEventListener } from "ahooks";
import { isFunction, throttle } from "lodash-es";
import React, { useEffect, useRef, useState } from "react";

interface BackTopProps {
  visibilityHeight?: number;
  target?: string;
  right?: number;
  bottom?: number;
  onClick?: (evt: MouseEvent) => void;
  children: React.ReactNode;
}

const BackTop: React.FC<BackTopProps> = (props) => {
  const { visibilityHeight = 200, target = "", right = 40, bottom = 40 } = props;
  const el = useRef<HTMLElement | undefined>(document.documentElement);
  const container = useRef<Document | HTMLElement>(document);
  const [visible, setVisible] = useState(false);
  const styleBottom = bottom;
  const styleRight = right;

  const scrollToTop = () => {
    if (!el.current) return;
    const beginTime = Date.now();
    const beginValue = el.current.scrollTop;
    const frameFunc = () => {
      if (!el.current) return;
      const progress = (Date.now() - beginTime) / 500;
      if (progress < 1) {
        el.current.scrollTop = beginValue * (1 - easeInOutCubic(progress));
        requestAnimationFrame(frameFunc);
      } else {
        el.current.scrollTop = 0;
      }
    };
    requestAnimationFrame(frameFunc);
  };
  const handleScroll = () => {
    if (el.current) {
      setVisible(el.current?.scrollTop >= visibilityHeight);
    }
  };
  const handleClick = (event: any) => {
    scrollToTop();
    if (isFunction(props.onClick)) {
      props.onClick?.(event);
    }
  };

  const handleScrollThrottled = throttle(handleScroll, 300);

  useEventListener("scroll", handleScrollThrottled, { target: container.current });

  useEffect(() => {
    if (target) {
      el.current = document.querySelector<HTMLElement>(target) ?? undefined;
      if (!el.current) {
        throw Error(`target is not existed: ${target}`);
      }
      container.current = el.current;
    }
  }, [target]);
  return visible ? (
    <div
      style={{ right: styleRight, bottom: styleBottom }}
      className="el-backtop"
      onClick={handleClick}
    >
      {props.children ?? (
        <i className="el-backtop__icon">
          <ToTopOutlined />
        </i>
      )}
    </div>
  ) : null;
};

export default BackTop;
