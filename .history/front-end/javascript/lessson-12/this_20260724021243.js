// 浏览器中为window
function foo(){
  // console.log(this);
}
foo()

// 隐式绑定：作为对象方法调用，this指向调用对象
const obj = {
  name: "拉什福德",
  sayName: function(){
    console.log(`${this.name},我们都在爱情里少一点天分`);
  }
}
obj.sayName()

//显式绑定：通过call、bind、apply绑定this
function greet(){
  console.log(`我是${this.name}，补水啦！`);
}
const person = {name: "姆巴佩"}
greet.call(person)
greet.apply(person)
const bindgreet = greet.bind(person)
bindgreet()