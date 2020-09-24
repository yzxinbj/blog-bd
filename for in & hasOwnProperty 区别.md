# for in & hasOwnProperty 的区别
```
let student = {
    name: 'Dane'
};
console.log('toString' in student); // true
```
## 但是
```
let student = {
    name: 'Dane'
};
for (let key in student) {
    console.log(key); // 只有name, 没有 toString
}

```

## 然而
```
let student = {
    name: 'Dane'
};
student.hasOwnProperty('toString'); // false
student.hasOwnProperty('name'); // true
```

## 所以
> 区别就是 hasOwnProperty 是判断自身是否具有某一个属性的，而不是其原型链上是否具有