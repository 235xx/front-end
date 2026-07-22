const user = {
  // 属性本质上是字符串
  name: "zhangsan",
  age: 18,
  "first name" : "zhang"
}

for(let key in user){
  console.log(key,user[key]);
}

const parent = {
  country:"China"
}

//建立一个原型链关系把son的原型指向parent
const son = Object.create(parent)