import React, { useMemo } from "react";

interface HeaderProps {
  height?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  const style = useMemo<React.CSSProperties>(
    () => (props.height ? ({ "--el-header-height": props.height } as React.CSSProperties) : {}),
    [props.height],
  );
  return (
    <header className="el-header" style={style}>
      {props.children}
    </header>
  );
};

export default Header;
