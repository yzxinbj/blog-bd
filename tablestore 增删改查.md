# 一
`npm install tablestore`
# 二
```javascript
// 初始化
var TableStore = require('tablestore');
var client = new TableStore.Client({
    accessKeyId: 'LT******6V6',
    accessKeySecret: '5q8*******L4zw',
    endpoint: 'https://todo-demo.cn-beijing.ots.aliyuncs.com',
    instancename: 'todo-demo',
});
```
# 三
```javascript
var params = {
    tableName: 'todoList',
    condition: new TableStore.Condition(TableStore.RowExistenceExpectation.IGNORE, null),
    primaryKey: [{
        id: Long.fromNumber(1)
    }],
    attributeColumns: [
        { text: '2 row'},
        { isCompleted: false}
    ],
    returnContent: {
        returnType: TableStore.ReturnType.PrimaryKey
    }
};

client.putRow(params, function(err, data){
    if (err) {
        console.log('error: ', err);
        return;
    }
    console.log('success: ', data);
})
```
- RowExistenceExpectation.IGNORE 表示不管此行是否已经存在，都会插入新数据，如果之前有会被覆盖。
- RowExistenceExpectation.EXPECT_EXIST 表示只有此行存在时，才会插入新数据，此时，原有数据也会被覆盖。
- RowExistenceExpectation.EXPECT_NOT_EXIST 表示只有此行不存在时，才会插入数据，否则不执行。