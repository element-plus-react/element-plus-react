import EyeOutlined from "@ant-design/icons/EyeOutlined";
import RcImage, { type ImageProps } from "rc-image";
import * as React from "react";
import { getTransitionName } from "../_util/motion";
import PreviewGroup, { icons } from "./PreviewGroup";

export interface CompositionImage<P> extends React.FC<P> {
  PreviewGroup: typeof PreviewGroup;
}

const imageLocale = { preview: "预览" };

const Image: CompositionImage<ImageProps> = ({
  // prefixCls: customizePrefixCls,
  preview,
  ...otherProps
}) => {
  // const ns = useNamespace("image");
  // const prefixCls = customizePrefixCls || ns.b();
  // const rootPrefixCls = ns.b();
  const prefixCls = "rc-image";
  const rootPrefixCls = "rc-image";
  const mergedPreview = React.useMemo(() => {
    if (preview === false) {
      return preview;
    }
    const _preview = typeof preview === "object" ? preview : {};
    const { /**getContainer, */ ...restPreviewProps } = _preview;
    return {
      mask: (
        <div className={`${prefixCls}-mask-info`}>
          <EyeOutlined />
          {imageLocale?.preview}
        </div>
      ),
      icons,
      ...restPreviewProps,
      //  getContainer: getContainer || getContextPopupContainer,
      transitionName: getTransitionName(rootPrefixCls, "zoom", _preview.transitionName),
      maskTransitionName: getTransitionName(rootPrefixCls, "fade", _preview.maskTransitionName),
    };
  }, [preview, imageLocale]);

  return <RcImage prefixCls={prefixCls} preview={mergedPreview} {...otherProps} />;
};

export { ImageProps };

Image.PreviewGroup = PreviewGroup;

export default Image;
