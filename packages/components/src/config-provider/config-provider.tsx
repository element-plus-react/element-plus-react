import { omit } from "lodash-es";
import React, { createContext, useEffect, useState } from "react";

export interface GlobalConfigTypes {
  size?: "large" | "default" | "small";
  zIndex?: number;
  autoInsertSpace?: boolean;
  message?: {
    max?: number;
  };
}

export const GlobalConfig = createContext<GlobalConfigTypes>({});

const ConfigProvider: React.FC<GlobalConfigTypes> = (props) => {
  const [state, setState] = useState<GlobalConfigTypes>({});
  useEffect(() => {
    setState(omit(props, ["children"]));
  }, [props]);
  return <GlobalConfig.Provider value={state}>{props.children}</GlobalConfig.Provider>;
};

export default ConfigProvider;
