const fs = require('fs');
const path = require('path');

[
  '../packages/element-plus-react/es',
  '../packages/element-plus-react/lib',
  '../packages/element-plus-react/theme-chalk',
  '../packages/element-plus-react/README.md',
].forEach(dir => {
  if (dir.indexOf('.md') > 0) {
    fs.unlink(path.resolve(__dirname, dir), err => {
      if (err) {
        console.log(err);
      }
      console.log(dir + '删除成功');
    });
  } else {
    fs.rm(path.resolve(__dirname, dir), { recursive: true }, err => {
      if (err) {
        console.log(err);
      }
      console.log(dir + '删除成功');
    });
  }
});
