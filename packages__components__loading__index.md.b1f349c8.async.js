(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{WpQk:function(e,t,n){},"dMo/":function(e,t,n){"use strict";var l=n("q1tI"),a=n.n(l),r=n("hKI/"),c=n.n(r);n("WpQk");function o(e,t){return E(e)||i(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(d){o=!0,a=d}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),d=o(r,2),m=d[0],u=d[1],i=Object(l["useState"])(!1),E=o(i,2),s=E[0],g=E[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){u(e.scrollLeft>0),g(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":m||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},m2yl:function(e,t,n){"use strict";n.r(t);var l=n("q1tI"),a=n.n(l),r=n("dEAq"),c=n("H1Ra"),o=n("dMo/"),d=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"loading-\u52a0\u8f7d"},a.a.createElement(r["AnchorLink"],{to:"#loading-\u52a0\u8f7d","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Loading \u52a0\u8f7d"),a.a.createElement("p",null,"\u52a0\u8f7d\u6570\u636e\u65f6\u663e\u793a\u52a8\u6548\u3002"),a.a.createElement("h2",{id:"\u533a\u57df\u52a0\u8f7d"},a.a.createElement(r["AnchorLink"],{to:"#\u533a\u57df\u52a0\u8f7d","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u533a\u57df\u52a0\u8f7d"),a.a.createElement("p",null,"\u5728\u9700\u8981\u7684\u65f6\u5019\u5c55\u793a\u52a0\u8f7d\u52a8\u753b\uff0c\u9632\u6b62\u9875\u9762\u5931\u53bb\u54cd\u5e94\u63d0\u9ad8\u7528\u6237\u4f53\u9a8c\uff08\u4f8b\u5982\u8868\u683c\uff09\u3002"),a.a.createElement("p",null,":::demo Element Plus \u63d0\u4f9b\u4e86\u4e24\u79cd\u8c03\u7528 Loading \u7684\u65b9\u6cd5\uff1a\u6307\u4ee4\u548c\u670d\u52a1\u3002 \u5bf9\u4e8e\u81ea\u5b9a\u4e49\u6307\u4ee4 ",a.a.createElement("code",null,"v-loading"),"\uff0c\u53ea\u9700\u8981\u7ed1\u5b9a ",a.a.createElement("code",null,"boolean")," \u503c\u5373\u53ef\u3002 \u9ed8\u8ba4\u72b6\u51b5\u4e0b\uff0cLoading \u906e\u7f69\u4f1a\u63d2\u5165\u5230\u7ed1\u5b9a\u5143\u7d20\u7684\u5b50\u8282\u70b9\u3002 \u901a\u8fc7\u6dfb\u52a0 ",a.a.createElement("code",null,"body")," \u4fee\u9970\u7b26\uff0c\u53ef\u4ee5\u4f7f\u906e\u7f69\u63d2\u5165\u81f3 Dom \u4e2d\u7684 body \u4e0a\u3002"),a.a.createElement("p",null,"loading/basic"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u4e2d\u7ec4\u4ef6\u5185\u5bb9"},a.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u52a0\u8f7d\u4e2d\u7ec4\u4ef6\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u4e2d\u7ec4\u4ef6\u5185\u5bb9"),a.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u52a0\u8f7d\u4e2d\u7ec4\u4ef6\u7684\u6587\u5b57\uff0c\u56fe\u6807\uff0c\u4ee5\u53ca\u80cc\u666f\u989c\u8272\u3002"),a.a.createElement("p",null,":::demo \u5728\u7ed1\u5b9a\u4e86",a.a.createElement("code",null,"v-loading"),"\u6307\u4ee4\u7684\u5143\u7d20\u4e0a\u6dfb\u52a0",a.a.createElement("code",null,"element-loading-text"),"\u5c5e\u6027\uff0c\u5176\u503c\u4f1a\u88ab\u6e32\u67d3\u4e3a\u52a0\u8f7d\u6587\u6848\uff0c\u5e76\u663e\u793a\u5728\u52a0\u8f7d\u56fe\u6807\u7684\u4e0b\u65b9\u3002 \u7c7b\u4f3c\u5730\uff0c",a.a.createElement("code",null,"element-loading-spinner"),"\u3001",a.a.createElement("code",null,"element-loading-background")," \u548c ",a.a.createElement("code",null,"element-loading-svg")," \u5c5e\u6027\u5206\u522b\u7528\u6765\u8bbe\u5b9a svg \u56fe\u6807\u3001\u80cc\u666f\u8272\u503c\u3001\u52a0\u8f7d\u56fe\u6807\u3002"),a.a.createElement("p",null,"loading/customization"),a.a.createElement("p",null,":::"),a.a.createElement("p",null,":::warning"),a.a.createElement("p",null,"\u867d\u7136 ",a.a.createElement("code",null,"element-loading-spinner / element-loading-svg")," \u5c5e\u6027\u652f\u6301\u4f20\u5165\u7684 HTML \u7247\u6bb5\uff0c\u4f46\u662f\u52a8\u6001\u5728\u7f51\u7ad9\u4e0a\u6e32\u67d3\u4efb\u610f\u7684 HTML \u662f\u975e\u5e38\u5371\u9669\u7684\uff0c\u56e0\u4e3a\u5f88\u5bb9\u6613\u5bfc\u81f4 ",a.a.createElement(r["Link"],{to:"https://en.wikipedia.org/wiki/Cross-site_scripting"},"XSS \u653b\u51fb"),"\u3002 \u8bf7\u786e\u4fdd ",a.a.createElement("code",null,"element-loading-spinner / element-loading-svg"),"\u7684\u5185\u5bb9\u662f\u53ef\u4fe1\u7684\uff0c ",a.a.createElement("strong",null,"\u4e0d\u8981"),"\u5c06\u7528\u6237\u63d0\u4ea4\u7684\u5185\u5bb9\u8d4b\u503c\u7ed9 ",a.a.createElement("code",null,"element-loading-spinner / element-loading-svg")," \u5c5e\u6027\u3002"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u8ba9\u52a0\u8f7d\u7ec4\u4ef6\u94fa\u6ee1\u6574\u4e2a\u5c4f\u5e55"},a.a.createElement(r["AnchorLink"],{to:"#\u8ba9\u52a0\u8f7d\u7ec4\u4ef6\u94fa\u6ee1\u6574\u4e2a\u5c4f\u5e55","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u8ba9\u52a0\u8f7d\u7ec4\u4ef6\u94fa\u6ee1\u6574\u4e2a\u5c4f\u5e55"),a.a.createElement("p",null,"\u52a0\u8f7d\u6570\u636e\u65f6\u663e\u793a\u5168\u5c4f\u52a8\u753b\u3002"),a.a.createElement("p",null,":::demo \u5f53\u4f7f\u7528\u6307\u4ee4\u65b9\u5f0f\u65f6\uff0c\u5168\u5c4f\u906e\u7f69\u9700\u8981\u6dfb\u52a0",a.a.createElement("code",null,"fullscreen"),"\u4fee\u9970\u7b26\uff08\u906e\u7f69\u4f1a\u63d2\u5165\u81f3 body \u4e0a\uff09 \u6b64\u65f6\u82e5\u9700\u8981\u9501\u5b9a\u5c4f\u5e55\u7684\u6eda\u52a8\uff0c\u53ef\u4ee5\u4f7f\u7528",a.a.createElement("code",null,"lock"),"\u4fee\u9970\u7b26\uff1b \u5f53\u4f7f\u7528\u670d\u52a1\u65b9\u5f0f\u65f6\uff0c\u906e\u7f69\u9ed8\u8ba4\u5373\u4e3a\u5168\u5c4f\uff0c\u65e0\u9700\u989d\u5916\u8bbe\u7f6e\u3002"),a.a.createElement("p",null,"loading/fullscreen"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u4ee5\u670d\u52a1\u7684\u65b9\u5f0f\u6765\u8c03\u7528"},a.a.createElement(r["AnchorLink"],{to:"#\u4ee5\u670d\u52a1\u7684\u65b9\u5f0f\u6765\u8c03\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ee5\u670d\u52a1\u7684\u65b9\u5f0f\u6765\u8c03\u7528"),a.a.createElement("p",null,"Loading \u8fd8\u53ef\u4ee5\u4ee5\u670d\u52a1\u7684\u65b9\u5f0f\u8c03\u7528\u3002 \u4f60\u53ef\u4ee5\u50cf\u8fd9\u6837\u5f15\u5165 Loading \u670d\u52a1\uff1a"),a.a.createElement(c["a"],{code:"import { ElLoading } from 'element-plus'",lang:"ts"}),a.a.createElement("p",null,"\u5728\u4f60\u9700\u8981\u7684\u65f6\u5019\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u8c03\u7528\uff1a"),a.a.createElement(c["a"],{code:"ElLoading.service(options)",lang:"ts"}),a.a.createElement("p",null,"\u5176\u4e2d",a.a.createElement("code",null,"options"),"\u53c2\u6570\u4e3a Loading \u7684\u914d\u7f6e\u9879\uff0c\u5177\u4f53\u89c1\u4e0b\u8868\u3002 ",a.a.createElement("code",null,"LoadingService")," \u4f1a\u8fd4\u56de\u4e00\u4e2a Loading \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7\u8c03\u7528\u8be5\u5b9e\u4f8b\u7684 ",a.a.createElement("code",null,"close")," \u65b9\u6cd5\u6765\u5173\u95ed\u5b83\uff1a"),a.a.createElement(c["a"],{code:"const loadingInstance = ElLoading.service(options)\nnextTick(() => {\n  // Loading should be closed asynchronously\n  loadingInstance.close()\n})",lang:"ts"}),a.a.createElement("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4ee5\u670d\u52a1\u7684\u65b9\u5f0f\u8c03\u7528\u7684\u5168\u5c4f Loading \u662f\u5355\u4f8b\u7684\u3002 \u82e5\u5728\u524d\u4e00\u4e2a\u5168\u5c4f Loading \u5173\u95ed\u524d\u518d\u6b21\u8c03\u7528\u5168\u5c4f Loading\uff0c\u5e76\u4e0d\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Loading \u5b9e\u4f8b\uff0c\u800c\u662f\u8fd4\u56de\u73b0\u6709\u5168\u5c4f Loading \u7684\u5b9e\u4f8b\uff1a"),a.a.createElement(c["a"],{code:"const loadingInstance1 = ElLoading.service({ fullscreen: true })\nconst loadingInstance2 = ElLoading.service({ fullscreen: true })\nconsole.log(loadingInstance1 === loadingInstance2) // true",lang:"ts"}),a.a.createElement("p",null,"\u6b64\u65f6\u8c03\u7528\u5b83\u4eec\u4e2d\u4efb\u610f\u4e00\u4e2a\u7684 ",a.a.createElement("code",null,"close")," \u65b9\u6cd5\u90fd\u80fd\u5173\u95ed\u8fd9\u4e2a\u5168\u5c4f Loading\u3002"),a.a.createElement("p",null,"\u5982\u679c\u5b8c\u6574\u5f15\u5165\u4e86 Element Plus\uff0c\u90a3\u4e48 ",a.a.createElement("code",null,"app.config.globalProperties")," \u4e0a\u4f1a\u6709\u4e00\u4e2a\u5168\u5c40\u65b9\u6cd5",a.a.createElement("code",null,"$loading"),"\uff0c \u5b83\u7684\u8c03\u7528\u65b9\u5f0f\u4e3a\uff1a",a.a.createElement("code",null,"this.$loading(options)"),"\uff0c\u540c\u6837\u4f1a\u8fd4\u56de\u4e00\u4e2a Loading \u5b9e\u4f8b\u3002"),a.a.createElement("h2",{id:"\u914d\u7f6e\u9879"},a.a.createElement(r["AnchorLink"],{to:"#\u914d\u7f6e\u9879","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u914d\u7f6e\u9879"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"target"),a.a.createElement("td",null,"Loading \u9700\u8981\u8986\u76d6\u7684 DOM \u8282\u70b9\u3002 \u53ef\u4f20\u5165\u4e00\u4e2a DOM \u5bf9\u8c61\u6216\u5b57\u7b26\u4e32\uff1b \u82e5\u4f20\u5165\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u5c06\u5176\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165 ",a.a.createElement("code",null,"document.querySelector"),"\u4ee5\u83b7\u53d6\u5230\u5bf9\u5e94 DOM \u8282\u70b9"),a.a.createElement("td",null,"object/string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"document.body")),a.a.createElement("tr",null,a.a.createElement("td",null,"body"),a.a.createElement("td",null,"\u540c ",a.a.createElement("code",null,"v-loading")," \u6307\u4ee4\u4e2d\u7684 ",a.a.createElement("code",null,"body")," \u4fee\u9970\u7b26"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"fullscreen"),a.a.createElement("td",null,"\u540c ",a.a.createElement("code",null,"v-loading")," \u6307\u4ee4\u4e2d\u7684 ",a.a.createElement("code",null,"fullscreen")," \u4fee\u9970\u7b26"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"lock"),a.a.createElement("td",null,"\u540c ",a.a.createElement("code",null,"v-loading")," \u6307\u4ee4\u4e2d\u7684 ",a.a.createElement("code",null,"lock")," \u4fee\u9970\u7b26"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"text"),a.a.createElement("td",null,"\u663e\u793a\u5728\u52a0\u8f7d\u56fe\u6807\u4e0b\u65b9\u7684\u52a0\u8f7d\u6587\u6848"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"spinner"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u56fe\u6807\u7c7b\u540d"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"background"),a.a.createElement("td",null,"\u906e\u7f69\u80cc\u666f\u8272"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"custom-class"),a.a.createElement("td",null,"Loading \u7684\u81ea\u5b9a\u4e49\u7c7b\u540d"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")))),a.a.createElement("h2",{id:"\u6307\u4ee4"},a.a.createElement(r["AnchorLink"],{to:"#\u6307\u4ee4","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6307\u4ee4"),a.a.createElement(o["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u540d\u79f0"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"v-loading"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u52a8\u753b"),a.a.createElement("td",null,"boolean")),a.a.createElement("tr",null,a.a.createElement("td",null,"element-loading-text"),a.a.createElement("td",null,"\u663e\u793a\u5728\u52a0\u8f7d\u56fe\u6807\u4e0b\u65b9\u7684\u52a0\u8f7d\u6587\u6848"),a.a.createElement("td",null,"string")),a.a.createElement("tr",null,a.a.createElement("td",null,"element-loading-spinner"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u56fe\u6807"),a.a.createElement("td",null,"string")),a.a.createElement("tr",null,a.a.createElement("td",null,"element-loading-svg"),a.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u56fe\u6807 (\u4e0e element-loading-spinner \u76f8\u540c)"),a.a.createElement("td",null,"string")),a.a.createElement("tr",null,a.a.createElement("td",null,"element-loading-background"),a.a.createElement("td",null,"\u80cc\u666f\u906e\u7f69\u7684\u989c\u8272"),a.a.createElement("td",null,"string"))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(d,{demos:n})}}}]);