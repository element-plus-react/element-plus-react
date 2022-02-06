import React from 'react'
import {Link} from 'element-plus-react'
import './index.scss'

const Demo = () => (<div>
    <Link disabled>default</Link>
    <Link type="primary" disabled>primary</Link>
    <Link type="success" disabled>success</Link>
    <Link type="warning" disabled>warning</Link>
    <Link type="danger" disabled>danger</Link>
    <Link type="info" disabled>info</Link>
  </div> )

export default Demo
