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