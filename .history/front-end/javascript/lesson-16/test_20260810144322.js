let user = {
 name: "zhangsan"
}
user.toString()
// toString
// "[object Object]"

let computer = {
  cpu: 12
}

let huipu = {
  screen: "HP"
}
console.log(huipu.prototype);

Object.setPrototypeOf(huipu,computer)

// huipu.__proto__ = computer
console.log(Object.getPrototypeOf(huipu));

// 上面无属性
Object.create(null)

// extends

const arr = [1, 2, 3];
Object.getPrototypeOf(arr) === Array.prototype
Object.getPrototypeOf(Array.prototype) === Object.prototype
Object.getPrototypeOf(Object.prototype) === null


const