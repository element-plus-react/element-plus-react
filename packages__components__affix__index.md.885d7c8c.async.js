(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},WpQk:function(e,t,a){},"dMo/":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("hKI/"),c=a.n(r);a("WpQk");function m(e,t){return E(e)||d(e,t)||o(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,m=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){m=!0,l=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(m)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=m(r,2),o=i[0],u=i[1],d=Object(n["useState"])(!1),E=m(d,2),s=E[0],f=E[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":o||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,t)))};t["a"]=s},jCYJ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("Zxc8"),m=a("dMo/"),i=l.a.memo((e=>{var t=e.demos,a=t["affix-basic"].component,n=t["affix-target"].component,i=t["affix-fixed"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"affix-\u56fa\u9489"},l.a.createElement(r["AnchorLink"],{to:"#affix-\u56fa\u9489","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Affix \u56fa\u9489"),l.a.createElement("p",null,"\u5c06\u9875\u9762\u5143\u7d20\u56fa\u5b9a\u5728\u7279\u5b9a\u53ef\u89c6\u533a\u57df\u3002"),l.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),l.a.createElement("p",null,"\u56fa\u9489\u9ed8\u8ba4\u56fa\u5b9a\u5728\u9875\u9762\u9876\u90e8\u3002")),l.a.createElement(c["default"],t["affix-basic"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u4e3a-affix-\u7ec4\u4ef6\u6307\u5b9a\u5bb9\u5668"},l.a.createElement(r["AnchorLink"],{to:"#\u4e3a-affix-\u7ec4\u4ef6\u6307\u5b9a\u5bb9\u5668","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e3a Affix \u7ec4\u4ef6\u6307\u5b9a\u5bb9\u5668"),l.a.createElement("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",l.a.createElement("code",null,"target")," \u5c5e\u6027\uff0c\u8ba9\u56fa\u9489\u59cb\u7ec8\u4fdd\u6301\u5728\u5bb9\u5668\u5185\uff0c \u8d85\u8fc7\u8303\u56f4\u5219\u9690\u85cf\u3002")),l.a.createElement(c["default"],t["affix-target"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u56fa\u5b9a-affix-\u7ec4\u4ef6\u7684\u4f4d\u7f6e"},l.a.createElement(r["AnchorLink"],{to:"#\u56fa\u5b9a-affix-\u7ec4\u4ef6\u7684\u4f4d\u7f6e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u56fa\u5b9a Affix \u7ec4\u4ef6\u7684\u4f4d\u7f6e"),l.a.createElement("p",null,"Affix \u7ec4\u4ef6\u63d0\u4f9b 2 \u4e2a\u56fa\u5b9a\u7684\u4f4d\u7f6e\u53c2\u6570 ",l.a.createElement("code",null,"top")," \u548c ",l.a.createElement("code",null,"bottom"),"\u3002")),l.a.createElement(c["default"],t["affix-fixed"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u53ef\u9009\u503c"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"offset"),l.a.createElement("td",null,"\u504f\u79fb\u8ddd\u79bb"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("td",null,"position"),l.a.createElement("td",null,"\u56fa\u9489\u4f4d\u7f6e"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"top / bottom"),l.a.createElement("td",null,"top")),l.a.createElement("tr",null,l.a.createElement("td",null,"target"),l.a.createElement("td",null,"\u6307\u5b9a\u5bb9\u5668\uff08CSS \u9009\u62e9\u5668\uff09"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,"\u2014")),l.a.createElement("tr",null,l.a.createElement("td",null,"z-index"),l.a.createElement("td",null,"\u56fa\u9489\u5c42\u7ea7"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,"100")))),l.a.createElement("h2",{id:"\u4e8b\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u56de\u8c03\u53c2\u6570"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"change"),l.a.createElement("td",null,"\u56fa\u9489\u72b6\u6001\u6539\u53d8\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),l.a.createElement("td",null,"(value: boolean)")),l.a.createElement("tr",null,l.a.createElement("td",null,"scroll"),l.a.createElement("td",null,"\u6eda\u52a8\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),l.a.createElement("td",null,"scroll top \u548c fixed \u72b6\u6001")))),l.a.createElement("h2",{id:"\u65b9\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u65b9\u6cd5\u540d"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u56de\u8c03\u53c2\u6570"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"update"),l.a.createElement("td",null,"\u624b\u52a8\u66f4\u65b0\u56fa\u9489\u72b6\u6001"),l.a.createElement("td",null,"\u2014")))),l.a.createElement("h2",{id:"\u63d2\u69fd"},l.a.createElement(r["AnchorLink"],{to:"#\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u63d2\u69fd"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u63d2\u69fd\u540d"),l.a.createElement("th",null,"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u5185\u5bb9")))),l.a.createElement("style",{lang:"scss",dangerouslySetInnerHTML:{__html:"\n.example-showcase {\n  .affix-container {\n    text-align: center;\n    height: 400px;\n    border-radius: 4px;\n    background: var(--el-color-primary-light-9);\n  }\n}\n"}}))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}}}]);