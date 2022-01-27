import React from 'react'
import {Link} from 'element-plus-react'
import './index.scss'

const Demo = () => (
    <div>
        <Link href="https://element.eleme.io" target="_blank">default</Link>
        <Link type="primary">primary</Link>
        <Link type="success">success</Link>
        <Link type="warning">warning</Link>
        <Link type="danger">danger</Link>
        <Link type="info">info</Link>
      </div>
  )

export default Demo


