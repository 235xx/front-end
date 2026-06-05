main();

function main() {
  console.log(user);
  var user = { name: "xiaoyao" };//undefined

  console.log(age);//error
  let age = 33;

  sayHi();
  function sayHi() {
    console.log("hi");//不会执行
  }
}

