// main()

// function main(){
//   var name = "zhangsan"
// }

// {
//   let name = "lisi"
// }

// let name = "wangwu"



//词法作用域
function lexicalFn1(){
  console.log(name1);
}

function lexicalFn2(){
  let name1 = "zhangsan"
  lexicalFn1()
}
lexicalFn2()
