import { Button, Tooltip } from "element-plus-react";

const Demos = () => {
  return (
    <div>
      <Tooltip
        content={
          <>
            multiple lines
            <br />
            second line
          </>
        }
        placement="top"
      >
        <Button>Top center</Button>
      </Tooltip>
    </div>
  );
};

export default Demos;
