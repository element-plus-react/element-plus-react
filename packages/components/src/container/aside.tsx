import React, { useMemo } from "react";

interface AsideProps {
  width?: string;
  children?: React.ReactNode;
}

const Aside: React.FC<AsideProps> = (props) => {
  const style = useMemo<React.CSSProperties>(
    () => (props.width ? ({ "--el-aside-width": props.width } as React.CSSProperties) : {}),
    [props.width],
  );
  return (
    <aside className="el-aside" style={style}>
      {props.children}
    </aside>
  );
};

export default Aside;
