import React from "react";

type IProps = {
  children?: React.ReactNode;
};

const Timeline: React.FC<IProps> = (props) => <ul className="el-timeline">{props.children}</ul>;

export default Timeline;
