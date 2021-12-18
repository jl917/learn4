const {
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesLoopHook,
  AsyncSeriesWaterfallHook,
} = require('tapable');

const accelerate = new AsyncSeriesWaterfallHook(['speed']);

// 监听速度
accelerate.tapAsync("log", (speed, done) => {
  setTimeout(() => {
    console.log(`log speed ${speed}`);
    done(null, {name:'log', speed,});
  }, 1000)
})

// 判断超速
accelerate.tapAsync("over", (data, done) => {
  const {speed, name} = data;
  console.log(name)
  setTimeout(() => {
    if (speed > 120) {
      console.log(`over speed ${speed}`)
    }
    done(null, {name:'over', speed,});
  }, 2000)
})

// 失控
accelerate.tapAsync("dead", (data, done) => {
  const {speed, name} = data;
  console.log(name)
  setTimeout(() => {
    if (speed > 300) {
      console.log(`dead speed ${speed}`)
    }
    done();
  }, 2000)
})

accelerate.callAsync(400, () => {
  console.log('sussess')
})