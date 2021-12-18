const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
} = require('tapable');

const accelerate = new SyncWaterfallHook(['speed']);

// 监听速度
accelerate.tap("log", (speed) => {
  console.log(`log speed ${speed}`)
  return 'log'
})

// 判断超速
accelerate.tap("over", (data) => {
  console.log('before return', data)
  return 'over'
})

// 失控
accelerate.tap("dead", (data) => {
  console.log('before return', data)
  return 'dead'
})

accelerate.call(400)