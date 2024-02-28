import CloseOutlined from "@ant-design/icons/CloseOutlined";
import LeftOutlined from "@ant-design/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons/RightOutlined";
import RotateLeftOutlined from "@ant-design/icons/RotateLeftOutlined";
import RotateRightOutlined from "@ant-design/icons/RotateRightOutlined";
import ZoomInOutlined from "@ant-design/icons/ZoomInOutlined";
import ZoomOutOutlined from "@ant-design/icons/ZoomOutOutlined";
import { useNamespace } from "@element-plus/hooks";
import RcImage from "rc-image";
import type { GroupConsumerProps } from "rc-image/lib/PreviewGroup";
import * as React from "react";
import { getTransitionName } from "../_util/motion";

export const icons = {
  rotateLeft: <RotateLeftOutlined />,
  rotateRight: <RotateRightOutlined />,
  zoomIn: <ZoomInOutlined />,
  zoomOut: <ZoomOutOutlined />,
  close: <CloseOutlined />,
  left: <LeftOutlined />,
  right: <RightOutlined />,
};

const InternalPreviewGroup: React.FC<GroupConsumerProps> = ({
  previewPrefixCls: customizePrefixCls,
  preview,
  ...props
}) => {
  const ns = useNamespace("image-preview");
  const prefixCls = customizePrefixCls || ns.b();
  const rootPrefixCls = ns.b();

  const mergedPreview = React.useMemo(() => {
    if (preview === false) {
      return preview;
    }
    const _preview = typeof preview === "object" ? preview : {};

    return {
      ..._preview,
      transitionName: getTransitionName(rootPrefixCls, "zoom", _preview.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls, "fade", _preview.maskTransitionName),
    };
  }, [preview]);

  return (
    <RcImage.PreviewGroup
      preview={mergedPreview}
      previewPrefixCls={prefixCls}
      icons={icons}
      {...props}
    />
  );
};

export default InternalPreviewGroup;
