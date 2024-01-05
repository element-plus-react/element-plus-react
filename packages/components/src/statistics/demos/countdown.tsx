import { CalculatorFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import { Button, Col, Countdown, Row } from "element-plus-react";
import { useState } from "react";

const value = Date.now() + 1000 * 60 * 60 * 7;
const value2 = dayjs().add(1, "month").startOf("month");

const Demos = () => {
  const [value1, setValue1] = useState(Date.now() + 1000 * 60 * 60 * 24 * 2);

  function reset() {
    setValue1(Date.now() + 1000 * 60 * 60 * 24 * 2);
  }
  return (
    <Row>
      <Col span={8}>
        <Countdown title="Start to grab" value={value} />
      </Col>
      <Col span={8}>
        <Countdown title="Remaining VIP time" format="HH:mm:ss" value={value1} />
        <Button className="countdown-footer" type="primary" onClick={reset}>
          Reset
        </Button>
      </Col>
      <Col span={8}>
        <Countdown
          format="DD [days] HH:mm:ss"
          value={value2}
          title={
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <CalculatorFilled style={{ marginRight: "4px" }} size={12} />
              Still to go until next month
            </div>
          }
        ></Countdown>
        <div className="countdown-footer">{value2.format("YYYY-MM-DD")}</div>
      </Col>
    </Row>
  );
};

export default Demos;
