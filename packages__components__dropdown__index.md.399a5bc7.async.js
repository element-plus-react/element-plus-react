(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[61],{FDkQ:function(e,t,l){"use strict";var n=l("g9GX"),a=l.n(n),r=l("L+to"),c=l.n(r);l("wSMz");function m(e,t){return i(e)||E(e,t)||o(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return u(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,m=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(d){m=!0,a=d}finally{try{c||null==l["return"]||l["return"]()}finally{if(m)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),d=m(r,2),o=d[0],u=d[1],E=Object(n["useState"])(!1),i=m(E,2),s=i[0],p=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){u(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":o||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},PGu0:function(e,t,l){"use strict";l.r(t);var n=l("g9GX"),a=l.n(n),r=l("eLlY"),c=l("FDkQ"),m=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"dropdown-\u4e0b\u62c9\u83dc\u5355"},a.a.createElement(r["AnchorLink"],{to:"#dropdown-\u4e0b\u62c9\u83dc\u5355","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Dropdown \u4e0b\u62c9\u83dc\u5355"),a.a.createElement("p",null,"\u5c06\u52a8\u4f5c\u6216\u83dc\u5355\u6298\u53e0\u5230\u4e0b\u62c9\u83dc\u5355\u4e2d\u3002"),a.a.createElement("style",{lang:"scss",dangerouslySetInnerHTML:{__html:"\n\n.example-showcase {\n  .el-dropdown {\n    & + .el-dropdown {\n      margin-left: 15px;\n    }\n  }\n  .el-dropdown-link {\n    cursor: pointer;\n    color: var(--el-color-primary);\n    display: flex;\n    align-items: center;\n  }\n}\n\n.block-col-2 {\n  margin: -24px;\n\n  .el-col {\n    padding: 30px 0;\n    text-align: center;\n    border-right: 1px solid var(--el-border-color-base);\n\n    &:last-child {\n      border-right: 0;\n    }\n  }\n}\n\n.example-showcase .demonstration {\n  display: block;\n  color: var(--el-text-color-secondary);\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n"}}),a.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),a.a.createElement("p",null,"\u60ac\u505c\u5728\u4e0b\u62c9\u83dc\u5355\u4e0a\u4ee5\u5c55\u5f00\u66f4\u591a\u64cd\u4f5c\u3002"),a.a.createElement("p",null,":::demo \u901a\u8fc7\u7ec4\u4ef6 ",a.a.createElement("code",null,"slot")," \u6765\u8bbe\u7f6e\u4e0b\u62c9\u89e6\u53d1\u7684\u5143\u7d20\u4ee5\u53ca\u9700\u8981\u901a\u8fc7\u5177\u540d ",a.a.createElement("code",null,"slot")," \u4e3a ",a.a.createElement("code",null,"dropdown")," \u6765\u8bbe\u7f6e\u4e0b\u62c9\u83dc\u5355\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u8981\u60ac\u505c\u5728\u89e6\u53d1\u83dc\u5355\u7684\u5143\u7d20\u4e0a\u5373\u53ef\uff0c\u65e0\u9700\u70b9\u51fb\u4e5f\u4f1a\u663e\u793a\u4e0b\u62c9\u83dc\u5355\u3002"),a.a.createElement("p",null,"dropdown/basic-usage"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u89e6\u53d1\u5bf9\u8c61"},a.a.createElement(r["AnchorLink"],{to:"#\u89e6\u53d1\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u89e6\u53d1\u5bf9\u8c61"),a.a.createElement("p",null,"\u53ef\u4f7f\u7528\u6309\u94ae\u89e6\u53d1\u4e0b\u62c9\u83dc\u5355\u3002"),a.a.createElement("p",null,":::demo \u8bbe\u7f6e ",a.a.createElement("code",null,"split-button")," \u5c5e\u6027\u6765\u8ba9\u89e6\u53d1\u4e0b\u62c9\u5143\u7d20\u5448\u73b0\u4e3a\u6309\u94ae\u7ec4\uff0c\u5de6\u8fb9\u662f\u529f\u80fd\u6309\u94ae\uff0c\u53f3\u8fb9\u662f\u89e6\u53d1\u4e0b\u62c9\u83dc\u5355\u7684\u6309\u94ae\uff0c\u8bbe\u7f6e\u4e3a ",a.a.createElement("code",null,"true")," \u5373\u53ef\u3002 \u5982\u679c\u4f60\u60f3\u8981\u5728\u7b2c\u4e09\u548c\u7b2c\u56db\u4e2a\u9009\u9879\u4e4b\u95f4\u6dfb\u52a0\u4e00\u4e2a\u5206\u9694\u7b26\uff0c\u4f60\u53ea\u9700\u8981\u4e3a\u7b2c\u56db\u4e2a\u9009\u9879\u6dfb\u52a0\u4e00\u4e2a ",a.a.createElement("code",null,"divider")," \u7684 CSS class\u3002"),a.a.createElement("p",null,"dropdown/triggering-element"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u89e6\u53d1\u65b9\u5f0f"},a.a.createElement(r["AnchorLink"],{to:"#\u89e6\u53d1\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u89e6\u53d1\u65b9\u5f0f"),a.a.createElement("p",null,"\u53ef\u4ee5\u914d\u7f6e\u70b9\u51fb\u6fc0\u6d3b\u6216\u8005\u60ac\u505c\u6fc0\u6d3b\u3002"),a.a.createElement("p",null,":::demo \u5c06 ",a.a.createElement("code",null,"trigger")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a click \u5373\u53ef\uff0c \u9ed8\u8ba4\u4e3a ",a.a.createElement("code",null,"hover"),"\u3002"),a.a.createElement("p",null,"dropdown/how-to-trigger"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u83dc\u5355\u9690\u85cf\u65b9\u5f0f"},a.a.createElement(r["AnchorLink"],{to:"#\u83dc\u5355\u9690\u85cf\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u83dc\u5355\u9690\u85cf\u65b9\u5f0f"),a.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"hide-on-click")," \u5c5e\u6027\u6765\u914d\u7f6e\u3002"),a.a.createElement("p",null,":::demo \u4e0b\u62c9\u83dc\u5355\u9ed8\u8ba4\u5728\u70b9\u51fb\u83dc\u5355\u9879\u540e\u4f1a\u88ab\u9690\u85cf\uff0c\u5c06 hide-on-click \u5c5e\u6027\u8bbe\u7f6e\u4e3a false \u53ef\u4ee5\u5173\u95ed\u6b64\u529f\u80fd\u3002"),a.a.createElement("p",null,"dropdown/menu-hiding-behavior"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u6307\u4ee4\u4e8b\u4ef6"},a.a.createElement(r["AnchorLink"],{to:"#\u6307\u4ee4\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6307\u4ee4\u4e8b\u4ef6"),a.a.createElement("p",null,"\u70b9\u51fb\u83dc\u5355\u9879\u540e\u4f1a\u89e6\u53d1\u4e8b\u4ef6\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u76f8\u5e94\u7684\u83dc\u5355\u9879 key \u8fdb\u884c\u4e0d\u540c\u7684\u64cd\u4f5c\u3002"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"dropdown/command-event"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u4e0d\u540c\u5c3a\u5bf8\u7684\u4e0b\u62c9\u83dc\u5355"},a.a.createElement(r["AnchorLink"],{to:"#\u4e0d\u540c\u5c3a\u5bf8\u7684\u4e0b\u62c9\u83dc\u5355","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e0d\u540c\u5c3a\u5bf8\u7684\u4e0b\u62c9\u83dc\u5355"),a.a.createElement("p",null,"Dropdown \u7ec4\u4ef6\u63d0\u4f9b\u9664\u4e86\u9ed8\u8ba4\u503c\u4ee5\u5916\u7684\u4e09\u79cd\u5c3a\u5bf8\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u9009\u62e9\u5408\u9002\u7684\u5c3a\u5bf8\u3002"),a.a.createElement("p",null,":::demo Use attribute ",a.a.createElement("code",null,"size")," to set additional sizes with ",a.a.createElement("code",null,"large"),", ",a.a.createElement("code",null,"default")," or ",a.a.createElement("code",null,"small"),"."),a.a.createElement("p",null,"dropdown/sizes"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"dropdown-\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#dropdown-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Dropdown \u5c5e\u6027"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"type"),a.a.createElement("td",null,"\u83dc\u5355\u6309\u94ae\u7c7b\u578b\uff0c\u540c ",a.a.createElement("code",null,"Button")," \u7ec4\u4ef6\u4e00\u6837\uff0c\u4ec5\u5728 ",a.a.createElement("code",null,"split-button")," \u4e3a true \u7684\u60c5\u51b5\u4e0b\u6709\u6548\u3002"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"size"),a.a.createElement("td",null,"\u83dc\u5355\u5c3a\u5bf8\uff0c\u5728 split-button \u4e3a true \u7684\u60c5\u51b5\u4e0b\u4e5f\u5bf9\u89e6\u53d1\u6309\u94ae\u751f\u6548\u3002"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"large / default / small"),a.a.createElement("td",null,"default")),a.a.createElement("tr",null,a.a.createElement("td",null,"max-height"),a.a.createElement("td",null,"\u83dc\u5355\u6700\u5927\u9ad8\u5ea6"),a.a.createElement("td",null,"string / number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"split-button"),a.a.createElement("td",null,"\u4e0b\u62c9\u89e6\u53d1\u5143\u7d20\u5448\u73b0\u4e3a\u6309\u94ae\u7ec4"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"placement"),a.a.createElement("td",null,"\u83dc\u5355\u5f39\u51fa\u4f4d\u7f6e"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"top/top-start/top-end/bottom/bottom-start/bottom-end"),a.a.createElement("td",null,"bottom")),a.a.createElement("tr",null,a.a.createElement("td",null,"trigger"),a.a.createElement("td",null,"\u89e6\u53d1\u4e0b\u62c9\u7684\u884c\u4e3a"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"hover/click/contextmenu"),a.a.createElement("td",null,"hover")),a.a.createElement("tr",null,a.a.createElement("td",null,"hide-on-click"),a.a.createElement("td",null,"\u662f\u5426\u5728\u70b9\u51fb\u83dc\u5355\u9879\u540e\u9690\u85cf\u83dc\u5355"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"show-timeout"),a.a.createElement("td",null,"\u5c55\u5f00\u4e0b\u62c9\u83dc\u5355\u7684\u5ef6\u65f6\uff0c\u4ec5\u5728 trigger \u4e3a hover \u65f6\u6709\u6548"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"250")),a.a.createElement("tr",null,a.a.createElement("td",null,"hide-timeout"),a.a.createElement("td",null,"\u6536\u8d77\u4e0b\u62c9\u83dc\u5355\u7684\u5ef6\u65f6\uff08\u4ec5\u5728 trigger \u4e3a hover \u65f6\u6709\u6548\uff09"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"150")),a.a.createElement("tr",null,a.a.createElement("td",null,"tabindex"),a.a.createElement("td",null,"Dropdown \u7ec4\u4ef6\u7684 ",a.a.createElement(r["Link"],{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"tabindex")),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"0")),a.a.createElement("tr",null,a.a.createElement("td",null,"popper-class"),a.a.createElement("td",null,"custom class name for Dropdown's dropdown"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")))),a.a.createElement("h2",{id:"dropdown-\u63d2\u69fd"},a.a.createElement(r["AnchorLink"],{to:"#dropdown-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Dropdown \u63d2\u69fd"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u63d2\u69fd\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u5b50\u6807\u7b7e"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u4e0b\u62c9\u83dc\u5355\u7684\u5185\u5bb9 \u6ce8\u610f\uff1a\u5fc5\u987b\u662f\u6709\u6548\u7684 html \u4fdd\u9669\u5957\u5143\u7d20\uff08\u4f8b\u5982 ",a.a.createElement("code",null,"<span>, <button> \u7b49"),"\uff09\u6216 ",a.a.createElement("code",null,"el-component"),", \u4ee5\u9644\u52a0\u89e6\u53d1\u76d1\u542c\u5668"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"dropdown"),a.a.createElement("td",null,"\u4e0b\u62c9\u5217\u8868\uff0c\u901a\u5e38\u662f ",a.a.createElement("code",null,"<el-dropdown-menu>")," \u7ec4\u4ef6"),a.a.createElement("td",null,"Dropdown-Menu")))),a.a.createElement("h2",{id:"dropdown-\u4e8b\u4ef6"},a.a.createElement(r["AnchorLink"],{to:"#dropdown-\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Dropdown \u4e8b\u4ef6"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u65b9\u6cd5\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u53c2\u6570"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"click"),a.a.createElement("td",null,a.a.createElement("code",null,"split-button")," \u4e3a true \u65f6\uff0c\u70b9\u51fb\u5de6\u4fa7\u6309\u94ae\u7684\u56de\u8c03"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"command"),a.a.createElement("td",null,"\u70b9\u51fb\u83dc\u5355\u9879\u89e6\u53d1\u7684\u4e8b\u4ef6\u56de\u8c03"),a.a.createElement("td",null,"dropdown-item \u7684\u6307\u4ee4")),a.a.createElement("tr",null,a.a.createElement("td",null,"visible-change"),a.a.createElement("td",null,"\u4e0b\u62c9\u6846\u51fa\u73b0/\u9690\u85cf\u65f6\u89e6\u53d1"),a.a.createElement("td",null,"\u51fa\u73b0\u5219\u4e3a true\uff0c\u9690\u85cf\u5219\u4e3a false")))),a.a.createElement("h2",{id:"dropdown-menu-\u63d2\u69fd"},a.a.createElement(r["AnchorLink"],{to:"#dropdown-menu-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Dropdown-Menu \u63d2\u69fd"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u63d2\u69fd\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u5b50\u6807\u7b7e"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u4e0b\u62c9\u83dc\u5355\u7684\u5185\u5bb9"),a.a.createElement("td",null,"Dropdown-Item")))),a.a.createElement("h2",{id:"dropdown-item-\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#dropdown-item-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Dropdown-Item \u5c5e\u6027"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"command"),a.a.createElement("td",null,"\u6d3e\u53d1\u5230",a.a.createElement("code",null,"command"),"\u56de\u8c03\u51fd\u6570\u7684\u6307\u4ee4"),a.a.createElement("td",null,"string/number/object"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u662f\u5426\u7981\u7528"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"divided"),a.a.createElement("td",null,"\u663e\u793a\u5206\u5272\u7ebf"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"icon"),a.a.createElement("td",null,"\u56fe\u6807\u7c7b\u540d"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")))),a.a.createElement("h2",{id:"dropdown-item-\u63d2\u69fd"},a.a.createElement(r["AnchorLink"],{to:"#dropdown-item-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Dropdown-Item \u63d2\u69fd"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u63d2\u69fd\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u4e0b\u62c9\u9879\u76ee"))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:l})}},wSMz:function(e,t,l){}}]);