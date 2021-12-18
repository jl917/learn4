import { parse } from '@babel/parser';
import code from './code';

// Babylon 是 Babel 的解析器。最初是 从Acorn项目fork出来的。Acorn非常快，易于使用，并且针对非标准特性(以及那些未来的标准特性) 设计了一个基于插件的架构。

const ast = parse(code);
console.log(JSON.stringify(ast, null, 2));