(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[87],{MZF8:function(t,e,n){"use strict";var o=n("ogwx");n.d(e,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(t,e,n){"use strict";n.r(e);var o=n("wx14"),a=n("q1tI"),r=n.n(a),i=n("RGYn"),c=n("HaE+"),u=n("o0o1"),p=n.n(u),s=n("LtsZ"),l='import React from "react";\nimport { Button, Row } from \'element-plus-react\'\n\nexport default () => (<>\n    <Row className="mb-4">\n      <Button>Default</Button>\n      <Button type="primary">Primary</Button>\n      <Button type="success">Success</Button>\n      <Button type="info">Info</Button>\n      <Button type="warning">Warning</Button>\n      <Button type="danger">Danger</Button>\n      <Button>\u4e2d\u6587</Button>\n    </Row>\n\n    <Row className="mb-4">\n      <Button plain>Plain</Button>\n      <Button type="primary" plain>Primary</Button>\n      <Button type="success" plain>Success</Button>\n      <Button type="info" plain>Info</Button>\n      <Button type="warning" plain>Warning</Button>\n      <Button type="danger" plain>Danger</Button>\n    </Row>\n\n    <Row className="mb-4">\n      <Button round>Round</Button>\n      <Button type="primary" round>Primary</Button>\n      <Button type="success" round>Success</Button>\n      <Button type="info" round>Info</Button>\n      <Button type="warning" round>Warning</Button>\n      <Button type="danger" round>Danger</Button>\n    </Row>\n\n    {/* <Row>\n  <Button :icon="Search" circle></Button>\n  <Button type="primary" :icon="Edit" circle></Button>\n  <Button type="success" :icon="Check" circle></Button>\n  <Button type="info" :icon="Message" circle></Button>\n  <Button type="warning" :icon="Star" circle></Button>\n  <Button type="danger" :icon="Delete" circle></Button>\n</Row>  */}\n  </>)',m='import React from "react";\nimport { Button, Row } from \'element-plus-react\'\n\nexport default () => (<>\n    <Row className="mb-4">\n      <Button disabled>Default</Button>\n      <Button type="primary" disabled>Primary</Button>\n      <Button type="success" disabled>Success</Button>\n      <Button type="info" disabled>Info</Button>\n      <Button type="warning" disabled>Warning</Button>\n      <Button type="danger" disabled>Danger</Button>\n    </Row>\n\n    <Row>\n      <Button plain disabled>Plain</Button>\n      <Button type="primary" plain disabled>Primary</Button>\n      <Button type="success" plain disabled>Success</Button>\n      <Button type="info" plain disabled>Info</Button>\n      <Button type="warning" plain disabled>Warning</Button>\n      <Button type="danger" plain disabled>Danger</Button>\n    </Row>\n  </>)',d='import React from "react";\nimport { Button, Row } from \'element-plus-react\'\n\nexport default () => (<Row >\n      <Button type="text">Text Button</Button>\n      <Button type="text" disabled>Text Button</Button>\n    </Row>)',B='import React from "react";\nimport { Button, Row } from \'element-plus-react\'\nimport {SearchOutlined,EditOutlined,CheckCircleOutlined,MessageOutlined,StarOutlined,SoundOutlined} from \'@element-plus/icons-react\'\n\nexport default () => (<Row>\n  <Button icon={<SearchOutlined />} circle />\n  <Button type="primary" icon={<EditOutlined />}  />\n  <Button type="success" icon={<CheckCircleOutlined />}  />\n  <Button type="info" icon={<MessageOutlined />}  />\n  <Button type="warning" icon={<StarOutlined />}  />\n  <Button type="danger" icon={<SoundOutlined />} >\u6309\u94ae</Button>\n</Row>)',f='import React from "react";\nimport { Button, Row } from "element-plus-react";\n\nexport default () => (<>\n  <Row className="mb-4">\n    <Button.Group type="primary">\n      <Button type="success">Success</Button>\n      <Button type="info">Info</Button>\n      <Button>Warning</Button>\n      <Button>Danger</Button>\n    </Button.Group>\n  </Row>\n  <Row className="mb-4">\n    <Button.Group type="primary" size="small">\n      <Button type="success">Success</Button>\n      <Button type="info">Info</Button>\n      <Button>Warning</Button>\n      <Button>Danger</Button>\n    </Button.Group>\n  </Row>\n</>)',h='import React from "react";\nimport { Button, Row } from \'element-plus-react\'\n\nexport default () => (<Row className="mb-4">\n      <Button loading>Default</Button>\n      <Button type="primary" loading>Primary</Button>\n      <Button type="success" loading>Success</Button>\n      <Button type="info" loading>Info</Button>\n      <Button type="warning" loading>Warning</Button>\n      <Button type="danger" loading>Danger</Button>\n    </Row>)',g='import React from "react";\nimport { Button, Row } from \'element-plus-react\'\nimport { Search } from \'@element-plus/icons-react\'\n\n\nexport default () => (<>\n    <Row className="mb-4">\n      <Button>Default</Button>\n      <Button type="primary"  size="large">Primary</Button>\n      <Button type="success">Success</Button>\n      {/* <Button type="info" icon={<Search/>}>Info</Button> */}\n      <Button type="warning" size="small">Warning</Button>\n      <Button type="danger" size="small">Danger</Button>\n      <Button>\u4e2d\u6587</Button>\n    </Row>\n\n    <Row className="mb-4">\n      <Button plain>Plain</Button>\n      <Button type="primary" plain  size="large">Primary</Button>\n      <Button type="success" plain size="small">Success</Button>\n        {/* <Button type="info" plain icon={<Search/>}>Info</Button> */}\n      <Button type="warning" plain  size="large">Warning</Button>\n      <Button type="danger" plain>Danger</Button>\n    </Row>\n\n    <Row className="mb-4">\n      <Button round>Round</Button>\n      <Button type="primary" round>Primary</Button>\n      <Button type="success" round  size="large">Success</Button>\n      {/* <Button type="info" round icon={<Search/>}>Info</Button> */}\n      <Button type="warning" round size="small">Warning</Button>\n      <Button type="danger" round>Danger</Button>\n    </Row>\n  </>)',b='import React from "react";\nimport { Button, Row } from \'element-plus-react\'\n\nexport default () => (<Row className="mb-4">\n      <Button color="#626aef" style="color: \'#fff\'">Custom</Button>\n      <Button  color="#626aef" plain style={{color: \'#fff\'}}>Custom</Button>\n    </Row>)',y='import React, { useState } from "react";\nimport { ConfigProvider, Button } from "element-plus-react";\n\nconst Demo = () => {\n  const [config, setConfig] = useState({ autoInsertSpace: false });\n  const handleClick = () => {\n    if (config.autoInsertSpace) {\n      setConfig({ autoInsertSpace: false });\n    } else {\n      setConfig({ autoInsertSpace: true });\n    }\n  };\n  return (\n    <>\n      <ConfigProvider autoInsertSpace={config.autoInsertSpace}>\n        <Button onClick={handleClick}>\u4e2d\u6587</Button>\n      </ConfigProvider>\n      <div>{JSON.stringify(config.autoInsertSpace)}</div>\n    </>\n  );\n};\n\nexport default Demo;',w={"button-basic":{component:Object(s["dynamic"])({loader:function(){var t=Object(c["a"])(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(4),n.e(3),n.e(5)]).then(n.bind(null,"Pv/O"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:">=16.9.0"},"element-plus-react":{version:"0.0.1-alpha.1"},"react-dom":{version:">=16.9.0"}},componentName:"button",description:'<div class="markdown"><p>\u4f7f\u7528 <code>type</code>\u3001<code>plain</code>\u3001<code>round</code> \u548c <code>circle</code> \u6765\u5b9a\u4e49\u6309\u94ae\u7684\u6837\u5f0f\u3002</p></div>',identifier:"button-basic"}},"button-disabled":{component:Object(s["dynamic"])({loader:function(){var t=Object(c["a"])(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(4),n.e(3),n.e(5)]).then(n.bind(null,"RHDB"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:">=16.9.0"},"element-plus-react":{version:"0.0.1-alpha.1"},"react-dom":{version:">=16.9.0"}},componentName:"button",description:'<div class="markdown"><p>\u4f7f\u7528 <code>disabled</code> \u5c5e\u6027\u6765\u63a7\u5236\u6309\u94ae\u662f\u5426\u4e3a\u7981\u7528\u72b6\u6001\u3002 \u8be5\u5c5e\u6027\u63a5\u53d7\u4e00\u4e2a <code>Boolean</code> \u7c7b\u578b\u7684\u503c\u3002</p></div>',identifier:"button-disabled"}},"button-text":{component:Object(s["dynamic"])({loader:function(){var t=Object(c["a"])(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(4),n.e(3),n.e(5)]).then(n.bind(null,"a0Ux"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:">=16.9.0"},"element-plus-react":{version:"0.0.1-alpha.1"},"react-dom":{version:">=16.9.0"}},componentName:"button",description:'<div class="markdown"><p>\u6ca1\u6709\u8fb9\u6846\u548c\u80cc\u666f\u8272\u7684\u6309\u94ae\u3002</p></div>',identifier:"button-text"}},"button-icon":{component:Object(s["dynamic"])({loader:function(){var t=Object(c["a"])(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(4),n.e(3),n.e(5)]).then(n.bind(null,"I7ti"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:B}},dependencies:{react:{version:">=16.9.0"},"element-plus-react":{version:"0.0.1-alpha.1"},"@element-plus/icons-react":{version:"0.0.1-alpha.0"},"react-dom":{version:">=16.9.0"}},componentName:"button",description:'<div class="markdown"><p>\u4f7f\u7528 <code>icon</code> \u5c5e\u6027\u6765\u4e3a\u6309\u94ae\u6dfb\u52a0\u56fe\u6807\u3002 \u4f60\u53ef\u4ee5\u5728 Element Plus icon \u7ec4\u4ef6\u91cc\u627e\u5230 Element Plus \u63d0\u4f9b\u7684\u5185\u7f6e\u56fe\u6807\u3002 \u901a\u8fc7\u5411\u53f3\u65b9\u6dfb\u52a0<code>&#x3C;i>&#x3C;/code></code>\u6807\u7b7e\u6765\u6dfb\u52a0\u56fe\u6807\uff0c \u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u56fe\u6807\u3002</p></div>',identifier:"button-icon"}},"button-group":{component:Object(s["dynamic"])({loader:function(){var t=Object(c["a"])(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(4),n.e(3),n.e(5)]).then(n.bind(null,"/ymi"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{react:{version:">=16.9.0"},"element-plus-react":{version:"0.0.1-alpha.1"},"react-dom":{version:">=16.9.0"}},componentName:"button",description:'<div class="markdown"><p>\u4f7f\u7528\u6807\u7b7e <code>&#x3C;el-button-group>&#x3C;/code></code> \u6765\u7ed9\u6309\u94ae\u5206\u7ec4\u3002</p></div>',identifier:"button-group"}},"button-loading":{component:Object(s["dynamic"])({loader:function(){var t=Object(c["a"])(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(4),n.e(3),n.e(5)]).then(n.bind(null,"eFXs"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{react:{version:">=16.9.0"},"element-plus-react":{version:"0.0.1-alpha.1"},"react-dom":{version:">=16.9.0"}},componentName:"button",description:'<div class="markdown"><p>\u8bbe\u7f6e <code>loading</code> \u5c5e\u6027\uff0c\u5f53\u8bbe\u7f6e\u4e3a <code>true</code> \u65f6\u5373\u4e3a\u52a0\u8f7d\u4e2d\u3002</p></div>',identifier:"button-loading"}},"button-size":{component:Object(s["dynamic"])({loader:function(){var t=Object(c["a"])(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(4),n.e(3),n.e(5)]).then(n.bind(null,"PbyJ"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:">=16.9.0"},"element-plus-react":{version:"0.0.1-alpha.1"},"react-dom":{version:">=16.9.0"}},componentName:"button",description:'<div class="markdown"><p>Use attribute <code>size</code> to set additional sizes with <code>large</code>, <code>small</code>.</p></div>',identifier:"button-size"}},"button-custom":{component:Object(s["dynamic"])({loader:function(){var t=Object(c["a"])(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(4),n.e(3),n.e(5)]).then(n.bind(null,"MXBe"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{react:{version:">=16.9.0"},"element-plus-react":{version:"0.0.1-alpha.1"},"react-dom":{version:">=16.9.0"}},componentName:"button",identifier:"button-custom"}},"config-provider-button":{component:Object(s["dynamic"])({loader:function(){var t=Object(c["a"])(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(4),n.e(3),n.e(6)]).then(n.bind(null,"Nj9y"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:y}},dependencies:{react:{version:">=16.9.0"},"element-plus-react":{version:"0.0.1-alpha.1"},"react-dom":{version:">=16.9.0"}},componentName:"config-provider",identifier:"config-provider-button"}}},v=n("Zs1V"),x=n("KcUY"),R=n.n(x);e["default"]=t=>r.a.createElement(R.a,Object(o["a"])({},t,{config:i,demos:w,apis:v}))},RGYn:function(t){t.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"Index","meta":{}}],"/components":[{"title":"Basic \u57fa\u7840\u7ec4\u4ef6","meta":{"order":1,"__fallback":true},"children":[{"path":"/components/button","title":"Button \u6309\u94ae","meta":{}},{"path":"/components/component/color","title":"Color \u8272\u5f69","meta":{}},{"path":"/components/component/icon","title":"Icon \u56fe\u6807","meta":{}},{"path":"/components/row","title":"Layout \u5e03\u5c40","meta":{}}]},{"title":"\u914d\u7f6e\u7ec4\u4ef6","meta":{"order":2,"__fallback":true},"children":[{"path":"/components/config-provider","title":"\u5168\u5c40\u914d\u7f6e","meta":{}}]},{"title":"TODO \u5f85\u529e","meta":{"order":99,"__fallback":true},"children":[{"path":"/components/affix","title":"Affix \u56fa\u9489","meta":{}},{"path":"/components/alert","title":"Alert \u63d0\u793a","meta":{}},{"path":"/components/avatar","title":"Avatar \u5934\u50cf","meta":{}},{"path":"/components/backtop","title":"Backtop \u56de\u5230\u9876\u90e8","meta":{}},{"path":"/components/badge","title":"Badge \u5fbd\u7ae0","meta":{}},{"path":"/components/border","title":"Border \u8fb9\u6846","meta":{}},{"path":"/components/breadcrumb","title":"Breadcrumb \u9762\u5305\u5c51","meta":{}},{"path":"/components/calendar","title":"Calendar \u65e5\u5386","meta":{}},{"path":"/components/card","title":"Card \u5361\u7247","meta":{}},{"path":"/components/carousel","title":"Carousel \u8d70\u9a6c\u706f","meta":{}},{"path":"/components/cascader","title":"Cascader \u7ea7\u8054\u9009\u62e9\u5668","meta":{}},{"path":"/components/checkbox","title":"Checkbox \u591a\u9009\u6846","meta":{}},{"path":"/components/collapse","title":"Collapse \u6298\u53e0\u9762\u677f","meta":{}},{"path":"/components/color-picker","title":"ColorPicker \u989c\u8272\u9009\u62e9\u5668","meta":{}},{"path":"/components/container/container","title":"Container \u5e03\u5c40\u5bb9\u5668","meta":{}},{"path":"/components/date-picker","title":"DatePicker \u65e5\u671f\u9009\u62e9\u5668","meta":{}},{"path":"/components/datetime-picker","title":"DateTimePicker \u65e5\u671f\u65f6\u95f4\u9009\u62e9\u5668","meta":{}},{"path":"/components/descriptions","title":"Descriptions \u63cf\u8ff0\u5217\u8868","meta":{}},{"path":"/components/dialog","title":"Dialog \u5bf9\u8bdd\u6846","meta":{}},{"path":"/components/divider","title":"Divider \u5206\u5272\u7ebf","meta":{}},{"path":"/components/drawer","title":"Drawer \u62bd\u5c49","meta":{}},{"path":"/components/dropdown","title":"Dropdown \u4e0b\u62c9\u83dc\u5355","meta":{}},{"path":"/components/empty","title":"Empty \u7a7a\u72b6\u6001","meta":{}},{"path":"/components/form","title":"Form \u8868\u5355","meta":{}},{"path":"/components/image","title":"Image \u56fe\u7247","meta":{}},{"path":"/components/infinite-scroll","title":"Infinite Scroll \u65e0\u9650\u6eda\u52a8","meta":{}},{"path":"/components/input","title":"Input \u8f93\u5165\u6846","meta":{}},{"path":"/components/input-number","title":"Input Number \u6570\u5b57\u8f93\u5165\u6846","meta":{}},{"path":"/components/layout","title":"Layout \u5e03\u5c40","meta":{}},{"path":"/components/link","title":"Link \u94fe\u63a5","meta":{}},{"path":"/components/loading","title":"Loading \u52a0\u8f7d","meta":{}},{"path":"/components/menu","title":"Menu \u83dc\u5355","meta":{}},{"path":"/components/message","title":"Message \u6d88\u606f\u63d0\u793a","meta":{}},{"path":"/components/message-box","title":"MessageBox \u6d88\u606f\u5f39\u6846","meta":{}},{"path":"/components/notification","title":"Notification \u901a\u77e5","meta":{}},{"path":"/components/page-header","title":"Page Header \u9875\u5934","meta":{}},{"path":"/components/pagination","title":"Pagination \u5206\u9875","meta":{}},{"path":"/components/popconfirm","title":"Popconfirm \u6c14\u6ce1\u786e\u8ba4\u6846","meta":{}},{"path":"/components/popover","title":"Popover \u6c14\u6ce1\u5361\u7247","meta":{}},{"path":"/components/progress","title":"Progress \u8fdb\u5ea6\u6761","meta":{}},{"path":"/components/radio","title":"Radio \u5355\u9009\u6846","meta":{}},{"path":"/components/rate","title":"Rate \u8bc4\u5206","meta":{}},{"path":"/components/result","title":"Result \u7ed3\u679c","meta":{}},{"path":"/components/scrollbar","title":"Scrollbar \u6eda\u52a8\u6761","meta":{}},{"path":"/components/select","title":"Select \u9009\u62e9\u5668","meta":{}},{"path":"/components/select-v2","title":"Virtualized Select \u865a\u62df\u5316\u9009\u62e9\u5668","meta":{}},{"path":"/components/skeleton","title":"Skeleton \u9aa8\u67b6\u5c4f","meta":{}},{"path":"/components/slider","title":"Slider \u6ed1\u5757","meta":{}},{"path":"/components/space/space","title":"Space \u95f4\u8ddd","meta":{}},{"path":"/components/steps/steps","title":"Steps \u6b65\u9aa4\u6761","meta":{}},{"path":"/components/switch","title":"Switch \u5f00\u5173","meta":{}},{"path":"/components/table","title":"Table \u8868\u683c","meta":{}},{"path":"/components/tabs","title":"Tabs \u6807\u7b7e\u9875","meta":{}},{"path":"/components/tag","title":"Tag \u6807\u7b7e","meta":{}},{"path":"/components/time-picker","title":"TimePicker \u65f6\u95f4\u9009\u62e9\u5668","meta":{}},{"path":"/components/time-select","title":"TimeSelect \u65f6\u95f4\u9009\u62e9","meta":{}},{"path":"/components/timeline","title":"Timeline \u65f6\u95f4\u7ebf","meta":{}},{"path":"/components/tooltip","title":"Tooltip \u6587\u5b57\u63d0\u793a","meta":{}},{"path":"/components/transfer","title":"Transfer \u7a7f\u68ad\u6846","meta":{}},{"path":"/components/tree","title":"Tree \u6811\u5f62\u63a7\u4ef6","meta":{}},{"path":"/components/tree-v2","title":"Tree V2 \u865a\u62df\u5316\u6811\u5f62\u63a7\u4ef6","meta":{}},{"path":"/components/typography","title":"Typography \u6392\u7248","meta":{}},{"path":"/components/upload","title":"Upload \u4e0a\u4f20","meta":{}}]}],"/guide":[{"title":"\u57fa\u7840","meta":{"__fallback":true},"children":[{"path":"/guide/design","title":"\u8bbe\u8ba1","meta":{"order":0}},{"path":"/guide/nav","title":"\u5bfc\u822a","meta":{"order":1}},{"path":"/guide/installation","title":"\u5b89\u88c5","meta":{"order":3}},{"path":"/guide/quick-start","title":"\u5feb\u901f\u5f00\u59cb","meta":{"order":4}}]},{"title":"\u8fdb\u9636","meta":{"__fallback":true},"children":[{"path":"/guide/i18n","title":"\u56fd\u9645\u5316","meta":{"order":1}},{"path":"/guide/theming","title":"\u4e3b\u9898","meta":{"order":2}},{"path":"/guide/transitions","title":"\u5185\u7f6e\u8fc7\u6e21\u52a8\u753b","meta":{"order":3}},{"path":"/guide/changelog","title":"\u66f4\u65b0\u65e5\u5fd7","meta":{"order":4}}]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"\u7ec4\u4ef6","path":"/components"},{"title":"Github","path":"https://github.com/element-plus-react/element-plus-react"}]},"title":"Element Plus React","mode":"site","repository":{"url":"https://github.com/element-plus-react/element-plus-react","branch":"master"},"theme":{}}')},Zs1V:function(t){t.exports=JSON.parse("{}")}}]);