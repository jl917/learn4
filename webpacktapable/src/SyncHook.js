const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
} = require('tapable');

const accelerate = new SyncHook(['speed']);

// 监听速度
accelerate.tap("log", (speed) => {
  console.log(`log speed ${speed}`)
})

// 判断超速
accelerate.tap("over", (speed) => {
  if (speed > 120) {
    console.log(`over speed ${speed}`)
  }
})

// 失控
accelerate.tap("dead", (speed) => {
  if (speed > 300) {
    console.log(`dead speed ${speed}`)
  }
})

accelerate.call(400)