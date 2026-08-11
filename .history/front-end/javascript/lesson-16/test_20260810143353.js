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

huipu.__proto__ = computer
console.log(Object.getPrototypeOf(huipu));
Object.setPrototypeOf(huipu,computer)
