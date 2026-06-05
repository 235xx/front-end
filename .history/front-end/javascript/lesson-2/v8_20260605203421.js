main();

function main() {
  console.log(user);
  var user = { name: "xiaoyao" };//undefined

  // console.log(age);//error
  // let age = 33;

  sayHi();
  function sayHi() {
    console.log("hi");//不会执行
  }
}

//创造阶段：创建全局执行上下文
// 在全局执行上下文力：
// 创建阶段 1.创建环境变量：函数、类、变量（进行变量、函数、类提升）  2.创建全局作用域  3.this的绑定和指向
// 执行阶段
// 创造main的执行上下文
// 创建user、age、sayHi()  他们都会进行变量提升  创建函数作用域  this绑定
// age被放在DTZ
// 创造sayHi的执行上下文  创建sayhi函数作用域
