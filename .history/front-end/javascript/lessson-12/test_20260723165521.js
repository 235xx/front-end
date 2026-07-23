// const a = {
//   name: "zhangsan"
// }
// Object.freeze(a)
// a.name = "lisi"

// console.log(a);

let a = 10
let b = a

// 浅拷贝只能包容第一层属性的更改，性能消耗较少
let user = {
  name: "zhangsan",
  address: {
    city:"beijing"
  }
}

// let newuser = {...user}
// newuser.name = "lisi"
// newuser.address.city = "shanghai"
// console.log(user);
// console.log(newuser);

//深拷贝，不仅仅复制第一层，还复制所有层级的数据，直到所有的数据完全独立
let newuser2 = structuredClone(user)
newuser2.address.city = "tianjin"
console.log(user);
console.log(newuser2);

//作业
let testVal = {
  a: 1,
  b: function () {
    console.log(1);
  },
  c: [1, 2, { c1: 3 }],
};

testVal.self = testVal;
//写一个深拷贝函数
function deepCopy(obj){
  if(typeof obj !== "object" || obj === null)return obj
  if(typeof obj === "function") return obj
  if(Array.isArray(obj)==="array") return obj
  for()
}