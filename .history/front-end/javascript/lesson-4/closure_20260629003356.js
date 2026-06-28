//闭包的作用
//1.数据私有化
function closureFn(){
  let count = 0
  return {
    getValue: ()=> count
    setValue: (val)=>count = val
  }
}
// closureFn()()
let a = 1 + closureFn()()
console.log(a);

var counter = closureFn()

console.log(counter.getValue());
console.log(counter.setValue(123));


//课后作业：同时拿到值并操作它
// 课后作业： 拿到这个值/操作值