import { CaretDownOutlined, CaretUpOutlined, WarningOutlined } from "@ant-design/icons";
import { Col, Row, Statistic } from "element-plus-react";
import "./index.scss";
const Demos = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <div className="statistic-card">
          <Statistic
            value={98500}
            title={
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                Daily active users
                <WarningOutlined />
                {/* <el-tooltip
                effect="dark"
                content="Number of users who logged into the product in one day"
                placement="top"
              >
                <WarningFilled/>
              </el-tooltip> */}
              </div>
            }
          ></Statistic>
          <div className="statistic-footer">
            <div className="footer-item">
              <span>than yesterday</span>
              <span className="green">
                24%
                <CaretUpOutlined />
              </span>
            </div>
          </div>
        </div>
      </Col>
      <Col span={8}>
        <div className="statistic-card">
          <Statistic
            value={693700}
            title={
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                Monthly Active Users
                <WarningOutlined />
                {/* <el-tooltip
                effect="dark"
                content="Number of users who logged into the product in one month"
                placement="top"
              >
               <WarningFilled/>
              </el-tooltip> */}
              </div>
            }
          ></Statistic>
          <div className="statistic-footer">
            <div className="footer-item">
              <span>month on month</span>
              <span className="red">
                12%
                <CaretDownOutlined />
              </span>
            </div>
          </div>
        </div>
      </Col>
      <Col span={8}>
        <div className="statistic-card">
          <Statistic
            value={72000}
            title={
              <div style={{ display: "inline-flex", alignItems: "center" }}>
                New transactions today
              </div>
            }
          ></Statistic>
          <div className="statistic-footer">
            <div className="footer-item">
              <span>than yesterday</span>
              <span className="green">
                16%
                <CaretUpOutlined />
              </span>
            </div>
            <div className="footer-item">
              <CaretDownOutlined />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Demos;
