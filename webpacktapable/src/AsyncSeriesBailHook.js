const {
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesLoopHook,
  AsyncSeriesWaterfallHook,
} = require('tapable');

const accelerate = new AsyncSeriesBailHook(['speed']);

// 监听速度
accelerate.tapAsync("log", (speed, done) => {
  setTimeout(() => {
    console.log(`log speed ${speed}`);
    done();
  }, 1000)
})

// 判断超速
accelerate.tapAsync("over", (speed, done) => {
  setTimeout(() => {
    if (speed > 120) {
      console.log(`over speed ${speed}`)
    }
    done(null, new Error('over'));
  }, 2000)
})

// 失控
accelerate.tapAsync("dead", (speed, done) => {
  setTimeout(() => {
    if (speed > 300) {
      console.log(`dead speed ${speed}`)
    }
    done();
  }, 2000)
})

accelerate.callAsync(400, (error, data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('sussess')
  }
})