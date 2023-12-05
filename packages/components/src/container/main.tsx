import React from "react";

type IMainProps = {
  children: React.ReactNode;
};

const Main: React.FC<IMainProps> = (props) => <main className="el-main">{props.children}</main>;

export default Main;
