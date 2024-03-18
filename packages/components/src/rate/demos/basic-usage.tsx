import { Rate } from "element-plus-react";

const value1 = 1;
const value2 = 1;
const colors = ["#99A9BF", "#F7BA2A", "#FF9900"]; // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
function Demos() {
  return (
    <>
      <div className="demo-rate-block">
        <span className="demonstration">Default</span>
        <Rate defaultValue={value1}></Rate>
      </div>
      <div className="demo-rate-block">
        <span className="demonstration">Color for different levels</span>
        <Rate value={value2}></Rate>
      </div>
    </>
  );
}

export default Demos;
