// main()

// function main(){
//   var name = "zhangsan"
// }

// {
//   let name = "lisi"
// }

// let name = "wangwu"


//作业：打印出张三
//词法作用域
function lexicalFn1(){
  console.log(name1);
}

function lexicalFn2(){
  let name1 = "zhangsan"
  lexicalFn1()
}
lexicalFn2()

//方法1
function lexicalFn1(){
  let name1 = "zhangsan"//1
  console.log(name1);
}

function lexicalFn2(){
  lexicalFn1()
}
lexicalFn2()


//方法2
function lexicalFn1(){
  console.log(name1);
}
let name1 = "zhangsan"//1

function lexicalFn2(){
  lexicalFn1()
}
lexicalFn2()


function lexicalFn1(name1){
  console.log(name1);
}

function lexicalFn2(){
  let name1 = "zhangsan"
  lexicalFn1(name1)
}
lexicalFn2()