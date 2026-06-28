

function lexicalFn2() {
  let name1 = "zhangsan"

  function lexicalFn1() {
    console.log(name1);
  }
  lexicalFn1()
}
lexicalFn2()
//GC垃圾回收