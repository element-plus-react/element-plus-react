(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{FDkQ:function(e,t,l){"use strict";var n=l("g9GX"),a=l.n(n),r=l("L+to"),c=l.n(r);l("wSMz");function m(e,t){return E(e)||i(e,t)||o(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function i(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,m=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(u){m=!0,a=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(m)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),u=m(r,2),o=u[0],d=u[1],i=Object(n["useState"])(!1),E=m(i,2),s=E[0],h=E[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":o||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},Srer:function(e,t,l){"use strict";l.r(t);var n=l("g9GX"),a=l.n(n),r=l("eLlY"),c=l("FDkQ"),m=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"scrollbar-\u6eda\u52a8\u6761"},a.a.createElement(r["AnchorLink"],{to:"#scrollbar-\u6eda\u52a8\u6761","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Scrollbar \u6eda\u52a8\u6761"),a.a.createElement("p",null,"\u7528\u4e8e\u66ff\u6362\u6d4f\u89c8\u5668\u539f\u751f\u6eda\u52a8\u6761\u3002"),a.a.createElement("style",{lang:"scss",dangerouslySetInnerHTML:{__html:"\n.example-showcase {\n  .el-scrollbar {\n    .scrollbar-demo-item {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 50px;\n      margin: 10px;\n      text-align: center;\n      border-radius: 4px;\n      background: var(--el-color-primary-light-9);\n      color: var(--el-color-primary);\n    }\n\n    .flex-content {\n      display: flex;\n\n      .scrollbar-demo-item {\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100px;\n        height: 50px;\n        margin: 10px;\n        text-align: center;\n        border-radius: 4px;\n        background: var(--el-color-danger-lighter);\n        color: var(--el-color-danger);\n      }\n    }\n  }\n  .el-slider {\n    margin-top: 20px;\n  }\n}\n"}}),a.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),a.a.createElement("p",null,":::demo \u901a\u8fc7 ",a.a.createElement("code",null,"height")," \u5c5e\u6027\u8bbe\u7f6e\u6eda\u52a8\u6761\u9ad8\u5ea6\uff0c\u82e5\u4e0d\u8bbe\u7f6e\u5219\u6839\u636e\u7236\u5bb9\u5668\u9ad8\u5ea6\u81ea\u9002\u5e94\u3002"),a.a.createElement("p",null,"scrollbar/basic-usage"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u6a2a\u5411\u6eda\u52a8"},a.a.createElement(r["AnchorLink"],{to:"#\u6a2a\u5411\u6eda\u52a8","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6a2a\u5411\u6eda\u52a8"),a.a.createElement("p",null,":::demo \u5f53\u5143\u7d20\u5bbd\u5ea6\u5927\u4e8e\u6eda\u52a8\u6761\u5bbd\u5ea6\u65f6\uff0c\u4f1a\u663e\u793a\u6a2a\u5411\u6eda\u52a8\u6761\u3002"),a.a.createElement("p",null,"scrollbar/horizontal-scroll"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u6700\u5927\u9ad8\u5ea6"},a.a.createElement(r["AnchorLink"],{to:"#\u6700\u5927\u9ad8\u5ea6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6700\u5927\u9ad8\u5ea6"),a.a.createElement("p",null,":::demo \u5f53\u5143\u7d20\u9ad8\u5ea6\u8d85\u8fc7\u6700\u5927\u9ad8\u5ea6\uff0c\u624d\u4f1a\u663e\u793a\u6eda\u52a8\u6761\u3002"),a.a.createElement("p",null,"scrollbar/max-height"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u624b\u52a8\u6eda\u52a8"},a.a.createElement(r["AnchorLink"],{to:"#\u624b\u52a8\u6eda\u52a8","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u624b\u52a8\u6eda\u52a8"),a.a.createElement("p",null,":::demo \u901a\u8fc7\u4f7f\u7528 ",a.a.createElement("code",null,"setScrollTop")," \u4e0e ",a.a.createElement("code",null,"setScrollLeft")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u624b\u52a8\u63a7\u5236\u6eda\u52a8\u6761\u6eda\u52a8\u3002"),a.a.createElement("p",null,"scrollbar/manual-scroll"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"scrollbar-\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#scrollbar-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Scrollbar \u5c5e\u6027"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"height"),a.a.createElement("td",null,"\u6eda\u52a8\u6761\u9ad8\u5ea6"),a.a.createElement("td",null,"string / number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"max-height"),a.a.createElement("td",null,"\u6eda\u52a8\u6761\u6700\u5927\u9ad8\u5ea6"),a.a.createElement("td",null,"string / number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"native"),a.a.createElement("td",null,"\u662f\u5426\u4f7f\u7528\u539f\u751f\u6eda\u52a8\u6761\u6837\u5f0f"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"wrap-style"),a.a.createElement("td",null,"\u5305\u88f9\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"wrap-class"),a.a.createElement("td",null,"\u5305\u88f9\u5bb9\u5668\u7684\u81ea\u5b9a\u4e49\u7c7b\u540d"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"view-style"),a.a.createElement("td",null,"\u89c6\u56fe\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"view-class"),a.a.createElement("td",null,"\u89c6\u56fe\u7684\u81ea\u5b9a\u4e49\u7c7b\u540d"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"noresize"),a.a.createElement("td",null,"\u4e0d\u54cd\u5e94\u5bb9\u5668\u5c3a\u5bf8\u53d8\u5316\uff0c\u5982\u679c\u5bb9\u5668\u5c3a\u5bf8\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u6700\u597d\u8bbe\u7f6e\u5b83\u53ef\u4ee5\u4f18\u5316\u6027\u80fd"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"tag"),a.a.createElement("td",null,"\u89c6\u56fe\u7684\u5143\u7d20\u6807\u7b7e"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"div")),a.a.createElement("tr",null,a.a.createElement("td",null,"always"),a.a.createElement("td",null,"\u6eda\u52a8\u6761\u603b\u662f\u663e\u793a"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"min-size"),a.a.createElement("td",null,"\u6eda\u52a8\u6761\u6700\u5c0f\u5c3a\u5bf8"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"20")))),a.a.createElement("h2",{id:"scrollbar-\u4e8b\u4ef6"},a.a.createElement(r["AnchorLink"],{to:"#scrollbar-\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Scrollbar \u4e8b\u4ef6"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u53c2\u6570"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"scroll"),a.a.createElement("td",null,"\u6eda\u52a8\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),a.a.createElement("td",null,"distance of scrolling ",a.a.createElement("code",null,"{"," scrollLeft, scrollTop ","}"))))),a.a.createElement("h2",{id:"scrollbar-\u65b9\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#scrollbar-\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Scrollbar \u65b9\u6cd5"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u65b9\u6cd5\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u53c2\u6570"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"setScrollTop"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6eda\u52a8\u6761\u5230\u9876\u90e8\u7684\u8ddd\u79bb"),a.a.createElement("td",null,"(scrollTop: number)")),a.a.createElement("tr",null,a.a.createElement("td",null,"setScrollLeft"),a.a.createElement("td",null,"\u8bbe\u7f6e\u6eda\u52a8\u6761\u5230\u5de6\u8fb9\u7684\u8ddd\u79bb"),a.a.createElement("td",null,"(scrollLeft: number)")),a.a.createElement("tr",null,a.a.createElement("td",null,"update"),a.a.createElement("td",null,"\u624b\u52a8\u66f4\u65b0\u6eda\u52a8\u6761\u72b6\u6001"),a.a.createElement("td",null,"\u2014")))),a.a.createElement("h2",{id:"scrollbar-\u63d2\u69fd"},a.a.createElement(r["AnchorLink"],{to:"#scrollbar-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Scrollbar \u63d2\u69fd"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u540d\u79f0"),a.a.createElement("th",null,"\u8bf4\u660e"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u5185\u5bb9"))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:l})}},wSMz:function(e,t,l){}}]);