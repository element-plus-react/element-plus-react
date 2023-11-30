import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { random } from "lodash-es";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { InnerStepsProps } from "./steps";

interface StepProps {
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  status?: "wait" | "process" | "finish" | "error" | "success";
}

interface ParentTypes {
  parent: {
    props: InnerStepsProps;
    steps: any[];
  };
  index: number;
}

const Step: React.FC<StepProps> = (props: StepProps & ParentTypes) => {
  const currentInstance = useMemo(() => ({ uid: random(1, 100) }), []);
  const { icon, parent } = props;
  const [lineStyle, setLineStyle] = useState({});
  const [internalStatus, setInternalStatus] = useState("");

  const currentStatus = useMemo(
    () => props.status || internalStatus,
    [internalStatus, props.status],
  );
  const prevStatus = useMemo(() => {
    const prevStep = parent.steps[props.index - 1];
    return prevStep ? prevStep.currentStatus : "wait";
  }, [parent.steps, props.index]);
  const isCenter = parent.props.alignCenter;
  const isVertical = parent.props.direction === "vertical";
  const isSimple = parent.props.simple;
  const stepsCount = parent.steps.length;

  const isLast = useMemo(
    () => parent.steps[stepsCount - 1]?.uid === currentInstance.uid,
    [currentInstance.uid, parent.steps, stepsCount],
  );
  const space = isSimple ? "" : parent.props.space;
  const style = useMemo(() => {
    const innerStyle: Record<string, unknown> = {
      flexBasis:
        typeof space === "number"
          ? `${space}px`
          : space || `${100 / (stepsCount - (isCenter ? 0 : 1))}%`,
    };
    if (isVertical) return innerStyle;
    if (isLast) {
      innerStyle.maxWidth = `${100 / stepsCount}%`;
    }
    return innerStyle;
  }, [isCenter, isLast, isVertical, space, stepsCount]);

  const calcProgress = useCallback(
    (status) => {
      let step = 100;
      const innerStyle: Record<string, unknown> = {};

      innerStyle.transitionDelay = `${150 * props.index}ms`;
      if (status === parent.props.processStatus) {
        step = 0;
      } else if (status === "wait") {
        step = 0;
        innerStyle.transitionDelay = `${-150 * props.index}ms`;
      }
      innerStyle.borderWidth = step && !isSimple ? "1px" : 0;
      innerStyle[parent.props.direction === "vertical" ? "height" : "width"] = `${step}%`;
      setLineStyle(innerStyle);
    },
    [props.index, isSimple, parent.props.direction, parent.props.processStatus],
  );

  const updateStatus = useCallback(
    (activeIndex) => {
      if (activeIndex > props.index) {
        setInternalStatus(parent.props.finishStatus);
      } else if (activeIndex === props.index && prevStatus !== "error") {
        setInternalStatus(parent.props.processStatus);
      } else {
        setInternalStatus("wait");
      }
      const prevChild = parent.steps[stepsCount - 1];
      if (prevChild) calcProgress(internalStatus);
    },
    [
      props.index,
      prevStatus,
      parent.steps,
      parent.props.finishStatus,
      parent.props.processStatus,
      stepsCount,
      calcProgress,
      internalStatus,
    ],
  );

  // useEffect(() => {
  //   const stepItemState = {
  //     uid: currentInstance.uid,
  //     currentStatus,
  //     setIndex,
  //     calcProgress,
  //   }
  //   if (parent.steps && parent.setSteps) {
  //     // parent.setSteps([...parent.steps, stepItemState])
  //   }
  // }, [calcProgress, currentInstance.uid, currentStatus])
  const classNames = classnames([
    "el-step",
    isSimple ? "is-simple" : `is-${parent.props.direction}`,
    isLast && !space && !isCenter && "is-flex",
    isCenter && !isVertical && !isSimple && "is-center",
  ]);
  useEffect(() => {
    updateStatus(parent.props.active);
    // return () => {
    //   const steps = parent.steps.filter(
    //     (instance) => instance.uid !== currentInstance.uid,
    //   )
    //   parent.setSteps(steps)
    // }
  }, [currentInstance.uid, parent.props.active, updateStatus]);
  return (
    <div style={style} className={classNames}>
      {/* !--icon & line--  */}
      <div className={`el-step__head is-${currentStatus}`}>
        {!isSimple && (
          <div className="el-step__line">
            <i className="el-step__line-inner" style={lineStyle}>
              {" "}
            </i>
          </div>
        )}
        <div className={`el-step__icon is-${icon ? "icon" : "text"}`}>
          {currentStatus !== "success" && currentStatus !== "error" ? (
            <>
              {icon && <i className="el-step__icon-inner">{icon}</i>}
              {!icon && !isSimple && <div className="el-step__icon-inner">{props.index + 1}</div>}
            </>
          ) : (
            <i className="el-step__icon-inner is-status">
              {currentStatus === "success" ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
            </i>
          )}
        </div>
      </div>
      {/*  <!-- title & description --> */}
      <div className="el-step__main">
        <div className={`el-step__title is-${currentStatus}`}>{props.title}</div>
        {isSimple ? (
          <div className="el-step__arrow" />
        ) : (
          <div className={`'el-step__description is-${currentStatus}`}>{props.description}</div>
        )}
      </div>
    </div>
  );
};

export default Step;
