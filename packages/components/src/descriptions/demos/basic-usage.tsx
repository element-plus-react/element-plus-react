import { Button, Descriptions } from "element-plus-react";

const Demo = () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="Username">kooriookami</Descriptions.Item>
    <Descriptions.Item label="Telephone">18100000000</Descriptions.Item>
    <Descriptions.Item label="Place">Suzhou</Descriptions.Item>
    <Descriptions.Item label="Remarks">
      <Button>School</Button>
    </Descriptions.Item>
    <Descriptions.Item label="Address">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </Descriptions.Item>
  </Descriptions>
);
export default Demo;
