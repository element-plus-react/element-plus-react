import React from 'react'
import { Avatar } from 'element-plus-react'
import './index.scss'

const state = {
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
}

const Demo = () => (<div className="demo-fit">
    {state.fits.map(fit=> (<div key={fit} className="block">
      <span className="title">{ fit }</span>
      <Avatar shape="square" size={100} fit={fit} src={state.url}/>
      </div>))}
  </div>
)

export default Demo



