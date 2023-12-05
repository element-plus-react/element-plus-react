import React, { useMemo } from "react";

interface FooterProps {
  height?: string;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = (props) => {
  const style = useMemo<React.CSSProperties>(
    () => (props.height ? ({ "--el-footer-height": props.height } as React.CSSProperties) : {}),
    [props.height],
  );
  return (
    <footer className="el-footer" style={style}>
      {props.children}
    </footer>
  );
};

export default Footer;
