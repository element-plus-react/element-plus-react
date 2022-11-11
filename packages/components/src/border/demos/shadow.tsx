import React from "react";
import './index.scss'

const shadowGroup = [
  {
    name: 'Basic Shadow',
    type: 'base',
  },
  {
    name: 'Light Shadow',
    type: 'light',
  },
]

const getValue = (type: string) => {
  const getCssVarValue = (prefix, type) =>
    getComputedStyle(document.documentElement).getPropertyValue(
      `--el-${prefix}-${type}`
    )
  return getCssVarValue('box-shadow', type)
}

const Border = () => {
  return (
    <div>
      {shadowGroup.map((shadow, i) => <div key={i}><div
        className="demo-shadow"
        style={{ boxShadow: `var(--el-box-shadow-${shadow.type})` }}
      ></div>
        <span className="demo-shadow-text">{shadow.name}
          <code>box-shadow: {getValue(shadow.type)}</code></span
        ></div>)}
    </div>
  )
}

export default Border