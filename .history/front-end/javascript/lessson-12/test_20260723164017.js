// const a = {
//   name: "zhangsan"
// }
// Object.freeze(a)
// a.name = "lisi"

// console.log(a);

let a = 10
let b = a

// 浅拷贝只能包容第一层属性的更改
let user = {
  name: "zhangsan",
  address: {
    city:"beijing"
  }
}

let newuser = {...user}
newuser.name = "lisi"
newuser.address.city = "shanghai"
console.log(user);
console.log(newuser);