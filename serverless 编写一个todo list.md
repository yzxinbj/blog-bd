# 免费
调用次数：每月前 100 万次函数调用免费
执行时间：每月前 400000（CU-秒）费用免费
对按量实例而言，1 GB 内存规格实例对应的计算力是 1 CU。因此按量实例消耗 1 GB-秒的资源和 1 CU-秒的资源是等价的。
一样的话那有什么差异： 多了预付费和预留实例
# 开始
第一步开通
然后 创建服务 创建函数
一个服务可以创建多个函数，每个函数可以设置不同的环境变量，内存规格。
> 函数计算中的服务对应于软件应用架构领域中的微服务。在函数计算平台构建应用时，首先根据需求将业务逻辑抽象为微服务，然后再实现为函数计算中的服务。

创建函数的时候会填写所在服务，如果没创建服务，系统会根据自定义的名称自动创建

0. 准备工作  
安装 Docker
下载 VSCode, 安装VSCode aliyun serverless 扩展插件
绑定账户 ak sk

1. 使用vscode 创建函数
    - vscode 打开一个空目录
    - 点击插件的 + 号 按照引导依次输入 服务名称 函数名 运行时 触发器
    - 运行  调试 可以在 文件里面 可以在左侧的 小虫子

2. 基本概念
    - 函数入口
    index.handler [文件名].[函数名]
    - 入口函数
    函数入口指定的函数叫做入口函数，类比 main()
    - Initializer 函数
    ```
    先于入口执行的函数，使用场景: 数据库场景下连接池构建、函数依赖库加载等耗时长的业务逻辑放到 Initializer 函数中，避免每次运行函数都会做重复的操作，降低函数延时。
    参数 content, callback
    在 context 参数中，initializer 和 initializationTimeout 参数是创建函数是设置的值
    callback 标识函数执行结束
    ```

    - 函数入参
    event 用户自定义的, content 函数计算提供的上下文, callback 系统定义的函数 callback(null, 'put object')  或者 callback(err)  
    如果调用时 error 不为空，则函数返回 HandledInvocationError ，否则返回 data 的内容。
    - 错误处理
    HandledInvocationError 和 UnhandledInvocationError

3. node.js 环境 开发
    - 事件触发
    ```
    入参： event, content, callback
    callback(null, 'hello world')
    callback 未被调用则返回超时错误
    ```
    - http 触发


# TableStore 表格存储
1. `npm install tablestore`
2. 确定 Endpoint 是服务在各个区域的域名地址, 然后初始化
    ```javascript
        var client = new TableStore.Client({
            accessKeyId: '<your access key id>',
            accessKeySecret: '<your access key secret>',
            endpoint: '<your endpoint>',
            instancename: '<your instance name>',
            maxRetries:20,//默认20次重试，可以省略这个参数。
        });
    ```
3. 数据类型
Integer int64
Binary  Buffer

4. 创建表
```javascript
var createParams = {
    tableMeta: {
        tableName: tableName,
        primaryKey: [
            {
                name: pk1,
                type: 'STRING'
            },
            {
                name: pk2,
                type: 'INTEGER',
                option: 'AUTO_INCREMENT'//自增列，指定otpion为AUTO_INCREMENT
            },
        ]
    },
    reservedThroughput: { // 预留读/写吞吐量为 (0,0) 的表
        capacityUnit: {
            read: 0,
            write: 0
        }
    },
    tableOptions: {
        timeToLive: -1,// 数据的过期时间，单位秒，-1代表永不过期。假如设置过期时间为一年，即为 365 * 24 * 3600。
        maxVersions: 1// 保存的最大版本数，设置为1即代表每列上最多保存一个版本(保存最新的版本)。
    },
};
client.createTable(createParams, function (err, data) {
    if (err) {
        console.log('error:', err);
        return;
    }
    console.log('create table success');
});
```
- 增
- 删
- 改
- 查
# Q&A
1.