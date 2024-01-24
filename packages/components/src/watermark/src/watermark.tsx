import { useMutationObserver } from "ahooks";
import React, { useEffect, useRef, type CSSProperties } from "react";
import { IWatermarkProps } from "./types";
import useClips, { FontGap } from "./useClips";
import { getPixelRatio, getStyleStr, reRendering } from "./utils";

const style: CSSProperties = {
  position: "relative",
};

const Watermark: React.FC<IWatermarkProps> = (props) => {
  const { zIndex = 9, rotate = -22, content = "Element Plus", gap = [100, 100] } = props;
  const color = props.font?.color ?? "rgba(0,0,0,.15)";
  const fontSize = props.font?.fontSize ?? 16;
  const fontWeight = props.font?.fontWeight ?? "normal";
  const fontStyle = props.font?.fontStyle ?? "normal";
  const fontFamily = props.font?.fontFamily ?? "sans-serif";
  const textAlign = props.font?.textAlign ?? "center";
  const textBaseline = props.font?.textBaseline ?? "top";

  const gapX = gap[0];
  const gapY = gap[1];
  const gapXCenter = gapX / 2;
  const gapYCenter = gapY / 2;
  const offsetLeft = props.offset?.[0] ?? gapXCenter;
  const offsetTop = props.offset?.[1] ?? gapYCenter;

  const getMarkStyle = () => {
    const markStyle: React.CSSProperties = {
      zIndex,
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      backgroundRepeat: "repeat",
    };

    /** Calculate the style of the offset */
    let positionLeft = offsetLeft - gapXCenter;
    let positionTop = offsetTop - gapYCenter;
    if (positionLeft > 0) {
      markStyle.left = `${positionLeft}px`;
      markStyle.width = `calc(100% - ${positionLeft}px)`;
      positionLeft = 0;
    }
    if (positionTop > 0) {
      markStyle.top = `${positionTop}px`;
      markStyle.height = `calc(100% - ${positionTop}px)`;
      positionTop = 0;
    }
    markStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`;

    return markStyle;
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  const watermarkRef = useRef<HTMLDivElement>();
  const stopObservation = useRef(false);

  const destroyWatermark = () => {
    if (watermarkRef.current) {
      watermarkRef.current.remove();
      watermarkRef.current = undefined;
    }
  };
  const appendWatermark = (base64Url: string, markWidth: number) => {
    if (containerRef.current && watermarkRef.current) {
      stopObservation.current = true;
      watermarkRef.current.setAttribute(
        "style",
        getStyleStr({
          ...getMarkStyle(),
          backgroundImage: `url('${base64Url}')`,
          backgroundSize: `${Math.floor(markWidth)}px`,
        }),
      );
      containerRef.current?.append(watermarkRef.current);
      // Delayed execution
      setTimeout(() => {
        stopObservation.current = false;
      });
    }
  };

  /**
   * Get the width and height of the watermark. The default values are as follows
   * Image: [120, 64]; Content: It's calculated by content;
   */
  const getMarkSize = (ctx: CanvasRenderingContext2D) => {
    let defaultWidth = 120;
    let defaultHeight = 64;
    const image = props.image;
    const width = props.width;
    const height = props.height;
    if (!image && ctx.measureText) {
      ctx.font = `${Number(fontSize)}px ${fontFamily}`;
      const contents = Array.isArray(content) ? content : [content];
      const sizes = contents.map((item) => {
        const metrics = ctx.measureText(item!);

        return [
          metrics.width,
          // Using `actualBoundingBoxAscent` to be compatible with lower version browsers (eg: Firefox < 116)
          metrics.fontBoundingBoxAscent !== undefined
            ? metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
            : metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
        ];
      });
      defaultWidth = Math.ceil(Math.max(...sizes.map((size) => size[0])));
      defaultHeight =
        Math.ceil(Math.max(...sizes.map((size) => size[1]))) * contents.length +
        (contents.length - 1) * FontGap;
    }
    return [width ?? defaultWidth, height ?? defaultHeight] as const;
  };

  const getClips = useClips();

  const renderWatermark = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = props.image;

    if (ctx) {
      if (!watermarkRef.current) {
        watermarkRef.current = document.createElement("div");
      }

      const ratio = getPixelRatio();
      const [markWidth, markHeight] = getMarkSize(ctx);

      const drawCanvas = (
        drawContent?: NonNullable<IWatermarkProps["content"]> | HTMLImageElement,
      ) => {
        const [textClips, clipWidth] = getClips(
          drawContent || "",
          rotate,
          ratio,
          markWidth,
          markHeight,
          {
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            textAlign: textAlign,
            textBaseline: textBaseline,
          },
          gapX,
          gapY,
        );

        appendWatermark(textClips, clipWidth);
      };

      if (image) {
        const img = new Image();
        img.onload = () => {
          drawCanvas(img);
        };
        img.onerror = () => {
          drawCanvas(content);
        };
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.src = image;
      } else {
        drawCanvas(content);
      }
    }
  };
  useEffect(() => {
    renderWatermark();
    return () => {
      destroyWatermark();
    };
  }, []);

  const onMutate = (mutations: MutationRecord[]) => {
    if (stopObservation.current) {
      return;
    }
    mutations.forEach((mutation) => {
      if (reRendering(mutation, watermarkRef.current)) {
        destroyWatermark();
        renderWatermark();
      }
    });
  };

  useMutationObserver(onMutate, containerRef, {
    attributes: true,
    subtree: true,
    childList: true,
  });
  return (
    <div ref={containerRef} style={style} className={props.className}>
      {props.children}
    </div>
  );
};

export default Watermark;
