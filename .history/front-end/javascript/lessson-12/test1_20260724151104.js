// 7/24手写闭包

function add(){
  let count = 0
  return {
    incretement: function(){
      count++
      return count
    },
    decretement: function(){
      count--
      return count
    },
    find:function(){
      return count
    }
  }
}
const a = add()
console.log(a.incretement());
console.log(a.decretement());
console.log(a.find());