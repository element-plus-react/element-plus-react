(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[94],{WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var n=l("q1tI"),a=l.n(n),r=l("hKI/"),c=l.n(r);l("WpQk");function m(e,t){return i(e)||o(e,t)||d(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return E(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function o(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r=[],c=!0,m=!1;try{for(l=l.call(e);!(c=(n=l.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(u){m=!0,a=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(m)throw a}}return r}}function i(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(n["useRef"])(),r=Object(n["useState"])(!1),u=m(r,2),d=u[0],E=u[1],o=Object(n["useState"])(!1),i=m(o,2),s=i[0],f=i[1];return Object(n["useEffect"])((function(){var e=l.current,t=c()((function(){E(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.a.createElement("div",{className:"__dumi-default-table"},a.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":d||void 0,"data-right-folded":s||void 0},a.a.createElement("table",null,t)))};t["a"]=s},kUI3:function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),r=l("dEAq"),c=l("dMo/"),m=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"timepicker-\u65f6\u95f4\u9009\u62e9\u5668"},a.a.createElement(r["AnchorLink"],{to:"#timepicker-\u65f6\u95f4\u9009\u62e9\u5668","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"TimePicker \u65f6\u95f4\u9009\u62e9\u5668"),a.a.createElement("p",null,"\u7528\u4e8e\u9009\u62e9\u6216\u8f93\u5165\u65e5\u671f"),a.a.createElement("h2",{id:"\u4efb\u610f\u65f6\u95f4\u70b9"},a.a.createElement(r["AnchorLink"],{to:"#\u4efb\u610f\u65f6\u95f4\u70b9","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4efb\u610f\u65f6\u95f4\u70b9"),a.a.createElement("p",null,"\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u65f6\u95f4"),a.a.createElement("p",null,":::demo \u4f7f\u7528 el-time-picker \u6807\u7b7e\uff0c\u901a\u8fc7 ",a.a.createElement("code",null,"disabledHours")," ",a.a.createElement("code",null,"disabledMinutes")," \u548c ",a.a.createElement("code",null,"disabledSeconds")," \u9650\u5236\u53ef\u9009\u65f6\u95f4\u8303\u56f4\u3002 \u63d0\u4f9b\u4e86\u4e24\u79cd\u4ea4\u4e92\u65b9\u5f0f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u901a\u8fc7\u9f20\u6807\u6eda\u8f6e\u8fdb\u884c\u9009\u62e9\uff0c\u6253\u5f00",a.a.createElement("code",null,"arrow-control"),"\u5c5e\u6027\u5219\u901a\u8fc7\u754c\u9762\u4e0a\u7684\u7bad\u5934\u8fdb\u884c\u9009\u62e9\u3002"),a.a.createElement("p",null,"time-picker/basic"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u4efb\u610f\u65f6\u95f4\u8303\u56f4"},a.a.createElement(r["AnchorLink"],{to:"#\u4efb\u610f\u65f6\u95f4\u8303\u56f4","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4efb\u610f\u65f6\u95f4\u8303\u56f4"),a.a.createElement("p",null,"\u53ef\u9009\u62e9\u4efb\u610f\u7684\u65f6\u95f4\u8303\u56f4"),a.a.createElement("p",null,":::demo \u6dfb\u52a0 ",a.a.createElement("code",null,"is-range")," \u5c5e\u6027\u5373\u53ef\u9009\u62e9\u65f6\u95f4\u8303\u56f4\uff0c \u540c\u6837\u652f\u6301 ",a.a.createElement("code",null,"arrow-control")," \u5c5e\u6027\u3002"),a.a.createElement("p",null,"time-picker/range"),a.a.createElement("p",null,":::"),a.a.createElement("h2",{id:"\u5c5e\u6027"},a.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5c5e\u6027"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"),a.a.createElement("th",null,"\u53ef\u9009\u503c"),a.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"model-value / v-model"),a.a.createElement("td",null,"\u9009\u4e2d\u9879\u7ed1\u5b9a\u503c"),a.a.createElement("td",null,"Date"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"readonly"),a.a.createElement("td",null,"\u5b8c\u5168\u53ea\u8bfb"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled"),a.a.createElement("td",null,"\u7981\u7528"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"editable"),a.a.createElement("td",null,"\u6587\u672c\u6846\u53ef\u8f93\u5165"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"clearable"),a.a.createElement("td",null,"\u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"true")),a.a.createElement("tr",null,a.a.createElement("td",null,"size"),a.a.createElement("td",null,"\u8f93\u5165\u6846\u5c3a\u5bf8"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"large / default / small"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"placeholder"),a.a.createElement("td",null,"\u975e\u8303\u56f4\u9009\u62e9\u65f6\u7684\u5360\u4f4d\u5185\u5bb9"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"start-placeholder"),a.a.createElement("td",null,"\u8303\u56f4\u9009\u62e9\u65f6\u5f00\u59cb\u65e5\u671f\u7684\u5360\u4f4d\u5185\u5bb9"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"end-placeholder"),a.a.createElement("td",null,"\u8303\u56f4\u9009\u62e9\u65f6\u7ed3\u675f\u65e5\u671f\u7684\u5360\u4f4d\u5185\u5bb9"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"is-range"),a.a.createElement("td",null,"\u662f\u5426\u4e3a\u65f6\u95f4\u8303\u56f4\u9009\u62e9"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"arrow-control"),a.a.createElement("td",null,"\u662f\u5426\u4f7f\u7528\u7bad\u5934\u8fdb\u884c\u65f6\u95f4\u9009\u62e9"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"false")),a.a.createElement("tr",null,a.a.createElement("td",null,"align"),a.a.createElement("td",null,"\u5bf9\u9f50\u65b9\u5f0f"),a.a.createElement("td",null,"left / center / right"),a.a.createElement("td",null,"left"),a.a.createElement("td",null)),a.a.createElement("tr",null,a.a.createElement("td",null,"popper-class"),a.a.createElement("td",null,"TimePicker \u4e0b\u62c9\u6846\u7684\u7c7b\u540d"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"range-separator"),a.a.createElement("td",null,"\u9009\u62e9\u8303\u56f4\u65f6\u7684\u5206\u9694\u7b26"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"'-'")),a.a.createElement("tr",null,a.a.createElement("td",null,"format"),a.a.createElement("td",null,"\u663e\u793a\u5728\u8f93\u5165\u6846\u4e2d\u7684\u683c\u5f0f"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u8bf7\u67e5\u770b ",a.a.createElement(r["AnchorLink"],{to:"/en-US/component/date-picker#date-formats"},"date formats")),a.a.createElement("td",null,"HH:mm:ss")),a.a.createElement("tr",null,a.a.createElement("td",null,"default-value"),a.a.createElement("td",null,"\u53ef\u9009\uff0c\u9009\u62e9\u5668\u6253\u5f00\u65f6\u9ed8\u8ba4\u663e\u793a\u7684\u65f6\u95f4"),a.a.createElement("td",null,"Date(TimePicker) / string(TimeSelect)"),a.a.createElement("td",null,"\u53ef\u88ab",a.a.createElement("code",null,"new Date()"),"\u89e3\u6790(TimePicker) / \u53ef\u9009\u503c(TimeSelect)"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"id"),a.a.createElement("td",null,"same as ",a.a.createElement("code",null,"id")," in native input"),a.a.createElement("td",null,"string / array(string)"),a.a.createElement("td",null,"String ",a.a.createElement("code",null,'id="my-time"')," or array ",a.a.createElement("code",null,":id=\"['my-range-start', 'my-range-end']\"")," for range"),a.a.createElement("td",null,"-")),a.a.createElement("tr",null,a.a.createElement("td",null,"name"),a.a.createElement("td",null,"same as ",a.a.createElement("code",null,"name")," in native input"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"prefix-icon"),a.a.createElement("td",null,"Custom prefix icon component"),a.a.createElement("td",null,"string / Component"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"Clock")),a.a.createElement("tr",null,a.a.createElement("td",null,"clear-icon"),a.a.createElement("td",null,"Custom clear icon component"),a.a.createElement("td",null,"string / Component"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"CircleClose")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled-hours"),a.a.createElement("td",null,"To specify the array of hours that cannot be selected"),a.a.createElement("td",null,"function"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled-minutes"),a.a.createElement("td",null,"To specify the array of minutes that cannot be selected"),a.a.createElement("td",null,"function(selectedHour)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"disabled-seconds"),a.a.createElement("td",null,"To specify the array of seconds that cannot be selected"),a.a.createElement("td",null,"function(selectedHour, selectedMinute)"),a.a.createElement("td",null,"\u2014"),a.a.createElement("td",null,"\u2014")))),a.a.createElement("h2",{id:"\u4e8b\u4ef6"},a.a.createElement(r["AnchorLink"],{to:"#\u4e8b\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u4e8b\u4ef6\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u56de\u8c03\u53c2\u6570"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"change"),a.a.createElement("td",null,"\u7528\u6237\u786e\u8ba4\u9009\u5b9a\u7684\u503c\u65f6\u89e6\u53d1"),a.a.createElement("td",null,"val\uff0c\u7ec4\u4ef6\u7ed1\u5b9a\u503c")),a.a.createElement("tr",null,a.a.createElement("td",null,"blur"),a.a.createElement("td",null,"\u5728\u7ec4\u4ef6 Input \u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1"),a.a.createElement("td",null,"\u7ec4\u4ef6\u5b9e\u4f8b")),a.a.createElement("tr",null,a.a.createElement("td",null,"focus"),a.a.createElement("td",null,"\u5728\u7ec4\u4ef6 Input \u83b7\u5f97\u7126\u70b9\u65f6\u89e6\u53d1"),a.a.createElement("td",null,"\u7ec4\u4ef6\u5b9e\u4f8b")))),a.a.createElement("h2",{id:"\u65b9\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),a.a.createElement(c["a"],null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u65b9\u6cd5\u540d"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u53c2\u6570"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"focus"),a.a.createElement("td",null,"\u4f7f input \u83b7\u53d6\u7126\u70b9"),a.a.createElement("td",null,"\u2014")),a.a.createElement("tr",null,a.a.createElement("td",null,"blur"),a.a.createElement("td",null,"blur the Input component"),a.a.createElement("td",null,"\u2014"))))))}));t["default"]=e=>{var t=a.a.useContext(r["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(m,{demos:l})}}}]);