console.log("3. main.mjs 模块主体开始");

import { message } from "./b.mjs";
import "./a.mjs";

console.log("4.", message);

// 即使 main 中的 console.log 写在 import 前面，依赖模块仍然先执行。
// a.mjs 被直接、间接导入两次，但只初始化一次。


// 先分析整张依赖图
//        ↓
// 从最深的依赖开始执行
//        ↓
// 最后执行入口模块