(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{WpQk:function(e,l,t){},"dMo/":function(e,l,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("hKI/"),c=t.n(r);t("WpQk");function o(e,l){return i(e)||E(e,l)||u(e,l)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,l){if(e){if("string"===typeof e)return d(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,l):void 0}}function d(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,a=new Array(l);t<l;t++)a[t]=e[t];return a}function E(e,l){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,r=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(a=t.next()).done);c=!0)if(r.push(a.value),l&&r.length===l)break}catch(m){o=!0,n=m}finally{try{c||null==t["return"]||t["return"]()}finally{if(o)throw n}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var l=e.children,t=Object(a["useRef"])(),r=Object(a["useState"])(!1),m=o(r,2),u=m[0],d=m[1],E=Object(a["useState"])(!1),i=o(E,2),s=i[0],p=i[1];return Object(a["useEffect"])((function(){var e=t.current,l=c()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return l(),e.addEventListener("scroll",l),window.addEventListener("resize",l),function(){e.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:t,"data-left-folded":u||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,l)))};l["a"]=s},dmE7:function(e,l,t){"use strict";t.r(l);var a=t("q1tI"),n=t.n(a),r=t("dEAq"),c=t("dMo/"),o=n.a.memo((e=>{e.demos;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"dialog-\u5bf9\u8bdd\u6846"},n.a.createElement(r["AnchorLink"],{to:"#dialog-\u5bf9\u8bdd\u6846","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog \u5bf9\u8bdd\u6846"),n.a.createElement("p",null,"\u5728\u4fdd\u7559\u5f53\u524d\u9875\u9762\u72b6\u6001\u7684\u60c5\u51b5\u4e0b\uff0c\u544a\u77e5\u7528\u6237\u5e76\u627f\u8f7d\u76f8\u5173\u64cd\u4f5c\u3002"),n.a.createElement("style",{lang:"scss",scoped:!0,dangerouslySetInnerHTML:{__html:"\n.example-showcase {\n  .dialog-footer button:first-child {\n    margin-right: 10px;\n  }\n  .full-image {\n    width: 100%;\n  }\n  .el-dialog__wrapper {\n    margin: 0;\n  }\n  .el-select {\n    width: 300px;\n  }\n  .el-input {\n    width: 300px;\n  }\n  .el-button--text {\n    margin-right: 15px;\n  }\n}\n"}}),n.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},n.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5"),n.a.createElement("p",null,"Dialog \u5f39\u51fa\u4e00\u4e2a\u5bf9\u8bdd\u6846\uff0c\u9002\u5408\u9700\u8981\u5b9a\u5236\u6027\u66f4\u5927\u7684\u573a\u666f\u3002"),n.a.createElement("p",null,":::demo \u9700\u8981\u8bbe\u7f6e ",n.a.createElement("code",null,"model-value / v-model")," \u5c5e\u6027\uff0c\u5b83\u63a5\u6536 ",n.a.createElement("code",null,"Boolean"),"\uff0c\u5f53\u4e3a ",n.a.createElement("code",null,"true")," \u65f6\u663e\u793a Dialog\u3002 Dialog \u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a",n.a.createElement("code",null,"body")," \u548c ",n.a.createElement("code",null,"footer"),"\uff0c",n.a.createElement("code",null,"footer")," \u9700\u8981\u5177\u540d\u4e3a ",n.a.createElement("code",null,"footer")," \u7684 ",n.a.createElement("code",null,"slot"),"\u3002 ",n.a.createElement("code",null,"title")," \u5c5e\u6027\u7528\u4e8e\u5b9a\u4e49\u6807\u9898\uff0c\u5b83\u662f\u53ef\u9009\u7684\uff0c\u9ed8\u8ba4\u503c\u4e3a\u7a7a\u3002 \u6700\u540e\uff0c\u672c\u4f8b\u8fd8\u5c55\u793a\u4e86 ",n.a.createElement("code",null,"before-close")," \u7684\u7528\u6cd5\u3002"),n.a.createElement("p",null,"dialog/basic-usage"),n.a.createElement("p",null,":::"),n.a.createElement("p",null,":::tip"),n.a.createElement("p",null,n.a.createElement("code",null,"before-close")," \u53ea\u4f1a\u5728\u7528\u6237\u70b9\u51fb\u5173\u95ed\u6309\u94ae\u6216\u8005\u5bf9\u8bdd\u6846\u7684\u906e\u7f69\u533a\u57df\u65f6\u88ab\u8c03\u7528\u3002 \u5982\u679c\u4f60\u5728 ",n.a.createElement("code",null,"footer")," \u5177\u540d\u63d2\u69fd\u91cc\u6dfb\u52a0\u4e86\u7528\u4e8e\u5173\u95ed Dialog \u7684\u6309\u94ae\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728\u6309\u94ae\u7684\u70b9\u51fb\u56de\u8c03\u51fd\u6570\u91cc\u52a0\u5165 ",n.a.createElement("code",null,"before-close")," \u7684\u76f8\u5173\u903b\u8f91\u3002"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u81ea\u5b9a\u4e49\u5185\u5bb9"},n.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u5185\u5bb9"),n.a.createElement("p",null,"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9\u53ef\u4ee5\u662f\u4efb\u4f55\u4e1c\u897f\uff0c\u751a\u81f3\u662f\u4e00\u4e2a\u8868\u683c\u6216\u8868\u5355\u3002 \u6b64\u793a\u4f8b\u663e\u793a\u5982\u4f55\u4f7f\u7528\u5728\u5bf9\u8bdd\u6846\u4e2d\u6dfb\u52a0\u8868\u5355\u548c\u8868\u683c\u3002"),n.a.createElement("p",null,":::demo"),n.a.createElement("p",null,"dialog/customizations"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5d4c\u5957\u7684-dialog"},n.a.createElement(r["AnchorLink"],{to:"#\u5d4c\u5957\u7684-dialog","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5d4c\u5957\u7684 Dialog"),n.a.createElement("p",null,"\u5982\u679c\u9700\u8981\u5728\u4e00\u4e2a Dialog \u5185\u90e8\u5d4c\u5957\u53e6\u4e00\u4e2a Dialog\uff0c\u9700\u8981\u4f7f\u7528 ",n.a.createElement("code",null,"append-to-body")," \u5c5e\u6027\u3002"),n.a.createElement("p",null,":::demo \u901a\u5e38\u6211\u4eec\u4e0d\u5efa\u8bae\u4f7f\u7528\u5d4c\u5957\u5bf9\u8bdd\u6846\u3002 \u5982\u679c\u4f60\u9700\u8981\u5728\u9875\u9762\u4e0a\u5448\u73b0\u591a\u4e2a\u5bf9\u8bdd\u6846\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u5730\u5e73\u6574\u5b83\u4eec\uff0c\b\u5448\u73b0\u4e00\u4e2a\u5e73\u7ea7\u5173\u7cfb\u3002 \u5982\u679c\u4f60\u5fc5\u987b\u5728\u53e6\u4e00\u4e2a\u5bf9\u8bdd\u6846\u5185\u6392\u51fa\u5bf9\u8bdd\u6846\uff0c\u5c06\u5d4c\u5957\u5bf9\u8bdd\u6846\u7684 ",n.a.createElement("code",null,"append-to-body")," \u8bbe\u7f6e\u4e3a\u771f\u3002 \u5e76\u4e14\u5b83\u5c06\u9644\u52a0\u5230\u6b63\u6587\u800c\u4e0d\u662f\u5176\u4eb2\u8282\u70b9\uff0c\u6240\u4ee5\u4e24\u4e2a\u5bf9\u8bdd\u6846\u90fd\u53ef\u4ee5\u88ab\u6b63\u786e\u6e32\u67d3\u3002"),n.a.createElement("p",null,"dialog/nested-dialog"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5c45\u4e2d\u5e03\u5c40"},n.a.createElement(r["AnchorLink"],{to:"#\u5c45\u4e2d\u5e03\u5c40","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c45\u4e2d\u5e03\u5c40"),n.a.createElement("p",null,"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9\u53ef\u4ee5\u5c45\u4e2d\u3002"),n.a.createElement("p",null,":::demo \u8bbe\u7f6e ",n.a.createElement("code",null,"center")," \u4e3a ",n.a.createElement("code",null,"true")," \u4e2d\u5fc3\u5c06\u6c34\u5e73\u5bf9\u8bdd\u6846\u7684\u6807\u9898\u548c\u9875\u811a\u3002 ",n.a.createElement("code",null,"center"),"\u4ec5\u5f71\u54cd\u6807\u9898\u548c\u5e95\u90e8\u533a\u57df\u3002 Dialog \u7684\u5185\u5bb9\u662f\u4efb\u610f\u7684\uff0c\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5185\u5bb9\u5e76\u4e0d\u9002\u5408\u5c45\u4e2d\u5e03\u5c40\u3002 \u5982\u679c\u9700\u8981\u5185\u5bb9\u4e5f\u6c34\u5e73\u5c45\u4e2d\uff0c\u8bf7\u81ea\u884c\u4e3a\u5176\u6dfb\u52a0 CSS\u3002"),n.a.createElement("p",null,"dialog/centered-content"),n.a.createElement("p",null,":::"),n.a.createElement("p",null,":::tip"),n.a.createElement("p",null,"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9\u4f1a\u61d2\u6e32\u67d3\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u4f20\u5165\u7684 default \u63d2\u69fd\u7684\u5185\u5bb9\u4e0d\u4f1a\u5df2\u5f00\u59cb\u5c31\u5448\u73b0\u5230 DOM \u4e0a\uff0c\u76f4\u5230 Dialog \u7b2c\u4e00\u6b21\u6253\u5f00\u4e3a\u6b62\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u9700\u8981\u6267\u884c DOM \u64cd\u4f5c\uff0c\u6216\u901a\u8fc7 ",n.a.createElement("code",null,"ref")," \u83b7\u53d6\u76f8\u5e94\u7ec4\u4ef6\uff0c\u8bf7\u5728 ",n.a.createElement("code",null,"open")," \u4e8b\u4ef6\u56de\u8c03\u4e2d\u8fdb\u884c\u3002"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5173\u95ed\u65f6\u9500\u6bc1-dom-\u5185\u5bb9"},n.a.createElement(r["AnchorLink"],{to:"#\u5173\u95ed\u65f6\u9500\u6bc1-dom-\u5185\u5bb9","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5173\u95ed\u65f6\u9500\u6bc1 DOM \u5185\u5bb9"),n.a.createElement("p",null,"\u542f\u7528\u6b64\u529f\u80fd\u65f6\uff0cdefault \u63d2\u69fd\u4e0b\u7684\u5185\u5bb9\u5c06\u4f1a\u88ab ",n.a.createElement("code",null,"v-if")," \u6307\u4ee4\u9500\u6bc1\u3002 \u5f53\u60a8\u6709\u6027\u80fd\u95ee\u9898\u65f6\u542f\u7528\u6b64\u529f\u80fd\u3002"),n.a.createElement("p",null,":::demo \u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u8fd9\u4e2a\u5c5e\u6027\u88ab\u542f\u7528\u65f6\uff0cDialog \u5185\u5e76\u4e0d\u4f1a\u6709\u4efb\u4f55\u7684 DOM \u8282\u70b9\u5b58\u5728\uff0c\u9664\u4e86 ",n.a.createElement("code",null,"overlay"),"\uff0c",n.a.createElement("code",null,"header")," \uff08\u5982\u679c\u6709\uff09",n.a.createElement("code",null,"footer")," \b\uff08\u5982\u679c\u6709\uff09\u3002"),n.a.createElement("p",null,"dialog/destroy-on-close"),n.a.createElement("p",null,":::"),n.a.createElement("p",null,":::tip"),n.a.createElement("p",null,"\u5f53 ",n.a.createElement("code",null,"modal")," \u7684\u503c\u4e3a false \u65f6\uff0c\u8bf7\u4e00\u5b9a\u8981\u786e\u4fdd ",n.a.createElement("code",null,"append-to-body")," \u5c5e\u6027\u4e3a ",n.a.createElement("strong",null,"true"),"\uff0c\u7531\u4e8e ",n.a.createElement("code",null,"Dialog")," \u4f7f\u7528 ",n.a.createElement("code",null,"position: relative")," \u5b9a\u4f4d\uff0c\u5f53\u5916\u5c42\u7684\u906e\u7f69\u5c42\u88ab\u79fb\u9664\u65f6\uff0c",n.a.createElement("code",null,"Dialog")," \u5219\u4f1a\u6839\u636e\u5f53\u524d DOM \u4e0a\u7684\u7956\u5148\u8282\u70b9\u6765\u5b9a\u4f4d\uff0c\u56e0\u6b64\u53ef\u80fd\u9020\u6210\u5b9a\u4f4d\u95ee\u9898\u3002"),n.a.createElement("p",null,":::"),n.a.createElement("h2",{id:"\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u53ef\u9009\u503c"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"model-value / v-model"),n.a.createElement("td",null,"\u662f\u5426\u663e\u793a Dialog"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,"Dialog \u5bf9\u8bdd\u6846 Dialog \u7684\u6807\u9898\uff0c \u4e5f\u53ef\u901a\u8fc7\u5177\u540d slot \uff08\u89c1\u4e0b\u8868\uff09\u4f20\u5165"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"width"),n.a.createElement("td",null,"Dialog \u7684\u5bbd\u5ea6"),n.a.createElement("td",null,"string / number"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"50%")),n.a.createElement("tr",null,n.a.createElement("td",null,"fullscreen"),n.a.createElement("td",null,"\u662f\u5426\u4e3a\u5168\u5c4f Dialog"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"top"),n.a.createElement("td",null,"Dialog CSS \u4e2d\u7684 margin-top \u503c"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"15vh")),n.a.createElement("tr",null,n.a.createElement("td",null,"modal"),n.a.createElement("td",null,"\u662f\u5426\u9700\u8981\u906e\u7f69\u5c42"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"true")),n.a.createElement("tr",null,n.a.createElement("td",null,"append-to-body"),n.a.createElement("td",null,"Dialog \u81ea\u8eab\u662f\u5426\u63d2\u5165\u81f3 body \u5143\u7d20\u4e0a\u3002 \u5d4c\u5957\u7684 Dialog \u5fc5\u987b\u6307\u5b9a\u8be5\u5c5e\u6027\u5e76\u8d4b\u503c\u4e3a true"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"lock-scroll"),n.a.createElement("td",null,"\u662f\u5426\u5728 Dialog \u51fa\u73b0\u65f6\u5c06 body \u6eda\u52a8\u9501\u5b9a"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"true")),n.a.createElement("tr",null,n.a.createElement("td",null,"custom-class"),n.a.createElement("td",null,"Dialog \u7684\u81ea\u5b9a\u4e49\u7c7b\u540d"),n.a.createElement("td",null,"string"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"open-delay"),n.a.createElement("td",null,"Dialog \u6253\u5f00\u7684\u5ef6\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"0")),n.a.createElement("tr",null,n.a.createElement("td",null,"close-delay"),n.a.createElement("td",null,"Dialog \u5173\u95ed\u7684\u5ef6\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"),n.a.createElement("td",null,"number"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"0")),n.a.createElement("tr",null,n.a.createElement("td",null,"close-on-click-modal"),n.a.createElement("td",null,"\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb modal \u5173\u95ed Dialog"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"true")),n.a.createElement("tr",null,n.a.createElement("td",null,"close-on-press-escape"),n.a.createElement("td",null,"\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u6309\u4e0b ESC \u5173\u95ed Dialog"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"true")),n.a.createElement("tr",null,n.a.createElement("td",null,"show-close"),n.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"true")),n.a.createElement("tr",null,n.a.createElement("td",null,"before-close"),n.a.createElement("td",null,"\u5173\u95ed\u524d\u7684\u56de\u8c03\uff0c\u4f1a\u6682\u505c Dialog \u7684\u5173\u95ed"),n.a.createElement("td",null,"function(done)\uff0cdone \u7528\u4e8e\u5173\u95ed Dialog"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"center"),n.a.createElement("td",null,"\u662f\u5426\u5bf9\u5934\u90e8\u548c\u5e95\u90e8\u91c7\u7528\u5c45\u4e2d\u5e03\u5c40"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"destroy-on-close"),n.a.createElement("td",null,"\u5173\u95ed\u65f6\u9500\u6bc1 Dialog \u4e2d\u7684\u5143\u7d20"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"false")))),n.a.createElement("h2",{id:"\u63d2\u69fd"},n.a.createElement(r["AnchorLink"],{to:"#\u63d2\u69fd","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u63d2\u69fd"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u63d2\u69fd\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"\u2014"),n.a.createElement("td",null,"Dialog \u7684\u5185\u5bb9")),n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,"Dialog \u6807\u9898\u533a\u7684\u5185\u5bb9")),n.a.createElement("tr",null,n.a.createElement("td",null,"footer"),n.a.createElement("td",null,"Dialog \u6309\u94ae\u64cd\u4f5c\u533a\u7684\u5185\u5bb9")))),n.a.createElement("h2",{id:"\u4e8b\u4ef6"},n.a.createElement(r["AnchorLink"],{to:"#\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6"),n.a.createElement(c["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u53c2\u6570"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"open"),n.a.createElement("td",null,"Dialog \u6253\u5f00\u7684\u56de\u8c03"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"opened"),n.a.createElement("td",null,"Dialog \u6253\u5f00\u52a8\u753b\u7ed3\u675f\u65f6\u7684\u56de\u8c03"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"close"),n.a.createElement("td",null,"Dialog \u5173\u95ed\u7684\u56de\u8c03"),n.a.createElement("td",null,"\u2014")),n.a.createElement("tr",null,n.a.createElement("td",null,"closed"),n.a.createElement("td",null,"Dialog \u5173\u95ed\u52a8\u753b\u7ed3\u675f\u65f6\u7684\u56de\u8c03"),n.a.createElement("td",null,"\u2014"))))))}));l["default"]=e=>{var l=n.a.useContext(r["context"]),t=l.demos;return n.a.useEffect((()=>{var l;null!==e&&void 0!==e&&null!==(l=e.location)&&void 0!==l&&l.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(o,{demos:t})}}}]);