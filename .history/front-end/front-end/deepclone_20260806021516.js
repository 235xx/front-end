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
// 也可以使用structuredClone(obj)
const deepCopy = JSON.parse(JSON.stringify(original));

// 修改第一层
deepCopy.name = 'Bob';
console.log(original.name);      // 'Alice' （没变）

// 修改深层
deepCopy.address.city = 'Shanghai';
console.log(original.address.city); // 'Beijing' （原对象依然没变，完全独立！）


// 手写深拷贝函数
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  // 检查是否已经拷贝过该对象
  if (hash.has(obj)) return hash.get(obj)

  if(obj instanceof Map){
    const cloneMap = new Map()
    hash.set(obj,cloneMap)
    obj.forEach((value,key)=>{
      cloneMap.set(deepClone(key,hash),deepClone(value,hash))
    })
    return cloneMap
  }
  
  if(obj instanceof Set){
    const cloneSet = new Set()
    hash.set(obj,cloneSet)
    obj.forEach(value=>{
      cloneSet.add(deepClone(value,hash))
    })
    return cloneSet
  }

  if(Array.isArray(obj)){
    const cloneArr = []
    hash.set(obj,cloneArr)
    for(let i = 0;i<obj.length;i++){
      cloneArr[i] = deepClone(obj[i],hash)
    }
    return cloneArr
  }

  const cloneObj = Object.create(Object.getPrototypeOf(obj))
  hash.set(obj,cloneObj)

  for(const key of Reflect.ownKeys(obj)){
    const value = obj[key]
    cloneObj[key] = deepClone(value,hash)
  }
  return cloneObj
}

// 测试
const obj = {
  a: 1,
  b: { c: 2 },
  d: [1, 2, 3],
  e: new Date(),
  f: /abc/g,
  g: new Map([['key', 'value']]),
  h: new Set([1, 2, 3])
};
obj.self = obj;  // 循环引用

const cloned = deepClone(obj);
console.log(cloned.b === obj.b);  // false（深拷贝）
console.log(cloned.self === cloned);  // true（循环引用正确处理）



const obj = {
  name:"郑捷民",
  age:"23",
  province:{
    city:HongKong
  }
}