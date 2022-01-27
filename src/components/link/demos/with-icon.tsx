import React from 'react'
import {Link} from 'element-plus-react'
import {EditOutlined,FundViewOutlined} from '@ant-design/icons'
import './index.scss'

const Demo = () => (<div>
    <Link icon={<EditOutlined />}>Edit</Link>
    <Link>
      Check<FundViewOutlined />
    </Link>
  </div> )

export default Demo

