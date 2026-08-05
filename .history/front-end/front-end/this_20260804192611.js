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
function foo(f1) {
  f1()
}
foo(obj.sayName)


//显式绑定：通过call、bind、apply绑定this
function greet(name, age, height) {
  console.log(`我是${this.name}，我${this.age}岁啦，我${this.height}高，补水啦！`);
}
const person = {
  name: '姆巴佩',
  age: 26,
  height: 178
}
greet()
greet.call(person)
greet.apply(person)
const bindgreet = greet.bind(person)
bindgreet()

function greet2(name, age) {
  console.log(name);
  console.log(age);
}
greet2.call('call', '梅西', 39)

//new绑定
//new的事情，1.创建一个空对象，2.将this指向这个对象
//3.执行函数体内的代码 4.若没有返回非空对象，就返回这个对象
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
// 手写bind
//bindArgs是第一次绑定的参数
Function.prototype.myBind = function (thisArg, ...bindArgs) {
  // originFn保存了原函数
  const originFn = this

  //返回的是一个函数，没有结果，如果想要结果需要函数调用
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
greet.call(person, "补水啦", "!")
greet.apply(person, ["补水啦", "!"])
const aa = greet.bind(person, "补水啦", "!")
aa()

// // call - 立即执行，参数逐个传递
// greet.call(person, 'Hello', '!');  // Hello, Tom!

// // apply - 立即执行，参数数组传递
// greet.apply(person, ['Hi', '?']);  // Hi, Tom?

// // bind - 返回新函数，不立即执行
// const boundGreet = greet.bind(person, 'Hey');
// boundGreet('!!!');  // Hey, Tom!!!

Function.prototype.myCall = function (thisArg, ...args) {
  thisArg = thisArg || globalThis

  const aa = Symbol("fn")
  thisArg[aa] = this

  const result = thisArg[aa](...args)

  delete thisArg[aa]

  return result
}


// this绑定优先级
//默认绑定的优先级是最低的
function foo() {
  console.log("foo:", this);
}
//显式绑定apply优先级大于隐式绑定
let obj = { foo: foo }
obj.foo.apply('abc')
obj.foo.call('bcd')
//测试2：bind绑定优先级大于隐式绑定
const bar = foo.bind('aa')
let obj = { baz: bar }
obj.baz()
// new绑定优先级大于隐式绑定
let obj = {
  name: 'why',
  foo: function () {
    console.log('foo:', this);
  }
}
new obj.foo() //空对象

//new不可以和apply和call一起使用
//new的优先级比bind高
function foo() {
  console.log("foo:", this);
}
let bindFn = foo.bind('aa')
new bindFn()//空对象

// bind的优先级大于apply
function foo() {
  console.log("foo:", this);
}
let aaa = foo.bind('bcd')
aaa.apply('abc')


// 箭头函数
const name = ['姆巴佩', 'C罗', '梅西']
name.forEach((item, index, array) => {
  console.log(item, index, array);
})

//箭头函数的优化，如果返回的值是对象，则必须在外面再套一个()
let nums = [20, 30, 11, 15, 111]
let result = nums.filter(item => item % 2 === 0)
  .map(item => item * item)
  .reduce((init, item) => init + item)
console.log(result);

// 箭头函数的this使用
// 普通函数有this标识符
function foo() {
  console.log("foo:", this);
}
foo()
foo.apply('aaa')

//箭头函数压根没有this
let bar = () => {
  let message = "hello world"
  console.log("bar:", this);
}
bar() //window
bar.apply("aaaa") //window

// this的查找规则
let obj = {
  name:obj,
  foo:function(){
    var bar = ()=>{
      console.log("bar:",this);
    }
    return bar
  }
}
let fn = obj.foo
fn.apply("bbb")