(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{WiTd:function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),r=l("dEAq"),c=l("dMo/"),o=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"popover-\u6c14\u6ce1\u5361\u7247"},a.a.createElement(r["AnchorLink"],{to:"#popover-\u6c14\u6ce1\u5361\u7247","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Popover \u6c14\u6ce1\u5361\u7247"),a.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),a.a.createElement("p",null,"Similar to Tooltip, Popover is also built with ",a.a.createElement("code",null,"ElPopper"),". \u56e0\u6b64\u5bf9\u4e8e\u91cd\u590d\u5c5e\u6027\uff0c\u8bf7\u53c2\u8003 Tooltip \u7684\u6587\u6863\uff0c\u5728\u6b64\u6587\u6863\u4e2d\u4e0d\u505a\u8be6\u5c3d\u89e3\u91ca\u3002"),a.a.createElement("p",null,":::demo The ",a.a.createElement("code",null,"trigger")," attribute is used to define how popover is triggered: ",a.a.createElement("code",null,"hover"),", ",a.a.createElement("code",null,"click"),", ",a.a.createElement("code",null,"focus")," or ",a.a.createElement("code",null,"manual"),"."),a.a.createElement("p",null,"popover/basic-usage"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"virtual-triggering"},a.a.createElement(r["AnchorLink"],{to:"#virtual-triggering","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Virtual triggering"),a.a.createElement("p",null,"Like Tooltip, Popover can be triggered by virtual elements, if your use case includes separate the trigging element and the content element, you should definitely use the mechanism, normally we use ",a.a.createElement("code",null,"#reference")," to place our triggering element, with ",a.a.createElement("code",null,"triggering-element")," API you can set your triggering element anywhere you like, but notice that the triggering element should be an element that accepts ",a.a.createElement("code",null,"mouse")," and ",a.a.createElement("code",null,"keyboard")," event."),a.a.createElement("p",null,":::warning"),a.a.createElement("p",null,a.a.createElement("code",null,"v-popover")," is about to be deprecated, please use ",a.a.createElement("code",null,"virtual-ref")," as alternative."),a.a.createElement("p",null,":::"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"popover/virtual-triggering"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"rich-content"},a.a.createElement(r["AnchorLink"],{to:"#rich-content","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Rich content"),a.a.createElement("p",null,"Other components/elements can be nested in popover. Following is an example of nested table."),a.a.createElement("p",null,":::demo replace the ",a.a.createElement("code",null,"content")," attribute with a default ",a.a.createElement("code",null,"slot"),"."),a.a.createElement("p",null,"popover/nested-information"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"nested-operation"},a.a.createElement(r["AnchorLink"],{to:"#nested-operation","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Nested operation"),a.a.createElement("p",null,"Of course, you can nest other operations. It's more light-weight than using a dialog."),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"popover/nested-operation"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"directive"},a.a.createElement(r["AnchorLink"],{to:"#directive","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Directive"),a.a.createElement("p",null,"You can still using popover in directive way but this is ",a.a.createElement("strong",null,"not recommended")," anymore since this makes your application complicated, you may refer to the virtual triggering for more information."),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"popover/directive-usage"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"attributes"},a.a.createElement(r["AnchorLink"],{to:"#attributes","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Attributes"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"trigger"),a.a.createElement("td",null,"\u89e6\u53d1\u65b9\u5f0f"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"click/focus/hover/manual"),a.a.createElement("td",null,"click")),a.a.createElement("tr",null,a.a.createElement("td",null,"title"),a.a.createElement("td",null,"\u6807\u9898"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"content"),a.a.createElement("td",null,"\u663e\u793a\u7684\u5185\u5bb9\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"slot")," \u4f20\u5165 DOM"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"width"),a.a.createElement("td",null,"\u5bbd\u5ea6"),a.a.createElement("td",null,"string / number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u6700\u5c0f\u5bbd\u5ea6 150px")),a.a.createElement("tr",null,a.a.createElement("td",null,"placement"),a.a.createElement("td",null,"\u51fa\u73b0\u4f4d\u7f6e"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end"),a.a.createElement("td",null,"bottom")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"Popover \u662f\u5426\u53ef\u7528"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"visible / v-model:visible"),a.a.createElement("td",null,"Popover \u662f\u5426\u663e\u793a"),a.a.createElement("td",null,"Boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"offset"),a.a.createElement("td",null,"\u51fa\u73b0\u4f4d\u7f6e\u7684\u504f\u79fb\u91cf"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"0")),a.a.createElement("tr",null,a.a.createElement("td",null,"transition"),a.a.createElement("td",null,"\u5b9a\u4e49\u6e10\u53d8\u52a8\u753b"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"el-fade-in-linear")),a.a.createElement("tr",null,a.a.createElement("td",null,"show-arrow"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a Tooltip \u7bad\u5934\uff0c For more info, please refer to ",a.a.createElement(r["Link"],{to:"https://github.com/element-plus/element-plus/tree/dev/packages/components/popper"},"ElPopper")),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"popper-options"),a.a.createElement("td",null,a.a.createElement(r["Link"],{to:"https://popper.js.org/docs/v2/"},"popper.js")," \u7684\u53c2\u6570"),a.a.createElement("td",null,"object"),a.a.createElement("td",null,"\u8bf7\u53c2\u8003 ",a.a.createElement(r["Link"],{to:"https://popper.js.org/docs/v2/"},"popper.js")),a.a.createElement("td",null,a.a.createElement("code",null,"{"," boundariesElement: 'body', gpuAcceleration: false ","}"))),a.a.createElement("tr",null,a.a.createElement("td",null,"popper-class"),a.a.createElement("td",null,"\u4e3a popper \u6dfb\u52a0\u7c7b\u540d"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"show-after"),a.a.createElement("td",null,"\u5ef6\u8fdf\u51fa\u73b0\uff0c\u5355\u4f4d\u6beb\u79d2"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"0")),a.a.createElement("tr",null,a.a.createElement("td",null,"hide-after"),a.a.createElement("td",null,"\u5ef6\u8fdf\u5173\u95ed\uff0c\u5355\u4f4d\u6beb\u79d2"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"200")),a.a.createElement("tr",null,a.a.createElement("td",null,"auto-close"),a.a.createElement("td",null,"Tooltip \u51fa\u73b0\u540e\u81ea\u52a8\u9690\u85cf\u5ef6\u65f6\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u4e3a 0 \u5219\u4e0d\u4f1a\u81ea\u52a8\u9690\u85cf"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"0")),a.a.createElement("tr",null,a.a.createElement("td",null,"tabindex"),a.a.createElement("td",null,"Popover \u7ec4\u4ef6\u7684 ",a.a.createElement(r["Link"],{to:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"},"tabindex")),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")))),a.a.createElement("h2",{id:"slots"},a.a.createElement(r["AnchorLink"],{to:"#slots","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Slots"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u63d2\u69fd\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"Popover \u5185\u5d4c HTML \u6587\u672c")),a.a.createElement("tr",null,a.a.createElement("td",null,"reference"),a.a.createElement("td",null,"\u89e6\u53d1 Popover \u663e\u793a\u7684 HTML \u5143\u7d20")))),a.a.createElement("h2",{id:"events"},a.a.createElement(r["AnchorLink"],{to:"#events","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Events"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u56de\u8c03\u53c2\u6570"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"show"),a.a.createElement("td",null,"\u663e\u793a\u65f6\u89e6\u53d1"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"after-enter"),a.a.createElement("td",null,"\u663e\u793a\u52a8\u753b\u64ad\u653e\u5b8c\u6bd5\u540e\u89e6\u53d1"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"hide"),a.a.createElement("td",null,"\u9690\u85cf\u65f6\u89e6\u53d1"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"after-leave"),a.a.createElement("td",null,"\u9690\u85cf\u52a8\u753b\u64ad\u653e\u5b8c\u6bd5\u540e\u89e6\u53d1"),a.a.createElement("td",null,"\u2014"))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(o,{demos:l})}},WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("WpQk");function o(e,t){return E(e)||d(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function d(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,o=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(u){o=!0,a=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(o)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),u=o(r,2),m=u[0],i=u[1],d=Object(n["useState"])(!1),E=o(d,2),s=E[0],p=E[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){i(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s}}]);