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
  return 123  //如果是基本类型则实例为准，如果是引用类型则返回引用类型
  }
  sayhi(){
    console.log("nihao");
  }
  // arrowSayhi = ()=>{
  //   console.log(this.name);
  // }
}
const p1 = new Person("zhansan")
console.log(p1);
console.log(Object.hasOwn(p1,"arrowSayhi"));
const p2 = new Person("lisi")
console.log(typeof Person);


// class Father
// class Son

// extends构建了两条原型链
Object.getPrototypeOf(Son) === Father
Object.getPrototypeOf(Son.prototype) === Object.prototype


class Person {
  constructor(name) {
    this.name = name;
  }

  normalMethod() {
    return this.name;
  }

  arrowMethod = () => {
    return this.name;
  };

  static create(name) {
    return new Person(name);
  }
}

const p1 = new Person("zhangsan");
const p2 = new Person("Tom");

console.log(Object.hasOwn(p1, "name"));

console.log(Object.hasOwn(p1, "normalMethod"));

console.log(Object.hasOwn(p1, "arrowMethod"));

console.log(Object.hasOwn(Person.prototype, "normalMethod"));

console.log(Object.hasOwn(Person.prototype, "arrowMethod"));

console.log(p1.normalMethod === p2.normalMethod);

console.log(p1.arrowMethod === p2.arrowMethod);

console.log(Object.getPrototypeOf(p1) === Person.prototype);

console.log(Object.getPrototypeOf(Person) === Function.prototype);