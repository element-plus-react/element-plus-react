import { Watermark } from "element-plus-react";
import { useState } from "react";
import "./index.scss";

const Demos = () => {
  const [config] = useState({
    content: "Element Plus",
    font: {
      fontSize: 16,
      color: "rgba(0, 0, 0, 0.15)",
    },
    zIndex: -1,
    rotate: -22,
    gap: [100, 100] as [number, number],
    offset: [] as unknown as [number, number],
  });
  return (
    <div className="wrapper">
      <Watermark
        className="watermark"
        content={config.content}
        font={config.font}
        z-index={config.zIndex}
        rotate={config.rotate}
        gap={config.gap}
        offset={config.offset}
      >
        <div className="demo">
          <h1>Element Plus</h1>
          <h2>A Vue 3 based component library for designers and developers</h2>
          <img src="https://element-plus.org/images/element-plus-logo.svg" alt="示例图片" />
        </div>
      </Watermark>
      {/* <el-form
      class="form"
      :model="config"
      label-position="top"
      label-width="50px"
    >
      <el-form-item label="Content">
        <el-input v-model="config.content" />
      </el-form-item>
      <el-form-item label="Color">
        <el-color-picker v-model="config.font.color" show-alpha />
      </el-form-item>
      <el-form-item label="FontSize">
        <el-slider v-model="config.font.fontSize" />
      </el-form-item>
      <el-form-item label="zIndex">
        <el-slider v-model="config.zIndex" />
      </el-form-item>
      <el-form-item label="Rotate">
        <el-slider v-model="config.rotate" :min="-180" :max="180" />
      </el-form-item>
      <el-form-item label="Gap">
        <el-space>
          <el-input-number v-model="config.gap[0]" controls-position="right" />
          <el-input-number v-model="config.gap[1]" controls-position="right" />
        </el-space>
      </el-form-item>
      <el-form-item label="Offset">
        <el-space>
          <el-input-number
            v-model="config.offset[0]"
            placeholder="offsetLeft"
            controls-position="right"
          />
          <el-input-number
            v-model="config.offset[1]"
            placeholder="offsetTop"
            controls-position="right"
          />
        </el-space>
      </el-form-item>
    </el-form> */}
    </div>
  );
};
export default Demos;
