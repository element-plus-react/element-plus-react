import { Watermark } from "element-plus-react";

const font = {
  color: "rgba(0, 0, 0, .15)",
};

const Demos = () => {
  return (
    <div className="demos-watermark ">
      <Watermark font={font}>
        <div style={{ height: "500px" }} />
      </Watermark>
    </div>
  );
};

export default Demos;
