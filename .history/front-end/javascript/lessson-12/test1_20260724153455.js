// 7/24手写闭包

// function add(){
//   let count = 0
//   return {
//     incretement: function(){
//       count++
//       return count
//     },
//     decretement: function(){
//       count--
//       return count
//     },
//     find:function(){
//       return count
//     }
//   }
// }
// const a = add()
// console.log(a.incretement());
// console.log(a.decretement());
// console.log(a.find());


//7/24手写原型和原型链
const person = {
  name: "哈里凯恩"
}
console.log(Object.getPrototypeOf(person) === Object.prototype);

function Person(name){
  this.name = name
}
console.log(Object.getPrototypeOf(Person) === Function.prototype);
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);