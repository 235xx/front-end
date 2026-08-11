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
    get(target, property, receiver) {
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
    set(target, property, value, receiver) {
      if (property === "goals") {
        if (typeof value !== "number" || Number.isNaN(value)) {
          throw new TypeError("进球数必须是有效数字");
        }

        if (value < 0) {
          throw new RangeError("进球数不能是负数");
        }
      }

      return Reflect.set(target, property, value, receiver);
    }
  });

  playerProxy.goals = 201;
  console.log(player.goals);

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

  delete playerProxy.team;
  console.log(player);
}

// 5. has
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

  console.log("name" in playerProxy);
  console.log("salary" in playerProxy);
  console.log(playerProxy.salary);
}

// 6. ownKeys
{
  const player = {
    name: "B费",
    assists: 21,
    salary: 300000
  };

  const playerProxy = new Proxy(player, {
    ownKeys(target) {
      return Reflect.ownKeys(target).filter(key => key !== "salary");
    }
  });

  console.log(Object.keys(playerProxy));
}

// 7. apply
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

// 8. construct
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

  const saka = new PlayerProxy("萨卡", 23);
  console.log(saka);
}

// 9. Proxy 默认是浅层代理
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
