import { Button } from "element-plus-react";
import "element-plus-react/theme-chalk/src/index.scss";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        {count}
      </Button>
    </>
  );
}

export default App;
