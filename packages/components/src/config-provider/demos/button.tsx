import React, { useState } from "react";
import { ConfigProvider, Button } from "element-plus-react";

const Demo = () => {
  const [config, setConfig] = useState({ autoInsertSpace: false });
  const handleClick = () => {
    if (config.autoInsertSpace) {
      setConfig({ autoInsertSpace: false });
    } else {
      setConfig({ autoInsertSpace: true });
    }
  };
  return (
    <>
      <ConfigProvider autoInsertSpace={config.autoInsertSpace}>
        <Button onClick={handleClick}>中文</Button>
      </ConfigProvider>
      <div>{JSON.stringify(config.autoInsertSpace)}</div>
    </>
  );
};

export default Demo;
