(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},W8W4:function(e,t,n){},bTEd:function(e,t,n){"use strict";var a=n("g9GX"),l=n.n(a),r=n("L+to"),c=n.n(r);n("W8W4");function o(e,t){return E(e)||d(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){o=!0,l=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=o(r,2),m=u[0],i=u[1],d=Object(a["useState"])(!1),E=o(d,2),s=E[0],h=E[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,t)))};t["a"]=s},qsxN:function(e,t,n){"use strict";n.r(t);var a=n("g9GX"),l=n.n(a),r=n("GAPn"),c=n("XK3S"),o=n("bTEd"),u=l.a.memo((e=>{var t=e.demos,n=t["page-header-basic"].component,a=t["page-header-custom-icon"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"page-header-\u9875\u5934"},l.a.createElement(r["AnchorLink"],{to:"#page-header-\u9875\u5934","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Page Header \u9875\u5934"),l.a.createElement("p",null,"\u5982\u679c\u9875\u9762\u7684\u8def\u5f84\u6bd4\u8f83\u7b80\u5355\uff0c\u63a8\u8350\u4f7f\u7528\u9875\u5934\u7ec4\u4ef6\u800c\u975e\u9762\u5305\u5c51\u7ec4\u4ef6\u3002"),l.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["page-header-basic"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u56fe\u6807"},l.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u56fe\u6807","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u56fe\u6807")),l.a.createElement(c["default"],t["page-header-custom-icon"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u5c5e\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u53ef\u9009\u503c"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,"\u56fe\u6807\u7ec4\u4ef6"),l.a.createElement("td",null,"string / Component"),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,"Back")),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"\u6807\u9898"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,"Back")),l.a.createElement("tr",null,l.a.createElement("td",null,"content"),l.a.createElement("td",null,"\u5185\u5bb9"),l.a.createElement("td",null,"string"),l.a.createElement("td",null,"\u2014"),l.a.createElement("td",null,"\u2014")))),l.a.createElement("h2",{id:"\u4e8b\u4ef6"},l.a.createElement(r["AnchorLink"],{to:"#\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u53c2\u6570"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"back"),l.a.createElement("td",null,"\u70b9\u51fb\u5de6\u4fa7\u533a\u57df\u89e6\u53d1"),l.a.createElement("td",null,"\u2014")))),l.a.createElement("h2",{id:"\u63d2\u69fd"},l.a.createElement(r["AnchorLink"],{to:"#\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u63d2\u69fd"),l.a.createElement(o["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u540d\u79f0"),l.a.createElement("th",null,"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u56fe\u6807")),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"\u6807\u9898\u5185\u5bb9")),l.a.createElement("tr",null,l.a.createElement("td",null,"content"),l.a.createElement("td",null,"\u5185\u5bb9")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:n})}}}]);