(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[74],{FDkQ:function(e,t,l){"use strict";var n=l("g9GX"),a=l.n(n),r=l("L+to"),c=l.n(r);l("wSMz");function o(e,t){return d(e)||E(e,t)||i(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return u(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function E(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,o=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(m){o=!0,a=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(o)throw a}}return r}}function d(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),m=o(r,2),i=m[0],u=m[1],E=Object(n["useState"])(!1),d=o(E,2),s=d[0],f=d[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":i||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},usHZ:function(e,t,l){"use strict";l.r(t);var n=l("g9GX"),a=l.n(n),r=l("eLlY"),c=l("ePny"),o=l("FDkQ"),m=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"notification-\u901a\u77e5"},a.a.createElement(r["AnchorLink"],{to:"#notification-\u901a\u77e5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Notification \u901a\u77e5"),a.a.createElement("p",null,"\u60ac\u6d6e\u51fa\u73b0\u5728\u9875\u9762\u89d2\u843d\uff0c\u663e\u793a\u5168\u5c40\u7684\u901a\u77e5\u63d0\u9192\u6d88\u606f\u3002"),a.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),a.a.createElement("p",null,":::demo Element Plus \u6ce8\u518c\u4e86 ",a.a.createElement("code",null,"$notify")," \u65b9\u6cd5\u5e76\u4e14\u5b83\u63a5\u53d7\u4e00\u4e2a Object \u4f5c\u4e3a\u5176\u53c2\u6570\u3002 \u5728\u6700\u7b80\u5355\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",a.a.createElement("code",null,"title")," \u548c ",a.a.createElement("code",null,"message")," \u5c5e\u6027\u6765\u8bbe\u7f6e\u901a\u77e5\u7684\u6807\u9898\u548c\u6b63\u6587\u5185\u5bb9\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u901a\u77e5\u57284500\u6beb\u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u4f46\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",a.a.createElement("code",null,"duration")," \u5c5e\u6027\u6765\u81ea\u5b9a\u4e49\u901a\u77e5\u7684\u5c55\u793a\u65f6\u95f4\u3002 \u5982\u679c\u4f60\u5c06\u5b83\u8bbe\u7f6e\u4e3a ",a.a.createElement("code",null,"0"),"\uff0c\u90a3\u4e48\u901a\u77e5\u5c06\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\u3002 \u9700\u8981\u6ce8\u610f\u7684\u662f ",a.a.createElement("code",null,"duration")," \u63a5\u6536\u4e00\u4e2a ",a.a.createElement("code",null,"Number"),"\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002"),a.a.createElement("p",null,"notification/basic"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u4e0d\u540c\u7c7b\u578b\u7684\u901a\u77e5"},a.a.createElement(r["AnchorLink"],{to:"#\u4e0d\u540c\u7c7b\u578b\u7684\u901a\u77e5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e0d\u540c\u7c7b\u578b\u7684\u901a\u77e5"),a.a.createElement("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u56db\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u63d0\u9192\u6846\uff1asuccess\u3001warning\u3001info \u548cerror\u3002"),a.a.createElement("p",null,":::demo Element Plus \u4e3a Notification \u7ec4\u4ef6\u51c6\u5907\u4e86\u56db\u79cd\u901a\u77e5\u7c7b\u578b\uff1a",a.a.createElement("code",null,"success"),", ",a.a.createElement("code",null,"warning"),", ",a.a.createElement("code",null,"info"),", ",a.a.createElement("code",null,"error"),"\u3002 \u4ed6\u4eec\u53ef\u4ee5\u8bbe\u7f6e ",a.a.createElement("code",null,"type")," \u5b57\u6bb5\u6765\u4fee\u6539\uff0c\u9664\u4e0a\u8ff0\u7684\u56db\u4e2a\u503c\u4e4b\u5916\u7684\u503c\u4f1a\u88ab\u5ffd\u7565\u3002 \u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u4e3a Notification \u7684\u5404\u79cd type \u6ce8\u518c\u4e86\u5355\u72ec\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u4e0d\u4f20\u5165 ",a.a.createElement("code",null,"type")," \u5b57\u6bb5\u7684\u60c5\u51b5\u4e0b\u50cf ",a.a.createElement("code",null,"open3")," \u548c ",a.a.createElement("code",null,"open4")," \u90a3\u6837\u76f4\u63a5\u8c03\u7528\u3002"),a.a.createElement("p",null,"notification/different-types"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u6d88\u606f\u5f39\u51fa\u7684\u4f4d\u7f6e"},a.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u6d88\u606f\u5f39\u51fa\u7684\u4f4d\u7f6e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u6d88\u606f\u5f39\u51fa\u7684\u4f4d\u7f6e"),a.a.createElement("p",null,"\u53ef\u4ee5\u8ba9 Notification \u4ece\u5c4f\u5e55\u56db\u89d2\u4e2d\u7684\u4efb\u610f\u4e00\u89d2\u5f39\u51fa"),a.a.createElement("p",null,":::demo \u4f7f\u7528 ",a.a.createElement("code",null,"position")," \u5c5e\u6027\u8bbe\u7f6e Notification \u7684\u5f39\u51fa\u4f4d\u7f6e\uff0c \u652f\u6301\u56db\u4e2a\u9009\u9879\uff1a",a.a.createElement("code",null,"top-right"),"\u3001",a.a.createElement("code",null,"top-left"),"\u3001",a.a.createElement("code",null,"bottom-right")," \u548c ",a.a.createElement("code",null,"bottom-left"),"\uff0c \u9ed8\u8ba4\u4e3a ",a.a.createElement("code",null,"top-right"),"\u3002"),a.a.createElement("p",null,"notification/positioning"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u6709\u4f4d\u7f6e\u504f\u79fb\u7684\u901a\u77e5\u680f"},a.a.createElement(r["AnchorLink"],{to:"#\u6709\u4f4d\u7f6e\u504f\u79fb\u7684\u901a\u77e5\u680f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6709\u4f4d\u7f6e\u504f\u79fb\u7684\u901a\u77e5\u680f"),a.a.createElement("p",null,"\u80fd\u591f\u8bbe\u7f6e\u504f\u79fb\u91cf\u6765\u4f7f Notification \u504f\u79fb\u9ed8\u8ba4\u4f4d\u7f6e\u3002"),a.a.createElement("p",null,":::demo Notification \u63d0\u4f9b\u8bbe\u7f6e\u504f\u79fb\u91cf\u7684\u529f\u80fd\uff0c\u901a\u8fc7\u8bbe\u7f6e ",a.a.createElement("code",null,"offset")," \u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u5f39\u51fa\u7684\u6d88\u606f\u8ddd\u5c4f\u5e55\u8fb9\u7f18\u504f\u79fb\u4e00\u6bb5\u8ddd\u79bb\u3002 \u6ce8\u610f\u5728\u540c\u4e00\u65f6\u523b\uff0c\u6bcf\u4e00\u4e2a\u7684 Notification \u5b9e\u4f8b\u5e94\u5f53\u5177\u6709\u4e00\u4e2a\u76f8\u540c\u7684\u504f\u79fb\u91cf\u3002"),a.a.createElement("p",null,"notification/offsetting"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u4f7f\u7528-html-\u7247\u6bb5\u4f5c\u4e3a\u6b63\u6587\u5185\u5bb9"},a.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528-html-\u7247\u6bb5\u4f5c\u4e3a\u6b63\u6587\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528 HTML \u7247\u6bb5\u4f5c\u4e3a\u6b63\u6587\u5185\u5bb9"),a.a.createElement("p",null,a.a.createElement("code",null,"message")," \u652f\u6301\u4f20\u5165 HTML \u5b57\u7b26\u4e32\u6765\u4f5c\u4e3a\u6b63\u6587\u5185\u5bb9\u3002"),a.a.createElement("p",null,":::demo \u5c06 ",a.a.createElement("code",null,"dangerouslyUseHTMLString")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a true\uff0c",a.a.createElement("code",null,"message")," \u5c5e\u6027\u5c31\u4f1a\u88ab\u5f53\u4f5c HTML \u7247\u6bb5\u5904\u7406\u3002"),a.a.createElement("p",null,"notification/raw-html"),a.a.createElement("p",null,":::"),a.a.createElement("p",null,":::warning"),a.a.createElement("p",null,a.a.createElement("code",null,"message")," \u5c5e\u6027\u867d\u7136\u652f\u6301\u4f20\u5165 HTML \u7247\u6bb5\uff0c\u4f46\u662f\u5728\u7f51\u7ad9\u4e0a\u52a8\u6001\u6e32\u67d3\u4efb\u610f HTML \u662f\u975e\u5e38\u5371\u9669\u7684\uff0c\u56e0\u4e3a\u5bb9\u6613\u5bfc\u81f4 ",a.a.createElement(r["Link"],{to:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"XSS \u653b\u51fb"),"\u3002 \u56e0\u6b64\u5728 ",a.a.createElement("code",null,"dangerouslyUseHTMLString")," \u6253\u5f00\u7684\u60c5\u51b5\u4e0b\uff0c\u8bf7\u786e\u4fdd ",a.a.createElement("code",null,"message")," \u7684\u5185\u5bb9\u662f\u53ef\u4fe1\u7684\uff0c",a.a.createElement("strong",null,"\u6c38\u8fdc\u4e0d\u8981"),"\u5c06\u7528\u6237\u63d0\u4ea4\u7684\u5185\u5bb9\u8d4b\u503c\u7ed9 ",a.a.createElement("code",null,"message")," \u5c5e\u6027\u3002"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u9690\u85cf\u5173\u95ed\u6309\u94ae"},a.a.createElement(r["AnchorLink"],{to:"#\u9690\u85cf\u5173\u95ed\u6309\u94ae","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u9690\u85cf\u5173\u95ed\u6309\u94ae"),a.a.createElement("p",null,"\u901a\u77e5\u7684\u5173\u95ed\u6309\u94ae\u53ef\u4ee5\u88ab\u8bbe\u7f6e\u4e3a\u9690\u85cf\u3002"),a.a.createElement("p",null,":::demo \u5c06 ",a.a.createElement("code",null,"showClose")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",a.a.createElement("code",null,"false")," \u5373\u53ef\u9690\u85cf\u5173\u95ed\u6309\u94ae\u3002"),a.a.createElement("p",null,"notification/no-close"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u5168\u5c40\u65b9\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u5168\u5c40\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5c40\u65b9\u6cd5"),a.a.createElement("p",null,"Element Plus \u4e3a ",a.a.createElement("code",null,"app.config.globalProperties")," \u6dfb\u52a0\u4e86\u5168\u5c40\u65b9\u6cd5 ",a.a.createElement("code",null,"$notify"),"\u3002 \u56e0\u6b64\u5728 Vue instance \u4e2d\u53ef\u4ee5\u91c7\u7528\u672c\u9875\u9762\u4e2d\u7684\u65b9\u5f0f\u8c03\u7528 ",a.a.createElement("code",null,"Notification"),"\u3002"),a.a.createElement("h2",{id:"\u5355\u72ec\u5f15\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u5355\u72ec\u5f15\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5355\u72ec\u5f15\u7528"),a.a.createElement(c["a"],{code:"import { ElNotification } from 'element-plus'",lang:"javascript"}),a.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u5728\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570\u5185\u8c03\u7528 ",a.a.createElement("code",null,"ElNotification(options)")," \u6765\u547c\u51fa\u901a\u77e5\u680f\u3002 \u6211\u4eec\u4e5f\u63d0\u524d\u5b9a\u4e49\u4e86\u591a\u4e2a type \u7684\u5355\u72ec\u8c03\u7528\u65b9\u6cd5\uff0c\u5982 ",a.a.createElement("code",null,"ElNotification.success(options)"),"\u3002 \u5f53\u4f60\u9700\u8981\u5173\u95ed\u9875\u9762\u4e0a\u6240\u6709\u7684\u901a\u77e5\u680f\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8c03\u7528 ",a.a.createElement("code",null,"ElNotification.closeAll()")," \u6765\u5173\u95ed\u6240\u6709\u7684\u5b9e\u4f8b\u3002"),a.a.createElement("h2",{id:"\u914d\u7f6e\u9879"},a.a.createElement(r["AnchorLink"],{to:"#\u914d\u7f6e\u9879","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u914d\u7f6e\u9879"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,"\u6807\u9898"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"message"),a.a.createElement("td",null,"\u901a\u77e5\u680f\u6b63\u6587\u5185\u5bb9"),a.a.createElement("td",null,"string/Vue.VNode"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"dangerouslyUseHTMLString"),a.a.createElement("td",null,"\u662f\u5426\u5c06 message \u5c5e\u6027\u4f5c\u4e3a HTML \u7247\u6bb5\u5904\u7406"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"type"),a.a.createElement("td",null,"\u901a\u77e5\u7684\u7c7b\u578b"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"success/warning/info/error"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"icon"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u56fe\u6807\u3002 \u82e5\u8bbe\u7f6e\u4e86 ",a.a.createElement("code",null,"type"),"\uff0c\u5219 ",a.a.createElement("code",null,"icon")," \u4f1a\u88ab\u8986\u76d6"),a.a.createElement("td",null,"string / Component"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"custom-class"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u7c7b\u540d"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"duration"),a.a.createElement("td",null,"\u663e\u793a\u65f6\u95f4, \u5355\u4f4d\u4e3a\u6beb\u79d2\u3002 \u503c\u4e3a 0 \u5219\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"4500")),a.a.createElement("tr",null,a.a.createElement("td",null,"position"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5f39\u51fa\u4f4d\u7f6e"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"top-right/top-left/bottom-right/bottom-left"),a.a.createElement("td",null,"top-right")),a.a.createElement("tr",null,a.a.createElement("td",null,"show-close"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"on-close"),a.a.createElement("td",null,"\u5173\u95ed\u65f6\u7684\u56de\u8c03\u51fd\u6570"),a.a.createElement("td",null,"function"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"on-click"),a.a.createElement("td",null,"\u70b9\u51fb Notification \u65f6\u7684\u56de\u8c03\u51fd\u6570"),a.a.createElement("td",null,"function"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"offset"),a.a.createElement("td",null,"\u76f8\u5bf9\u5c4f\u5e55\u9876\u90e8\u7684\u504f\u79fb\u91cf \u504f\u79fb\u7684\u8ddd\u79bb\uff0c\u5728\u540c\u4e00\u65f6\u523b\uff0c\u6240\u6709\u7684 Notification \u5b9e\u4f8b\u5e94\u5f53\u5177\u6709\u4e00\u4e2a\u76f8\u540c\u7684\u504f\u79fb\u91cf"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"0")),a.a.createElement("tr",null,a.a.createElement("td",null,"appendTo"),a.a.createElement("td",null,"\u8bbe\u7f6e\u901a\u77e5\u680f\u5728 DOM \u4e2d\u7684\b\u4eb2\u5143\u7d20"),a.a.createElement("td",null,"string / HTMLElement"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"document.body")))),a.a.createElement("h2",{id:"\u65b9\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),a.a.createElement("p",null,"\u8c03\u7528 ",a.a.createElement("code",null,"Notification")," \u6216 ",a.a.createElement("code",null,"this.$notify")," \u4f1a\u8fd4\u56de\u5f53\u524d Notification \u7684\u5b9e\u4f8b\u3002 \u5982\u679c\u9700\u8981\u624b\u52a8\u5173\u95ed\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u8c03\u7528\u5b83\u7684 ",a.a.createElement("code",null,"close")," \u65b9\u6cd5\u3002"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u65b9\u6cd5\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"close"),a.a.createElement("td",null,"\u5173\u95ed\u5f53\u524d\u7684\u901a\u77e5"))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:l})}},wSMz:function(e,t,l){}}]);