import { Button, Tooltip } from "element-plus-react";

const Demos = () => {
  return (
    <div>
      <Tooltip content="Top center" placement="top">
        <Button>Dark</Button>
      </Tooltip>
      <Tooltip content="Bottom center" placement="bottom" effect="light">
        <Button>Light</Button>
      </Tooltip>
    </div>
  );
};

export default Demos;
