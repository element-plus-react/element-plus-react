import { cAF, rAF } from "@element-plus/utils";
import { type Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import Statistic from "../../statistics";
import { formatTime, getTime } from "./utils";

export type ICountdownProps = {
  /**
   * @description Formatting the countdown display
   */
  format?: string;
  /**
   * @description Sets the prefix of a countdown
   */
  prefix: string;
  /**
   * @description Sets the suffix of a countdown
   */
  suffix: string;
  /**
   * @description countdown titles
   */
  title: string;
  /**
   * @description target time
   */
  value: number | Dayjs;
  /**
   * @description Styles countdown values
   */
  valueStyle: React.CSSProperties;
};

const Countdown: React.FC<ICountdownProps> = (props) => {
  const { format = "HH:mm:ss" } = props;
  let timer = React.useRef<ReturnType<typeof rAF> | undefined>();
  const [rawValue, setRawValue] = useState(getTime(props.value) - Date.now());
  //const displayValue = useMemo(() => formatTime(rawValue, format), [rawValue, props.format]);

  const formatter = (val: number) => formatTime(val, format);

  const stopTimer = () => {
    if (timer.current) {
      cAF(timer.current);
      timer.current = undefined;
    }
  };

  const startTimer = () => {
    console.log("start");
    const timestamp = getTime(props.value);
    const frameFunc = () => {
      let diff = timestamp - Date.now();
      if (diff <= 0) {
        diff = 0;
        stopTimer();
      } else {
        timer.current = rAF(frameFunc);
      }
      setRawValue(diff);
    };
    timer.current = rAF(frameFunc);
    console.log(timer);
  };
  useEffect(() => {
    stopTimer();
    startTimer();
    return () => {
      stopTimer();
    };
  }, [props.value, props.format]);

  return (
    <Statistic
      value={rawValue}
      title={props.title}
      prefix={props.prefix}
      suffix={props.suffix}
      valueStyle={props.valueStyle}
      formatter={formatter}
    ></Statistic>
  );
};

export default React.memo(Countdown);
