async function foo(a,b){
  return 123 //Promise { 123 }
}
foo()
console.log(foo()); //undefined
console.log(foo);


foo(undefined,2)//默认参数

foo({name:'1',age:14})
foo({name,age},b)

add(1,2,3)

//高阶函数



function fn1(){
 return 123
}
fn1()+5
//1.创建外层promise，返回123，外层promise=》fulfilled，要得到值必须在异步阶段得到
async function fn1(){
 return 123
}
fn1().then(res=>console.log(res+5))
fn1()+5


function getData() {
  return new Promise((resolve) => {
    resolve("data");
  });
}

async function a(){
  const data = await getData()
  console.log(data);
}
a()


async function foo(a,b){
  return 123 //Promise { 123 }
}

function getData1() {
  return new Promise((resolve) => {
    resolve("data");  //Promise { 'data' }
  });
}
async function getData2() {
  return new Promise((resolve) => {
    resolve("data");
  });
}



async function getData3() {
  return Promise.resolve(123)
}


console.log(getData1());
console.log(getData1());
console.log(getData1());
