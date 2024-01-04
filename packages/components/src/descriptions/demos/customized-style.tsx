import { Button, Descriptions } from "element-plus-react";
import "./index.scss";

const Demo = () => (
  <Descriptions title="Customized style list" column={3} border>
    <Descriptions.Item
      label="Username"
      labelAlign="right"
      align="center"
      labelClassName="my-label"
      className="my-content"
      width={150}
    >
      kooriookami
    </Descriptions.Item>
    <Descriptions.Item label="Telephone" labelAlign="right" align="center">
      18100000000
    </Descriptions.Item>
    <Descriptions.Item label="Place" labelAlign="right" align="center">
      Suzhou
    </Descriptions.Item>
    <Descriptions.Item label="Remarks" labelAlign="right" align="center">
      <Button size="small">School</Button>
    </Descriptions.Item>
    <Descriptions.Item label="Address" labelAlign="right" align="center">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </Descriptions.Item>
  </Descriptions>
);
export default Demo;
