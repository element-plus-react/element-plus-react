"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2433],{12155:function(i,l,n){n.r(l);var c=n(50959),e=n(11527);function t(u){var a,d=(a=window)===null||a===void 0||(a=a.document)===null||a===void 0?void 0:a.documentElement;return window.getComputedStyle(d).getPropertyValue(u)}var s=[{level:"Supplementary text",type:"extra-small"},{level:"Body (small)",type:"small"},{level:"Body",type:"base"},{level:"Small Title",type:"medium"},{level:"Title",type:"large"},{level:"Main Title",type:"extra-large"}];function r(u){return u.split("-").map(function(a){return a.charAt(0).toUpperCase()+a.slice(1)}).join(" ")}var x=function(){return(0,e.jsx)("table",{className:"demo-typo-size",children:(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:"Level"}),(0,e.jsx)("td",{children:"Font Size"}),(0,e.jsx)("td",{className:"color-dark-light",children:"Demo"})]}),s.map(function(a){return(0,e.jsxs)("tr",{style:{fontSize:"var(--el-font-size-".concat(a.type,")")},children:[(0,e.jsx)("td",{children:a.level}),(0,e.jsx)("td",{children:"".concat(t("--el-font-size-".concat(a.type))," ").concat(r(a.type))}),(0,e.jsx)("td",{children:"Build with Element"})]},a.level)})]})})};l.default=x},64656:function(i,l,n){n.r(l),n.d(l,{default:function(){return s}});var c=n(50959),e=n(11527),t=function(){return(0,e.jsxs)("div",{className:"demo-term-box",children:[(0,e.jsx)("img",{src:"../../images/term-pingfang.png",alt:""}),(0,e.jsx)("img",{src:"../../images/term-hiragino.png",alt:""}),(0,e.jsx)("img",{src:"../../images/term-microsoft.png",alt:""}),(0,e.jsx)("img",{src:"../../images/term-sf.png",alt:""}),(0,e.jsx)("img",{src:"../../images/term-helvetica.png",alt:""}),(0,e.jsx)("img",{src:"../../images/term-arial.png",alt:""})]})},s=t},99759:function(i,l,n){n.r(l);var c=n(50959),e=n(11527),t=function(){return(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{className:"lineH-left",src:"../../images/typography.png"}),(0,e.jsxs)("ul",{className:"lineH-right",children:[(0,e.jsxs)("li",{children:["line-height:1 ",(0,e.jsx)("span",{children:"No line height"})]}),(0,e.jsxs)("li",{children:["line-height:1.3 ",(0,e.jsx)("span",{children:"Compact"})]}),(0,e.jsxs)("li",{children:["line-height:1.5 ",(0,e.jsx)("span",{children:"Regular"})]}),(0,e.jsxs)("li",{children:["line-height:1.7 ",(0,e.jsx)("span",{children:"Loose"})]})]})]})};l.default=t},92032:function(i,l,n){n.r(l);var c=n(50959),e=n(17220),t=n(11527),s=function(){return(0,t.jsx)("table",{className:"demo-border",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"text",children:"Name"}),(0,t.jsx)("td",{className:"text",children:"Thickness"}),(0,t.jsx)("td",{className:"line",children:"Demo"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"text",children:"Solid"}),(0,t.jsx)("td",{className:"text",children:"1px"}),(0,t.jsx)("td",{className:"line",children:(0,t.jsx)("div",{})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"text",children:"Dashed"}),(0,t.jsx)("td",{className:"text",children:"2px"}),(0,t.jsx)("td",{className:"line",children:(0,t.jsx)("div",{className:"dashed"})})]})]})})};l.default=s},64742:function(i,l,n){n.r(l);var c=n(50959),e=n(25038),t=n(17220),s=n(11527),r=[{name:"No Radius",type:""},{name:"Small Radius",type:"small"},{name:"Large Radius",type:"base"},{name:"Round Radius",type:"round"}],x=function(d){var m=function(o,g){return getComputedStyle(document.documentElement).getPropertyValue("--el-".concat(o,"-").concat(g))};return m("border-radius",d)},u=function(){return(0,s.jsx)(e.X2,{gutter:12,className:"demo-radius",children:r.map(function(d,m){return(0,s.jsxs)(e.JX,{span:6,xs:{span:12},children:[(0,s.jsx)("div",{className:"title",children:d.name}),(0,s.jsx)("div",{className:"value",children:(0,s.jsxs)("code",{children:["border-radius: ",x(d.type)||"0px"]})}),(0,s.jsx)("div",{className:"radius",style:{borderRadius:d.type?"var(--el-border-radius-".concat(d.type,")"):""}})]},m)})})};l.default=u},28374:function(i,l,n){n.r(l);var c=n(50959),e=n(17220),t=n(11527),s=[{name:"Basic Shadow",type:"base"},{name:"Light Shadow",type:"light"}],r=function(a){var d=function(j,o){return getComputedStyle(document.documentElement).getPropertyValue("--el-".concat(j,"-").concat(o))};return d("box-shadow",a)},x=function(){return(0,t.jsx)("div",{children:s.map(function(a,d){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"demo-shadow",style:{boxShadow:"var(--el-box-shadow-".concat(a.type,")")}}),(0,t.jsxs)("span",{className:"demo-shadow-text",children:[a.name,(0,t.jsxs)("code",{children:["box-shadow: ",r(a.type)]})]})]},d)})})};l.default=x},44188:function(i,l,n){n.r(l);var c=n(50959),e=n(25038),t=n(90624),s=n(11527),r=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.X2,{className:"row-bg",children:[(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]}),(0,s.jsxs)(e.X2,{className:"row-bg",justify:"center",children:[(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]}),(0,s.jsxs)(e.X2,{className:"row-bg",justify:"end",children:[(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]}),(0,s.jsxs)(e.X2,{className:"row-bg",justify:"space-between",children:[(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]}),(0,s.jsxs)(e.X2,{className:"row-bg",justify:"space-around",children:[(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]})]})};l.default=r},64104:function(i,l,n){n.r(l);var c=n(50959),e=n(25038),t=n(90624),s=n(11527),r=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.X2,{children:(0,s.jsx)(e.JX,{span:24,children:(0,s.jsx)("div",{className:"grid-content bg-purple-dark"})})}),(0,s.jsxs)(e.X2,{children:[(0,s.jsx)(e.JX,{span:12,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:12,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})})]}),(0,s.jsxs)(e.X2,{children:[(0,s.jsx)(e.JX,{span:8,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:8,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{span:8,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]}),(0,s.jsxs)(e.X2,{children:[(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})})]}),(0,s.jsxs)(e.X2,{children:[(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})})]})]})};l.default=r},72252:function(i,l,n){n.r(l);var c=n(50959),e=n(25038),t=n(90624),s=n(11527),r=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.X2,{gutter:20,children:[(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,offset:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]}),(0,s.jsxs)(e.X2,{gutter:20,children:[(0,s.jsx)(e.JX,{span:6,offset:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,offset:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]}),(0,s.jsx)(e.X2,{gutter:20,children:(0,s.jsx)(e.JX,{span:6,offset:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})})]})};l.default=r},8774:function(i,l,n){n.r(l);var c=n(50959),e=n(25038),t=n(90624),s=n(11527),r=function(){return(0,s.jsxs)(e.X2,{gutter:20,children:[(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:6,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]})};l.default=r},26147:function(i,l,n){n.r(l);var c=n(50959),e=n(25038),t=n(90624),s=n(11527),r=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.X2,{gutter:20,children:[(0,s.jsx)(e.JX,{span:16,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:8,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]}),(0,s.jsxs)(e.X2,{gutter:20,children:[(0,s.jsx)(e.JX,{span:8,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:8,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]}),(0,s.jsxs)(e.X2,{gutter:20,children:[(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:16,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{span:4,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})})]})]})};l.default=r},18892:function(i,l,n){n.r(l);var c=n(50959),e=n(25038),t=n(90624),s=n(11527),r=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(e.X2,{gutter:10,children:[(0,s.jsx)(e.JX,{xs:8,sm:6,md:4,lg:3,xl:1,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{xs:4,sm:6,md:8,lg:9,xl:11,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})}),(0,s.jsx)(e.JX,{xs:4,sm:6,md:8,lg:9,xl:11,children:(0,s.jsx)("div",{className:"grid-content bg-purple"})}),(0,s.jsx)(e.JX,{xs:8,sm:6,md:4,lg:3,xl:1,children:(0,s.jsx)("div",{className:"grid-content bg-purple-light"})})]})})};l.default=r},17220:function(){},90624:function(){}}]);