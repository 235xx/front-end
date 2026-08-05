const obj = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(obj));

// 缺点：
// 1. 不能拷贝函数
// 2. 不能拷贝 Date（会变成字符串）
// 3. 不能拷贝 RegExp、Map、Set 等
// 4. 不能处理循环引用
// 5. 会忽略 undefined、Symbol

clone.b.c = 10
console.log(obj.b.c);
console.log(clone.b.c);

const obj = { a: 1, b: new Date(), c: new Map() };
const clone = structuredClone(obj);

// 优点：原生支持，能处理大多数数据类型
// 缺点：
// 1. 不能克隆函数
// 2. 不能克隆 DOM 节点
// 3. 浏览器兼容性（IE 不支持）