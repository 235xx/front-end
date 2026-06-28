

function lexicalFn2() {
  let name1 = "zhangsan"

  function lexicalFn1() {
    console.log("helloworld");
  }
  return lexicalFn1
}
lexicalFn2()
//GC垃圾回收
let a = lexicalFn2()
a()
