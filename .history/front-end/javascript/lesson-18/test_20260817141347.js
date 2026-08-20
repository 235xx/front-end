class Person {
  constructor(lastname) {
    this.name = name;
  }
}

class Son extends Person{
  constructor(firstname){
    //super()
    super(lastname)
    this.firstname = firstname
  }
}
const p = new Son("zhang","san")
console.log(p);