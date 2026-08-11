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


Object.setPrototypeOf(huipu,computer)

// huipu.__proto__ = computer
console.log(Object.getPrototypeOf(huipu));

// 无属性
Object.create(null)
