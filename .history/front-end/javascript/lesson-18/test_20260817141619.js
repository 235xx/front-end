class Person {
  constructor(lastname) {
    this.lastname = lastname;
  }
}

class Son extends Person{
  constructor(lastname,firstname){
    //super()，作为函数调用，传参初始化父亲的构造函数
    super(lastname)
    this.firstname = firstname
  }
}
const p = new Son("zhang","san")
console.log(p);