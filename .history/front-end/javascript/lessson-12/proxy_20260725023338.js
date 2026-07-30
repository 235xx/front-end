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
const player = {
  name: "凯恩",
  goal: 60
}

const playerProxy = new Proxy(player, {
  get(target, property) {
    console.log(`正在查看球员的${property}`);
    return target[property]
  }
})
