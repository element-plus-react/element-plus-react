const fs = require('fs');
const path = require('path');

const fsPromises = fs.promises;

/**
 *
 * @param {String} copiedPath (被复制文件的地址，相对地址)
 * @param {String} resultPath (放置复制文件的地址，相对地址)
 */
function copyFile(copiedPath, resultPath) {
  try {
    copiedPath = path.join(__dirname, copiedPath);
    resultPath = path.join(__dirname, resultPath);
    fsPromises
      .cp(copiedPath, resultPath, { recursive: true })
      .then(() => {
        console.log('success');
      })
      .catch(err => {
        console.log(err);
      });
  } catch (e) {
    console.log(e);
  }
}

copyFile(
  '../packages/theme-chalk/node_modules/element-plus/theme-chalk',
  '../packages/theme-chalk',
);