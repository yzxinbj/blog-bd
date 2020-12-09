Serverless 课前准备

- 百度账号 https://login.bce.baidu.com/ 能登录。
- 申请好cfc和bos服务
如图
![](https://images202011122.bj.bcebos.com/cfc讲课.png)
- 能看到 http://console.cloud.baidu-int.com/devops/icode/repos/baidu/personal-code/huoyuxuan/tree/master:serverless

## 阿里serverless 控制台访问不了
解决办法： 关闭ipv6
```
networksetup -listallnetworkservices | sed 1d | xargs -I {} networksetup -setv6off {}
```

## 百度cfc 跨域配置
```
exports.handler = (event, context, callback) => {
    callback(null, {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify({
            status: 'ok',
            type: 'post',
            currentAuthority: 'admin',
        })
      });
};
```