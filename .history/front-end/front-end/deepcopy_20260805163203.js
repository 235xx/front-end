const original = {
  name: 'Alice',          // 基本类型
  address: {              // 引用类型（嵌套对象）
    city: 'Beijing'
  }
};
//场景一：浅拷贝
// 使用展开运算符实现浅拷贝
const shallowCopy = { ...original }; 

// 修改第一层（基本类型）
shallowCopy.name = 'Bob';
console.log(original.name);      // 'Alice' （原对象没变，第一层是独立的）

// 修改深层（引用类型）
shallowCopy.address.city = 'Shanghai';
console.log(original.address.city); // 'Shanghai' （原对象也变了！因为内存地址是共享的）



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