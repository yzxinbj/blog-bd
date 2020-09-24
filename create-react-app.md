# 创建 react app & 引入 antd
## 1.
npm uninstall -g create-react-app
## 2.
npx create-react-app my-app --template typescript
## 3.
cnpm i antd --save
## 4.
修改 src/App.tsx，引入 antd 的按钮组件。
```
import React, { FC } from 'react';
import { Button } from 'antd';
import './App.css';

const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```
修改 src/App.css，在文件顶部引入 antd 的样式。
```
@import '~antd/dist/antd.css';
```

## 5.
cnpm install --save typescript @types/node @types/react @types/react-dom @types/jest

# redux
## 1. 
dispatch: deal with (a task, problem, or opponent) quickly and efficiently.
          快速高效地处理一个任务或者问题

reduce:  bring someone or something to (a lower or weaker state, condition, or role).
         到下一个状态

reducer: Arry.prototype.reduce(reducer), 传入reduce 的被称为reducer，我称他为状态处理函数

## 2. 获取state
```
import { createStore } from 'redux';
const store = createStore(fn);

const state = store.getState();
``` 
## 3. action & action creator & dispatch 
```
store.dispatch(addTodo('list 1 : learn redux !'));
// addTodo() ---生成action---> { type: 'ADD_TODO', payload: 'list 1 : learn redux !'}
// action 必须有 type 其他字段自定义
```
## 4. reducer
reducer 在调用 createStore(reducer) 时传入

每当store.dispatch 发送过来一个新的 action , store 就会自动调用reducer, 得到新的 store

reducer 必须是一个纯函数，即必须返回一个新的对象
```// State 是一个对象
function reducer(state, action) {
  return Object.assign({}, state, { thingToChange });
  // 或者
  return { ...state, ...newState };
}

// State 是一个数组
function reducer(state, action) {
  return [...state, newItem];
}
```

## 5. store.subscribe(listener)
一旦 store 发生了变化，即diapatch 被调用，就会自动执行listener。
所以listener一般是 render 或者 setState 这种会影响view 变化的函数

## 6. applyMiddlewares()

