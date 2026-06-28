//闭包的作用
//1.数据私有化
function closureFn(){
  let count = 0
  return ()=>count
}