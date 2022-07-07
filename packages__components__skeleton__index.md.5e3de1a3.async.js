(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[86],{FDkQ:function(e,t,n){"use strict";var l=n("g9GX"),a=n.n(l),r=n("L+to"),c=n.n(r);n("wSMz");function m(e,t){return E(e)||d(e,t)||o(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,m=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(u){m=!0,a=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(m)throw a}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(l["useRef"])(),r=Object(l["useState"])(!1),u=m(r,2),o=u[0],i=u[1],d=Object(l["useState"])(!1),E=m(d,2),s=E[0],h=E[1];return Object(l["useEffect"])((function(){var e=n.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},Jenp:function(e,t,n){"use strict";n.r(t);var l=n("g9GX"),a=n.n(l),r=n("eLlY"),c=n("FDkQ"),m=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"skeleton-\u9aa8\u67b6\u5c4f"},a.a.createElement(r["AnchorLink"],{to:"#skeleton-\u9aa8\u67b6\u5c4f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Skeleton \u9aa8\u67b6\u5c4f"),a.a.createElement("p",null,"\u5728\u9700\u8981\u7b49\u5f85\u52a0\u8f7d\u5185\u5bb9\u7684\u4f4d\u7f6e\u8bbe\u7f6e\u4e00\u4e2a\u9aa8\u67b6\u5c4f\uff0c\u67d0\u4e9b\u573a\u666f\u4e0b\u6bd4 Loading \u7684\u89c6\u89c9\u6548\u679c\u66f4\u597d\u3002"),a.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),a.a.createElement("p",null,"\u57fa\u7840\u7684\u9aa8\u67b6\u6548\u679c\u3002"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"skeleton/basic-usage"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u66f4\u591a\u53c2\u6570"},a.a.createElement(r["AnchorLink"],{to:"#\u66f4\u591a\u53c2\u6570","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u66f4\u591a\u53c2\u6570"),a.a.createElement("p",null,"\u53ef\u4ee5\u914d\u7f6e\u9aa8\u67b6\u5c4f\u6bb5\u843d\u6570\u91cf\uff0c\u4ee5\u4fbf\u66f4\u63a5\u8fd1\u771f\u5b9e\u6e32\u67d3\u6548\u679c\u3002\u663e\u793a\u7684\u6570\u91cf\u4f1a\u6bd4\u4f20\u5165\u7684\u6570\u91cf\u591a 1\uff0c\u9996\u884c\u4f1a\u88ab\u6e32\u67d3\u4e00\u4e2a\u957f\u5ea6 33% \u7684\u6bb5\u9996\u3002"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"skeleton/configurable-rows"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u52a8\u753b\u6548\u679c"},a.a.createElement(r["AnchorLink"],{to:"#\u52a8\u753b\u6548\u679c","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u52a8\u753b\u6548\u679c"),a.a.createElement("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f00\u5173\u6807\u5fd7\uff0c\u8868\u660e\u662f\u5426\u663e\u793a\u52a0\u8f7d\u52a8\u753b\uff0c \u8c03\u7528 ",a.a.createElement("code",null,"animated")," \u5982\u679c\u771f\u771f\u662f\u8fd9\u6837\uff0c\u6240\u6709\u7684 ",a.a.createElement("code",null,"el-skeleton")," \u7684\u5b50\u8282\u70b9\u5c06\u663e\u793a\u52a8\u753b\u3002"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"skeleton/animation"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u6837\u5f0f"},a.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u6837\u5f0f","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u6837\u5f0f"),a.a.createElement("p",null,"Element Plus \u63d0\u4f9b\u7684\u6392\u7248\u6a21\u5f0f\u6709\u65f6\u5019\u5e76\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u5f53\u60a8\u60f3\u8981\u7528\u81ea\u5df1\u5b9a\u4e49\u7684\u6a21\u677f\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u5177\u540d Slot ",a.a.createElement("code",null,"template")," \u6765\u81ea\u5df1\u8bbe\u5b9a\u6a21\u677f\u3002"),a.a.createElement("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u6a21\u677f\u5355\u5143\u53ef\u4f9b\u4f7f\u7528\uff0c\u5177\u4f53\u53ef\u9009\u503c\u8bf7\u770b API \u8be6\u7ec6\u63cf\u8ff0\u3002 \u53e6\u5916\uff0c\u5728\u6784\u5efa\u60a8\u81ea\u5df1\u81ea\u5b9a\u4e49\u7684\u9aa8\u67b6\u65f6\uff0c\u60a8\u5e94\u8be5\u5c3d\u53ef\u80fd\u66f4\u63a5\u8fd1\u4e8e\u771f\u6b63\u7684DOM\u3002 \u907f\u514dDOM\u56e0\u9ad8\u5ea6\u5dee\u800c\u53d1\u751f\u6296\u52a8\u3002"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"skeleton/customized-template"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u52a0\u8f7d\u72b6\u6001"},a.a.createElement(r["AnchorLink"],{to:"#\u52a0\u8f7d\u72b6\u6001","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u52a0\u8f7d\u72b6\u6001"),a.a.createElement("p",null,"\u5f53 ",a.a.createElement("code",null,"Loading")," \u7ed3\u675f\u4e4b\u540e\uff0c\u6211\u4eec\u5f80\u5f80\u9700\u8981\u663e\u793a\u771f\u5b9e\u7684 UI\uff0c \u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"loading")," \u7684\u503c\u6765\u63a7\u5236\u662f\u5426\u663e\u793a\u52a0\u8f7d\u540e\u7684 DOM\u3002 \u7136\u540e\u901a\u8fc7 \u5177\u540d Slot ",a.a.createElement("code",null,"default")," \u6765\u8bbe\u7f6e\u5f53 loading \u7ed3\u675f\u4e4b\u540e\u9700\u8981\u5c55\u793a\u7684 UI\u3002"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"skeleton/loading-state"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u6e32\u67d3\u591a\u6761\u6570\u636e"},a.a.createElement(r["AnchorLink"],{to:"#\u6e32\u67d3\u591a\u6761\u6570\u636e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6e32\u67d3\u591a\u6761\u6570\u636e"),a.a.createElement("p",null,"\u5927\u591a\u65f6\u5019, \u9aa8\u67b6\u5c4f\u90fd\u88ab\u7528\u6765\u6e32\u67d3\u5217\u8868, \u5f53\u6211\u4eec\u9700\u8981\u5728\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u6570\u636e\u7684\u65f6\u5019\u6765\u6e32\u67d3\u4e00\u4e2a\u5047\u7684 UI\u3002 \u5229\u7528 ",a.a.createElement("code",null,"count")," \u8fd9\u4e2a\u5c5e\u6027\u5c31\u80fd\u63a7\u5236\u6e32\u67d3\u591a\u5c11\u6761\u5047\u7684\u6570\u636e\u5728\u9875\u9762\u4e0a"),a.a.createElement("p",null,":::tip"),a.a.createElement("p",null,"\u8bf7\u6ce8\u610f, \u8bf7\u5c3d\u53ef\u80fd\u7684\u5c06 count \u7684\u5927\u5c0f\u4fdd\u6301\u5728\u6700\u5c0f\u72b6\u6001, \u5373\u4f7f\u662f\u5047\u7684 UI, DOM \u5143\u7d20\u591a\u4e86\u4e4b\u540e, \u7167\u6837\u4f1a\u5f15\u8d77\u6027\u80fd\u95ee\u9898, \u5e76\u4e14\u5728\u9aa8\u67b6\u5c4f\u9500\u6bc1\u65f6\u6240\u6d88\u8017\u7684\u65f6\u95f4\u4e5f\u4f1a\u66f4\u957f\uff08\u76f8\u5bf9\u6765\u8bf4\uff09\u3002"),a.a.createElement("p",null,":::"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"skeleton/rendering-with-data"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u9632\u6b62\u6e32\u67d3\u6296\u52a8"},a.a.createElement(r["AnchorLink"],{to:"#\u9632\u6b62\u6e32\u67d3\u6296\u52a8","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u9632\u6b62\u6e32\u67d3\u6296\u52a8"),a.a.createElement("p",null,"\u6709\u7684\u65f6\u5019\uff0cAPI \u7684\u8bf7\u6c42\u56de\u6765\u7684\u7279\u522b\u5feb\uff0c\u5f80\u5f80\u9aa8\u67b6\u5360\u4f4d\u521a\u521a\u88ab\u6e32\u67d3\uff0c\u771f\u5b9e\u7684\u6570\u636e\u5c31\u5df2\u7ecf\u56de\u6765\u4e86\uff0c\u7528\u6237\u7684\u754c\u9762\u4f1a\u7a81\u7136\u4e00\u95ea\uff0c \u6b64\u65f6\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u5c31\u9700\u8981\u901a\u8fc7 ",a.a.createElement("code",null,"throttle")," \u5c5e\u6027\u6765\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002"),a.a.createElement("p",null,":::demo"),a.a.createElement("p",null,"skeleton/avoiding-rendering-bouncing"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"skeleton-\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#skeleton-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Skeleton \u5c5e\u6027"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"animated"),a.a.createElement("td",null,"\u662f\u5426\u4f7f\u7528\u52a8\u753b"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"true / false"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"count"),a.a.createElement("td",null,"\u6e32\u67d3\u591a\u5c11\u4e2a template, \u5efa\u8bae\u4f7f\u7528\u5c3d\u53ef\u80fd\u5c0f\u7684\u6570\u5b57"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"integer"),a.a.createElement("td",null,"1")),a.a.createElement("tr",null,a.a.createElement("td",null,"loading"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u52a0\u8f7d\u7ed3\u675f\u540e\u7684 DOM \u7ed3\u6784"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"true / false"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"rows"),a.a.createElement("td",null,"\u9aa8\u67b6\u5c4f\u6bb5\u843d\u6570\u91cf"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"integer"),a.a.createElement("td",null,"3")),a.a.createElement("tr",null,a.a.createElement("td",null,"throttle"),a.a.createElement("td",null,"\u5ef6\u8fdf\u5360\u4f4d DOM \u6e32\u67d3\u7684\u65f6\u95f4, \u5355\u4f4d\u662f\u6beb\u79d2"),a.a.createElement("td",null,"number"),a.a.createElement("td",null,"integer"),a.a.createElement("td",null,"0")))),a.a.createElement("h2",{id:"skeleton-item-\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#skeleton-item-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Skeleton Item \u5c5e\u6027"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"variant"),a.a.createElement("td",null,"\u5f53\u524d\u663e\u793a\u7684\u5360\u4f4d\u5143\u7d20\u7684\u6837\u5f0f"),a.a.createElement("td",null,"Enum(string)"),a.a.createElement("td",null,"p / text / h1 / h3 / text / caption / button / image / circle / rect"),a.a.createElement("td",null,"text")))),a.a.createElement("h2",{id:"skeleton-\u63d2\u69fd"},a.a.createElement(r["AnchorLink"],{to:"#skeleton-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Skeleton \u63d2\u69fd"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u63d2\u69fd\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"default"),a.a.createElement("td",null,"\u7528\u6765\u5c55\u793a\u52a0\u8f7d\u72b6\u6001\u7ed3\u675f\u540e\u7684 UI")),a.a.createElement("tr",null,a.a.createElement("td",null,"template"),a.a.createElement("td",null,"\u7528\u6765\u5c55\u793a\u81ea\u5b9a\u4e49\u5360\u4f4d\u7b26"))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),n=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:n})}},wSMz:function(e,t,n){}}]);