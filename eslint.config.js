// eslint.config.js
const antfu = require("@antfu/eslint-config").default;

module.exports = antfu({
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  typescript: true,
  react: true,
  formatters: {
    prettierOptions: {
      proseWrap: "never",
    },
  },
  rules: {
    curly: "off",
  },
});
