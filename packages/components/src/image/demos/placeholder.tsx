const src = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";

import { Image } from "element-plus-react";

const Demos = () => {
  return (
    <div className="demo-image__placeholder">
      <div className="block">
        <span className="demonstration">Default</span>
        <Image src={src}></Image>
      </div>
      <div className="block">
        <span className="demonstration">Custom</span>
        <Image
          src={src}
          placeholder={
            <div className="image-slot">
              Loading<span className="dot">...</span>
            </div>
          }
        ></Image>
      </div>
    </div>
  );
};

export default Demos;
