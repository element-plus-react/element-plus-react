(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[100],{FDkQ:function(e,t,l){"use strict";var n=l("g9GX"),a=l.n(n),r=l("L+to"),c=l.n(r);l("wSMz");function d(e,t){return i(e)||E(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return o(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,d=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(u){d=!0,a=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(d)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),u=d(r,2),m=u[0],o=u[1],E=Object(n["useState"])(!1),i=d(E,2),s=i[0],h=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){o(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},UGXV:function(e,t,l){"use strict";l.r(t);var n=l("g9GX"),a=l.n(n),r=l("eLlY"),c=l("FDkQ"),d=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"tree-\u6811\u5f62\u63a7\u4ef6"},a.a.createElement(r["AnchorLink"],{to:"#tree-\u6811\u5f62\u63a7\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tree \u6811\u5f62\u63a7\u4ef6"),a.a.createElement("p",null,"\u7528\u6e05\u6670\u7684\u5c42\u7ea7\u7ed3\u6784\u5c55\u793a\u4fe1\u606f\uff0c\u53ef\u5c55\u5f00\u6216\u6298\u53e0\u3002"),a.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),a.a.createElement("p",null,"\u57fa\u7840\u7684\u6811\u5f62\u7ed3\u6784\u5c55\u793a"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"tree/basic"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u53ef\u9009\u62e9"},a.a.createElement(r["AnchorLink"],{to:"#\u53ef\u9009\u62e9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u53ef\u9009\u62e9"),a.a.createElement("p",null,"\u9002\u7528\u4e8e\u9700\u8981\u9009\u62e9\u5c42\u7ea7\u65f6\u4f7f\u7528\u3002"),a.a.createElement("p",null,":::demo \u672c\u4f8b\u8fd8\u5c55\u793a\u4e86\u52a8\u6001\u52a0\u8f7d\u8282\u70b9\u6570\u636e\u7684\u65b9\u6cd5\u3002"),a.a.createElement("p",null,"tree/selectable"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u61d2\u52a0\u8f7d\u81ea\u5b9a\u4e49\u53f6\u5b50\u8282\u70b9"},a.a.createElement(r["AnchorLink"],{to:"#\u61d2\u52a0\u8f7d\u81ea\u5b9a\u4e49\u53f6\u5b50\u8282\u70b9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u61d2\u52a0\u8f7d\u81ea\u5b9a\u4e49\u53f6\u5b50\u8282\u70b9"),a.a.createElement("p",null,":::demo \u7531\u4e8e\u5728\u70b9\u51fb\u8282\u70b9\u65f6\u624d\u8fdb\u884c\u8be5\u5c42\u6570\u636e\u7684\u83b7\u53d6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b Tree \u65e0\u6cd5\u9884\u77e5\u67d0\u4e2a\u8282\u70b9\u662f\u5426\u4e3a\u53f6\u5b50\u8282\u70b9\uff0c \u6240\u4ee5\u4f1a\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6dfb\u52a0\u4e00\u4e2a\u4e0b\u62c9\u6309\u94ae\uff0c\u5982\u679c\u8282\u70b9\u6ca1\u6709\u4e0b\u5c42\u6570\u636e\uff0c\u5219\u70b9\u51fb\u540e\u4e0b\u62c9\u6309\u94ae\u4f1a\u6d88\u5931\u3002 \u540c\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u63d0\u524d\u544a\u77e5 Tree \u67d0\u4e2a\u8282\u70b9\u662f\u5426\u4e3a\u53f6\u5b50\u8282\u70b9\uff0c\u4ece\u800c\u907f\u514d\u5728\u53f6\u5b50\u8282\u70b9\u524d\u6e32\u67d3\u4e0b\u62c9\u6309\u94ae\u3002"),a.a.createElement("p",null,"tree/custom-leaf"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u9ed8\u8ba4\u5c55\u5f00\u548c\u9ed8\u8ba4\u9009\u4e2d"},a.a.createElement(r["AnchorLink"],{to:"#\u9ed8\u8ba4\u5c55\u5f00\u548c\u9ed8\u8ba4\u9009\u4e2d","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u9ed8\u8ba4\u5c55\u5f00\u548c\u9ed8\u8ba4\u9009\u4e2d"),a.a.createElement("p",null,"\u8282\u70b9\u7684\u590d\u9009\u6846\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u7981\u7528\u3002"),a.a.createElement("p",null,":::demo \u5728\u793a\u4f8b\u4e2d\uff0c\u901a\u8fc7 disabled \u8bbe\u7f6e\u7981\u7528\u72b6\u6001\u3002 \u76f8\u5e94\u7684\u590d\u9009\u6846\u5df2\u7981\u7528\uff0c\u4e0d\u80fd\u70b9\u51fb\u3002"),a.a.createElement("p",null,"tree/disabled"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u9ed8\u8ba4\u5c55\u5f00\u4ee5\u53ca\u9ed8\u8ba4\u9009\u4e2d"},a.a.createElement(r["AnchorLink"],{to:"#\u9ed8\u8ba4\u5c55\u5f00\u4ee5\u53ca\u9ed8\u8ba4\u9009\u4e2d","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u9ed8\u8ba4\u5c55\u5f00\u4ee5\u53ca\u9ed8\u8ba4\u9009\u4e2d"),a.a.createElement("p",null,"\u53ef\u5c06 Tree \u7684\u67d0\u4e9b\u8282\u70b9\u8bbe\u7f6e\u4e3a\u7981\u7528\u72b6\u6001"),a.a.createElement("p",null,":::demo \u5206\u522b\u901a\u8fc7 ",a.a.createElement("code",null,"default-expanded-keys")," \u548c ",a.a.createElement("code",null,"default-checked-keys")," \u8bbe\u7f6e\u9ed8\u8ba4\u5c55\u5f00\u548c\u9ed8\u8ba4\u9009\u4e2d\u7684\u8282\u70b9\u3002 \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6b64\u65f6\u5fc5\u987b\u8bbe\u7f6e ",a.a.createElement("code",null,"node-key"),"\uff0c \u5176\u503c\u4e3a\u8282\u70b9\u6570\u636e\u4e2d\u7684\u4e00\u4e2a\u5b57\u6bb5\u540d\uff0c\u8be5\u5b57\u6bb5\u5728\u6574\u68f5\u6811\u4e2d\u662f\u552f\u4e00\u7684\u3002"),a.a.createElement("p",null,"tree/default-state"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u6811\u8282\u70b9\u7684\u9009\u62e9"},a.a.createElement(r["AnchorLink"],{to:"#\u6811\u8282\u70b9\u7684\u9009\u62e9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6811\u8282\u70b9\u7684\u9009\u62e9"),a.a.createElement("p",null,":::demo \u672c\u4f8b\u5c55\u793a\u5982\u4f55\u83b7\u53d6\u548c\u8bbe\u7f6e\u9009\u4e2d\u8282\u70b9\u3002 \u83b7\u53d6\u548c\u8bbe\u7f6e\u5404\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a\u901a\u8fc7 node \u6216\u901a\u8fc7 key\u3002 \u5982\u679c\u9700\u8981\u901a\u8fc7 key \u6765\u83b7\u53d6\u6216\u8bbe\u7f6e\uff0c\u5219\u5fc5\u987b\u8bbe\u7f6e ",a.a.createElement("code",null,"node-key"),"\u3002"),a.a.createElement("p",null,"tree/checking-tree"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u8282\u70b9\u5185\u5bb9"},a.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u8282\u70b9\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u8282\u70b9\u5185\u5bb9"),a.a.createElement("p",null,"\u8282\u70b9\u7684\u5185\u5bb9\u652f\u6301\u81ea\u5b9a\u4e49\uff0c\u53ef\u4ee5\u5728\u8282\u70b9\u533a\u6dfb\u52a0\u6309\u94ae\u6216\u56fe\u6807\u7b49\u5185\u5bb9"),a.a.createElement("p",null,":::demo \u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u6cd5\u8fdb\u884c\u6811\u8282\u70b9\u5185\u5bb9\u7684\u81ea\u5b9a\u4e49\uff1a",a.a.createElement("code",null,"render-content")," \u548c scoped slot\u3002 \u4f7f\u7528 ",a.a.createElement("code",null,"render-content")," \u6307\u5b9a\u6e32\u67d3\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u9700\u8981\u7684\u8282\u70b9\u533a\u5185\u5bb9\u5373\u53ef\u3002 \u6e32\u67d3\u51fd\u6570\u7684\u7528\u6cd5\u8bf7\u53c2\u8003 Vue \u6587\u6863\u3002 \u4f7f\u7528 scoped slot \u4f1a\u4f20\u5165\u4e24\u4e2a\u53c2\u6570 ",a.a.createElement("code",null,"node")," \u548c ",a.a.createElement("code",null,"data"),"\uff0c\u5206\u522b\u8868\u793a\u5f53\u524d\u8282\u70b9\u7684 Node \u5bf9\u8c61\u548c\u5f53\u524d\u8282\u70b9\u7684\u6570\u636e\u3002 \u6ce8\u610f\uff1a\u7531\u4e8e jsfiddle \u4e0d\u652f\u6301 JSX \u8bed\u6cd5\uff0c\u6240\u4ee5",a.a.createElement("code",null,"render-content"),"\u793a\u4f8b\u5728 jsfiddle \u4e2d\u65e0\u6cd5\u8fd0\u884c\u3002 \u4f46\u662f\u5728\u5b9e\u9645\u7684\u9879\u76ee\u4e2d\uff0c\u53ea\u8981\u6b63\u786e\u5730\u914d\u7f6e\u4e86\u76f8\u5173\u4f9d\u8d56\uff0c\u5c31\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u3002"),a.a.createElement("p",null,"tree/customized-node"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u8282\u70b9\u7c7b\u540d"},a.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u8282\u70b9\u7c7b\u540d","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u8282\u70b9\u7c7b\u540d"),a.a.createElement("p",null,"The class of tree nodes can be customized"),a.a.createElement("p",null,":::demo Use ",a.a.createElement("code",null,"props.class")," to build class name of nodes."),a.a.createElement("p",null,"tree/custom-node-class"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"tree-node-filtering"},a.a.createElement(r["AnchorLink"],{to:"#tree-node-filtering","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Tree node filtering"),a.a.createElement("p",null,"Tree nodes can be filtered"),a.a.createElement("p",null,":::demo Invoke the ",a.a.createElement("code",null,"filter")," method of the Tree instance to filter tree nodes. Its parameter is the filtering keyword. Note that for it to work, ",a.a.createElement("code",null,"filter-node-method")," is required, and its value is the filtering method."),a.a.createElement("p",null,"tree/filtering"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u624b\u98ce\u7434\u6a21\u5f0f"},a.a.createElement(r["AnchorLink"],{to:"#\u624b\u98ce\u7434\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u624b\u98ce\u7434\u6a21\u5f0f"),a.a.createElement("p",null,"\u5bf9\u4e8e\u540c\u4e00\u7ea7\u7684\u8282\u70b9\uff0c\u6bcf\u6b21\u53ea\u80fd\u5c55\u5f00\u4e00\u4e2a"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"tree/accordion"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u53ef\u62d6\u62fd\u8282\u70b9"},a.a.createElement(r["AnchorLink"],{to:"#\u53ef\u62d6\u62fd\u8282\u70b9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u53ef\u62d6\u62fd\u8282\u70b9"),a.a.createElement("p",null,"\u901a\u8fc7 ",a.a.createElement("code",null,"draggable")," \u5c5e\u6027\u53ef\u8ba9\u8282\u70b9\u53d8\u4e3a\u53ef\u62d6\u62fd"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"tree/draggable"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"data"),a.a.createElement("td",null,"\u5c55\u793a\u6570\u636e"),a.a.createElement("td",null,"array"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"empty-text"),a.a.createElement("td",null,"\u5185\u5bb9\u4e3a\u7a7a\u7684\u65f6\u5019\u5c55\u793a\u7684\u6587\u672c"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-key"),a.a.createElement("td",null,"\u6bcf\u4e2a\u6811\u8282\u70b9\u7528\u6765\u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\u7684\u5c5e\u6027\uff0c\u6574\u68f5\u6811\u5e94\u8be5\u662f\u552f\u4e00\u7684"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"props"),a.a.createElement("td",null,"\u914d\u7f6e\u9009\u9879\uff0c\u5177\u4f53\u770b\u4e0b\u8868"),a.a.createElement("td",null,"object"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"render-after-expand"),a.a.createElement("td",null,"\u662f\u5426\u5728\u7b2c\u4e00\u6b21\u5c55\u5f00\u67d0\u4e2a\u6811\u8282\u70b9\u540e\u624d\u6e32\u67d3\u5176\u5b50\u8282\u70b9"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"load"),a.a.createElement("td",null,"\u52a0\u8f7d\u5b50\u6811\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u4ec5\u5f53 lazy \u5c5e\u6027\u4e3atrue \u65f6\u751f\u6548"),a.a.createElement("td",null,"function(node, resolve)\uff0c",a.a.createElement("code",null,"node"),"\u4e3a\u5f53\u524d\u70b9\u51fb\u7684\u8282\u70b9\uff0c",a.a.createElement("code",null,"resolve"),"\u4e3a\u6570\u636e\u52a0\u8f7d\u5b8c\u6210\u7684\u56de\u8c03(\u5fc5\u987b\u8c03\u7528)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"render-content"),a.a.createElement("td",null,"\u6811\u8282\u70b9\u7684\u5185\u5bb9\u533a\u7684\u6e32\u67d3 Function"),a.a.createElement("td",null,"Function(h, ",a.a.createElement("code",null,"{"," node, data, store ","}"),")"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"highlight-current"),a.a.createElement("td",null,"\u662f\u5426\u9ad8\u4eae\u5f53\u524d\u9009\u4e2d\u8282\u70b9\uff0c\u9ed8\u8ba4\u503c\u662f false\u3002"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"default-expand-all"),a.a.createElement("td",null,"\u662f\u5426\u9ed8\u8ba4\u5c55\u5f00\u6240\u6709\u8282\u70b9"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"expand-on-click-node"),a.a.createElement("td",null,"\u662f\u5426\u5728\u70b9\u51fb\u8282\u70b9\u7684\u65f6\u5019\u5c55\u5f00\u6216\u8005\u6536\u7f29\u8282\u70b9\uff0c \u9ed8\u8ba4\u503c\u4e3a true\uff0c\u5982\u679c\u4e3a false\uff0c\u5219\u53ea\u6709\u70b9\u7bad\u5934\u56fe\u6807\u7684\u65f6\u5019\u624d\u4f1a\u5c55\u5f00\u6216\u8005\u6536\u7f29\u8282\u70b9\u3002"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"check-on-click-node"),a.a.createElement("td",null,"\u662f\u5426\u5728\u70b9\u51fb\u8282\u70b9\u7684\u65f6\u5019\u9009\u4e2d\u8282\u70b9\uff0c\u9ed8\u8ba4\u503c\u4e3a false\uff0c\u5373\u53ea\u6709\u5728\u70b9\u51fb\u590d\u9009\u6846\u65f6\u624d\u4f1a\u9009\u4e2d\u8282\u70b9\u3002"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"auto-expand-parent"),a.a.createElement("td",null,"\u5c55\u5f00\u5b50\u8282\u70b9\u7684\u65f6\u5019\u662f\u5426\u81ea\u52a8\u5c55\u5f00\u7236\u8282\u70b9"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"default-expanded-keys"),a.a.createElement("td",null,"\u9ed8\u8ba4\u5c55\u5f00\u7684\u8282\u70b9\u7684 key \u7684\u6570\u7ec4"),a.a.createElement("td",null,"array"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"show-checkbox"),a.a.createElement("td",null,"\u8282\u70b9\u662f\u5426\u53ef\u88ab\u9009\u62e9"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"check-strictly"),a.a.createElement("td",null,"\u5728\u663e\u793a\u590d\u9009\u6846\u7684\u60c5\u51b5\u4e0b\uff0c\u662f\u5426\u4e25\u683c\u7684\u9075\u5faa\u7236\u5b50\u4e0d\u4e92\u76f8\u5173\u8054\u7684\u505a\u6cd5\uff0c\u9ed8\u8ba4\u4e3a false"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"default-checked-keys"),a.a.createElement("td",null,"\u9ed8\u8ba4\u52fe\u9009\u7684\u8282\u70b9\u7684 key \u7684\u6570\u7ec4"),a.a.createElement("td",null,"array"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"current-node-key"),a.a.createElement("td",null,"\u5f53\u524d\u9009\u4e2d\u7684\u8282\u70b9"),a.a.createElement("td",null,"string, number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"filter-node-method"),a.a.createElement("td",null,"\u5bf9\u6811\u8282\u70b9\u8fdb\u884c\u7b5b\u9009\u65f6\u6267\u884c\u7684\u65b9\u6cd5\uff0c \u8fd4\u56de ",a.a.createElement("code",null,"false")," \u5219\u8868\u793a\u8fd9\u4e2a\u8282\u70b9\u4f1a\u88ab\u9690\u85cf"),a.a.createElement("td",null,"Function(value, data, node)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"accordion"),a.a.createElement("td",null,"\u662f\u5426\u6bcf\u6b21\u53ea\u6253\u5f00\u4e00\u4e2a\u540c\u7ea7\u6811\u8282\u70b9\u5c55\u5f00"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"indent"),a.a.createElement("td",null,"\u76f8\u90bb\u7ea7\u8282\u70b9\u95f4\u7684\u6c34\u5e73\u7f29\u8fdb\uff0c\u5355\u4f4d\u4e3a\u50cf\u7d20"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"16")),a.a.createElement("tr",null,a.a.createElement("td",null,"icon"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u56fe\u6807\u7ec4\u4ef6"),a.a.createElement("td",null,"string / Component"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"lazy"),a.a.createElement("td",null,"\u662f\u5426\u61d2\u52a0\u8f7d\u5b50\u8282\u70b9\uff0c\u9700\u4e0e load \u65b9\u6cd5\u7ed3\u5408\u4f7f\u7528"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"draggable"),a.a.createElement("td",null,"\u662f\u5426\u5f00\u542f\u62d6\u62fd\u8282\u70b9\u529f\u80fd"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"allow-drag"),a.a.createElement("td",null,"\u5224\u65ad\u8282\u70b9\u80fd\u5426\u88ab\u62d6\u62fd \u5982\u679c\u8fd4\u56de ",a.a.createElement("code",null,"false")," \uff0c\u8282\u70b9\u4e0d\u80fd\u88ab\u62d6\u52a8"),a.a.createElement("td",null,"Function(node)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"allow-drop"),a.a.createElement("td",null,"\u62d6\u62fd\u65f6\u5224\u5b9a\u76ee\u6807\u8282\u70b9\u80fd\u5426\u6210\u4e3a\u62d6\u52a8\u76ee\u6807\u4f4d\u7f6e\u3002 \u5982\u679c\u8fd4\u56de ",a.a.createElement("code",null,"false")," \uff0c\u62d6\u52a8\u8282\u70b9\u4e0d\u80fd\u88ab\u62d6\u653e\u5230\u76ee\u6807\u8282\u70b9\u3002 ",a.a.createElement("code",null,"type")," \u53c2\u6570\u6709\u4e09\u79cd\u60c5\u51b5\uff1a'prev'\u3001'inner' \u548c 'next'\uff0c\u5206\u522b\u8868\u793a\u653e\u7f6e\u5728\u76ee\u6807\u8282\u70b9\u524d\u3001\u63d2\u5165\u81f3\u76ee\u6807\u8282\u70b9\u548c\u653e\u7f6e\u5728\u76ee\u6807\u8282\u70b9\u540e"),a.a.createElement("td",null,"Function(draggingNode, dropNode, type)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")))),a.a.createElement("h2",{id:"props"},a.a.createElement(r["AnchorLink"],{to:"#props","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Props"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Props"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"label"),a.a.createElement("td",null,"\u6307\u5b9a\u8282\u70b9\u6807\u7b7e\u4e3a\u8282\u70b9\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u503c"),a.a.createElement("td",null,"string, function(data, node)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"children"),a.a.createElement("td",null,"\u6307\u5b9a\u5b50\u6811\u4e3a\u8282\u70b9\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u503c"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u6307\u5b9a\u8282\u70b9\u9009\u62e9\u6846\u662f\u5426\u7981\u7528\u4e3a\u8282\u70b9\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u503c"),a.a.createElement("td",null,"boolean, function(data, node)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"isLeaf"),a.a.createElement("td",null,"\u6307\u5b9a\u8282\u70b9\u662f\u5426\u4e3a\u53f6\u5b50\u8282\u70b9\uff0c\u4ec5\u5728\u6307\u5b9a\u4e86 lazy \u5c5e\u6027\u7684\u60c5\u51b5\u4e0b\u751f\u6548"),a.a.createElement("td",null,"boolean, function(data, node)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"class"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u8282\u70b9\u7c7b\u540d"),a.a.createElement("td",null,"string, function(data, node)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")))),a.a.createElement("h2",{id:"\u65b9\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),a.a.createElement("p",null,a.a.createElement("code",null,"Tree")," has the following method, which returns the currently selected array of nodes."),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u65b9\u6cd5"),a.a.createElement("th",null,"\u63cf\u8ff0"),a.a.createElement("th",null,"\u53c2\u6570"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"filter"),a.a.createElement("td",null,"\u8fc7\u6ee4\u6240\u6709\u6811\u8282\u70b9\uff0c\u8fc7\u6ee4\u540e\u7684\u8282\u70b9\u5c06\u88ab\u9690\u85cf"),a.a.createElement("td",null,"Accept a parameter which will be used as first parameter for filter-node-method")),a.a.createElement("tr",null,a.a.createElement("td",null,"updateKeyChildren"),a.a.createElement("td",null,"set new data to node, only works when ",a.a.createElement("code",null,"node-key")," is assigned"),a.a.createElement("td",null,"(key, data) \u63a5\u6536\u4e24\u4e2a\u53c2\u6570: 1. \u8282\u70b9\u7684 key 2. \u65b0\u6570\u636e")),a.a.createElement("tr",null,a.a.createElement("td",null,"getCheckedNodes"),a.a.createElement("td",null,"If the node can be selected (",a.a.createElement("code",null,"show-checkbox")," is ",a.a.createElement("code",null,"true"),"), it returns the currently selected array of nodes"),a.a.createElement("td",null,"(leafOnly, includeHalfChecked) Accept two boolean type parameters: 1. default value is ",a.a.createElement("code",null,"false"),". If the parameter is ",a.a.createElement("code",null,"true"),", it only returns the currently selected array of sub-nodes. 2. default value is ",a.a.createElement("code",null,"false"),". If the parameter is ",a.a.createElement("code",null,"true"),", the return value contains halfchecked nodes")),a.a.createElement("tr",null,a.a.createElement("td",null,"setCheckedNodes"),a.a.createElement("td",null,"set certain nodes to be checked, only works when ",a.a.createElement("code",null,"node-key")," is assigned"),a.a.createElement("td",null,"an array of nodes to be checked")),a.a.createElement("tr",null,a.a.createElement("td",null,"getCheckedKeys"),a.a.createElement("td",null,"If the node can be selected (",a.a.createElement("code",null,"show-checkbox")," is ",a.a.createElement("code",null,"true"),"), it returns the currently selected array of node's keys"),a.a.createElement("td",null,"(leafOnly) Accept a boolean type parameter whose default value is ",a.a.createElement("code",null,"false"),". If the parameter is ",a.a.createElement("code",null,"true"),", it only returns the currently selected array of sub-nodes.")),a.a.createElement("tr",null,a.a.createElement("td",null,"setCheckedKeys"),a.a.createElement("td",null,"set certain nodes to be checked, only works when ",a.a.createElement("code",null,"node-key")," is assigned"),a.a.createElement("td",null,"(keys, leafOnly) Accept two parameters: 1. an array of node's keys to be checked 2. a boolean type parameter whose default value is ",a.a.createElement("code",null,"false"),". If the parameter is ",a.a.createElement("code",null,"true"),", it only returns the currently selected array of sub-nodes.")),a.a.createElement("tr",null,a.a.createElement("td",null,"setChecked"),a.a.createElement("td",null,"set node to be checked or not, only works when ",a.a.createElement("code",null,"node-key")," is assigned"),a.a.createElement("td",null,"(key/data, checked, deep) Accept three parameters: 1. node's key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not.")),a.a.createElement("tr",null,a.a.createElement("td",null,"getHalfCheckedNodes"),a.a.createElement("td",null,"If the node can be selected (",a.a.createElement("code",null,"show-checkbox")," is ",a.a.createElement("code",null,"true"),"), it returns the currently half selected array of nodes"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"getHalfCheckedKeys"),a.a.createElement("td",null,"If the node can be selected (",a.a.createElement("code",null,"show-checkbox")," is ",a.a.createElement("code",null,"true"),"), it returns the currently half selected array of node's keys"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"getCurrentKey"),a.a.createElement("td",null,"return the highlight node's key (null if no node is highlighted)"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"getCurrentNode"),a.a.createElement("td",null,"return the highlight node's data (null if no node is highlighted)"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"setCurrentKey"),a.a.createElement("td",null,"set highlighted node by key, only works when ",a.a.createElement("code",null,"node-key")," is assigned"),a.a.createElement("td",null,"(key, shouldAutoExpandParent=true) 1. the node's key to be highlighted. If ",a.a.createElement("code",null,"null"),", cancel the currently highlighted node 2. whether to automatically expand parent node")),a.a.createElement("tr",null,a.a.createElement("td",null,"setCurrentNode"),a.a.createElement("td",null,"set highlighted node, only works when ",a.a.createElement("code",null,"node-key")," is assigned"),a.a.createElement("td",null,"(node, shouldAutoExpandParent=true) 1. the node to be highlighted 2. whether to automatically expand parent node")),a.a.createElement("tr",null,a.a.createElement("td",null,"getNode"),a.a.createElement("td",null,"get node by data or key"),a.a.createElement("td",null,"(data) the node's data or key")),a.a.createElement("tr",null,a.a.createElement("td",null,"remove"),a.a.createElement("td",null,"\u5220\u9664 Tree \u4e2d\u7684\u4e00\u4e2a\u8282\u70b9\uff0c\u4f7f\u7528\u6b64\u65b9\u6cd5\u5fc5\u987b\u8bbe\u7f6e node-key \u5c5e\u6027"),a.a.createElement("td",null,"(data) \u8981\u5220\u9664\u7684\u8282\u70b9\u7684 data \u6216\u8005 node \u5bf9\u8c61")),a.a.createElement("tr",null,a.a.createElement("td",null,"append"),a.a.createElement("td",null,"\u4e3a Tree \u4e2d\u7684\u4e00\u4e2a\u8282\u70b9\u8ffd\u52a0\u4e00\u4e2a\u5b50\u8282\u70b9"),a.a.createElement("td",null,"(data, parentNode) 1. \u8981\u8ffd\u52a0\u7684\u5b50\u8282\u70b9\u7684 data 2. \u7236\u8282\u70b9\u7684 data, key \u6216 node")),a.a.createElement("tr",null,a.a.createElement("td",null,"insertBefore"),a.a.createElement("td",null,"\u5728 Tree \u4e2d\u7ed9\u5b9a\u8282\u70b9\u524d\u63d2\u5165\u4e00\u4e2a\u8282\u70b9"),a.a.createElement("td",null,"(data, refNode) 1. \u8981\u589e\u52a0\u7684\u8282\u70b9\u7684 data 2. \u53c2\u8003\u8282\u70b9\u7684 data, key \u6216 node")),a.a.createElement("tr",null,a.a.createElement("td",null,"insertAfter"),a.a.createElement("td",null,"\u5728 Tree \u4e2d\u7ed9\u5b9a\u8282\u70b9\u540e\u63d2\u5165\u4e00\u4e2a\u8282\u70b9"),a.a.createElement("td",null,"(data, refNode) 1. \u8981\u589e\u52a0\u7684\u8282\u70b9\u7684 data 2. \u53c2\u8003\u8282\u70b9\u7684 data, key \u6216 node")))),a.a.createElement("h2",{id:"\u4e8b\u4ef6"},a.a.createElement(r["AnchorLink"],{to:"#\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u56de\u8c03\u53c2\u6570"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"node-click"),a.a.createElement("td",null,"\u5f53\u8282\u70b9\u88ab\u70b9\u51fb\u7684\u65f6\u5019\u89e6\u53d1"),a.a.createElement("td",null,"\u5171\u4e09\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u4f20\u9012\u7ed9 data \u5c5e\u6027\u7684\u6570\u7ec4\u4e2d\u8be5\u8282\u70b9\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61\u3001\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001\u8282\u70b9\u7ec4\u4ef6\u672c\u8eab\u3002")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-contextmenu"),a.a.createElement("td",null,"\u5f53\u67d0\u4e00\u8282\u70b9\u88ab\u9f20\u6807\u53f3\u952e\u70b9\u51fb\u65f6\u4f1a\u89e6\u53d1\u8be5\u4e8b\u4ef6"),a.a.createElement("td",null,"\u5171\u56db\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1aevent\u3001\u4f20\u9012\u7ed9 ",a.a.createElement("code",null,"data")," \u5c5e\u6027\u7684\u6570\u7ec4\u4e2d\u8be5\u8282\u70b9\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61\u3001\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001\u8282\u70b9\u7ec4\u4ef6\u672c\u8eab\u3002")),a.a.createElement("tr",null,a.a.createElement("td",null,"check-change"),a.a.createElement("td",null,"\u5f53\u590d\u9009\u6846\u88ab\u70b9\u51fb\u7684\u65f6\u5019\u89e6\u53d1"),a.a.createElement("td",null,"\u5171\u4e24\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u4f20\u9012\u7ed9 data \u5c5e\u6027\u7684\u6570\u7ec4\u4e2d\u8be5\u8282\u70b9\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61\u3001\u6811\u76ee\u524d\u7684\u9009\u4e2d\u72b6\u6001\u5bf9\u8c61\uff0c\u5305\u542b checkedNodes\u3001checkedKeys\u3001halfCheckedNodes\u3001halfCheckedKeys \u56db\u4e2a\u5c5e\u6027")),a.a.createElement("tr",null,a.a.createElement("td",null,"check"),a.a.createElement("td",null,"\u8bbe\u7f6e\u76ee\u524d\u52fe\u9009\u7684\u8282\u70b9\uff0c\u4f7f\u7528\u6b64\u65b9\u6cd5\u5fc5\u987b\u8bbe\u7f6e node-key \u5c5e\u6027"),a.a.createElement("td",null,"(nodes) \u63a5\u6536\u52fe\u9009\u8282\u70b9\u6570\u636e\u7684\u6570\u7ec4")),a.a.createElement("tr",null,a.a.createElement("td",null,"current-change"),a.a.createElement("td",null,"\u5f53\u524d\u9009\u4e2d\u8282\u70b9\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),a.a.createElement("td",null,"\u5171\u4e24\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u5f53\u524d\u8282\u70b9\u7684\u6570\u636e\uff0c\u5f53\u524d\u8282\u70b9\u7684 Node \u5bf9\u8c61")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-expand"),a.a.createElement("td",null,"\u8282\u70b9\u88ab\u5c55\u5f00\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),a.a.createElement("td",null,"\u5171\u4e09\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u4f20\u9012\u7ed9 ",a.a.createElement("code",null,"data")," \u5c5e\u6027\u7684\u6570\u7ec4\u4e2d\u8be5\u8282\u70b9\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61\u3001\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001\u8282\u70b9\u7ec4\u4ef6\u672c\u8eab")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-collapse"),a.a.createElement("td",null,"\u8282\u70b9\u88ab\u5173\u95ed\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),a.a.createElement("td",null,"\u5171\u4e09\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u4f20\u9012\u7ed9 ",a.a.createElement("code",null,"data")," \u5c5e\u6027\u7684\u6570\u7ec4\u4e2d\u8be5\u8282\u70b9\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61\u3001\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001\u8282\u70b9\u7ec4\u4ef6\u672c\u8eab")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-drag-start"),a.a.createElement("td",null,"\u8282\u70b9\u5f00\u59cb\u62d6\u62fd\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),a.a.createElement("td",null,"\u5171\u4e24\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u88ab\u62d6\u62fd\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001event")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-drag-enter"),a.a.createElement("td",null,"\u62d6\u62fd\u8fdb\u5165\u5176\u4ed6\u8282\u70b9\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),a.a.createElement("td",null,"\u5171\u4e09\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u88ab\u62d6\u62fd\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001\u6240\u8fdb\u5165\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001event")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-drag-leave"),a.a.createElement("td",null,"\u62d6\u62fd\u79bb\u5f00\u67d0\u4e2a\u8282\u70b9\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),a.a.createElement("td",null,"\u5171\u4e09\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u88ab\u62d6\u62fd\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001\u6240\u79bb\u5f00\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001event")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-drag-over"),a.a.createElement("td",null,"\u5728\u62d6\u62fd\u8282\u70b9\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6\uff08\u7c7b\u4f3c\u6d4f\u89c8\u5668\u7684 mouseover \u4e8b\u4ef6\uff09"),a.a.createElement("td",null,"\u5171\u4e09\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u88ab\u62d6\u62fd\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001\u5f53\u524d\u8fdb\u5165\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001event")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-drag-end"),a.a.createElement("td",null,"\u62d6\u62fd\u7ed3\u675f\u65f6\uff08\u53ef\u80fd\u672a\u6210\u529f\uff09\u89e6\u53d1\u7684\u4e8b\u4ef6"),a.a.createElement("td",null,"\u5171\u56db\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u88ab\u62d6\u62fd\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001\u7ed3\u675f\u62d6\u62fd\u65f6\u6700\u540e\u8fdb\u5165\u7684\u8282\u70b9\uff08\u53ef\u80fd\u4e3a\u7a7a\uff09\u3001\u88ab\u62d6\u62fd\u8282\u70b9\u7684\u653e\u7f6e\u4f4d\u7f6e\uff08before\u3001after\u3001inner\uff09\u3001event")),a.a.createElement("tr",null,a.a.createElement("td",null,"node-drop"),a.a.createElement("td",null,"\u62d6\u62fd\u6210\u529f\u5b8c\u6210\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),a.a.createElement("td",null,"\u5171\u56db\u4e2a\u53c2\u6570\uff0c\u4f9d\u6b21\u4e3a\uff1a\u88ab\u62d6\u62fd\u8282\u70b9\u5bf9\u5e94\u7684 Node\u3001\u7ed3\u675f\u62d6\u62fd\u65f6\u6700\u540e\u8fdb\u5165\u7684\u8282\u70b9\u3001\u88ab\u62d6\u62fd\u8282\u70b9\u7684\u653e\u7f6e\u4f4d\u7f6e\uff08before\u3001after\u3001inner\uff09\u3001event")))),a.a.createElement("h2",{id:"\u63d2\u69fd"},a.a.createElement(r["AnchorLink"],{to:"#\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u63d2\u69fd"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u63d2\u69fd\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6811\u8282\u70b9\u7684\u5185\u5bb9\uff0c The scope parameter is ",a.a.createElement("code",null,"{"," node, data ","}")))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(d,{demos:l})}},wSMz:function(e,t,l){}}]);