import { pick } from "lodash-es";
import React, { createContext } from "react";
import { ButtonProps } from "./button";

type ButtonGroupProps = Pick<ButtonProps, "type" | "size" | "children">;

export const ButtonGroupContext = createContext<ButtonGroupProps>({});

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const value = pick(props, "type", "size");
  return (
    <ButtonGroupContext.Provider value={value}>
      <div className="el-button-group">{props.children}</div>
    </ButtonGroupContext.Provider>
  );
};

export default ButtonGroup;
