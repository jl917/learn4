// 开闭原则 (The Open/Closed Principle, OCP) 规定
// 即一个软件实体应该是开放的扩展，但封闭的修改。

// 它简化了API。
// 它使测试更加容易（对于BetaCalc和插件本身）。
// 它减少了我们系统的依赖性，使其更松散地耦合在一起。
const countPlugin = {
  value: 0,
  setValue (value) {
    this.value = value;
  },
  core: {
    increase: (value) => value + 1,
    decrease: (value) => value - 1,
  },
  plugins: {},
  press (name) {
    const fn = this.core[name] || this.plugins[name];
    this.setValue(fn(this.value))
  },
  register (plugin) {
    const { name, exec } = plugin;
    this.plugins[name] = exec;
  }
}

const doubleIncreasePlugin = {
  name: 'doubleIncrease',
  exec: (value) => value + 2,
}

countPlugin.register(doubleIncreasePlugin);

countPlugin.press('doubleIncrease')
countPlugin.press('doubleIncrease')

console.log(countPlugin.value);