import { Image } from "element-plus-react";

const fits = ["fill", "contain", "cover", "none", "scale-down"];
const url = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";

const Demos = () => {
  return (
    <div className="demo-image">
      {fits.map((fit) => (
        <div key={fit} className="block">
          <span className="demonstration">{fit}</span>
          <Image style={{ width: "100px", height: "100px" }} src={url} fit={fit}></Image>
        </div>
      ))}
    </div>
  );
};

export default Demos;
