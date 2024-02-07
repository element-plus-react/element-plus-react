import { Button, Tooltip } from "element-plus-react";
import { useState } from "react";

const Demos = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <Tooltip
        disabled={disabled}
        content="click to close tooltip function"
        placement="bottom"
        effect="light"
      >
        <Button onClick={() => setDisabled(!disabled)}>
          click to {disabled ? "active" : "close"} tooltip function
        </Button>
      </Tooltip>
    </>
  );
};

export default Demos;
