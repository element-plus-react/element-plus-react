import { MessageOutlined, WomanOutlined } from "@ant-design/icons";
import { Col, Row, Statistic } from "element-plus-react";
import "./index.scss";

const Demos = () => {
  const source = 172000;
  return (
    <Row>
      <Col span={6}>
        <Statistic title="Daily active users" value={268500} />
      </Col>
      <Col span={6}>
        <Statistic
          value={138}
          title={
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              Ratio of men to women
              <WomanOutlined style={{ marginLeft: "4px" }} size={12} />
            </div>
          }
          suffix="100"
        ></Statistic>
      </Col>
      <Col span={6}>
        <Statistic title="Total Transactions" value={source} />
      </Col>
      <Col span={6}>
        <Statistic
          title="Feedback number"
          value={562}
          suffix={<MessageOutlined style={{ verticalAlign: "-0.125em" }} />}
        ></Statistic>
      </Col>
    </Row>
  );
};

export default Demos;
