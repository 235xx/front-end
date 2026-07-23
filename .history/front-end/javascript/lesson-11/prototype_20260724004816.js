//Object.getPrototypeOf()是最推荐的原型查询方法
const person = {
  name: "小明"
}
console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(person)===Object.prototype);

//prototype和_proto_的区别
//prototype是函数特有的属性，主要用于给通过该狗仔函数创建的实例共享方法