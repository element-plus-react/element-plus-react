(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},W8W4:function(e,t,n){},bTEd:function(e,t,n){"use strict";var a=n("g9GX"),l=n.n(a),r=n("L+to"),c=n.n(r);n("W8W4");function u(e,t){return s(e)||d(e,t)||i(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(o){u=!0,l=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(u)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),o=u(r,2),i=o[0],m=o[1],d=Object(a["useState"])(!1),s=u(d,2),E=s[0],f=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},lZcs:function(e,t,n){"use strict";n.r(t);var a=n("g9GX"),l=n.n(a),r=n("GAPn"),c=n("XK3S"),u=n("bTEd"),o=l.a.memo((e=>{var t=e.demos,n=t["result-basic-usage"].component,a=t["result-customized-content"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"result-\u7ed3\u679c"},l.a.createElement(r["AnchorLink"],{to:"#result-\u7ed3\u679c","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result \u7ed3\u679c"),l.a.createElement("p",null,"\u7528\u4e8e\u5bf9\u7528\u6237\u7684\u64cd\u4f5c\u7ed3\u679c\u6216\u8005\u5f02\u5e38\u72b6\u6001\u505a\u53cd\u9988\u3002"),l.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["result-basic-usage"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u5185\u5bb9"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u5185\u5bb9")),l.a.createElement(c["default"],t["result-customized-content"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"result-\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#result-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result \u5c5e\u6027"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u53ef\u9009\u503c"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"\u6807\u9898"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,"\u2014")),l.a.createElement("tr",null,l.a.createElement("td",null,"sub-title"),l.a.createElement("td",null,"\u4e8c\u7ea7\u6807\u9898"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,"\u2014")),l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,"\u56fe\u6807\u7c7b\u578b"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"success / warning / info / error"),l.a.createElement("td",null,"info")))),l.a.createElement("h2",{id:"result-\u63d2\u69fd"},l.a.createElement(r["AnchorLink"],{to:"#result-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result \u63d2\u69fd"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u540d\u79f0"),l.a.createElement("th",null,"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u56fe\u6807")),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6807\u9898")),l.a.createElement("tr",null,l.a.createElement("td",null,"subTitle"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u4e8c\u7ea7\u6807\u9898")),l.a.createElement("tr",null,l.a.createElement("td",null,"extra"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u5e95\u90e8\u989d\u5916\u533a\u57df")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:n})}}}]);