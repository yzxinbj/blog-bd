# 1. eslint 在vue 项目下对 .js .vue 文件同时 lint ,会把.js 文件中抛出 vue的错误
解： 多个.eslintrc.js 文件配置不同，通过命令区分 .js .vue 文件
- eslint --ext .js src --config .eslintrc.js
- eslint --ext .vue src --config .eslintrc.vue.js

# 2. 解决eslint检查报Definition for rule 'vue/component-definition-name-casing' was not found
找了好久都没有解决这个问题，结果升级了一下eslint-plugin-vue（我原本使用的5.2.3），官网最新版本是6.2.2

# 3. mlbd 搞了半天 vue 项目下 eslint 对js 文件的检查报的vue 的错误, 是因为 eslint-plugin-vue 插件版本的原因
解：同2 升级，fuck