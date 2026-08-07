function fn(){
  console.log(this);
}
fn()
//this是函数执行时自动产生的

const obj = {
  name:"zhansgan",
  fn:function greeting(){
    console.log(`你好${this}`);
  }
}