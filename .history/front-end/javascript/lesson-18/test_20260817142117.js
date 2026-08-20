class Person {
  constructor(lastname) {
    this.lastname = lastname;
  }
  speak(){
    return "父亲说"
  }
}

class Son extends Person{
  constructor(lastname,firstname){
    //super()，作为函数调用，传参初始化父亲的构造函数，2.作为对象，调用父类的属性或方法
    super(lastname)
    this.firstname = firstname
  }
  sayhello() {
    return speak()
  } 
}
const p = new Son("zhang","san")
console.log(p.sayhello);