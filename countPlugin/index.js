// 开闭原则 (The Open/Closed Principle, OCP) 规定
// 即一个软件实体应该是开放的扩展，但封闭的修改。

const countPlugin = {
  value: 0,
  setValue (value) {
    this.value = value;
  },
  increase () {
    this.setValue(this.value + 1);
  },
  decrease () {
    this.setValue(this.value - 1);
  },
  register (plugin) {
    const { name, exec } = plugin;
    this[name] = exec;
  }
}

const doubleIncreasePlugin = {
  name: 'doubleIncrease',
  exec: function () {
    this.setValue(this.value + 2);
  }
}

countPlugin.register(doubleIncreasePlugin);

countPlugin.doubleIncrease()

console.log(countPlugin.value)

// 1. 解决问题前首先要定义问题
// 2. 插件架构设计绕不开的几大要素
// 如何注入、配置、初始化插件
// 插件如何影响系统
// 插件输入输出的含义与可以使用的能力
// 复数个插件之间的关系是怎么样的