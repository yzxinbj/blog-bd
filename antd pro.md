# 一、
1. npm i yarn tyarn -g
2. tyarn global add umi
3. 
```
umi -v
FAQ：如果提示 umi: command not found，你需要将 yarn global bin 路径配置到环境变量中，方法如下：
# mac 系统:
$ sudo vi ~/.bash_profile
# 在 .bash_profile 中添加下面一行：
export PATH="$PATH:`yarn global bin`"
```
# 二、
1. 进入到空文件夹执行 `tyarn create umi`
pro v5 比 v4 更标准更简单，据说，所以比v4可能不够个性化
2. tyarn install 

3. mock.js 
http://mockjs.com/
```
import mockjs from 'mockjs';
export default {
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
```


# antd disign react components
## Grid 栅格
```
<Row gutter={[16, 24]}  justify="space-around" align="middle">
  <Col span={24} offset={4} pull={4} order={2} flex={3}>3 / 5</Col>
  <Col span={12} offset={4} pull={4} order={1} flex={2}>2 / 5</Col>
</Row>
<Row gutter={[16, 24]}  justify="space-around" align="middle">
  <Col span={24} offset={4} pull={4} order={2} flex="1 1 200px">3 / 5</Col>
  <Col span={12} offset={4} pull={4} order={1} flex="0 1 500px">2 / 5</Col>
</Row>
```
