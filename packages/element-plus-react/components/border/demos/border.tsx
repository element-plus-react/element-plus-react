import React from "react";
import './index.scss'

const Border = ()=>{
  return (
    <table className="demo-border">
    <tbody>
      <tr>
        <td className="text">Name</td>
        <td className="text">Thickness</td>
        <td className="line">Demo</td>
      </tr>
      <tr>
        <td className="text">Solid</td>
        <td className="text">1px</td>
        <td className="line">
          <div></div>
        </td>
      </tr>
      <tr>
        <td className="text">Dashed</td>
        <td className="text">2px</td>
        <td className="line">
          <div className="dashed"></div>
        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default Border