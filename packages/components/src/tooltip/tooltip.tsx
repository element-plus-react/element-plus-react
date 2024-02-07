import { useNamespace } from "@element-plus/hooks";
import classNames from "classnames";
import RcTooltip from "rc-tooltip";
import type { TooltipProps as RcTooltipProps } from "rc-tooltip/lib/Tooltip";
import type { placements as Placements } from "rc-tooltip/lib/placements";
import type { AlignType } from "rc-trigger/lib/interface";
import useMergedState from "rc-util/lib/hooks/useMergedState";
import * as React from "react";
import type { PresetColorType } from "../_util/colors";
import { PresetColorTypes } from "../_util/colors";
import { getTransitionName } from "../_util/motion";
import getPlacements, { type AdjustOverflow, type PlacementsConfig } from "../_util/placements";
import { cloneElement, isFragment, isValidElement } from "../_util/reactNode";
import type { LiteralUnion } from "../_util/type";

export { AdjustOverflow, PlacementsConfig };

export type TooltipPlacement =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

// https://github.com/react-component/tooltip
// https://github.com/yiminghe/dom-align
export interface TooltipAlignConfig {
  points?: [string, string];
  offset?: [number | string, number | string];
  targetOffset?: [number | string, number | string];
  overflow?: { adjustX: boolean; adjustY: boolean };
  useCssRight?: boolean;
  useCssBottom?: boolean;
  useCssTransform?: boolean;
}
// remove this after RcTooltip switch visible to open.
interface LegacyTooltipProps
  extends Partial<
    Omit<
      RcTooltipProps,
      "children" | "visible" | "defaultVisible" | "onVisibleChange" | "afterVisibleChange"
    >
  > {
  open?: RcTooltipProps["visible"];
  defaultOpen?: RcTooltipProps["defaultVisible"];
  onOpenChange?: RcTooltipProps["onVisibleChange"];
  afterOpenChange?: RcTooltipProps["afterVisibleChange"];
}

export interface AbstractTooltipProps extends LegacyTooltipProps {
  style?: React.CSSProperties;
  className?: string;
  color?: LiteralUnion<PresetColorType, string>;
  placement?: TooltipPlacement;
  builtinPlacements?: typeof Placements;
  openClassName?: string;
  arrowPointAtCenter?: boolean;
  autoAdjustOverflow?: boolean | AdjustOverflow;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  children?: React.ReactNode;
}

export type RenderFunction = () => React.ReactNode;

export interface TooltipPropsWithOverlay extends AbstractTooltipProps {
  content?: React.ReactNode | RenderFunction;
  overlay?: React.ReactNode | RenderFunction;
}

export interface TooltipPropsWithContent extends AbstractTooltipProps {
  content: React.ReactNode | RenderFunction;
  overlay?: React.ReactNode | RenderFunction;
}

export declare type TooltipProps = TooltipPropsWithContent | TooltipPropsWithOverlay;

const splitObject = <T extends React.CSSProperties>(
  obj: T,
  keys: (keyof T)[],
): Record<"picked" | "omitted", T> => {
  const picked: T = {} as T;
  const omitted: T = { ...obj };
  keys.forEach((key) => {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return { picked, omitted };
};

const PresetColorRegex = new RegExp(`^(${PresetColorTypes.join("|")})(-inverse)?$`);

// Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18
function getDisabledCompatibleChildren(element: React.ReactElement<any>, prefixCls: string) {
  const elementType = element.type as any;
  if (
    ((elementType.__ANT_BUTTON === true || element.type === "button") && element.props.disabled) ||
    (elementType.__ANT_SWITCH === true && (element.props.disabled || element.props.loading)) ||
    (elementType.__ANT_RADIO === true && element.props.disabled)
  ) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    const { picked, omitted } = splitObject(element.props.style, [
      "position",
      "left",
      "right",
      "top",
      "bottom",
      "float",
      "display",
      "zIndex",
    ]);
    const spanStyle: React.CSSProperties = {
      display: "inline-block", // default inline-block is important
      ...picked,
      cursor: "not-allowed",
      width: element.props.block ? "100%" : undefined,
    };
    const buttonStyle: React.CSSProperties = {
      ...omitted,
      pointerEvents: "none",
    };
    const child = cloneElement(element, {
      style: buttonStyle,
      className: null,
    });
    return (
      <span
        style={spanStyle}
        className={classNames(element.props.className, `${prefixCls}-disabled-compatible-wrapper`)}
      >
        {child}
      </span>
    );
  }
  return element;
}

const Tooltip = React.forwardRef<unknown, TooltipProps>((props, ref) => {
  const ns = useNamespace("tooltip");

  const [open, setOpen] = useMergedState(false, {
    value: props.open,
    defaultValue: props.defaultOpen,
  });

  const isNoContent = () => {
    const { content, overlay } = props;
    return !content && !overlay && content !== 0; // overlay for old version compatibility
  };

  const onOpenChange = (vis: boolean) => {
    setOpen(isNoContent() ? false : vis);

    if (!isNoContent()) {
      props.onOpenChange?.(vis);
    }
  };

  const getTooltipPlacements = () => {
    const { builtinPlacements, arrowPointAtCenter = false, autoAdjustOverflow = true } = props;
    return (
      builtinPlacements ||
      getPlacements({
        arrowPointAtCenter,
        autoAdjustOverflow,
      })
    );
  };

  // 动态设置动画点
  const onPopupAlign = (domNode: HTMLElement, align: AlignType) => {
    const placements = getTooltipPlacements();
    // 当前返回的位置
    const placement = Object.keys(placements).find(
      (key) =>
        placements[key].points![0] === align.points?.[0] &&
        placements[key].points![1] === align.points?.[1],
    );
    if (!placement) {
      return;
    }
    // 根据当前坐标设置动画点
    const rect = domNode.getBoundingClientRect();

    const transformOrigin = { top: "50%", left: "50%" };

    if (/top|Bottom/.test(placement)) {
      transformOrigin.top = `${rect.height - align.offset![1]}px`;
    } else if (/Top|bottom/.test(placement)) {
      transformOrigin.top = `${-align.offset![1]}px`;
    }
    if (/left|Right/.test(placement)) {
      transformOrigin.left = `${rect.width - align.offset![0]}px`;
    } else if (/right|Left/.test(placement)) {
      transformOrigin.left = `${-align.offset![0]}px`;
    }
    domNode.style.transformOrigin = `${transformOrigin.left} ${transformOrigin.top}`;
  };

  const getOverlay = () => {
    const { content, overlay } = props;
    if (content === 0) {
      return content;
    }
    return overlay || content || "";
  };

  const {
    // getPopupContainer,
    placement = "top",
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    ...otherProps
  } = props;

  const {
    prefixCls: customizePrefixCls,
    // openClassName,
    // getTooltipContainer,
    overlayClassName,
    color,
    overlayInnerStyle,
    children,
  } = props;
  const prefixCls = customizePrefixCls || ns.b();
  const rootPrefixCls = ns.b();
  console.log("tooltip", prefixCls, rootPrefixCls);
  let tempOpen = open;
  // Hide tooltip when there is no content
  if (!("open" in props) && !("visible" in props) && isNoContent()) {
    tempOpen = false;
  }

  const child = getDisabledCompatibleChildren(
    isValidElement(children) && !isFragment(children) ? children : <span>{children}</span>,
    prefixCls,
  );
  // const childProps = child.props;
  // const childCls =
  //   !childProps.className || typeof childProps.className === "string"
  //     ? classNames(childProps.className, {
  //         [openClassName || `${prefixCls}-open`]: true,
  //       })
  //     : childProps.className;

  const customOverlayClassName = classNames(overlayClassName, {
    [`${prefixCls}-${color}`]: color && PresetColorRegex.test(color),
  });

  let formattedOverlayInnerStyle = overlayInnerStyle;
  let arrowContentStyle: React.CSSProperties = {};
  if (color && !PresetColorRegex.test(color)) {
    formattedOverlayInnerStyle = { ...overlayInnerStyle, background: color };
    // @ts-ignore
    arrowContentStyle = { "--antd-arrow-background-color": color };
  }
  console.log(tempOpen);
  // return (
  //   <RcTooltip placement="left" trigger={["click"]} overlay={<div>tooltip</div>}>
  //     <a href="#">hover</a>
  //   </RcTooltip>
  // );
  return (
    <RcTooltip
      {...otherProps}
      placement={placement}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      //prefixCls={prefixCls}
      overlayClassName={customOverlayClassName}
      // getTooltipContainer={getPopupContainer || getTooltipContainer}
      ref={ref}
      builtinPlacements={getTooltipPlacements()}
      overlay={getOverlay()}
      visible={tempOpen}
      onVisibleChange={onOpenChange}
      onPopupAlign={onPopupAlign}
      overlayInnerStyle={formattedOverlayInnerStyle}
      arrowContent={<span className={`${prefixCls}-arrow-content`} style={arrowContentStyle} />}
      motion={{
        motionName: getTransitionName(rootPrefixCls, "zoom-big-fast", props.transitionName),
        motionDeadline: 100,
      }}
    >
      <span>{child}</span>
      {/* {tempOpen ? cloneElement(child, { className: childCls }) : child} */}
    </RcTooltip>
  );
});

if (process.env.NODE_ENV !== "production") {
  Tooltip.displayName = "Tooltip";
}

export default Tooltip;
