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