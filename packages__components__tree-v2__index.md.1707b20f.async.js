(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[99],{WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),r=l("hKI/"),c=l.n(r);l("WpQk");function d(e,t){return i(e)||o(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return E(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function o(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,r=[],c=!0,d=!1;try{for(l=l.call(e);!(c=(a=l.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){d=!0,n=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(d)throw n}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=d(r,2),m=u[0],E=u[1],o=Object(a["useState"])(!1),i=d(o,2),s=i[0],h=i[1];return Object(a["useEffect"])((function(){var e=l.current,t=c()((function(){E(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},vgWw:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("dEAq"),c=l("dMo/"),d=n.a.memo((e=>{e.demos;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:""},n.a.createElement(r["AnchorLink"],{to:"#","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement(ElBadge,{value:"beta"},"Tree V2 \u865a\u62df\u5316\u6811\u5f62\u63a7\u4ef6")),n.a.createElement("p",null,"\u4e0d\u8bba\u4f60\u7684\u6570\u636e\u91cf\u591a\u5927\uff0c\u865a\u62df\u6811\u90fd\u80fd\u6beb\u65e0\u538b\u529b\u5730\u5904\u7406\u3002"),n.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},n.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),n.a.createElement("p",null,"\u57fa\u7840\u7684\u6811\u5f62\u7ed3\u6784\u5c55\u793a"),n.a.createElement("p",null,":::demo"),n.a.createElement("p",null,"tree-v2/basic"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u53ef\u9009\u62e9\u7684\u865a\u62df\u6811"},n.a.createElement(r["AnchorLink"],{to:"#\u53ef\u9009\u62e9\u7684\u865a\u62df\u6811","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u53ef\u9009\u62e9\u7684\u865a\u62df\u6811"),n.a.createElement("p",null,"\u9002\u7528\u4e8e\u9700\u8981\u9009\u62e9\u5c42\u7ea7\u65f6\u4f7f\u7528\u3002"),n.a.createElement("p",null,":::demo"),n.a.createElement("p",null,"tree-v2/selectable"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u7981\u7528\u590d\u9009\u6846"},n.a.createElement(r["AnchorLink"],{to:"#\u7981\u7528\u590d\u9009\u6846","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u7981\u7528\u590d\u9009\u6846"),n.a.createElement("p",null,"\u8282\u70b9\u7684\u590d\u9009\u6846\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u7981\u7528\u3002"),n.a.createElement("p",null,":::demo \u5728\u793a\u4f8b\u4e2d\uff0c\u5c5e\u6027\u5728 defaultProps \u4e2d\u58f0\u660e\u4e86 ",n.a.createElement("code",null,"disabled"),"\uff0c\u4e00\u4e9b\u8282\u70b9\u88ab\u8bbe\u7f6e\u4e3a ",n.a.createElement("code",null,"disable\uff1atrue"),"\u3002 \u76f8\u5e94\u7684\u590d\u9009\u6846\u5df2\u7981\u7528\uff0c\u4e0d\u80fd\u70b9\u51fb\u3002"),n.a.createElement("p",null,"tree-v2/disabled"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u9ed8\u8ba4\u6269\u5c55\u548c\u9ed8\u8ba4\u68c0\u67e5"},n.a.createElement(r["AnchorLink"],{to:"#\u9ed8\u8ba4\u6269\u5c55\u548c\u9ed8\u8ba4\u68c0\u67e5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u9ed8\u8ba4\u6269\u5c55\u548c\u9ed8\u8ba4\u68c0\u67e5"),n.a.createElement("p",null,"\u6811\u8282\u70b9\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u9636\u6bb5\u88ab\u8bbe\u7f6e\u4e3a\u5c55\u5f00\u6216\u9009\u4e2d\u3002"),n.a.createElement("p",null,":::demo \u5206\u522b\u901a\u8fc7 ",n.a.createElement("code",null,"default-expanded-keys")," \u548c ",n.a.createElement("code",null,"default-checked-keys")," \u8bbe\u7f6e\u9ed8\u8ba4\u5c55\u5f00\u548c\u9ed8\u8ba4\u9009\u4e2d\u7684\u8282\u70b9\u3002"),n.a.createElement("p",null,"tree-v2/default-state"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u8282\u70b9\u5185\u5bb9"},n.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u8282\u70b9\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u8282\u70b9\u5185\u5bb9"),n.a.createElement("p",null,"\u8282\u70b9\u7684\u5185\u5bb9\u652f\u6301\u81ea\u5b9a\u4e49\uff0c\u53ef\u4ee5\u5728\u8282\u70b9\u533a\u6dfb\u52a0\u6309\u94ae\u6216\u56fe\u6807\u7b49\u5185\u5bb9"),n.a.createElement("p",null,":::demo"),n.a.createElement("p",null,"tree-v2/custom-node"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u8282\u70b9\u8fc7\u6ee4"},n.a.createElement(r["AnchorLink"],{to:"#\u8282\u70b9\u8fc7\u6ee4","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8282\u70b9\u8fc7\u6ee4"),n.a.createElement("p",null,"\u6811\u8282\u70b9\u53ef\u4ee5\u8fc7\u6ee4"),n.a.createElement("p",null,":::demo \u5728\u9700\u8981\u5bf9\u8282\u70b9\u8fdb\u884c\u8fc7\u6ee4\u65f6\uff0c\u8c03\u7528 Tree \u5b9e\u4f8b\u7684 ",n.a.createElement("code",null,"filter")," \u65b9\u6cd5\uff0c \u53c2\u6570\u4e3a\u5173\u952e\u5b57\u3002 \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6b64\u65f6\u9700\u8981\u8bbe\u7f6e ",n.a.createElement("code",null,"filter-method"),"\uff0c\u503c\u4e3a\u8fc7\u6ee4\u51fd\u6570\u3002"),n.a.createElement("p",null,"tree-v2/filter"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"data"),n.a.createElement("td",null,"\u5c55\u793a\u6570\u636e"),n.a.createElement("td",null,"array"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"empty-text"),n.a.createElement("td",null,"\u5185\u5bb9\u4e3a\u7a7a\u7684\u65f6\u5019\u5c55\u793a\u7684\u6587\u672c"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"props"),n.a.createElement("td",null,"\u914d\u7f6e\u9009\u9879\uff0c\u5177\u4f53\u770b\u4e0b\u8868"),n.a.createElement("td",null,"object"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"highlight-current"),n.a.createElement("td",null,"\u662f\u5426\u9ad8\u4eae\u5f53\u524d\u9009\u4e2d\u8282\u70b9"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"expand-on-click-node"),n.a.createElement("td",null,"\u662f\u5426\u5728\u70b9\u51fb\u8282\u70b9\u7684\u65f6\u5019\u5c55\u5f00\u6216\u8005\u6536\u7f29\u8282\u70b9\uff0c \u9ed8\u8ba4\u503c\u4e3a true\uff0c\u5982\u679c\u4e3a false\uff0c\u5219\u53ea\u6709\u70b9\u7bad\u5934\u56fe\u6807\u7684\u65f6\u5019\u624d\u4f1a\u5c55\u5f00\u6216\u8005\u6536\u7f29\u8282\u70b9"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"true")),n.a.createElement("tr",null,n.a.createElement("td",null,"check-on-click-node"),n.a.createElement("td",null,"\u662f\u5426\u5728\u70b9\u51fb\u8282\u70b9\u7684\u65f6\u5019\u9009\u4e2d\u8282\u70b9\uff0c\u9ed8\u8ba4\u503c\u4e3a false\uff0c\u5373\u53ea\u6709\u5728\u70b9\u51fb\u590d\u9009\u6846\u65f6\u624d\u4f1a\u9009\u4e2d\u8282\u70b9"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"default-expanded-keys"),n.a.createElement("td",null,"\u9ed8\u8ba4\u5c55\u5f00\u7684\u8282\u70b9\u7684 key \u7684\u6570\u7ec4"),n.a.createElement("td",null,"array"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"show-checkbox"),n.a.createElement("td",null,"\u8282\u70b9\u662f\u5426\u53ef\u88ab\u9009\u62e9"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"check-strictly"),n.a.createElement("td",null,"\u5728\u663e\u793a\u590d\u9009\u6846\u7684\u60c5\u51b5\u4e0b\uff0c\u662f\u5426\u4e25\u683c\u7684\u9075\u5faa\u7236\u5b50\u4e0d\u4e92\u76f8\u5173\u8054\u7684\u505a\u6cd5\uff0c\u9ed8\u8ba4\u4e3a false"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"default-checked-keys"),n.a.createElement("td",null,"\u9ed8\u8ba4\u52fe\u9009\u7684\u8282\u70b9\u7684 key \u7684\u6570\u7ec4"),n.a.createElement("td",null,"array"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"current-node-key"),n.a.createElement("td",null,"\u5f53\u524d\u9009\u4e2d\u7684\u8282\u70b9"),n.a.createElement("td",null,"string, number"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"filter-method"),n.a.createElement("td",null,"\u5bf9\u6811\u8282\u70b9\u8fdb\u884c\u7b5b\u9009\u65f6\u6267\u884c\u7684\u65b9\u6cd5\uff0c\u8fd4\u56de true \u8868\u793a\u8fd9\u4e2a\u8282\u70b9\u53ef\u4ee5\u663e\u793a\uff0c \u8fd4\u56de ",n.a.createElement("code",null,"false")," \u5219\u8868\u793a\u8fd9\u4e2a\u8282\u70b9\u4f1a\u88ab\u9690\u85cf"),n.a.createElement("td",null,"Function(value, data)"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"indent"),n.a.createElement("td",null,"\u76f8\u90bb\u7ea7\u8282\u70b9\u95f4\u7684\u6c34\u5e73\u7f29\u8fdb\uff0c\u5355\u4f4d\u4e3a\u50cf\u7d20"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"16")),n.a.createElement("tr",null,n.a.createElement("td",null,"icon"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6811\u8282\u70b9\u7684\u56fe\u6807"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"-")))),n.a.createElement("h2",{id:"props"},n.a.createElement(r["AnchorLink"],{to:"#props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"props"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,"\u6bcf\u4e2a\u6811\u8282\u70b9\u7528\u6765\u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\u7684\u5c5e\u6027\uff0c\u5728\u6574\u68f5\u6811\u4e2d\u5e94\u8be5\u662f\u552f\u4e00\u7684"),n.a.createElement("td",null,"string, number"),n.a.createElement("td",null,"id")),n.a.createElement("tr",null,n.a.createElement("td",null,"label"),n.a.createElement("td",null,"\u6307\u5b9a\u8282\u70b9\u6807\u7b7e\u4e3a\u8282\u70b9\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u503c"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"label")),n.a.createElement("tr",null,n.a.createElement("td",null,"children"),n.a.createElement("td",null,"\u6307\u5b9a\u5b50\u6811\u4e3a\u8282\u70b9\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u503c"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"children")),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"\u6307\u5b9a\u8282\u70b9\u9009\u62e9\u6846\u662f\u5426\u7981\u7528\u4e3a\u8282\u70b9\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u503c"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"disabled")))),n.a.createElement("h2",{id:"\u65b9\u6cd5"},n.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),n.a.createElement("p",null,"Tree\u5185\u90e8\u4f7f\u7528TreeNode\u7c7b\u578b\u7684\u5bf9\u8c61\u6765\u5305\u88c5\u7528\u6237\u4f20\u5165\u7684\u6570\u636e\uff0c\u7528\u6765\u6784\u9020\u6811\u8282\u70b9\u4e4b\u95f4\u7684\u5173\u7cfb\u3002 ",n.a.createElement("code",null,"Tree")," \u66b4\u9732\u4e86\u4ee5\u4e0b\u65b9\u6cd5\uff1a"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u65b9\u6cd5"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u53c2\u6570"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"filter"),n.a.createElement("td",null,"\u5bf9\u6811\u8282\u70b9\u8fdb\u884c\u7b5b\u9009\u64cd\u4f5c"),n.a.createElement("td",null,n.a.createElement("code",null,"(query: string)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getCheckedNodes"),n.a.createElement("td",null,"\u82e5\u8282\u70b9\u53ef\u88ab\u9009\u62e9\uff08\u5373",n.a.createElement("code",null,"show-checkbox"),"\u4e3a ",n.a.createElement("code",null,"true"),"\uff09\uff0c\u5219\u8fd4\u56de\u76ee\u524d\u88ab\u9009\u4e2d\u7684\u8282\u70b9\u6240\u7ec4\u6210\u7684\u6570\u7ec4"),n.a.createElement("td",null,n.a.createElement("code",null,"(leafOnly: boolean)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getCheckedKeys"),n.a.createElement("td",null,"\u82e5\u8282\u70b9\u53ef\u88ab\u9009\u62e9\uff08\u5373 ",n.a.createElement("code",null,"show-checkbox")," \u4e3a ",n.a.createElement("code",null,"true"),"\uff09\uff0c\u5219\u8fd4\u56de\u76ee\u524d\u88ab\u9009\u4e2d\u7684\u8282\u70b9\u7684 key \u6240\u7ec4\u6210\u7684\u6570\u7ec4"),n.a.createElement("td",null,n.a.createElement("code",null,"(leafOnly: boolean)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setCheckedKeys"),n.a.createElement("td",null,"\u901a\u8fc7 keys \u8bbe\u7f6e\u76ee\u524d\u52fe\u9009\u7684\u8282\u70b9"),n.a.createElement("td",null,n.a.createElement("code",null,"(keys: TreeKey[])"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setChecked"),n.a.createElement("td",null,"\u901a\u8fc7 key \u8bbe\u7f6e\u67d0\u4e2a\u8282\u70b9\u7684\u52fe\u9009\u72b6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"(key: TreeKey, checked: boolean)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getHalfCheckedNodes"),n.a.createElement("td",null,"\u82e5\u8282\u70b9\u53ef\u88ab\u9009\u62e9\uff08\u5373 ",n.a.createElement("code",null,"show-checkbox")," \u4e3a ",n.a.createElement("code",null,"true"),"\uff09\uff0c\u5219\u8fd4\u56de\u76ee\u524d\u534a\u9009\u4e2d\u7684\u8282\u70b9\u6240\u7ec4\u6210\u7684\u6570\u7ec4"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"getHalfCheckedKeys"),n.a.createElement("td",null,"\u82e5\u8282\u70b9\u53ef\u88ab\u9009\u62e9\uff08\u5373 ",n.a.createElement("code",null,"show-checkbox")," \u4e3a ",n.a.createElement("code",null,"true"),"\uff09\uff0c\u5219\u8fd4\u56de\u76ee\u524d\u534a\u9009\u4e2d\u7684\u8282\u70b9\u7684 key \u6240\u7ec4\u6210\u7684\u6570\u7ec4"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"getCurrentKey"),n.a.createElement("td",null,"\u83b7\u53d6\u5f53\u524d\u88ab\u9009\u4e2d\u8282\u70b9\u7684 key\uff0c\u82e5\u6ca1\u6709\u8282\u70b9\u88ab\u9009\u4e2d\u5219\u8fd4\u56de ",n.a.createElement("code",null,"undefined")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"getCurrentNode"),n.a.createElement("td",null,"\u83b7\u53d6\u5f53\u524d\u88ab\u9009\u4e2d\u8282\u70b9\u7684 data\uff0c\u82e5\u6ca1\u6709\u8282\u70b9\u88ab\u9009\u4e2d\u5219\u8fd4\u56de ",n.a.createElement("code",null,"undefined")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"setCurrentKey"),n.a.createElement("td",null,"\u901a\u8fc7 key \u8bbe\u7f6e\u67d0\u4e2a\u8282\u70b9\u7684\u5f53\u524d\u9009\u4e2d\u72b6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"(key: TreeKey)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setData"),n.a.createElement("td",null,"\u5f53\u6570\u636e\u91cf\u975e\u5e38\u5e9e\u5927\u7684\u65f6\u5019\uff0c\u4f7f\u7528 reactive \u6570\u636e\u5c06\u5bfc\u81f4\u6027\u80fd\u975e\u5e38\u4f4e\u4e0b\uff0c\u6240\u4ee5\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u80fd\u591f\u89c4\u907f\u8fd9\u79cd\u60c5\u51b5\u7684\u65b9\u6cd5"),n.a.createElement("td",null,n.a.createElement("code",null,"(data: TreeData)"))))),n.a.createElement("h2",{id:"\u4e8b\u4ef6"},n.a.createElement(r["AnchorLink"],{to:"#\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u53c2\u6570"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"node-click"),n.a.createElement("td",null,"\u5f53\u8282\u70b9\u88ab\u70b9\u51fb\u7684\u65f6\u5019\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(data: TreeNodeData, node: TreeNode)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"node-contextmenu"),n.a.createElement("td",null,"\u5f53\u8282\u70b9\u88ab\u9f20\u6807\u53f3\u952e\u70b9\u51fb\u65f6\u4f1a\u89e6\u53d1\u8be5\u4e8b\u4ef6"),n.a.createElement("td",null,n.a.createElement("code",null,"(e: Event, data: TreeNodeData, node: TreeNode)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"check-change"),n.a.createElement("td",null,"\u8282\u70b9\u9009\u4e2d\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u7684\u56de\u8c03"),n.a.createElement("td",null,n.a.createElement("code",null,"(data: TreeNodeData, checked: boolean)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"check"),n.a.createElement("td",null,"\u5f53\u590d\u9009\u6846\u88ab\u70b9\u51fb\u7684\u65f6\u5019\u89e6\u53d1"),n.a.createElement("td",null,n.a.createElement("code",null,"(data: TreeNodeData, info: ","{"," checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,","}",")"))),n.a.createElement("tr",null,n.a.createElement("td",null,"current-change"),n.a.createElement("td",null,"\u5f53\u524d\u9009\u4e2d\u8282\u70b9\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),n.a.createElement("td",null,n.a.createElement("code",null,"(data: TreeNodeData, node: TreeNode)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"node-expand"),n.a.createElement("td",null,"\u8282\u70b9\u88ab\u5c55\u5f00\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),n.a.createElement("td",null,n.a.createElement("code",null,"(data: TreeNodeData, node: TreeNode)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"node-collapse"),n.a.createElement("td",null,"\u8282\u70b9\u88ab\u6536\u8d77\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"),n.a.createElement("td",null,n.a.createElement("code",null,"(data: TreeNodeData, node: TreeNode)"))))),n.a.createElement("h2",{id:"\u63d2\u69fd"},n.a.createElement(r["AnchorLink"],{to:"#\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u63d2\u69fd"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u540d\u79f0"),n.a.createElement("th",null,"\u8bf4\u660e"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u6811\u8282\u70b9\u7684\u5185\u5bb9\u3002 The scope parameter is ",n.a.createElement("code",null,"{"," node: TreeNode, data: TreeNodeData ","}")))))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),l=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(d,{demos:l})}}}]);