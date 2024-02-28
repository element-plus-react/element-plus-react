const src = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";

import { Image } from "element-plus-react";

const Demos = () => {
  return (
    <div className="demo-image__error">
      <div className="block">
        <span className="demonstration">Default</span>
        <Image></Image>
      </div>
      <div className="block">
        <span className="demonstration">Custom</span>
        <Image fallback={src}></Image>
      </div>
    </div>
  );
};

export default Demos;
