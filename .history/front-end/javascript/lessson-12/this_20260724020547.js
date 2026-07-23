// 浏览器中为window
function foo(){
  console.log(this);
}
foo()

// 隐式绑定：作为对象方法调用，this指向调用对象
const obj = {
  name: "拉什福德",
  sayName: function(){
    console.log("我们都在爱情里少一点天分");
  }
}
obj.sayName()