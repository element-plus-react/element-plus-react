import { Watermark } from "element-plus-react";

const Demos = () => {
  return (
    <div className="demos-watermark ">
      <Watermark
        width={130}
        height={30}
        image="https://element-plus.org/images/element-plus-logo.svg"
      >
        <div style={{ height: "500px" }} />
      </Watermark>
    </div>
  );
};
export default Demos;
