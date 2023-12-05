import React, { useMemo } from "react";
import ImgEmpty from "./img-empty";

interface EmptyProps {
  image?: string;
  imageSize?: number;
  description?: string;
  children?: React.ReactNode;
}

const Empty: React.FC<EmptyProps> = (props) => {
  const imageStyle = useMemo<React.CSSProperties>(
    () => ({
      width: props.imageSize ? `${props.imageSize}px` : "",
    }),
    [props.imageSize],
  );
  return (
    <div className="el-empty">
      <div className="el-empty__image" style={imageStyle}>
        {props.image ? <img src={props.image} onDragStart={() => false} /> : <ImgEmpty />}
      </div>
      <div className="el-empty__description">
        <p>{props.description || "暂无数据"}</p>
      </div>
      <div className="el-empty__bottom">{props.children}</div>
    </div>
  );
};

export default Empty;
