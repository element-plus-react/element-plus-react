(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77],{QiHu:function(e,l,n){"use strict";n.r(l);var t=n("q1tI"),a=n.n(t),c=n("dEAq"),r=n("H1Ra"),i=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u56fd\u9645\u5316"},a.a.createElement(c["AnchorLink"],{to:"#\u56fd\u9645\u5316","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u56fd\u9645\u5316"),a.a.createElement("p",null,"Element Plus \u7ec4\u4ef6 ",a.a.createElement("strong",null,"\u9ed8\u8ba4")," \u4f7f\u7528\u82f1\u8bed\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u4f7f\u7528\u5176\u4ed6\u8bed\u8a00\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u7684\u65b9\u6848\u3002"),a.a.createElement("h2",{id:"\u5168\u5c40\u914d\u7f6e"},a.a.createElement(c["AnchorLink"],{to:"#\u5168\u5c40\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5168\u5c40\u914d\u7f6e"),a.a.createElement("p",null,"Element Plus \u63d0\u4f9b\u4e86\u5168\u5c40\u914d\u7f6e\u56fd\u9645\u5316\u7684\u914d\u7f6e\u3002"),a.a.createElement(r["a"],{code:"import ElementPlus from 'element-plus'\nimport zhCn from 'element-plus/es/locale/lang/zh-cn'\n\napp.use(ElementPlus, {\n  locale: zhCn,\n})",lang:"typescript"}),a.a.createElement("h2",{id:"configprovider"},a.a.createElement(c["AnchorLink"],{to:"#configprovider","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"ConfigProvider"),a.a.createElement("p",null,"Element Plus \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a Vue \u7ec4\u4ef6 ",a.a.createElement(c["Link"],{to:"/en-US/component/config-provider"},"ConfigProvider")," \u7528\u4e8e\u5168\u5c40\u914d\u7f6e\u56fd\u9645\u5316\u7684\u8bbe\u7f6e\u3002"),a.a.createElement(r["a"],{code:"<template>\n  <el-config-provider :locale=\"locale\">\n    <app />\n  </el-config-provider>\n</template>\n\n<script>\n  import { defineComponent } from 'vue'\n  import { ElConfigProvider } from 'element-plus'\n\n  import zhCn from 'element-plus/lib/locale/lang/zh-cn'\n\n  export default defineComponent({\n    components: {\n      ElConfigProvider,\n    },\n    setup() {\n      return {\n        locale: zhCn,\n      }\n    },\n  })\n<\/script>",lang:"html"}),a.a.createElement("h2",{id:"cdn-\u7528\u6cd5"},a.a.createElement(c["AnchorLink"],{to:"#cdn-\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"CDN \u7528\u6cd5"),a.a.createElement("p",null,"\u5982\u679c\u901a\u8fc7 CDN \u4f7f\u7528 Element Plus \uff0c\u90a3\u4e48\u4f60\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a unpkg \u7684\u793a\u4f8b"),a.a.createElement(r["a"],{code:'<script src="//unpkg.com/element-plus/dist/locale/zh-cn">\n  <script>\n  app.use(ElementPlus, {\n    locale: ElementPlus.lang.zhCn\n  })\n<\/script>',lang:"html"}),a.a.createElement("p",null,"\u5b8c\u6574\u6587\u6863\u8be6\u89c1\uff1a ",a.a.createElement(c["Link"],{to:"/en-US/component/config-provider"},"ConfigProvider")),a.a.createElement("p",null,a.a.createElement(c["Link"],{to:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang"},"\u652f\u6301\u7684\u8bed\u8a00\u5217\u8868")),a.a.createElement("ul",{className:"language-list"},a.a.createElement("li",null,"\u7b80\u4f53\u4e2d\u6587\uff08zh-cn\uff09"),a.a.createElement("li",null,"\u7f8e\u56fd\u82f1\u8bed\uff08en\uff09"),a.a.createElement("li",null,"\u5fb7\u8bed\uff08de\uff09"),a.a.createElement("li",null,"\u8461\u8404\u7259\u8bed\uff08pt\uff09"),a.a.createElement("li",null,"\u897f\u73ed\u7259\u8bed\uff08es\uff09"),a.a.createElement("li",null,"\u4e39\u9ea6\u8bed\uff08da\uff09"),a.a.createElement("li",null,"\u6cd5\u8bed\uff08fr\uff09"),a.a.createElement("li",null,"\u632a\u5a01\u8bed\uff08nb-no\uff09"),a.a.createElement("li",null,"\u7e41\u4f53\u4e2d\u6587\uff08zh-tw\uff09"),a.a.createElement("li",null,"\u610f\u5927\u5229\u8bed\uff08it\uff09"),a.a.createElement("li",null,"\u97e9\u8bed\uff08ko\uff09"),a.a.createElement("li",null,"\u65e5\u8bed\uff08ja\uff09"),a.a.createElement("li",null,"\u8377\u5170\u8bed\uff08nl\uff09"),a.a.createElement("li",null,"\u8d8a\u5357\u8bed\uff08vi\uff09"),a.a.createElement("li",null,"\u4fc4\u8bed\uff08ru\uff09"),a.a.createElement("li",null,"\u571f\u8033\u5176\u8bed\uff08tr\uff09"),a.a.createElement("li",null,"\u5df4\u897f\u8461\u8404\u7259\u8bed\uff08pt-br\uff09"),a.a.createElement("li",null,"\u6ce2\u65af\u8bed\uff08fa\uff09"),a.a.createElement("li",null,"\u6cf0\u8bed\uff08th\uff09"),a.a.createElement("li",null,"\u5370\u5c3c\u8bed\uff08id\uff09"),a.a.createElement("li",null,"\u4fdd\u52a0\u5229\u4e9a\u8bed\uff08bg\uff09"),a.a.createElement("li",null,"\u666e\u4ec0\u56fe\u8bed (pa)"),a.a.createElement("li",null,"\u6ce2\u5170\u8bed (pl)"),a.a.createElement("li",null,"\u82ac\u5170\u8bed (fi)"),a.a.createElement("li",null,"\u745e\u5178\u8bed (sv)"),a.a.createElement("li",null,"\u5e0c\u814a\u8bed (el)"),a.a.createElement("li",null,"\u65af\u6d1b\u4f10\u514b\u8bed (sk)"),a.a.createElement("li",null,"\u52a0\u6cf0\u7f57\u5c3c\u4e9a\u8bed (ca)"),a.a.createElement("li",null,"\u6377\u514b\u8bed (cs)"),a.a.createElement("li",null,"\u4e4c\u514b\u5170\u8bed (uk)"),a.a.createElement("li",null,"\u571f\u5e93\u66fc\u8bed (tk)"),a.a.createElement("li",null,"\u6cf0\u7c73\u5c14\u8bed (ta)"),a.a.createElement("li",null,"\u62c9\u8131\u7ef4\u4e9a\u8bed (lv)"),a.a.createElement("li",null,"\u5357\u975e\u8377\u5170\u8bed (af)"),a.a.createElement("li",null,"\u7231\u6c99\u5c3c\u4e9a\u8bed (et)"),a.a.createElement("li",null,"\u65af\u6d1b\u6587\u5c3c\u4e9a\u8bed (sl)"),a.a.createElement("li",null,"\u963f\u62c9\u4f2f\u8bed (ar)"),a.a.createElement("li",null,"\u5e0c\u4f2f\u6765\u8bed (he)"),a.a.createElement("li",null,"\u7acb\u9676\u5b9b\u8bed (lt)"),a.a.createElement("li",null,"\u5c3c\u6cca\u5c14\u8bed (ne)"),a.a.createElement("li",null,"\u54c8\u8428\u514b\u65af\u5766\u8bed (kk)"),a.a.createElement("li",null,"\u5308\u7259\u5229\u8bed (hu)"),a.a.createElement("li",null,"\u7f57\u9a6c\u5c3c\u4e9a\u8bed (ro)"),a.a.createElement("li",null,"\u5e93\u5c14\u5fb7\u8bed (ku)"),a.a.createElement("li",null,"\u7ef4\u543e\u5c14\u8bed (ug-cn)"),a.a.createElement("li",null,"\u9ad8\u68c9\u8bed (km)"),a.a.createElement("li",null,"\u585e\u5c14\u7ef4\u4e9a\u8bed (sr)"),a.a.createElement("li",null,"\u5df4\u65af\u514b\u8bed (eu)"),a.a.createElement("li",null,"\u5409\u5c14\u5409\u65af\u8bed (ky)"),a.a.createElement("li",null,"\u4e9a\u7f8e\u5c3c\u4e9a\u8bed (hy-am)"),a.a.createElement("li",null,"\u514b\u7f57\u5730\u4e9a\u8bed (hr)"),a.a.createElement("li",null,"\u4e16\u754c\u8bed (eo)"),a.a.createElement("li",null,"\u5b5f\u52a0\u62c9\u8bed (bn)")),a.a.createElement("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u7684\u8bed\u8a00\uff0c\u6b22\u8fce\u8d21\u732e ",a.a.createElement(c["Link"],{to:"https://github.com/element-plus/element-plus/pulls"},"PR")," \u53ea\u9700\u5728",a.a.createElement(c["Link"],{to:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang"},"\u8fd9\u91cc"),"\u6dfb\u52a0\u4e00\u4e2a\u8bed\u8a00\u914d\u7f6e\u6587\u4ef6\u5373\u53ef\u3002"),a.a.createElement("h2",{id:"\u5e38\u89c1\u95ee\u9898"},a.a.createElement(c["AnchorLink"],{to:"#\u5e38\u89c1\u95ee\u9898","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5e38\u89c1\u95ee\u9898"),a.a.createElement("h3",{id:"\u5982\u679c\u6211\u60f3\u8981\u66ff\u6362\u9ed8\u8ba4\u8bed\u8a00\u5305\u6765\u51cf\u5c0f\u6253\u5305\u4f53\u79ef\u5e94\u8be5\u600e\u4e48\u505a"},a.a.createElement(c["AnchorLink"],{to:"#\u5982\u679c\u6211\u60f3\u8981\u66ff\u6362\u9ed8\u8ba4\u8bed\u8a00\u5305\u6765\u51cf\u5c0f\u6253\u5305\u4f53\u79ef\u5e94\u8be5\u600e\u4e48\u505a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5982\u679c\u6211\u60f3\u8981\u66ff\u6362\u9ed8\u8ba4\u8bed\u8a00\u5305\u6765\u51cf\u5c0f\u6253\u5305\u4f53\u79ef\uff0c\u5e94\u8be5\u600e\u4e48\u505a\uff1f"),a.a.createElement("p",null,"\u5f53\u4f60\u7684\u5e94\u7528\u9ed8\u8ba4\u4e0d\u662f\u4f7f\u7528",a.a.createElement("strong",null,"\u82f1\u8bed"),"\u7684\u65f6\u5019\uff0c\u4f60\u9700\u8981\u989d\u5916\u5f15\u5165\u4e00\u4e2a\u65b0\u7684\u8bed\u8a00\uff0c\u8fd9\u6837\u4f1a\u4f7f\u5f97\u6ca1\u6709\u7528\u5230\u7684\u8bed\u8a00\u6587\u4ef6\u88ab\u6253\u5305\uff0c\u4f1a\u589e\u52a0\u6700\u7ec8\u4ea7\u7269\u7684\u6587\u4ef6\u5927\u5c0f\uff0c\u5982\u679c\u4f60\u975e\u5e38\u5728\u610f\u6700\u7ec8\u4ea7\u7269\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",a.a.createElement(c["Link"],{to:"https://webpack.js.org/"},"webpack")," \u63d0\u4f9b\u7684 ",a.a.createElement(c["Link"],{to:"https://webpack.js.org/plugins/normal-module-replacement-plugin/#root"},"NormalModuleReplacementPlugin")," \u63d2\u4ef6\u66ff\u6362\u9ed8\u8ba4\u8bed\u8a00\u5305\u3002 \u4f60\u53ef\u4ee5\u628a\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u8fdb ",a.a.createElement("code",null,"webpack.config.js")," \u6587\u4ef6\u4e2d\u6765\u5e94\u7528\u8fd9\u4e2a\u63d2\u4ef6\u3002"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"webpack.config.js")),a.a.createElement(r["a"],{code:"{\n  plugins: [\n    new webpack.NormalModuleReplacementPlugin(\n      /element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en/,\n      'element-plus/lib/locale/lang/zh-cn'\n    ),\n  ]\n}",lang:"typescript"})))}));l["default"]=e=>{var l=a.a.useContext(c["context"]),n=l.demos;return a.a.useEffect((()=>{var l;null!==e&&void 0!==e&&null!==(l=e.location)&&void 0!==l&&l.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(i,{demos:n})}}}]);