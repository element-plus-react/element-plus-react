const font = {
  color: "rgba(0, 0, 0, .15)",
};

import { Watermark } from "element-plus-react";

const Demos = () => {
  return (
    <Watermark font={font} content={["Element+", "Element Plus"]}>
      <div style={{ height: "500px" }} />
    </Watermark>
  );
};
export default Demos;
