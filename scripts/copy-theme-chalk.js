const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const fsEx = require('fs-extra');

const fsPromises = fs.promises;

/**
 *
 * @param {*} copiedPath (被复制文件的地址，相对地址)
 * @param {*} resultPath (放置复制文件的地址，相对地址)
 */
function copyFile(copiedPath, resultPath) {
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
}

copyFile(
  '../packages/theme-chalk/node_modules/element-plus/theme-chalk',
  '../packages/theme-chalk',
);
