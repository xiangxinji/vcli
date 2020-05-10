module.exports = {
  // 当前为根配置文件
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // 优先使用 aribnb 和 eslint-plugin-vue中的essential  规则
  extends: ["airbnb-base", "plugin:vue/essential"],
  // 可以在这里定义全局变量， 例如 document
  globals: {
    describe: true,  
    it : true,
    expect: true  
  },
  // 转换器的参数
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    parser: "babel-eslint",
  },
  // 加入 eslint-plugin-vue插件
  plugins: ["vue"],
  // 自定义规则
  rules: {
    // 关闭这个 no-console的规则
    "template-curly-spacing": "off",
    indent: "off",
    "no-console": "off",
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./build/base.config.js",
      },
    },
  },
};
