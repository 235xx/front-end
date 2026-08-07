function fn(){
  console.log(this);
}
fn()
//this是函数执行时自动产生的 ESM=>undefined

const obj = {
  name:"zhansgan",
  greeting(){
    console.log(this);
  }
}
obj.greeting()