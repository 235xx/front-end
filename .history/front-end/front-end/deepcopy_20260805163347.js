const original = {
  name: 'Alice',          // 基本类型
  address: {              // 引用类型（嵌套对象）
    city: 'Beijing'
  }
};
// 场景一：浅拷贝
// 使用展开运算符实现浅拷贝
const shallowCopy = { ...original }; 

// 修改第一层（基本类型）
shallowCopy.name = 'Bob';
console.log(original.name);      // 'Alice' （原对象没变，第一层是独立的）

// 修改深层（引用类型）
shallowCopy.address.city = 'Shanghai';
console.log(original.address.city); // 'Shanghai' （原对象也变了！因为内存地址是共享的）

// 场景二：深拷贝
// 使用 JSON 方法实现深拷贝（仅作演示）
const deepCopy = JSON.parse(JSON.stringify(original));

// 修改第一层
deepCopy.name = 'Bob';
console.log(original.name);      // 'Alice' （没变）

// 修改深层
deepCopy.address.city = 'Shanghai';
console.log(original.address.city); // 'Beijing' （原对象依然没变，完全独立！）
