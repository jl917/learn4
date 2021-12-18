const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
} = require('tapable');

// SyncLoopHook是在SyncHook的基础上添加了循环的逻辑，也就是如果一个插件返回true就会一直执行这个插件，直到他返回undefined才会执行下一个插件：
const accelerate = new SyncLoopHook(['speed']);

let count = 0;

accelerate.tap("log", (speed) => {
  console.log(`log speed ${speed}`, count)
  count++
  return count < 10 ? true : undefined;
})

// 失控
accelerate.tap("dead", (speed) => {
  if (speed > 300) {
    console.log(`dead`)
  }
})

accelerate.call(400)