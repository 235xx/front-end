function add(){
  const count = 0
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
console.log(a.incretement);