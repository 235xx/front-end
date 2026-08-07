function fn(){
  console.log(this);
}
fn()
//this是函数执行时自动产生的 ESM=>undefined CJS => module.exports

const obj = {
  name:"zhansgan",
  greeting(){
    console.log(this);
  }
}
obj.greeting()

function show() {
  console.log(this.name);
}
const a = { name: "A" };
const b = { name: "B" };
const fn = show.bind(a);
fn.call(b);

let obj = {
  a: "abc"
}
let str = "123"

console.log(obj);
console.log(str);

function Person(name){
  this.name = name
}

const p = new Person("jimmy")


const fn = ()=>{
  console.log(this);
}


let obj1 = {
  name:"zhangsan",
  fn: ()=>{
    console.log(this.name);
  }
}

obj1.fn()


function User(name) {
  this.name = name;
}

const obj = {
  name: "obj"
};

const BoundUser = User.bind(obj);

const u = new BoundUser("xiaoyao");
console.log(u.name
);
u.name
obj.name