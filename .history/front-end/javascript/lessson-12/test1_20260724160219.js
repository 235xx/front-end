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


// const person = {
//   name: "哈里凯恩"
// }
// console.log(Object.getPrototypeOf(person) === Object.prototype);

// function Person(name){
//   this.name = name
// }
// console.log(Object.getPrototypeOf(Person) === Function.prototype);
// console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype) === null);

// const p1 = new Person("萨卡")
// Person.prototype.age = 18
// Person.prototype.sayName = function (){
//   console.log(`我是${this.name}，我们阿森纳是不可战胜的！`);
// }
// p1.sayName()
// console.log(p1.age);
// p1.age = 23
// console.log(p1.age);

// console.log(Object.hasOwn(p1,"age"));
// console.log(Object.hasOwn(p1,"sayName"));

// 7/24 this手敲

//默认绑定
function foo(){
  console.log(this.name);
}
foo()

//隐式绑定
const person = {
  name:"马杜埃凯",
  sayName:function(){
    console.log(`在下棍哥，${this.name}`);
  }
}
person.sayName()

//显式绑定
function greet(){
  console.log(`我是${this.name}，我要内切啦！`);
}
const p1 = {name:"加克波"}
const p2 = {name:"罗本"}
greet.call(p1)
greet.call(p2)
const a = greet.bind(p1)
a()
//new绑定
function Person(name) {
  this.name = name
}
const p3 = new Person("罗德里")
console.log(p3.name);