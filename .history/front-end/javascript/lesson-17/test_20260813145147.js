function Person(name){
  this.name = name
}
Person.prototype.sayhi = {

}
const p1 = new Person("zhansan")
const p2 = new Person("lisi")

// this绑定伪代码Person.call(p1,"zhangsan")
//暂时性死区
// const p1 = new Person("zhansan")

class Person{
  constructor(name){
    this.name = name
    this.arrowSayhi = ()=>{
    console.log(this.name);
  }
  return {
    name: "wanger"
  }
  }
  sayhi(){
    console.log("nihao");
  }
  // arrowSayhi = ()=>{
  //   console.log(this.name);
  // }
}
const p1 = new Person("zhansan")
console.log(Object.hasOwn(p1,"arrowSayhi"));
const p2 = new Person("lisi")
console.log(typeof Person);


// class Father
// class Son

// extends构建了两条原型链
Object.getPrototypeOf(Son) === Father
Object.getPrototypeOf(Son.prototype) === Object.prototype