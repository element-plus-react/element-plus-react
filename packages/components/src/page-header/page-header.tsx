import { ArrowLeftOutlined } from "@ant-design/icons";
import { isFunction } from "lodash-es";
import React from "react";

interface PageHeaderProps {
  icon?: React.ReactNode;
  title?: string;
  content?: string;
  onBack?: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { icon = <ArrowLeftOutlined /> } = props;
  const handleClick = () => {
    if (isFunction(props.onBack)) {
      props.onBack();
    }
  };
  return (
    <div className="el-page-header">
      <div className="el-page-header__left" onClick={handleClick}>
        <div className="el-page-header__icon">{icon}</div>
        <div className="el-page-header__title">{props.title}</div>
      </div>
      <div className="el-page-header__content">{props.content}</div>
    </div>
  );
};

export default PageHeader;
