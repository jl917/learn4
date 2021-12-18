import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import code from './code';

// Babel Traverse（遍历）模块维护了整棵树的状态，并且负责替换、移除和添加节点。

const ast = parse(code);
traverse(ast, {
  enter(path) {
    if (
      path.node.type === "Identifier" &&
      path.node.name === "n"
    ) {
      path.node.name = "x";
    }
  }
});

console.log(JSON.stringify(ast, null, 2));