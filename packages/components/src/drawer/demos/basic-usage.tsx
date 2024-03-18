import { Button, Drawer } from "element-plus-react";
import { useState } from "react";

function Demos() {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      {/* <el-radio-group v-model="direction">
    <el-radio label="ltr">left to right</el-radio>
    <el-radio label="rtl">right to left</el-radio>
    <el-radio label="ttb">top to bottom</el-radio>
    <el-radio label="btt">bottom to top</el-radio>
  </el-radio-group> */}

      <Button type="primary" onClick={() => setDrawer(true)}>
        open
      </Button>

      <Drawer
        visible={drawer}
        title="I am the title"
        onClose={() => setDrawer(false)}
      >
        <span>Hi, there!</span>
      </Drawer>
    </>
  );
}

export default Demos;
