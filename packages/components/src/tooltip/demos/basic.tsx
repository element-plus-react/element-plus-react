import { Button, Tooltip } from "element-plus-react";
import "./index.scss";

const Demos = () => {
  return (
    <>
      <div className="tooltip-base-box">
        <div className="row center">
          <Tooltip
            className="box-item"
            //effect="dark"
            content="Top Left prompts info"
            placement="topLeft"
          >
            <Button>top-start</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            //effect="dark"
            content="Top Center prompts info"
            placement="top"
          >
            <Button>top</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            //effect="dark"
            content="Top Right prompts info"
            placement="topRight"
          >
            <Button>top-end</Button>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            className="box-item"
            //effect="dark"
            content="Left Top prompts info"
            placement="leftTop"
          >
            <Button>left-start</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            //effect="dark"
            content="Right Top prompts info"
            placement="rightTop"
          >
            <Button>right-start</Button>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            className="box-item"
            // effect="dark"
            content="Left Center prompts info"
            placement="left"
          >
            <Button>left</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            // effect="dark"
            content="Right Center prompts info"
            placement="right"
          >
            <Button>right</Button>
          </Tooltip>
        </div>
        <div className="row">
          <Tooltip
            className="box-item"
            //effect="dark"
            content="Left Bottom prompts info"
            placement="leftBottom"
          >
            <Button>left-end</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            // effect="dark"
            content="Right Bottom prompts info"
            placement="rightBottom"
          >
            <Button>right-end</Button>
          </Tooltip>
        </div>
        <div className="row center">
          <Tooltip
            className="box-item"
            // effect="dark"
            content="Bottom Left prompts info"
            placement="bottomLeft"
          >
            <Button>bottom-start</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            //  effect="dark"
            content="Bottom Center prompts info"
            placement="bottom"
          >
            <Button>bottom</Button>
          </Tooltip>
          <Tooltip
            className="box-item"
            //  effect="dark"
            content="Bottom Right prompts info"
            placement="bottomRight"
          >
            <Button>bottom-end</Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Demos;
