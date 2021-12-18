const {
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesLoopHook,
  AsyncSeriesWaterfallHook,
} = require('tapable');

const accelerate = new AsyncParallelHook(['speed']);

// 监听速度
accelerate.tapPromise("log", (speed) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`log speed ${speed}`);
      resolve()
    }, 1000)
  })
})

// 判断超速
accelerate.tapPromise("over", (speed) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (speed > 120) {
        console.log(`over speed ${speed}`)
      }
      resolve();
    }, 2000)
  })
})

// 失控
accelerate.tapPromise("dead", (speed, done) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (speed > 300) {
        console.log(`dead speed ${speed}`)
      }
      resolve();
    }, 2000)
  })
  
})

// 这段代码无论我是使用promise触发事件还是callAsync触发运行的结果都是一样的，所以tapable内部应该是做了兼容转换的，两种写法可以混用：
accelerate.callAsync(400, () => {
  console.log('sussess')
})

accelerate.promise(500).then(() => {
  console.log('sussess promise')
})