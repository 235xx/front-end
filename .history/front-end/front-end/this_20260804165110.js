// 浏览器中为window，默认绑定
function foo() {
  // console.log(this);
}
foo()

// 隐式绑定：作为对象方法调用，this指向调用对象
const obj = {
  name: "拉什福德",
  sayName: function () {
    console.log(`${this.name},我们都在爱情里少一点天分`);//模版字符串
  },
  goal: function () {
    console.log(`${this.name},我要射门啦`);
  }
}
obj.sayName()
obj.goal()
//注意，这种情况属于独立函数调用，this指向window
const aaa = obj.sayName
aaa()
//注意，高阶函数的调用这种情况也属于独立函数调用，this指向window，相当于把obj.sayName赋值给f1
function foo(f1){
  f1()
}
foo(obj.sayName)


//显式绑定：通过call、bind、apply绑定this
function greet(name,age,height) {
  console.log(`我是${name}，我${age}岁啦，我${height}高，补水啦！`);
}
const person = { 
  name:'姆巴佩',
  age:26,
  height:178
}
greet()
greet.call(person,'梅西',39,170)
greet.apply(person,['梅西',39,170])
const bindgreet = greet.bind(person)
bindgreet()

//new绑定
function Person(name) {
  this.name = name
}
const p = new Person("哈兰德")
console.log(p.name);
console.log(Object.getPrototypeOf(p) === Person.prototype); //复习一下

//箭头函数
const obj1 = {
  name: "亚马尔",
  sayName: () => {
    console.log(`戴皇冠！！${this.name}`);
  }
}
obj1.sayName()//undefined，sayName的外层作用域是window，所以打印的是window.name

//手写call
Function.prototype.myCall = function (thisArg, ...arg) {
  thisArg = thisArg || globalThis

  const fnSymbol = Symbol('fn')
  thisArg[fnSymbol] = this

  const result = thisArg[fnSymbol](...arg)

  delete thisArg[fnSymbol]

  return result
}
// 手写apply
Function.prototype.myApply = function (thisArg, argsArray) {
  thisArg = thisArg || globalThis

  const fnSymbol = Symbol('fn')
  thisArg[fnSymbol] = this

  const result = thisArg[fnSymbol](...argsArray)

  delete thisArg[fnSymbol]

  return result
}

Function.prototype.myBind = function (thisArg, ...bindArgs) {
  const originFn = this

  return function (...callArg) {
    return originFn.apply(thisArg, [...bindArgs, ...callArg])
  }
}

//测试
function sum(a, b) {
  return this.base + a + b;
}
const obj = { base: 10 }
console.log(sum.myCall(obj, 1, 2));
console.log(sum.myApply(obj, [1, 2]));
const boundSum = sum.myBind(obj, 1)
console.log(boundSum(2));

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person = { name: '姆巴佩' };
greet.call(person,"补水啦","!")
greet.apply(person,["补水啦","!"])
const aa = greet.bind(person,"补水啦","!")
aa()

// // call - 立即执行，参数逐个传递
// greet.call(person, 'Hello', '!');  // Hello, Tom!

// // apply - 立即执行，参数数组传递
// greet.apply(person, ['Hi', '?']);  // Hi, Tom?

// // bind - 返回新函数，不立即执行
// const boundGreet = greet.bind(person, 'Hey');
// boundGreet('!!!');  // Hey, Tom!!!

Function.prototype.myCall = function(thisArg,...args){
  thisArg = thisArg || globalThis

  const aa = Symbol("fn")
  thisArg[aa] = this

  const result = thisArg[aa](...args)

  delete thisArg[aa]

  return result
}
