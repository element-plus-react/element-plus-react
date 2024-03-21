import StarFilled from "@ant-design/icons/StarFilled";
import RcRate from "rc-rate";
import type { RateProps as RcRateProps } from "rc-rate/lib/Rate";
import * as React from "react";
import Tooltip from "../tooltip";

export interface RateProps extends RcRateProps {
  tooltips?: Array<string>;
}

interface RateNodeProps {
  index: number;
}

const Rate = React.forwardRef<unknown, RateProps>((props, ref) => {
  const { prefixCls, tooltips, character = <StarFilled />, ...rest } = props;
  // const characterRender = (node: React.ReactElement, { index }: RateNodeProps) => {
  //   if (!tooltips) {
  //     return node;
  //   }
  //   return <Tooltip title={tooltips[index]}>{node}</Tooltip>;
  // };
  const ratePrefixCls = "rc-rate" || prefixCls;
  console.log(character);
  return (
    <RcRate
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      ref={ref}
      character={character}
     // characterRender={characterRender}
      {...rest}
      prefixCls={ratePrefixCls}
    />
  );
});

if (process.env.NODE_ENV !== "production") {
  Rate.displayName = "Rate";
}

export default Rate;
