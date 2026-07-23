//闭包
//函数与其词法环境组成，及时函数在其词法环境外执行，也能访问环境中的变量
function createCounter(){
  let count = 0
  return {
    increment:function(){
      count++
      return count
    },
    decrement: function(){
      count--
      return count
    },
    getCount:function(){
      return count
    }
  }
}
const counter = createCounter()
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());