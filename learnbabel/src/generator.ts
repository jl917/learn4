import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import generate from '@babel/generator';
import code from './code';

// Babel Traverse（遍历）模块维护了整棵树的状态，并且负责替换、移除和添加节点。

const ast = parse(code);
traverse(ast, {
  enter(path) {
    if (t.isIdentifier(path.node, { name: 'n' })) {
      path.node.name = "x";
    }
  }
});

console.log(generate(ast).code)
