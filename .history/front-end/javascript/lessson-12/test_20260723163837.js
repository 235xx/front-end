// const a = {
//   name: "zhangsan"
// }
// Object.freeze(a)
// a.name = "lisi"

// console.log(a);

let a = 10
let b = a


let user = {
  name: "zhangsan"
  address: {
    city:"beijing"
  }
}

let newuser = {...user}
newuser.name = "lisi"
console.log(user);
console.log(newuser);