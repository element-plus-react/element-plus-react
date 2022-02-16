import React from 'react'
import { getCssVar } from '../../../packages/utils'

const fontSizes = [
  {
    level: 'Supplementary text',
    type: 'extra-small',
  },
  {
    level: 'Body (small)',
    type: 'small',
  },
  {
    level: 'Body',
    type: 'base',
  },
  {
    level: 'Small Title',
    type: 'medium',
  },
  {
    level: 'Title',
    type: 'large',
  },
  {
    level: 'Main Title',
    type: 'extra-large',
  },
]

function formatType (type: string) {
  return type.split('-').
    map((item) => item.charAt(0).toUpperCase() + item.slice(1)).
    join(' ')
}

const Demo = () => (<table className="demo-typo-size">
    <tbody>
    <tr>
      <td>Level</td>
      <td>Font Size</td>
      <td className="color-dark-light">Demo</td>
    </tr>
    {fontSizes.map((fontSize) => (<tr
      key={fontSize.level}
      style={{ fontSize: `var(--el-font-size-${fontSize.type})`}}
    >
      <td>{fontSize.level}</td>
      <td>
        {
          `${getCssVar(`--el-font-size-${fontSize.type}`)
          } ${
          formatType(fontSize.type)}`
        }
      </td>
      <td>Build with Element</td>
    </tr>))}
    </tbody>
  </table>)

export default Demo

