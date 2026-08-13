function Person(name){
  this.name = name
}
Person.prototype.sayhi = {

}
const p1 = new Person("zhansan")
const p2 = new Person("lisi")

// this绑定伪代码Person.call(p1,"zhangsan")

class Person{
  constructor(name){
    this.name = name
  }
  sayhi(){
    console.log("nihao");
  }
  arrowSayhi = ()=>{
    console.log(this.name);
  }
}
const p1 = new Person("zhansan")
const p2 = new Person("lisi")
console.log(typeof Person);
