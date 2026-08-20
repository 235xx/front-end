class Person {
  constructor(lastname) {
    this.name = name;
  }

  normalMethod() {
    return this.name;
  }

  arrowMethod = () => {
    return this.name;
  };

}

class Son extends Person{
  constructor(firstname){
    //super()
    super(lastname)
  }
}