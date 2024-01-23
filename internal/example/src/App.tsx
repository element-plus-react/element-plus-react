import { Button } from "element-plus-react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        {count}
      </Button>
    </>
  );
}

export default App;
