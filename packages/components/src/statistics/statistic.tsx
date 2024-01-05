import { useNamespace } from "@element-plus/hooks";
import type { Dayjs } from "dayjs";
import { isFunction, isNumber } from "lodash-es";
import React, { useMemo } from "react";

export type IStatisticProps = {
  /**
   * @description Setting the decimal point
   */
  decimalSeparator?: string;
  /**
   * @description Sets the thousandth identifier
   */
  groupSeparator?: string;
  /**
   * @description numerical precision
   */
  precision?: number;
  /**
   * @description Custom numerical presentation
   */
  formatter?: (value: number | Dayjs) => string;
  /**
   * @description Numerical content
   */
  value: number | Dayjs;
  /**
   * @description Sets the prefix of a number
   */
  prefix?: string | React.ReactNode;

  /**
   * @description  Sets the suffix of a number
   */
  suffix?: string | React.ReactNode;
  /**
   * @description Numeric titles
   */
  title?: string | React.ReactNode;
  /**
   * @description Styles numeric values
   */
  valueStyle?: React.CSSProperties;
};

const Statistic: React.FC<IStatisticProps> = (props) => {
  const { formatter, precision = 0, decimalSeparator = ".", groupSeparator = "," } = props;
  const ns = useNamespace("statistic");
  const displayValue = useMemo(() => {
    if (isFunction(formatter)) return props.formatter?.(props.value);

    if (!isNumber(props.value)) return props.value;

    let [integer, decimal = ""] = String(props.value).split(".");
    decimal = decimal.padEnd(precision, "0").slice(0, precision > 0 ? precision : 0);
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
    return [integer, decimal].join(decimal ? decimalSeparator : "");
  }, [props.value]);
  return (
    <div className={ns.b()}>
      {props.title && <div className={ns.e("head")}>{props.title}</div>}
      <div className={ns.e("content")}>
        {props.prefix && (
          <div className={ns.e("prefix")}>
            <span>{props.prefix}</span>
          </div>
        )}
        <span className={ns.e("number")} style={props.valueStyle}>
          {displayValue}
        </span>
        {props.suffix && (
          <div className={ns.e("suffix")}>
            <span>{props.suffix}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistic;
