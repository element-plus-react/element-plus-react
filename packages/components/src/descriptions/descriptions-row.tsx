import React, { useContext } from "react";
import { DescriptionsContext } from "./descriptions";
import DescriptionsCell from "./descriptions-cell";

interface DescriptionsRowProps {
  row: any[];
}

const DescriptionsRow: React.FC<DescriptionsRowProps> = (props) => {
  const { row } = props;
  const descriptions: any = useContext(DescriptionsContext);
  return descriptions.direction === "vertical" ? (
    <>
      <tr>
        {row.map((cell, index) => (
          <DescriptionsCell key={`tr1-${index}`} cell={cell} tag="th" type="label" />
        ))}
      </tr>
      <tr>
        {row.map((cell, index) => (
          <DescriptionsCell key={`tr2-${index}`} cell={cell} tag="td" type="content" />
        ))}
      </tr>
    </>
  ) : (
    <tr>
      {row.map((cell, index) => (
        <React.Fragment key={`tr3-${index}`}>
          {descriptions.border ? (
            <React.Fragment key={`tr3-${index}`}>
              <DescriptionsCell cell={cell} tag="td" type="label" />
              <DescriptionsCell cell={cell} tag="td" type="content" />
            </React.Fragment>
          ) : (
            <DescriptionsCell cell={cell} tag="td" type="both" />
          )}
        </React.Fragment>
      ))}
    </tr>
  );
};
export default DescriptionsRow;
