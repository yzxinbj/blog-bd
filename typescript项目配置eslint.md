# 1.
typescript-library-starter
# 2.
https://github.com/yzxinbj/eslint-config  
npm i -D eslint babel-eslint eslint-plugin-babel @ecomfe/eslint-config
# 3.
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
# 4.
touch .eslintrc.js
```
module.exports = {
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/typescript',
        // 或者选择严格模式
        // '@ecomfe/eslint-config/typescript/strict',
    ],
};
```
# 5.
修改 package.json 中的 lint-staged 项
去除prettier --write 改成 eslint src --fix
# 6. eslint new-cap 报错
```
/*eslint new-cap: [2, {capIsNewExceptions: ["S"]}]*/
var S = require("string");
var lines = S(text).lines();

0 — disables the rule,
1 — makes it a warning,
2 — makes it an error.
```
# 7. eslint unexpected empty function
解决办法： 添加注释

# 8. 报错 node_modules/@types/node/assert.d.ts(1) '{' or ';' expected. #333
```
// If you had got the problem, do not worry, you can just update typedoc and ts version. #332
// 这是github 上的解答，确实解决了问题，找了好久 one day
// 只需要改package.json 下的下面两行即可
    "typedoc": "^0.14.2",
    "typescript": "^4.0.5"
```



