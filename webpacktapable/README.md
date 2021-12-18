# README #
- Sync：这是一个同步的hook
- Async：这是一个异步的hook
- Bail：Bail在英文中的意思是保险，保障的意思，实现的效果是，当一个hook注册了多个回调方法，任意一个回调方法返回了不为undefined的值，就不再执行后面的回调方法了，就起到了一个“保险丝”的作用。
- Waterfall：Waterfall在英语中是瀑布的意思，在编程世界中表示顺序执行各种任务，在这里实现的效果是，当一个hook注册了多个回调方法，前一个回调执行完了才会执行下一个回调，而前一个回调的执行结果会作为参数传给下一个回调函数。
- Loop：Loop就是循环的意思，实现的效果是，当一个hook注册了回调方法，如果这个回调方法返回了true就重复循环这个回调，只有当这个回调返回undefined才执行下一个回调。
- Parallel：Parallel是并行的意思，有点类似于Promise.all，就是当一个hook注册了多个回调方法，这些回调同时开始并行执行。
- Series：Series就是串行的意思，就是当一个hook注册了多个回调方法，前一个执行完了才会执行下一个。
- Parallel和Series的概念只存在于异步的hook中，因为同步hook全部是串行的。


# Hook method
- tap：就是注册事件回调的方法。
- call：就是触发事件，执行回调的方法。

## tap & call 
- tap接收两个参数，第一个是个字符串，并没有实际用处，仅仅是一个注释的作用，第二个参数就是一个回调函数，用来执行事件触发时的具体逻辑。
- call就是简单的触发这个事件

## tapAsync & callAsync
```js
// 接收的最后一个参数是done，调用他来表示当前任务执行完毕
accelerate.tapAsync("LoggerPlugin", (newSpeed, done) => {
  // 1秒后加速才完成
  setTimeout(() => {
    console.log("LoggerPlugin", `加速到${newSpeed}`);

    done();
  }, 1000);
});
// callback 
accelerate.callAsync(500, () => {
  console.log("任务全部完成");
  console.timeEnd("total time"); // 记录总共耗时
});
```