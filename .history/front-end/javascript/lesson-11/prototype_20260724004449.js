const person = {
  name: "小明"
}
console.log(Object.getPrototypeOf(person));

console.log(Object.getPrototypeOf(person)===Object.prototype);
//Object.getPrototypeOf()是最推荐的原型查询方法