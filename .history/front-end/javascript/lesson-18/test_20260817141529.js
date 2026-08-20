class Person {
  constructor(lastname) {
    this.lastname = lastname;
  }
}

class Son extends Person{
  constructor(lastname,firstname){
    //super()
    super(lastname)
    this.firstname = firstname
  }
}
const p = new Son("zhang","san")
console.log(p);