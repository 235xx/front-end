// 浏览器中为window
function foo(){
  // console.log(this);
}
foo()

// 隐式绑定：作为对象方法调用，this指向调用对象
const obj = {
  name: "拉什福德",
  sayName: function(){
    console.log(`${this.name},我们都在爱情里少一点天分`);//模版字符串
  },
  goal: function(){
    console.log(`${this.name},我要射门啦`);
  }
}
obj.sayName()
obj.goal()

//显式绑定：通过call、bind、apply绑定this
function greet(){
  console.log(`我是${this.name}，补水啦！`);
}
const person = {name: "姆巴佩"}
greet()
greet.call(person)
greet.apply(person)
const bindgreet = greet.bind(person)
bindgreet()

//new绑定
function Person(name){
  this.name = name
}
const p = new Person("哈兰德")
console.log(p.name);
console.log(Object.getPrototypeOf(p) === Person.prototype); //复习一下

//箭头函数
const obj1 = {
  name: "亚马尔",
  sayName: ()=>{
    console.log(`戴皇冠！！${this.name}`);
    }
}
obj1.sayName()//undefined，sayName的外层作用域是window，所以打印的是window.name

//手写call
Function.prototype.myCall = function(thisArg,...arg){
  thisArg = thisArg||globalThis

  const fnSymbol = Symbol('fn')
  thisArg[fnSymbol] = this

  const result = thisArg[fnSymbol](...arg)

  delete thisArg[fnSymbol]

  return result
}