function Person(name){
  this.name = name
}
Person.prototype.sayhi = {

}
const p1 = new Person("zhansan")
const p2 = new Person("lisi")

Person.call(p1,"zhangsan")