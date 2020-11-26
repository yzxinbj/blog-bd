# 背景
最近使用antd.design pro, 项目里面使用到了umijs, 因为项目架构是前后端分离，随意想试一下跨域请求。发现项目里面是使用的umi 的 request 方法，看了下这个方法是用的fetch, 遂尝试了一下，打开控制台看请求发现和之前跨域时候不一样，post 请求只请求了一次，没有option 预检请求

# 原因
发送2次请求需要满足以下2个条件：
    1、必须要在跨域的情况下。

    2、除GET、HEAD和POST(only with application/x-www-form-urlencoded, multipart/form-data, text/plain Content-Type)以外的跨域请求（我们可以称为预检(Preflighted)的跨域请求）。

 最后，建议大家可以这样回复面试官：之所以会发送2次请求，那是因为我们使用了带预检(Preflighted)的跨域请求。该请求会在发送真实的请求之前发送一个类型为OPTIONS的预检请求。预检请求会检测服务器是否支持我们的真实请求所需要的跨域资源，唯有资源满足条件才会发送真实的请求。比如我们在请求头部增加了authorization项，那么在服务器响应头中需要放入Access-Control-Allow-Headers，并且其值中必须要包含authorization，否则OPTIONS预检会失败，从而导致不会发送真实的请求。

 总结，无论是xmlHttpRequest 还是 fetch  都是 content-type 要是 application/json 才能看到预检请求

 # 然而
 我自己验证发现fetch 并没有出现2次请求的情况。
 ### 为什么
 因为我sb的选中和筛选 xhr 就是Network 面板下面的可以筛选请求的，什么js,css,media 可以筛选的地方

 fetch 请求不会被xhr 筛选过滤调，而option 预检请求会被过滤掉。  
 改成All 就能看到option 请求了

# 现象
当我在发送fetch 请求的时候，没有加headers 参数，依然成功获取到了请求数据，content-type 是text/plain，但请求只有一次

# 区别
摘自MDN

当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject， 即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。

fetch 不会发送 cookies。除非你使用了credentials 的初始化选项。（自 2017 年 8 月 25 日以后，默认的 credentials 政策变更为 same-origin。Firefox 也在 61.0b13 版本中进行了修改）

fetch() 可以接受跨域 cookies；你也可以使用 fetch() 建立起跨域会话。

