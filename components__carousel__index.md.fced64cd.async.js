(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),r=l("hKI/"),c=l.n(r);l("WpQk");function u(e,t){return i(e)||d(e,t)||o(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return E(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function d(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,r=[],c=!0,u=!1;try{for(l=l.call(e);!(c=(a=l.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(m){u=!0,n=m}finally{try{c||null==l["return"]||l["return"]()}finally{if(u)throw n}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(a["useRef"])(),r=Object(a["useState"])(!1),m=u(r,2),o=m[0],E=m[1],d=Object(a["useState"])(!1),i=u(d,2),s=i[0],h=i[1];return Object(a["useEffect"])((function(){var e=l.current,t=c()((function(){E(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":o||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},ipM3:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("dEAq"),c=l("dMo/"),u=n.a.memo((e=>{e.demos;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"carousel-\u8d70\u9a6c\u706f"},n.a.createElement(r["AnchorLink"],{to:"#carousel-\u8d70\u9a6c\u706f","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Carousel \u8d70\u9a6c\u706f"),n.a.createElement("p",null,"\u5728\u6709\u9650\u7a7a\u95f4\u5185\uff0c\u5faa\u73af\u64ad\u653e\u540c\u4e00\u7c7b\u578b\u7684\u56fe\u7247\u3001\u6587\u5b57\u7b49\u5185\u5bb9"),n.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},n.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),n.a.createElement("p",null,":::demo \u7ed3\u5408\u4f7f\u7528 ",n.a.createElement("code",null,"el-carousel")," \u548c ",n.a.createElement("code",null,"el-carousel-item")," \u6807\u7b7e\u5c31\u5f97\u5230\u4e86\u4e00\u4e2a\u8d70\u9a6c\u706f\u3002 \u6bcf\u4e00\u4e2a\u9875\u9762\u7684\u5185\u5bb9\u662f\u5b8c\u5168\u53ef\u5b9a\u5236\u7684\uff0c\u628a\u4f60\u60f3\u8981\u5c55\u793a\u7684\u5185\u5bb9\u653e\u5728 ",n.a.createElement("code",null,"el-carousel-item")," \u6807\u7b7e\u5185\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u9f20\u6807 hover \u5e95\u90e8\u7684\u6307\u793a\u5668\u65f6\u5c31\u4f1a\u89e6\u53d1\u5207\u6362\u3002 \u901a\u8fc7\u8bbe\u7f6e ",n.a.createElement("code",null,"trigger")," \u5c5e\u6027\u4e3a ",n.a.createElement("code",null,"click"),"\uff0c\u53ef\u4ee5\u8fbe\u5230\u70b9\u51fb\u89e6\u53d1\u7684\u6548\u679c\u3002"),n.a.createElement("p",null,"carousel/basic"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u6307\u793a\u5668"},n.a.createElement(r["AnchorLink"],{to:"#\u6307\u793a\u5668","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6307\u793a\u5668"),n.a.createElement("p",null,"\u53ef\u4ee5\u5c06\u6307\u793a\u5668\u7684\u663e\u793a\u4f4d\u7f6e\u8bbe\u7f6e\u5728\u5bb9\u5668\u5916\u90e8"),n.a.createElement("p",null,":::demo ",n.a.createElement("code",null,"indicator-position")," \u5c5e\u6027\u5b9a\u4e49\u4e86\u6307\u793a\u5668\u7684\u4f4d\u7f6e\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u4f1a\u663e\u793a\u5728\u8d70\u9a6c\u706f\u5185\u90e8\uff0c\u8bbe\u7f6e\u4e3a ",n.a.createElement("code",null,"outside")," \u5219\u4f1a\u663e\u793a\u5728\u5916\u90e8\uff1b\u8bbe\u7f6e\u4e3a ",n.a.createElement("code",null,"none")," \u5219\u4e0d\u4f1a\u663e\u793a\u6307\u793a\u5668\u3002"),n.a.createElement("p",null,"carousel/indicator"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5207\u6362\u7bad\u5934"},n.a.createElement(r["AnchorLink"],{to:"#\u5207\u6362\u7bad\u5934","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5207\u6362\u7bad\u5934"),n.a.createElement("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u5207\u6362\u7bad\u5934\u7684\u663e\u793a\u65f6\u673a"),n.a.createElement("p",null,":::demo ",n.a.createElement("code",null,"arrow")," \u5c5e\u6027\u5b9a\u4e49\u4e86\u5207\u6362\u7bad\u5934\u7684\u663e\u793a\u65f6\u673a\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5207\u6362\u7bad\u5934\u53ea\u6709\u5728\u9f20\u6807 hover \u5230\u8d70\u9a6c\u706f\u4e0a\u65f6\u624d\u4f1a\u663e\u793a\u3002 \u82e5\u5c06 ",n.a.createElement("code",null,"arrow")," \u8bbe\u7f6e\u4e3a ",n.a.createElement("code",null,"always"),"\uff0c\u5219\u4f1a\u4e00\u76f4\u663e\u793a\uff1b\u8bbe\u7f6e\u4e3a ",n.a.createElement("code",null,"never"),"\uff0c\u5219\u4f1a\u4e00\u76f4\u9690\u85cf\u3002"),n.a.createElement("p",null,"carousel/arrows"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5361\u7247\u5316"},n.a.createElement(r["AnchorLink"],{to:"#\u5361\u7247\u5316","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5361\u7247\u5316"),n.a.createElement("p",null,"\u5f53\u9875\u9762\u5bbd\u5ea6\u65b9\u5411\u7a7a\u95f4\u7a7a\u4f59\uff0c\u4f46\u9ad8\u5ea6\u65b9\u5411\u7a7a\u95f4\u532e\u4e4f\u65f6\uff0c\u53ef\u4f7f\u7528\u5361\u7247\u98ce\u683c"),n.a.createElement("p",null,":::demo \u5c06 ",n.a.createElement("code",null,"type")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",n.a.createElement("code",null,"card")," \u5373\u53ef\u542f\u7528\u5361\u7247\u6a21\u5f0f\u3002 \u4ece\u4ea4\u4e92\u4e0a\u6765\u8bf4\uff0c\u5361\u7247\u6a21\u5f0f\u548c\u4e00\u822c\u6a21\u5f0f\u7684\u6700\u5927\u533a\u522b\u5728\u4e8e\uff0c\u5361\u7247\u6a21\u5f0f\u53ef\u4ee5\u901a\u8fc7\u76f4\u63a5\u70b9\u51fb\u4e24\u4fa7\u7684\u5e7b\u706f\u7247\u8fdb\u884c\u5207\u6362\u3002"),n.a.createElement("p",null,"carousel/card"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5782\u76f4\u5e03\u5c40"},n.a.createElement(r["AnchorLink"],{to:"#\u5782\u76f4\u5e03\u5c40","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5782\u76f4\u5e03\u5c40"),n.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",n.a.createElement("code",null,"direction")," \u4e3a ",n.a.createElement("code",null,"horizontal"),"\u3002 \u901a\u8fc7\u8bbe\u7f6e ",n.a.createElement("code",null,"direction")," \u4e3a ",n.a.createElement("code",null,"vertical")," \u6765\u8ba9\u8d70\u9a6c\u706f\u5728\u5782\u76f4\u65b9\u5411\u4e0a\u663e\u793a\u3002"),n.a.createElement("p",null,":::demo"),n.a.createElement("p",null,"carousel/vertical"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"carousel-\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#carousel-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Carousel \u5c5e\u6027"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u53ef\u9009\u503c"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"height"),n.a.createElement("td",null,"carousel \u7684\u9ad8\u5ea6"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"initial-index"),n.a.createElement("td",null,"\u521d\u59cb\u72b6\u6001\u6fc0\u6d3b\u7684\u5e7b\u706f\u7247\u7684\u7d22\u5f15\uff0c\u4ece 0 \u5f00\u59cb"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"0")),n.a.createElement("tr",null,n.a.createElement("td",null,"trigger"),n.a.createElement("td",null,"\u6307\u793a\u5668\u7684\u89e6\u53d1\u65b9\u5f0f"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"hover/click"),n.a.createElement("td",null,"hover")),n.a.createElement("tr",null,n.a.createElement("td",null,"autoplay"),n.a.createElement("td",null,"\u662f\u5426\u81ea\u52a8\u5207\u6362"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"true")),n.a.createElement("tr",null,n.a.createElement("td",null,"interval"),n.a.createElement("td",null,"\u81ea\u52a8\u5207\u6362\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"3000")),n.a.createElement("tr",null,n.a.createElement("td",null,"indicator-position"),n.a.createElement("td",null,"\u6307\u793a\u5668\u7684\u4f4d\u7f6e"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"outside/none"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"arrow"),n.a.createElement("td",null,"\u5207\u6362\u7bad\u5934\u7684\u663e\u793a\u65f6\u673a"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"always/hover/never"),n.a.createElement("td",null,"hover")),n.a.createElement("tr",null,n.a.createElement("td",null,"type"),n.a.createElement("td",null,"carousel \u7684\u7c7b\u578b"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"card"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"loop"),n.a.createElement("td",null,"\u662f\u5426\u5faa\u73af\u663e\u793a"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"true")),n.a.createElement("tr",null,n.a.createElement("td",null,"direction"),n.a.createElement("td",null,"\u5c55\u793a\u7684\u65b9\u5411"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"horizontal/vertical"),n.a.createElement("td",null,"horizontal")),n.a.createElement("tr",null,n.a.createElement("td",null,"pause-on-hover"),n.a.createElement("td",null,"\u9f20\u6807\u60ac\u6d6e\u65f6\u6682\u505c\u81ea\u52a8\u5207\u6362"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"true")))),n.a.createElement("h2",{id:"carousel-\u4e8b\u4ef6"},n.a.createElement(r["AnchorLink"],{to:"#carousel-\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Carousel \u4e8b\u4ef6"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u56de\u8c03\u53c2\u6570"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"change"),n.a.createElement("td",null,"\u5e7b\u706f\u7247\u5207\u6362\u65f6\u89e6\u53d1"),n.a.createElement("td",null,"\u76ee\u524d\u6fc0\u6d3b\u7684\u5e7b\u706f\u7247\u7684\u7d22\u5f15\uff0c\u539f\u5e7b\u706f\u7247\u7684\u7d22\u5f15")))),n.a.createElement("h2",{id:"carousel-\u65b9\u6cd5"},n.a.createElement(r["AnchorLink"],{to:"#carousel-\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Carousel \u65b9\u6cd5"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u65b9\u6cd5\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u53c2\u6570"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"setActiveItem"),n.a.createElement("td",null,"\u624b\u52a8\u5207\u6362\u5e7b\u706f\u7247"),n.a.createElement("td",null,"\u9700\u8981\u5207\u6362\u7684\u5e7b\u706f\u7247\u7684\u7d22\u5f15\uff0c\u4ece 0 \u5f00\u59cb\uff1b\u6216\u76f8\u5e94 ",n.a.createElement("code",null,"el-carousel-item")," \u7684 ",n.a.createElement("code",null,"name")," \u5c5e\u6027\u503c")),n.a.createElement("tr",null,n.a.createElement("td",null,"prev"),n.a.createElement("td",null,"\u5207\u6362\u81f3\u4e0a\u4e00\u5f20\u5e7b\u706f\u7247"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"next"),n.a.createElement("td",null,"\u5207\u6362\u81f3\u4e0b\u4e00\u5f20\u5e7b\u706f\u7247"),n.a.createElement("td",null,"\u2014")))),n.a.createElement("h2",{id:"carousel-\u63d2\u69fd"},n.a.createElement(r["AnchorLink"],{to:"#carousel-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Carousel \u63d2\u69fd"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u63d2\u69fd\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u5b50\u6807\u7b7e"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u5185\u5bb9"),n.a.createElement("td",null,"Carousel-Item")))),n.a.createElement("h2",{id:"carousel-item-\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#carousel-item-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Carousel-Item \u5c5e\u6027"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u53ef\u9009\u503c"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"name"),n.a.createElement("td",null,"\u5e7b\u706f\u7247\u7684\u540d\u5b57\uff0c\u53ef\u7528\u4f5c ",n.a.createElement("code",null,"setActiveItem")," \u7684\u53c2\u6570"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"label"),n.a.createElement("td",null,"\u8be5\u5e7b\u706f\u7247\u6240\u5bf9\u5e94\u6307\u793a\u5668\u7684\u6587\u672c"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u2014")))),n.a.createElement("h2",{id:"carousel-item-\u63d2\u69fd"},n.a.createElement(r["AnchorLink"],{to:"#carousel-item-\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Carousel-Item \u63d2\u69fd"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u63d2\u69fd\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u5185\u5bb9"))))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),l=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(u,{demos:l})}}}]);