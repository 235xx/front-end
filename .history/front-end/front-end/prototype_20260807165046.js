//Object.getPrototypeOf()是最推荐的原型查询方法
const person = {
  name: "贝林厄姆"
}
console.log(person.__proto__ === Object.prototype);
console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(person) === Object.prototype);

//prototype和__proto__的区别
//prototype是函数特有的属性，主要用于给通过该构造函数创建的实例共享方法
function Person(name) {
  this.name = name
}
Person.prototype.sayHello = function () {
  console.log(`你好，我是${this.name}`);
}
Person.prototype.age = 18
const p1 = new Person("凯恩")
const p2 = new Person("姆巴佩")

p1.sayHello()
p2.sayHello()
//构造函数.prototype === 实例对象的原型
console.log(p1.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(Person) === Function.prototype );
console.log(Object.getPrototypeOf(p1) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);


console.log(Person.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);


//new的任务
//创建一个新对象。
// 将新对象的原型指向构造函数的 prototype。
// 让构造函数中的 this 指向新对象。
// 执行构造函数。
// 返回新对象。

//原型链
// 当访问一个对象的属性或方法时，JavaScript 会：
// 先在对象自身查找。
// 找不到就去对象的原型上查找。
// 还找不到就继续查找原型的原型。
// 一直查到 null。
// 这个逐层查找的结构叫作“原型链”。
console.log(Object.getPrototypeOf(p1) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

//Object.hasOwn只检查自身
console.log(Object.hasOwn(p1, "age")); //false
console.log(Object.hasOwn(p1, "name")); //true
//in检查自身和整条原型链
console.log("name" in p1); //true
console.log("age" in p1); //true

//属性遮蔽：如果对象自身和原型上存在同名属性，优先使用自身属性
console.log(p1.age);
p1.age = 26
console.log(p1.age);
console.log(Person.prototype.age);

//数组的map和push等方法来自Object.prototype
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); //true
console.log(Object.hasOwn(Array.prototype, "push")); //true
console.log(Object.hasOwn(Array.prototype, "map")); //true
console.log(Array.prototype.hasOwnProperty("push")); //true

// JavaScript中每个对象都有一个内置属性[[prototype]]
let obj = {}
console.log(obj.__proto__); //{}，隐式原型
console.log(Object.getPrototypeOf(obj));
obj.__proto__.age = 18
console.log(obj.age);

//原型有什么用呢？
// 当我们从一个对象中去查找对应的属性，他会触发[[操作]]
// 1.在当前对象中去查找对应的属性，如果找到就直接使用
// 2.如果没有找到，那么会沿着它的原型去查找[[prototype]]


// 函数的原型
function foo(){

}
// 函数也是一个对象
console.log(foo.__proto__); // 函数作为对象来说，他也是有[[prototype]]隐式原型
