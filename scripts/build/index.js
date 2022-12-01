const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

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
        console.log(`${copiedPath}==>${resultPath}:success`);
      })
      .catch(err => {
        console.log(`${copiedPath}==>${resultPath}:err`, err);
      });
  } catch (e) {
    console.log(e);
  }
}

(async () => {
  try {
    copyFile('element-plus-react.fatherrc.ts', '../../.fatherrc.ts');
    const { stdout: stdout1 } = await exec('father build');
    console.log(stdout1);
    copyFile('utils.fatherrc.ts', '../../.fatherrc.ts');
    const { stdout: stdout2 } = await exec('father build');
    console.log(stdout2);
    copyFile('components.fatherrc.ts', '../../.fatherrc.ts');
    const { stdout: stdout3 } = await exec('father build');
    console.log(stdout3);
    copyFile('hooks.fatherrc.ts', '../../.fatherrc.ts');
    const { stdout: stdout4 } = await exec('father build');
    console.log(stdout4);
    copyFile(
      '../../packages/components/node_modules/@element-plus/theme-chalk',
      '../../packages/element-plus-react/theme-chalk',
    );
    copyFile('../../README.md', '../../packages/element-plus-react/README.md');
    fs.unlink(path.resolve(__dirname, '../../.fatherrc.ts'), err => {
      if (err) {
        console.log(err);
      }
      console.log('.fatherrc.ts 删除成功');
    });
  } catch (e) {
    console.log(e);
  }
})();
