//防止程序崩溃
let score = null
console.log(score?.name);

const user = {
  name: "Alice",
  age: 25,

  [Symbol.toPrimitive](hint) {
    console.log(`Hint: ${hint}`);
    if (hint === "string") return this.name;
    if (hint === "number") return this.age;
    return `Name: ${this.name}, Age: ${this.age}`; // default
  }
};

// 触发 "string"
console.log(String(user));      // Hint: string -> "Alice"
console.log(`${user}`);         // Hint: string -> "Alice"

// 触发 "number"
console.log(Number(user));      // Hint: number -> 25
console.log(user - 5);          // Hint: number -> 20

// 触发 "default"
console.log(user + "");         // Hint: default -> "Name: Alice, Age: 25"
console.log(user == "Alice");   // Hint: default -> true (内部比较)