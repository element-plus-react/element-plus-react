"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5811],{9310:function(t,i,n){n.r(i);var _=n(93385),c=n(54419),h=n(5116),u=n(43184),x=n(77498),s=n(33074),o=n(58760),l=n(18378),j=n(50959),e=n(11527);function r(){var a=(0,l.eL)(),d=a.texts;return(0,e.jsx)(l.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"image-\u56FE\u7247",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#image-\u56FE\u7247",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Image \u56FE\u7247"]}),(0,e.jsx)("p",{children:d[0].value}),(0,e.jsx)("style",{lang:"scss",dangerouslySetInnerHTML:{__html:`
.demo-image {
  .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color-base);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
    &:last-child {
      border-right: none;
    }
  }

  .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
}

.demo-image__placeholder,
.demo-image__error {
  @extend .demo-image;

  .block {
    width: 49%;
  }

  .el-image {
    padding: 0 5px;
    max-width: 300px;
    max-height: 200px;
  }

  .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: var(--el-text-color-secondary);
    font-size: 14px;
  }
}

.demo-image__placeholder {
  .dot {
    animation: dot 2s infinite steps(3, start);
    overflow: hidden;
  }
}

.demo-image__error {
  .image-slot {
    font-size: 30px;
    .el-icon {
      font-size: 30px;
    }
  }
  .el-image {
    width: 100%;
    height: 200px;
  }
}
`}}),(0,e.jsxs)("h2",{id:"\u57FA\u7840\u7528\u6CD5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840\u7528\u6CD5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840\u7528\u6CD5"]})]}),(0,e.jsx)(l.Dl,{demo:{id:"packages-components-src-image-demo-basic-usage"},previewerProps:{title:" ",description:'<p>\u53EF\u901A\u8FC7<code>fit</code>\u786E\u5B9A\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5230\u5BB9\u5668\u6846\uFF0C\u540C\u539F\u751F <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a></p>',filename:"packages/components/src/image/demos/basic-usage.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"\u5360\u4F4D\u5185\u5BB9",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5360\u4F4D\u5185\u5BB9",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5360\u4F4D\u5185\u5BB9"]})}),(0,e.jsx)(l.Dl,{demo:{id:"packages-components-src-image-demo-placeholder"},previewerProps:{title:" ",description:"<p>\u53EF\u901A\u8FC7<code>slot = placeholder</code>\u53EF\u81EA\u5B9A\u4E49\u5360\u4F4D\u5185\u5BB9</p>",filename:"packages/components/src/image/demos/placeholder.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"\u52A0\u8F7D\u5931\u8D25",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u52A0\u8F7D\u5931\u8D25",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u52A0\u8F7D\u5931\u8D25"]})}),(0,e.jsx)(l.Dl,{demo:{id:"packages-components-src-image-demo-load-failed"},previewerProps:{title:" ",description:"<p>\u53EF\u901A\u8FC7<code>slot = error</code>\u53EF\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u5185\u5BB9</p>",filename:"packages/components/src/image/demos/load-failed.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"\u61D2\u52A0\u8F7D",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u61D2\u52A0\u8F7D",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u61D2\u52A0\u8F7D"]})}),(0,e.jsx)(l.Dl,{demo:{id:"packages-components-src-image-demo-lazy-load"},previewerProps:{title:" ",description:"<p>\u53EF\u901A\u8FC7<code>lazy</code>\u5F00\u542F\u61D2\u52A0\u8F7D\u529F\u80FD\uFF0C \u5F53\u56FE\u7247\u6EDA\u52A8\u5230\u53EF\u89C6\u8303\u56F4\u5185\u624D\u4F1A\u52A0\u8F7D\u3002 \u53EF\u901A\u8FC7 <code>scroll-container</code> \u6765\u8BBE\u7F6E\u6EDA\u52A8\u5BB9\u5668\uFF0C \u82E5\u672A\u5B9A\u4E49\uFF0C\u5219\u4E3A\u6700\u8FD1\u4E00\u4E2A overflow \u503C\u4E3A auto \u6216 scroll \u7684\u7236\u5143\u7D20\u3002</p>",filename:"packages/components/src/image/demos/lazy-load.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h2",{id:"\u56FE\u7247\u9884\u89C8",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u56FE\u7247\u9884\u89C8",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u56FE\u7247\u9884\u89C8"]})}),(0,e.jsx)(l.Dl,{demo:{id:"packages-components-src-image-demo-image-preview"},previewerProps:{title:" ",description:"<p>\u53EF\u901A\u8FC7 <code>previewSrcList</code> \u5F00\u542F\u9884\u89C8\u5927\u56FE\u7684\u529F\u80FD\u3002 \u4F60\u53EF\u4EE5\u901A\u8FC7 <code>initial-index</code> \u521D\u59CB\u5316\u7B2C\u4E00\u5F20\u9884\u89C8\u56FE\u7247\u7684\u4F4D\u7F6E\u3002 \u9ED8\u8BA4\u521D\u59CB\u4F4D\u7F6E\u4E3A 0\u3002</p>",filename:"packages/components/src/image/demos/image-preview.tsx"}}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"image-\u5C5E\u6027",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#image-\u5C5E\u6027",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Image \u5C5E\u6027"]}),(0,e.jsxs)(s.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:d[1].value}),(0,e.jsx)("th",{children:d[2].value}),(0,e.jsx)("th",{children:d[3].value}),(0,e.jsx)("th",{children:d[4].value}),(0,e.jsx)("th",{children:d[5].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[6].value}),(0,e.jsx)("td",{children:d[7].value}),(0,e.jsx)("td",{children:d[8].value}),(0,e.jsx)("td",{children:d[9].value}),(0,e.jsx)("td",{children:d[10].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[11].value}),(0,e.jsxs)("td",{children:[d[12].value,(0,e.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",children:d[13].value})]}),(0,e.jsx)("td",{children:d[14].value}),(0,e.jsx)("td",{children:d[15].value}),(0,e.jsx)("td",{children:d[16].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[17].value}),(0,e.jsx)("td",{children:d[18].value}),(0,e.jsx)("td",{children:d[19].value}),(0,e.jsx)("td",{children:d[20].value}),(0,e.jsx)("td",{children:d[21].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[22].value}),(0,e.jsxs)("td",{children:[d[23].value,(0,e.jsx)("code",{children:d[24].value}),d[25].value]}),(0,e.jsx)("td",{children:d[26].value}),(0,e.jsx)("td",{children:d[27].value}),(0,e.jsx)("td",{children:d[28].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[29].value}),(0,e.jsx)("td",{children:d[30].value}),(0,e.jsx)("td",{children:d[31].value}),(0,e.jsx)("td",{children:d[32].value}),(0,e.jsx)("td",{children:d[33].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[34].value}),(0,e.jsx)("td",{children:d[35].value}),(0,e.jsx)("td",{children:d[36].value}),(0,e.jsx)("td",{children:d[37].value}),(0,e.jsx)("td",{children:d[38].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[39].value}),(0,e.jsx)("td",{children:d[40].value}),(0,e.jsx)("td",{children:d[41].value}),(0,e.jsx)("td",{children:d[42].value}),(0,e.jsx)("td",{children:d[43].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[44].value}),(0,e.jsx)("td",{children:d[45].value}),(0,e.jsx)("td",{children:d[46].value}),(0,e.jsx)("td",{children:d[47].value}),(0,e.jsx)("td",{children:d[48].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[49].value}),(0,e.jsx)("td",{children:d[50].value}),(0,e.jsx)("td",{children:d[51].value}),(0,e.jsx)("td",{children:d[52].value}),(0,e.jsx)("td",{children:d[53].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[54].value}),(0,e.jsx)("td",{children:d[55].value}),(0,e.jsx)("td",{children:d[56].value}),(0,e.jsx)("td",{children:d[57].value}),(0,e.jsx)("td",{children:d[58].value})]})]})]}),(0,e.jsxs)("h2",{id:"image-\u4E8B\u4EF6",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#image-\u4E8B\u4EF6",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Image \u4E8B\u4EF6"]}),(0,e.jsxs)(s.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:d[59].value}),(0,e.jsx)("th",{children:d[60].value}),(0,e.jsx)("th",{children:d[61].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[62].value}),(0,e.jsx)("td",{children:d[63].value}),(0,e.jsx)("td",{children:d[64].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[65].value}),(0,e.jsx)("td",{children:d[66].value}),(0,e.jsx)("td",{children:d[67].value})]})]})]}),(0,e.jsxs)("h2",{id:"image-\u63D2\u69FD",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#image-\u63D2\u69FD",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Image \u63D2\u69FD"]}),(0,e.jsxs)(s.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:d[68].value}),(0,e.jsx)("th",{children:d[69].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[70].value}),(0,e.jsx)("td",{children:d[71].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[72].value}),(0,e.jsx)("td",{children:d[73].value})]})]})]}),(0,e.jsxs)("h2",{id:"imageviewer-\u5C5E\u6027",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#imageviewer-\u5C5E\u6027",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ImageViewer \u5C5E\u6027"]}),(0,e.jsxs)(s.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:d[74].value}),(0,e.jsx)("th",{children:d[75].value}),(0,e.jsx)("th",{children:d[76].value}),(0,e.jsx)("th",{children:d[77].value}),(0,e.jsx)("th",{children:d[78].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[79].value}),(0,e.jsx)("td",{children:d[80].value}),(0,e.jsx)("td",{children:d[81].value}),(0,e.jsx)("td",{children:d[82].value}),(0,e.jsx)("td",{children:d[83].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[84].value}),(0,e.jsx)("td",{children:d[85].value}),(0,e.jsx)("td",{children:d[86].value}),(0,e.jsx)("td",{children:d[87].value}),(0,e.jsx)("td",{children:d[88].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[89].value}),(0,e.jsx)("td",{children:d[90].value}),(0,e.jsx)("td",{children:d[91].value}),(0,e.jsx)("td",{children:d[92].value}),(0,e.jsx)("td",{children:d[93].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[94].value}),(0,e.jsx)("td",{children:d[95].value}),(0,e.jsx)("td",{children:d[96].value}),(0,e.jsx)("td",{children:d[97].value}),(0,e.jsx)("td",{children:d[98].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[99].value}),(0,e.jsx)("td",{children:d[100].value}),(0,e.jsx)("td",{children:d[101].value}),(0,e.jsx)("td",{children:d[102].value}),(0,e.jsx)("td",{children:d[103].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[104].value}),(0,e.jsx)("td",{children:d[105].value}),(0,e.jsx)("td",{children:d[106].value}),(0,e.jsx)("td",{children:d[107].value}),(0,e.jsx)("td",{children:d[108].value})]})]})]}),(0,e.jsxs)("h2",{id:"imageviewer-\u4E8B\u4EF6",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#imageviewer-\u4E8B\u4EF6",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ImageViewer \u4E8B\u4EF6"]}),(0,e.jsxs)(s.Z,{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:d[109].value}),(0,e.jsx)("th",{children:d[110].value}),(0,e.jsx)("th",{children:d[111].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[112].value}),(0,e.jsx)("td",{children:d[113].value}),(0,e.jsx)("td",{children:d[114].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:d[115].value}),(0,e.jsx)("td",{children:d[116].value}),(0,e.jsx)("td",{children:d[117].value})]})]})]})]})]})})}i.default=r}}]);
