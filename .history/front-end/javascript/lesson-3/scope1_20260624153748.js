

function lexicalFn2() {
  let name1 = "zhangsan"

  function lexicalFn1() {
    console.log(name1);
  }
  return lexicalFn1
}
lexicalFn2()
//GC垃圾回收
//持久闭包，里面的值name1没有被释放
let a = lexicalFn2()
a()
//短暂性闭包
lexicalFn2()()