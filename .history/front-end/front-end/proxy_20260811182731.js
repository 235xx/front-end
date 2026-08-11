//proxy

//proxy:创建出的代理对象。target：被代理的原对象。handler：代理规则。
const p = new Proxy(target,handler)

//先创建一个没代理规则的代理对象
const player = {
  name:"凯恩",
  goal:60
}
const playerProxy = new Proxy(player,{})
console.log(playerProxy.name);

//get：拦截读取属性
//get中的参数：get(target,property,receiver)
// target:原对象
// property：正在读取的属性名
// receiver：本次操作使用的代理对象
// 一般配合Reflect.get()
const player = {
  name: "凯恩",
  goal: 60
}

const playerProxy = new Proxy(player, {
  get(target, property, receiver) {
    console.log(`正在查看球员的${property}`);
    return Reflect.get(target, property, receiver)
  }
})
console.log(playerProxy.name);



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


const player = {
  name: "拉什福德",
  goals: 150
}
const playerProxy = new Proxy(player,{
  set(target,property,value,receiver){
    console.log(`准备把${property}修改成${value}`);
    return Reflect.set(target,property,value,receiver)
  }
})
playerProxy.goals = 151
console.log(player.goals);//151

//使用set验证数据
const player = {
  name: "哈兰德",
  goals: 200
}
const playerProxy = new Proxy(player, {
  set(player, property, value, receiver) {
    if (property === "goals") {
      if (typeof value !== "number") {
        throw new TypeError("进球数必须是数字")
      }
      if (value < 0) {
        throw new RangeError("进球数不能是负数")
      }
    }
    return Reflect.set(player, property, value, receiver)
  }
})
playerProxy.goals = 201
console.log(player.goals);
playerProxy.goals = -111
console.log(player.goals);

//deleteProperty：拦截删除属性
const player = {
  name:"拉什福德",
  team:"曼彻斯特联"
}

const playerProxy = new Proxy(player,{
  deleteProperty(target,property,receiver){
    if(property === "name"){
      console.log("不能删除球员姓名");
      return false
    }
    return Reflect.deleteProperty(target,property,receiver)
  }
})
delete playerProxy.team
console.log(player);



//has:拦截in操作符      "name" in playerProxy
const player = {
  name:"B费",
  salary: 300000
}
const playerProxy = new Proxy(player,{
  has(target,property){
    if(property === "salary"){
      return false
    }
    return Reflect.has(target,property)
  }
})
console.log("name" in playerProxy); //true
console.log("salary" in playerProxy); //false
console.log("name" in player); //true
console.log("salary" in player); //true



//ownKeys:拦截属性遍历Object.keys()
const player = {
  name:"B费",
  assistance: 21,
  salary: 300000
}
const playerProxy = new Proxy(player,{
  ownKeys(target){
    return Reflect.ownKeys(target).filter(key=>{
      return key !=="salary"
    })
  }
})
console.log(Object.keys(playerProxy)); // [ 'name', 'assistance' ]
console.log(Object.keys(player)); // [ 'name', 'assistance', 'salary' ]


// apply:代理函数调用
//target：原函数。thisArg：调用函数时的this。argumentsList：参数数组。
function shoot(playername){
  return `${playername}完成射门`
}
const shootProxy = new Proxy(shoot,{
  apply(target,thisArg,argumentsList){
    console.log("射门动作开始");

    const result = Reflect.apply(target,thisArg,argumentsList)
    console.log("射门动作结束");
    return result
  }
})
console.log(shootProxy("萨拉赫"));

//construct :代理new操作。当目标是构造函数时，可以拦截new操作
class Player{
  constructor(name,age){
    this.name = name
    this.age = age
  }
}
const PlayerProxy = new Proxy(Player,{
  construct(Player,argumentsList,newTarget){
    console.log("正在注册一名新球员");

    const player = Reflect.construct(Player,argumentsList,newTarget)
    player.registered = true
    return player
  }
})
const Saka = new PlayerProxy("萨卡",23) 
console.log(Saka);  //Player { name: '萨卡', age: 23, registered: true }
const kane = new Player("凯恩",32)
console.log(kane);  //Player { name: '凯恩', age: 32 }

//在 Proxy 中通常推荐使用 Reflect，因为它：
// 与 Proxy 的拦截方法一一对应
// 能保持更规范的默认行为
// 能正确处理 receiver、继承和访问器属性
// set、deleteProperty 等方法会返回是否成功


const player = {
  name:"凯恩",
  goals: 60
}

const handler = {
  get(target,property,receiver){
    console.log(`读取属性：${property}`);
    return Reflect.get(target,property,receiver)
  }
}

const playProxy = new Proxy(player,handler)

console.log(playProxy.name = "贝林厄姆");