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

// [[Prototype]]任何对象都存在，值是原型对象
// prototype，函数才有，js底层分配的，目的是传给未来可能有的实例共享属性
function Person(){

}