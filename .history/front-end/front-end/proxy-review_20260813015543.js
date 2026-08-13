"use strict";

// 每个示例使用独立代码块，避免 const 重复声明。

// 1. 基本代理与 get
{
  const player = {
    name: "凯恩",
    goals: 60
  };

  const playerProxy = new Proxy(player, {
    get(target, property, receiver) {
      console.log(`读取属性：${String(property)}`);
      return Reflect.get(target, property, receiver);
    }
  });

  console.log(playerProxy.name);
}

// 2. 默认值
{
  const player = {
    name: "C罗",
    goals: 960
  };

  const playerProxy = new Proxy(player, {
    // target是属性存放的位置，receiver是本次操作真正面向的对象。
    // target:player本身。 property：属性名。  receiver：playerProxy代理对象
    get(target, property, receiver) {
      //这里用in会检查对象自身和原型链，如果只想检查自身属性，可以写Object.hasOwn(target,property)
      if (!(property in target)) {
        return "暂无数据";
      }
      console.log(`获取属性${property}`);
      return Reflect.get(target, property, receiver);
    }
  });

  console.log(playerProxy.name);
  console.log(playerProxy.age);
}

// 3. set 与数据验证
{
  const player = {
    name: "哈兰德",
    goals: 200
  };

  const playerProxy = new Proxy(player, {
    // target:player本身。 property：属性名。  value：修改后的值  receiver：playerProxy代理对象
    set(target, property, value, receiver) {
      if (property === "goals") {
        // typeof NaN === "number" // true
        if (typeof value !== "number" || Number.isNaN(value)) {
          throw new TypeError("进球数必须是有效数字");
        }

        if (value < 0) {
          throw new RangeError("进球数不能是负数");
        }
      }
      // Reflect.set() 正好会返回布尔值，所以推荐直接返回：
      return Reflect.set(target, property, value, receiver);
    }
  });

  playerProxy.goals = 201; // 触发 set
  console.log(player.goals); // 绕过 set

  try {
    playerProxy.goals = -111;
  } catch (error) {
    console.log(error.message);
  }
}

// 4. deleteProperty
{
  const player = {
    name: "拉什福德",
    team: "曼彻斯特联"
  };

  const playerProxy = new Proxy(player, {
    deleteProperty(target, property) {
      if (property === "name") {
        throw new Error("不能删除球员姓名");
      }

      return Reflect.deleteProperty(target, property);
    }
  });

  try { delete playerProxy.name; } catch (error) {
    console.log(error.message);
  }

  console.log(player);
}

// 5. has，拦截in运算符
{
  const player = {
    name: "B费",
    salary: 300000
  };

  const playerProxy = new Proxy(player, {
    has(target, property) {
      if (property === "salary") {
        return false;
      }

      return Reflect.has(target, property);
    }
  });

  console.log("name" in playerProxy); //true
  console.log("salary" in playerProxy); //false
  // has只拦截in，不拦截读取
  console.log(playerProxy.salary);// 300000
}

// 6. ownKeys：：拦截属性键列表
// 它会影响多种操作：

// - Object.keys()
// - Object.getOwnPropertyNames()
// - Object.getOwnPropertySymbols()
// - Reflect.ownKeys()
// - 某些对象展开和遍历操作
{
  const player = {
    name: "B费",
    assists: 21,
    salary: 300000
  };

  const playerProxy = new Proxy(player, {
    ownKeys(target) {
      return Reflect.ownKeys(target).filter(key => key !== "salary");//过滤掉了"salary"
    }
  });
  console.log(Object.keys(playerProxy));
  console.log(Object.values(playerProxy));
  console.log(Object.entries(playerProxy));
}

// 7. apply:代理函数调用
{
  function shoot(playerName, distance) {
    return `${playerName}在 ${distance} 米外完成射门`;
  }

  const shootProxy = new Proxy(shoot, {
    apply(target, thisArg, argumentsList) {
      console.log("射门动作开始");
      const result = Reflect.apply(target, thisArg, argumentsList);
      console.log("射门动作结束");
      return result;
    }
  });

  console.log(shootProxy("萨拉赫", 25));
}

// 8. construct ： 代理new
{
  class Player {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const PlayerProxy = new Proxy(Player, {
    construct(target, argumentsList, newTarget) {
      console.log("正在注册一名新球员");

      const player = Reflect.construct(
        target,
        argumentsList,
        newTarget
      );

      player.registered = true;
      return player;
    }
  });

  const saka = new PlayerProxy("萨卡", 23); //代理new
  console.log(saka);
}

// 9. Proxy 默认是浅层代理
// Proxy 负责拦截，Reflect 负责执行语言原本的默认操作。
{
  const player = {
    info: {
      goals: 800
    }
  };

  const playerProxy = new Proxy(player, {
    set(target, property, value, receiver) {
      console.log(`外层 set：${String(property)}`);
      return Reflect.set(target, property, value, receiver);
    }
  });

  playerProxy.info.goals = 801; // 不触发外层 set
  playerProxy.info = { goals: 802 }; // 触发外层 set
}

// 10. 简单响应式效果
{
  let state;

  function render() {
    console.log(`当前比分：${state.score}`);
  }

  state = new Proxy(
    { score: 0 },
    {
      get(target, property, receiver) {
        return Reflect.get(target, property, receiver);
      },

      set(target, property, value, receiver) {
        const oldValue = Reflect.get(target, property, receiver);
        const success = Reflect.set(
          target,
          property,
          value,
          receiver
        );

        if (success && oldValue !== value) {
          render();
        }

        return success;
      }
    }
  );

  render();
  state.score = 1;
  state.score = 2;
}