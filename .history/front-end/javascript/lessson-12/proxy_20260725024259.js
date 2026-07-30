//proxy

//proxy:创建出的代理对象。target：被代理的原对象。handler：代理规则。
// const p = new Proxy(target,handler)

//先创建一个没代理规则的代理对象
// const player = {
//   name:"凯恩",
//   goal:60
// }
// const playerProxy = new Proxy(player,{})
// console.log(playerProxy.name);

//get：拦截读取属性
//get中的参数：get(target,property,receiver)
// target:原对象
// property：正在读取的属性名
// receiver：本次操作使用的代理对象
// 一般配合Reflect.get()
// const player = {
//   name: "凯恩",
//   goal: 60
// }

// const playerProxy = new Proxy(player, {
//   get(target, property, receiver) {
//     console.log(`正在查看球员的${property}`);
//     return Reflect.get(target, property, receiver)
//   }
// })
// console.log(playerProxy.name);



//proxy可以为不存在的属性提供默认值
console.log(player.age);//undefined
//使用proxy后可以提供默认值
const player = {
  name:"C罗",
  goals: 960
}

const playerProxy = new Proxy(player, {
  get(target,property,receiver){
    if(!(property in target)){
      return "暂无数据"
    }
    return Reflect.get(target,property,receiver)
  }
})
console.log(playerProxy.age);