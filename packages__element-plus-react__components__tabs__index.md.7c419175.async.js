(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[92],{WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),r=l("hKI/"),c=l.n(r);l("WpQk");function m(e,t){return i(e)||o(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return E(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function o(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,r=[],c=!0,m=!1;try{for(l=l.call(e);!(c=(a=l.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){m=!0,n=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(m)throw n}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=m(r,2),d=u[0],E=u[1],o=Object(a["useState"])(!1),i=m(o,2),s=i[0],b=i[1];return Object(a["useEffect"])((function(){var e=l.current,t=c()((function(){E(e.scrollLeft>0),b(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":d||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},mVXr:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("dEAq"),c=l("dMo/"),m=n.a.memo((e=>{e.demos;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"tabs-\u6807\u7b7e\u9875"},n.a.createElement(r["AnchorLink"],{to:"#tabs-\u6807\u7b7e\u9875","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tabs \u6807\u7b7e\u9875"),n.a.createElement("p",null,"\u5206\u9694\u5185\u5bb9\u4e0a\u6709\u5173\u8054\u4f46\u5c5e\u4e8e\u4e0d\u540c\u7c7b\u522b\u7684\u6570\u636e\u96c6\u5408\u3002"),n.a.createElement("style",{lang:"scss",dangerouslySetInnerHTML:{__html:"\n\n:not(.el-tabs--border-card) > .el-tabs__content {\n  padding: 32px;\n  background-color: #F4F5F7;\n  color: #6B778C;\n  font-size: 32px;\n  font-weight: 600;\n}\n\n.el-tabs--right, .el-tabs--left {\n  .el-tabs__content {\n    height: 100%;\n  }\n}\n"}}),n.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},n.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),n.a.createElement("p",null,"\u57fa\u7840\u7684\u3001\u7b80\u6d01\u7684\u6807\u7b7e\u9875\u3002"),n.a.createElement("p",null,":::demo Tabs \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u9009\u9879\u5361\u529f\u80fd\uff0c \u9ed8\u8ba4\u9009\u4e2d\u7b2c\u4e00\u4e2a\u6807\u7b7e\u9875\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",n.a.createElement("code",null,"value")," \u5c5e\u6027\u6765\u6307\u5b9a\u5f53\u524d\u9009\u4e2d\u7684\u6807\u7b7e\u9875\u3002"),n.a.createElement("p",null,"tabs/basic"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5361\u7247\u98ce\u683c\u7684\u6807\u7b7e"},n.a.createElement(r["AnchorLink"],{to:"#\u5361\u7247\u98ce\u683c\u7684\u6807\u7b7e","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5361\u7247\u98ce\u683c\u7684\u6807\u7b7e"),n.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u5177\u6709\u5361\u7247\u98ce\u683c\u7684\u6807\u7b7e\u3002"),n.a.createElement("p",null,":::demo \u53ea\u9700\u8981\u8bbe\u7f6e ",n.a.createElement("code",null,"type")," \u5c5e\u6027\u4e3a ",n.a.createElement("code",null,"card")," \u5c31\u53ef\u4ee5\u4f7f\u9009\u9879\u5361\u6539\u53d8\u4e3a\u6807\u7b7e\u98ce\u683c\u3002"),n.a.createElement("p",null,"tabs/card-style"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5e26\u6709\u8fb9\u6846\u7684\u5361\u7247\u98ce\u683c"},n.a.createElement(r["AnchorLink"],{to:"#\u5e26\u6709\u8fb9\u6846\u7684\u5361\u7247\u98ce\u683c","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5e26\u6709\u8fb9\u6846\u7684\u5361\u7247\u98ce\u683c"),n.a.createElement("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u6807\u7b7e\u9875\u4e3a\u5e26\u6709\u8fb9\u6846\u7684\u5361\u7247"),n.a.createElement("p",null,":::demo \u5c06 ",n.a.createElement("code",null,"type")," \u8bbe\u7f6e\u4e3a ",n.a.createElement("code",null,"border-card"),"\u3002"),n.a.createElement("p",null,"tabs/border-card"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u6807\u7b7e\u4f4d\u7f6e\u7684\u8bbe\u7f6e"},n.a.createElement(r["AnchorLink"],{to:"#\u6807\u7b7e\u4f4d\u7f6e\u7684\u8bbe\u7f6e","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6807\u7b7e\u4f4d\u7f6e\u7684\u8bbe\u7f6e"),n.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",n.a.createElement("code",null,"tab-position")," \u8bbe\u7f6e\u6807\u7b7e\u7684\u4f4d\u7f6e"),n.a.createElement("p",null,":::demo \u6807\u7b7e\u4e00\u5171\u6709\u56db\u4e2a\u65b9\u5411\u7684\u8bbe\u7f6e ",n.a.createElement("code",null,'tabPosition="left|right|top|bottom"')),n.a.createElement("p",null,"tabs/tab-position"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u6807\u7b7e\u9875\u7684\u5185\u5bb9"},n.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u6807\u7b7e\u9875\u7684\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u6807\u7b7e\u9875\u7684\u5185\u5bb9"),n.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5177\u540d\u63d2\u69fd\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6807\u7b7e\u9875\u7684\u5185\u5bb9"),n.a.createElement("p",null,":::demo"),n.a.createElement("p",null,"tabs/custom-tab"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u52a8\u6001\u589e\u51cf\u6807\u7b7e\u9875"},n.a.createElement(r["AnchorLink"],{to:"#\u52a8\u6001\u589e\u51cf\u6807\u7b7e\u9875","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u6001\u589e\u51cf\u6807\u7b7e\u9875"),n.a.createElement("p",null,"\u589e\u51cf\u6807\u7b7e\u9875\u6309\u94ae\u53ea\u80fd\u5728\u9009\u9879\u5361\u6837\u5f0f\u7684\u6807\u7b7e\u9875\u4e0b\u4f7f\u7528"),n.a.createElement("p",null,":::demo"),n.a.createElement("p",null,"tabs/dynamic-tabs"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u589e\u52a0\u6807\u7b7e\u9875\u89e6\u53d1\u5668"},n.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u589e\u52a0\u6807\u7b7e\u9875\u89e6\u53d1\u5668","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u589e\u52a0\u6807\u7b7e\u9875\u89e6\u53d1\u5668"),n.a.createElement("p",null,":::demo"),n.a.createElement("p",null,"tabs/customized-trigger"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"tabs-\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#tabs-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tabs \u5c5e\u6027"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u53ef\u9009\u503c"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"model-value / v-model"),n.a.createElement("td",null,"\u7ed1\u5b9a\u503c\uff0c\u9009\u4e2d\u9009\u9879\u5361\u7684 name"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u7b2c\u4e00\u4e2a\u9009\u9879\u5361\u7684 name")),n.a.createElement("tr",null,n.a.createElement("td",null,"type"),n.a.createElement("td",null,"\u98ce\u683c\u7c7b\u578b"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"card/border-card"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"closable"),n.a.createElement("td",null,"\u6807\u7b7e\u662f\u5426\u53ef\u5173\u95ed"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"addable"),n.a.createElement("td",null,"\u6807\u7b7e\u662f\u5426\u53ef\u589e\u52a0"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"editable"),n.a.createElement("td",null,"\u6807\u7b7e\u662f\u5426\u540c\u65f6\u53ef\u589e\u52a0\u548c\u5173\u95ed"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"tab-position"),n.a.createElement("td",null,"\u9009\u9879\u5361\u6240\u5728\u4f4d\u7f6e"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"top/right/bottom/left"),n.a.createElement("td",null,"top")),n.a.createElement("tr",null,n.a.createElement("td",null,"stretch"),n.a.createElement("td",null,"\u6807\u7b7e\u7684\u5bbd\u5ea6\u662f\u5426\u81ea\u6491\u5f00"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"before-leave"),n.a.createElement("td",null,"\u5207\u6362\u6807\u7b7e\u4e4b\u524d\u7684\u94a9\u5b50\u51fd\u6570\uff0c \u82e5\u8fd4\u56de ",n.a.createElement("code",null,"false ")," \u6216\u8005\u8fd4\u56de\u88ab reject \u7684 ",n.a.createElement("code",null,"Promise"),"\uff0c\u5219\u963b\u6b62\u5207\u6362\u3002"),n.a.createElement("td",null,"Function(activeName, oldActiveName)"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u2014")))),n.a.createElement("h2",{id:"tabs-\u4e8b\u4ef6"},n.a.createElement(r["AnchorLink"],{to:"#tabs-\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tabs \u4e8b\u4ef6"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u56de\u8c03\u53c2\u6570"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"tab-click"),n.a.createElement("td",null,"tab \u88ab\u9009\u4e2d\u65f6\u89e6\u53d1"),n.a.createElement("td",null,"tab \u88ab\u70b9\u51fb\u7684\u6807\u7b7e")),n.a.createElement("tr",null,n.a.createElement("td",null,"tab-remove"),n.a.createElement("td",null,"\u70b9\u51fb tab \u79fb\u9664\u6309\u94ae\u540e\u89e6\u53d1"),n.a.createElement("td",null,"name\uff0c\u88ab\u5220\u9664\u7684\u6807\u7b7e\u7684\u540d\u5b57")),n.a.createElement("tr",null,n.a.createElement("td",null,"tab-add"),n.a.createElement("td",null,"\u70b9\u51fb tabs \u7684\u65b0\u589e\u6309\u94ae\u540e\u89e6\u53d1"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"edit"),n.a.createElement("td",null,"\u70b9\u51fb tabs \u7684\u65b0\u589e\u6309\u94ae\u6216 tab \u88ab\u5173\u95ed\u540e\u89e6\u53d1"),n.a.createElement("td",null,"(targetName, action)")))),n.a.createElement("h2",{id:"tabs-\u63d2\u69fd"},n.a.createElement(r["AnchorLink"],{to:"#tabs-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tabs \u63d2\u69fd"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u63d2\u69fd\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u5b50\u6807\u7b7e"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u9ed8\u8ba4\u63d2\u69fd"),n.a.createElement("td",null,"Tab-pane")))),n.a.createElement("h2",{id:"tab-pane-\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#tab-pane-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tab-pane \u5c5e\u6027"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u53ef\u9009\u503c"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"label"),n.a.createElement("td",null,"\u9009\u9879\u5361\u6807\u9898"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"name"),n.a.createElement("td",null,"\u4e0e\u9009\u9879\u5361\u7ed1\u5b9a\u503c value \u5bf9\u5e94\u7684\u6807\u8bc6\u7b26\uff0c\u8868\u793a\u9009\u9879\u5361\u522b\u540d"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u8be5\u9009\u9879\u5361\u5728\u9009\u9879\u5361\u5217\u8868\u4e2d\u7684\u987a\u5e8f\u503c\uff0c\u5982\u7b2c\u4e00\u4e2a\u9009\u9879\u5361\u5219\u4e3a'1'")),n.a.createElement("tr",null,n.a.createElement("td",null,"closable"),n.a.createElement("td",null,"\u6807\u7b7e\u662f\u5426\u53ef\u5173\u95ed"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"lazy"),n.a.createElement("td",null,"\u6807\u7b7e\u662f\u5426\u5ef6\u8fdf\u6e32\u67d3"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")))),n.a.createElement("h2",{id:"tab-pane-\u63d2\u69fd"},n.a.createElement(r["AnchorLink"],{to:"#tab-pane-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Tab-pane \u63d2\u69fd"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u63d2\u69fd\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"-"),n.a.createElement("td",null,"Tab-pane \u7684\u5185\u5bb9")),n.a.createElement("tr",null,n.a.createElement("td",null,"label"),n.a.createElement("td",null,"Tab-pane \u7684\u6807\u9898\u5185\u5bb9"))))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),l=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(m,{demos:l})}}}]);