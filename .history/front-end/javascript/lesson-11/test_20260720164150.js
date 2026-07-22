const user = {
  // 属性本质上是字符串
  name: "zhangsan",
  age: 18,
  "first name": "zhang"
}

for (let key in user) {
  // console.log(key,user[key]);
}

const parent = {
  country: "China"
}

//建立一个原型链关系把son的原型指向parent
const son = Object.create(parent)

son.name = "zhangsan"
son.age = 19

//可遍历原型链上的可枚举属性，country
for (let key in son) {
  // console.log(key,son[key]);
  //只想打印自身的
  if (Object.hasOwn(son, key)) {
    console.log(key, son[key]);
  }
}

// console.log(Object.getPrototypeOf(son) === parent);

//不能遍历非可迭代对象
// let str = "helloworld"
// for(let value of str){
//   console.log(value);
// }

for (let value of Object.keys(user)) {

}
for (let value of Object.values(user)) {

}
for (let value of Object.entries(user)) {

}

let obj = {
  0: "zhangsan",
  1: "lisi",
  length: 2
}

console.log(Array.from(obj));