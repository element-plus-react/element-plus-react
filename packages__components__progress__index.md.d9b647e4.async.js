(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{FDkQ:function(e,t,n){"use strict";var l=n("g9GX"),a=n.n(l),r=n("L+to"),c=n.n(r);n("wSMz");function m(e,t){return E(e)||i(e,t)||o(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,m=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(u){m=!0,a=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(m)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),u=m(r,2),o=u[0],d=u[1],i=Object(l["useState"])(!1),E=m(i,2),s=E[0],p=E[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},oWvR:function(e,t,n){"use strict";n.r(t);var l=n("g9GX"),a=n.n(l),r=n("eLlY"),c=n("FDkQ"),m=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"progress-\u8fdb\u5ea6\u6761"},a.a.createElement(r["AnchorLink"],{to:"#progress-\u8fdb\u5ea6\u6761","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Progress \u8fdb\u5ea6\u6761"),a.a.createElement("p",null,"\u7528\u4e8e\u5c55\u793a\u64cd\u4f5c\u8fdb\u5ea6\uff0c\u544a\u77e5\u7528\u6237\u5f53\u524d\u72b6\u6001\u548c\u9884\u671f\u3002"),a.a.createElement("style",{lang:"scss",dangerouslySetInnerHTML:{__html:"\n$namespace: el;\n.example-showcase .demo-progress {\n  .#{$namespace}-progress--line {\n    margin-bottom: 15px;\n    width: 350px;\n  }\n\n  .#{$namespace}-progress--circle {\n    margin-right: 15px;\n  }\n\n  .percentage-value {\n    display: block;\n    margin-top: 10px;\n    font-size: 28px;\n  }\n\n  .percentage-label {\n    display: block;\n    margin-top: 10px;\n    font-size: 12px;\n  }\n}\n"}}),a.a.createElement("h2",{id:"\u76f4\u7ebf\u8fdb\u5ea6\u6761"},a.a.createElement(r["AnchorLink"],{to:"#\u76f4\u7ebf\u8fdb\u5ea6\u6761","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u76f4\u7ebf\u8fdb\u5ea6\u6761"),a.a.createElement("p",null,":::demo Progress \u7ec4\u4ef6\u8bbe\u7f6e ",a.a.createElement("code",null,"percentage"),"\u5c5e\u6027\u5373\u53ef\uff0c\u8868\u793a\u8fdb\u5ea6\u6761\u5bf9\u5e94\u7684\u767e\u5206\u6bd4 \u8be5\u5c5e\u6027",a.a.createElement("strong",null,"\u5fc5\u586b"),"\uff0c\u5e76\u4e14\u5fc5\u987b\u5728 ",a.a.createElement("code",null,"0-100"),"\u8303\u56f4\u5185\u3002 You can custom text format by setting ",a.a.createElement("code",null,"format"),"."),a.a.createElement("p",null,"progress/linear-progress-bar"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u8fdb\u5ea6\u6761\u5185\u663e\u793a\u767e\u5206\u6bd4\u6807\u8bc6"},a.a.createElement(r["AnchorLink"],{to:"#\u8fdb\u5ea6\u6761\u5185\u663e\u793a\u767e\u5206\u6bd4\u6807\u8bc6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u8fdb\u5ea6\u6761\u5185\u663e\u793a\u767e\u5206\u6bd4\u6807\u8bc6"),a.a.createElement("p",null,"\u767e\u5206\u6bd4\u4e0d\u5360\u7528\u989d\u5916\u63a7\u4ef6\uff0c\u9002\u7528\u4e8e\u6587\u4ef6\u4e0a\u4f20\u7b49\u573a\u666f\u3002"),a.a.createElement("p",null,":::demo Progress \u7ec4\u4ef6\u53ef\u901a\u8fc7 ",a.a.createElement("code",null,"stroke-width")," \u5c5e\u6027\u66f4\u6539\u8fdb\u5ea6\u6761\u7684\u9ad8\u5ea6\uff0c\u5e76\u53ef\u901a\u8fc7 ",a.a.createElement("code",null,"text-inside")," \u5c5e\u6027\u6765\u6539\u53d8\u8fdb\u5ea6\u6761\u5185\u90e8\u7684\u6587\u5b57\u3002"),a.a.createElement("p",null,"progress/internal-percentage"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u8fdb\u5ea6\u6761\u7684\u989c\u8272"},a.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u8fdb\u5ea6\u6761\u7684\u989c\u8272","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u8fdb\u5ea6\u6761\u7684\u989c\u8272"),a.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"color")," \u5c5e\u6027\u6765\u8bbe\u7f6e\u8fdb\u5ea6\u6761\u7684\u989c\u8272\u3002 \u8be5\u5c5e\u6027\u53ef\u4ee5\u63a5\u53d7\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff0c\u51fd\u6570\u548c\u6570\u7ec4\u3002"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"progress/custom-color"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u73af\u5f62\u8fdb\u5ea6\u6761"},a.a.createElement(r["AnchorLink"],{to:"#\u73af\u5f62\u8fdb\u5ea6\u6761","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u73af\u5f62\u8fdb\u5ea6\u6761"),a.a.createElement("p",null,":::demo Progress \u7ec4\u4ef6\u53ef\u901a\u8fc7 ",a.a.createElement("code",null,"type")," \u5c5e\u6027\u6765\u6307\u5b9a\u4f7f\u7528\u73af\u5f62\u8fdb\u5ea6\u6761\uff0c\u5728\u73af\u5f62\u8fdb\u5ea6\u6761\u4e2d\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"width")," \u5c5e\u6027\u6765\u8bbe\u7f6e\u5176\u5927\u5c0f\u3002"),a.a.createElement("p",null,"progress/circular-progress-bar"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u4eea\u8868\u76d8\u5f62\u8fdb\u5ea6\u6761"},a.a.createElement(r["AnchorLink"],{to:"#\u4eea\u8868\u76d8\u5f62\u8fdb\u5ea6\u6761","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4eea\u8868\u76d8\u5f62\u8fdb\u5ea6\u6761"),a.a.createElement("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u6307\u5b9a ",a.a.createElement("code",null,"type")," \u5c5e\u6027\u5230 ",a.a.createElement("code",null,"dashboard")," \u4f7f\u7528\u63a7\u5236\u9762\u677f\u8fdb\u5ea6\u680f\u3002"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"progress/linear-progress-bar"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u5185\u5bb9"},a.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u5185\u5bb9"),a.a.createElement("p",null,":::demo \u901a\u8fc7\u9ed8\u8ba4\u63d2\u69fd\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002"),a.a.createElement("p",null,"progress/customized-content"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u52a8\u753b\u8fdb\u5ea6\u6761"},a.a.createElement(r["AnchorLink"],{to:"#\u52a8\u753b\u8fdb\u5ea6\u6761","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u753b\u8fdb\u5ea6\u6761"),a.a.createElement("p",null,":::demo \u4f7f\u7528 ",a.a.createElement("code",null,"intermediate")," \u5c5e\u6027\u6765\u8bbe\u7f6e\u4e0d\u786e\u5b9a\u7684\u8fdb\u5ea6\uff0c ",a.a.createElement("code",null,"duration")," \u6765\u63a7\u5236\u52a8\u753b\u6301\u7eed\u65f6\u95f4\u3002"),a.a.createElement("p",null,"progress/indeterminate-progress"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"percentage"),a.a.createElement("td",null,"\u767e\u5206\u6bd4\uff0c",a.a.createElement("strong",null,"\u5fc5\u586b")),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"0-100"),a.a.createElement("td",null,"0")),a.a.createElement("tr",null,a.a.createElement("td",null,"type"),a.a.createElement("td",null,"\u8fdb\u5ea6\u6761\u7c7b\u578b"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"line/circle/dashboard"),a.a.createElement("td",null,"line")),a.a.createElement("tr",null,a.a.createElement("td",null,"stroke-width"),a.a.createElement("td",null,"\u8fdb\u5ea6\u6761\u7684\u5bbd\u5ea6"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"6")),a.a.createElement("tr",null,a.a.createElement("td",null,"text-inside"),a.a.createElement("td",null,"\u8fdb\u5ea6\u6761\u663e\u793a\u6587\u5b57\u5185\u7f6e\u5728\u8fdb\u5ea6\u6761\u5185\uff08\u4ec5 ",a.a.createElement("code",null,"type")," \u4e3a 'line' \u65f6\u53ef\u7528\uff09"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"status"),a.a.createElement("td",null,"\u8fdb\u5ea6\u6761\u5f53\u524d\u72b6\u6001"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"success/exception/warning"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"indeterminate"),a.a.createElement("td",null,"\u662f\u5426\u4e3a\u52a8\u753b\u8fdb\u5ea6\u6761"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"duration"),a.a.createElement("td",null,"\u63a7\u5236\u52a8\u753b\u8fdb\u5ea6\u6761\u901f\u5ea6"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"-"),a.a.createElement("td",null,"3")),a.a.createElement("tr",null,a.a.createElement("td",null,"color"),a.a.createElement("td",null,"\u8fdb\u5ea6\u6761\u80cc\u666f\u8272 \u8fdb\u5ea6\u6761\u80cc\u666f\u8272 \uff08\u4f1a\u8986\u76d6 ",a.a.createElement("code",null,"status")," \u72b6\u6001\u989c\u8272\uff09"),a.a.createElement("td",null,"string/function/array"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"''")),a.a.createElement("tr",null,a.a.createElement("td",null,"width"),a.a.createElement("td",null,"\u73af\u5f62\u8fdb\u5ea6\u6761\u753b\u5e03\u5bbd\u5ea6\uff08\u53ea\u5728 type \u4e3a circle \u6216 dashboard \u65f6\u53ef\u7528\uff09"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"126")),a.a.createElement("tr",null,a.a.createElement("td",null,"show-text"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u8fdb\u5ea6\u6761\u6587\u5b57\u5185\u5bb9"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"stroke-linecap"),a.a.createElement("td",null,"circle/dashboard \u7c7b\u578b\u8def\u5f84\u4e24\u7aef\u7684\u5f62\u72b6"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"butt/round/square"),a.a.createElement("td",null,"round")),a.a.createElement("tr",null,a.a.createElement("td",null,"format"),a.a.createElement("td",null,"\u6307\u5b9a\u8fdb\u5ea6\u6761\u6587\u5b57\u5185\u5bb9"),a.a.createElement("td",null,"function(percentage)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")))),a.a.createElement("h2",{id:"\u63d2\u69fd"},a.a.createElement(r["AnchorLink"],{to:"#\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u63d2\u69fd"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u540d\u79f0"),a.a.createElement("th",null,"\u8bf4\u660e"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"default"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5185\u5bb9\uff0c\u53c2\u6570\u4e3a ","{"," percentage ","}"))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:n})}},wSMz:function(e,t,n){}}]);